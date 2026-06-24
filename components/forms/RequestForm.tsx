"use client";

import { useFormik } from "formik";
import { requestFormSchema } from "./validation";

type FormData = {
    fullName: string;
    email: string;
};

type Props = {
    onSubmit: (data: FormData) => Promise<void> | void;
    loading: boolean;
    buttonText?: string;
};

export default function RequestForm({
    onSubmit,
    loading,
    buttonText = "Submit",
}: Props) {
    const formik = useFormik<FormData>({
        initialValues: {
            fullName: "",
            email: "",
        },
        validationSchema: requestFormSchema,
        onSubmit: async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-4">

            {/* Full Name */}
            <div>
                <input
                    type="text"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    placeholder="Full Name"
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-orange-500"
                />
                <div className="h-5">
                    {formik.touched.fullName && formik.errors.fullName && (
                        <p className="mt-1 text-xs  text-red-500">
                            {formik.errors.fullName}
                        </p>
                    )}
                </div>
            </div>

            {/* Email */}
            <div>
                <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Email Address"
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-orange-500"
                />
                <div className="h-5">
                    {formik.touched.email && formik.errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                            {formik.errors.email}
                        </p>
                    )}
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading || !formik.isValid}
                className="w-full rounded-xl bg-orange-500 py-3 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-60"
            >
                {loading ? "Submitting..." : buttonText}
            </button>
        </form>
    );
}