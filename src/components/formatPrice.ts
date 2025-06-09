export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("tr-TR", {
        style: "decimal",
        minimumFractionDigits: 0
    }).format(price)+"₺";
};