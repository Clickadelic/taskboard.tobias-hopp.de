"use server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { DeleteCard } from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";
import { createAuditlog } from "@/lib/create-audit-log";
import { ENTITY_TYPE, ACTION } from "@prisma/client";
const handler = async (data: InputType): Promise<ReturnType> => {
	const { userId, orgId } = auth();

	if (!userId || !orgId) {
		return {
			error: "Unauthorized"
		};
	}

	const { id, boardId } = data;

	let card;
	try {
		card = await db.card.delete({
			where: {
				id,
				list: {
					board: {
						orgId
					}
				}
			}
		});
		await createAuditlog({
			entityTitle: card.title,
			entityId: card.id,
			entityType: ENTITY_TYPE.CARD,
			action: ACTION.DELETE
		});
	} catch (error) {
		return {
			error: "Failed to delete!"
		};
	}

	revalidatePath(`/board/${boardId}`);
	return { data: card };
};

export const deleteCard = createSafeAction(DeleteCard, handler);
