"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
    DefaultValues,
    FieldValues,
    Path,
    SubmitHandler,
    useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";
import Link from "next/link";

interface AuthFormProps<T extends FieldValues> {
    formType: "SIGN_IN" | "SIGN_UP";
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean; data: T }>;
}

const AuthForm = <T extends FieldValues>({
    formType,
    schema,
    defaultValues,
    onSubmit,
}: AuthFormProps<T>) => {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    const handleSubmit: SubmitHandler<T> = async (data) => {
        const { success, data: formData } = await onSubmit(data);

        if (!success) return;

        console.log(formData);
    };

    const buttonText = formType === "SIGN_IN" ? "Sign in" : "Sign up";

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="mt-10 space-y-6"
            >
                {Object.keys(defaultValues).map((field) => {
                    return (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem className="flex w-full flex-col gap-2">
                                    <FormLabel className="paragraph-medium text-dark400_light700">
                                        {field.name.charAt(0).toUpperCase() +
                                            field.name.slice(1)}
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            required
                                            type={
                                                field.name === "password"
                                                    ? "password"
                                                    : "text"
                                            }
                                            className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    );
                })}
                <Button
                    disabled={form.formState.isSubmitting}
                    className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
                >
                    {form.formState.isSubmitting
                        ? buttonText === "Sign in"
                            ? "Signing in..."
                            : "Signing up..."
                        : buttonText}
                </Button>

                {formType === "SIGN_IN" ? (
                    <p className="paragraph-semibold primary-text-gradient">
                        {"Don't have an account? "}
                        <Link href={ROUTES.SIGN_UP}>Sign up</Link>
                    </p>
                ) : (
                    <p className="paragraph-semibold primary-text-gradient">
                        {"Already have an account? "}
                        <Link href={ROUTES.SIGN_IN}>Sign in</Link>
                    </p>
                )}
            </form>
        </Form>
    );
};

export default AuthForm;
