export { default } from "next-auth/middleware";

export const config = {
	matcher: ["/rezepte/neues-rezept", "/profil", "/einstellungen"]
};
