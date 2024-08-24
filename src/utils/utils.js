// utils.js
export const formatPrice = (price) => {
    if (price == null) return "RM 0.00";
    
    // Ensure the price is a number
    const numPrice = parseFloat(price);
    if (isNaN(numPrice)) return "RM 0.00";
  
    // Check if the number is an integer
    if (Number.isInteger(numPrice)) {
      return `RM ${numPrice}.00`;
    }
  
     // Round to the nearest whole number first
     const roundedPrice = Math.round(numPrice);
    // Format to two decimal places for float
    return `RM ${roundedPrice.toFixed(2)}`;
  };
  
