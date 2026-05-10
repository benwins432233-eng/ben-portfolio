import { useState } from "react";
import type { ContactFormData } from "@/types/contact";

const INITIAL_STATE: ContactFormData = {
    name: "",
    email: "",
    whatsapp: "",
    message: "",
};

export const useContactForm = () => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Erreur d’envoi");

            setFormData(INITIAL_STATE);
        } finally {
            setIsSubmitting(false);
        }
    };

    return { formData, setFormData, submit, isSubmitting };
};