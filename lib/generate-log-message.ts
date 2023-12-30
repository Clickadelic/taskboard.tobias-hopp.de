import { ACTION, AuditLog } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
	const { action, entityTitle, entityType } = log;

	switch (action) {
		case ACTION.CREATE:
			return `${entityType.toLowerCase()} "${entityTitle} erstellt"`;
			break;

		case ACTION.UPDATE:
			return `${entityType.toLowerCase()} "${entityTitle} aktualisiert"`;
			break;

		case ACTION.DELETE:
			return `${entityType.toLowerCase()} "${entityTitle} gelöscht"`;
			break;

		default:
			return `unknown action ${entityType.toLowerCase()} "${entityTitle}"`;
			break;
	}
};
