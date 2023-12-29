"use server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { UpdateCard } from "./schema";
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

	const { boardId, id, ...values } = data;

	let card;
	try {
		card = await db.card.update({
			where: {
				id,
				list: {
					board: {
						orgId
					}
				}
			},
			data: {
				...values
			}
		});
		await createAuditlog({
			entityTitle: card.title,
			entityId: card.id,
			entityType: ENTITY_TYPE.CARD,
			action: ACTION.UPDATE
		});
	} catch (error) {
		return {
			error: "Fehler beim Aktualisieren des Boards!"
		};
	}

	revalidatePath(`/board/${boardId}`);
	return { data: card };
};

export const updateCard = createSafeAction(UpdateCard, handler);
