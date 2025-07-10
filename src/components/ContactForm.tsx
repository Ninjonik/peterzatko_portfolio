"use client";
import React, { useEffect, useRef } from "react";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/Textarea";
import sendContactEmail from "./contact";
import { useFormState } from "react-dom";

export function ContactForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const [state, formAction, isPending] = useFormState(sendContactEmail, null);

	useEffect(() => {
		if (state?.status === "success") {
			formRef.current?.reset();
		}
	}, [state]);

	return (
		<div className="mx-auto w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
			<h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Contact me</h2>

			<form ref={formRef} action={formAction} className="my-8 flex flex-col gap-4">
				<Label htmlFor="firstname">First Name</Label>
				<Input id="firstname" name="firstname" required />

				<Label htmlFor="lastname">Last Name</Label>
				<Input id="lastname" name="lastname" required />

				<Label htmlFor="email">Email</Label>
				<Input id="email" name="email" type="email" required />

				<Label htmlFor="subject">Subject</Label>
				<Input id="subject" name="subject" required />

				<Label htmlFor="message">Message</Label>
				<Textarea id="message" name="message" required />

				<button
					type="submit"
					name={"submit"}
					disabled={isPending}
					className={cn(
						"group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]",
					)}
				>
					{isPending ? "Sending..." : "Send"}
					<BottomGradient />
				</button>
				{state?.message && <div className={cn("mt-2", state.status === "success" ? "text-green-600" : "text-red-600")}>{state.message}</div>}
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
			<span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
		</>
	);
};
