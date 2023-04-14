export const formatCurrency = (amount: number) => {
   // if amount is negative, add a minus sign
    const sign = amount < 0 ? "-" : "";
    // remove the minus sign
    amount = Math.abs(amount);
    if (amount < 1000000) {
        return `${sign}$${(amount / 1000).toFixed(1)}K`;
    }
    return `${sign}$${(amount / 1000000).toFixed(1)}M`;
    
};