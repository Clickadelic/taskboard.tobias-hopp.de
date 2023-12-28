import { ACTION, AuditLog } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
	const { action, entityTitle, entityType } = log;

	switch (action) {
		case ACTION.CREATE:
			return `Created ${entityType.toLowerCase()} "${entityTitle}"`;
			break;

		case ACTION.UPDATE:
			return `Updated ${entityType.toLowerCase()} "${entityTitle}"`;
			break;

		case ACTION.DELETE:
			return `Delete ${entityType.toLowerCase()} "${entityTitle}"`;
			break;

		default:
			return `Unknown action ${entityType.toLowerCase()} "${entityTitle}"`;
			break;
	}
};
