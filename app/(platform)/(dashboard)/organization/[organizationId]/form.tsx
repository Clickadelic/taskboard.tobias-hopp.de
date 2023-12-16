"use client";

import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board/";
import { FormInput } from "@/components/form/form-input";

import { FormButton } from "./form-button";

export const Form = () => {
	const { execute, fieldErrors } = useAction(createBoard, {
		onSuccess: data => {
			console.log(data, "success");
		},
		onError: error => {
			console.error(error);
		}
	});
	const onSubmit = (formdata: FormData) => {
		const title = formdata.get("title") as string;
		execute({ title });
	};
	return (
		<form action={onSubmit}>
			<div className="flex flex-col space-y-2">
				<FormInput id="title" errors={fieldErrors} />
			</div>
			<FormButton />
		</form>
	);
};
