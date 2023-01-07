export const maskcep = (v) => {
    v = v.replace(/\D/g, "")
    v = v.substring(0, 8); // limita em 14 números
    v = v.replace(/(\d{5})(\d{3})$/, "$1-$2")
    return v
}