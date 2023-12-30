import { z } from "zod";

export const CreateBoard = z.object({
	title: z
		.string({
			required_error: "Titel ist Pflicht",
			invalid_type_error: "Titel ist Pflicht"
		})
		.min(3, {
			message: "Titel ist zu kurz"
		}),
	image: z.string({
		required_error: "Bildauswahl notwendig",
		invalid_type_error: "Bildauswahl notwendig"
	})
});
