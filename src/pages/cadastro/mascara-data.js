export const maskbday = (v) => {
    v = v.replace(/\D/g, "")
    v = v.substring(0, 8); // limita em 14 números
    v = v.replace(/(\d{2})(\d)/, "$1/$2")
    v = v.replace(/(\d{2})(\d{4})$/, "$1/$2")
    return v
}