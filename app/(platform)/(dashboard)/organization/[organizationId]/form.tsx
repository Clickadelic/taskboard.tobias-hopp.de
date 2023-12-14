"use client";

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

export const Form = () => {
	const initialState = { message: null, errors: {} };
	const [state, dispatch] = useFormState(create, initialState);
	return (
		<form action={dispatch}>
			<input placeholder="Enter a board title" id="title" name="title" required />
			<Button type="submit">Submit</Button>
		</form>
	);
};
