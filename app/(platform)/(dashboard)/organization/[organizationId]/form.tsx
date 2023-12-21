"use client";

import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board/";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";

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
		const image = formdata.get("image") as string;

		console.log("Title is:", { title });
		console.log("Image is:", { image });
		execute({ title, image });
	};
	return (
		<form action={onSubmit}>
			<div className="flex flex-col space-y-2">
				<FormInput id="title" label="Board title" errors={fieldErrors} />
			</div>
			<FormSubmit>Save</FormSubmit>
		</form>
	);
};
