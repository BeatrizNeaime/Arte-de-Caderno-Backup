export const maskcpf = (v) => {
    v = v.replace(/\D/g, "")
    v = v.substring(0, 11); // limita em 14 números
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d{2})$/, "$1-$2")
    return v
}