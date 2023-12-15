"use client";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";

interface FormInputProps {
	errors?: {
		title?: string[];
	};
}
export const FormInput = ({ errors }: FormInputProps) => {
	const { pending } = useFormStatus();
	return (
		<div>
			<Input placeholder="Enter a board title" className="border border-black p-1" id="title" name="title" required disabled={pending} />
			{errors?.title ? (
				<div>
					{errors.title.map((error: string) => (
						<p key={error} className="text-rose-500">
							{error}
						</p>
					))}
				</div>
			) : null}
		</div>
	);
};
