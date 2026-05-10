export const normalizeWhatsApp = (value: string) =>
    value.replace(/\s+/g, "").replace("+", "");