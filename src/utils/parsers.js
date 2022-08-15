const compactor = Intl.NumberFormat("en", { notation: "compact" });

// 1100 -> 1.1k
export const compactNumber = (num) => compactor.format(num)