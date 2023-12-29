"use server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { CreateList } from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";
import { createAuditlog } from "@/lib/create-audit-log";
import { ENTITY_TYPE, ACTION } from "@prisma/client";
const handler = async (data: InputType): Promise<ReturnType> => {
	const { userId, orgId } = auth();

	if (!userId || !orgId) {
		return {
			error: "Nicht authorisiert"
		};
	}

	const { title, boardId } = data;

	let list;

	try {
		const board = db.board.findUnique({
			where: {
				id: boardId,
				orgId
			}
		});

		if (!board) {
			return {
				error: "Board nicht gefunden"
			};
		}

		const lastList = await db.list.findFirst({
			where: {
				boardId: boardId
			},
			orderBy: {
				order: "desc"
			},
			select: {
				order: true
			}
		});

		const newOrder = lastList ? lastList.order + 1 : 1;

		list = await db.list.create({
			data: {
				title,
				boardId,
				order: 1
			}
		});

		await createAuditlog({
			entityTitle: list.title,
			entityId: list.id,
			entityType: ENTITY_TYPE.LIST,
			action: ACTION.CREATE
		});
	} catch (error) {
		return {
			error: "Fehler beim Erstellen der Liste"
		};
	}

	revalidatePath(`/board/${boardId}`);
	return { data: list };
};

export const createList = createSafeAction(CreateList, handler);
