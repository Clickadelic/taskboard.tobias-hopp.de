"use client"

import { FormInput } from "@/components/form/form-input"
import { Button } from "@/components/ui/button"
import { Board } from "@prisma/client"
import { useRef, ElementRef, useState } from "react"

interface BoardTitleFormProps {
	data: Board
}

export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
	const formRef = useRef<ElementRef<"form">>(null)
	const inputRef = useRef<ElementRef<"input">>(null)
	const [isEditing, setIsEditing] = useState(false)

	const enableEditing = () => {
		// TODO: Focus Input
		setIsEditing(true)
		setTimeout(() => {
			inputRef.current?.focus()
			inputRef.current?.select()
		})
	}

	const disableEditing = () => {
		setIsEditing(false)
	}

	const onSubmit = (formData: FormData) => {
		const title = formData.get("title") as string
		console.log("I am submitted!", title)
	}

	if (isEditing) {
		return (
			<form action={onSubmit} ref={formRef} className="flex items-center gap-x-2 ">
				<FormInput
					id="title"
					onBlur={() => {}}
					ref={inputRef}
					className="text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent"
					defaultValue={data.title}
				/>
			</form>
		)
	}
	return (
		<Button onClick={enableEditing} variant="transparent" className="font-bold text-lg h-auto w-auto p-1 px-2">
			{data.title}
		</Button>
	)
}
