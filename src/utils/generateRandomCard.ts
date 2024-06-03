export const generateRandomCard = () => {
  function generateRandomDebitCard() {
    let cardNumber = [];

    for (let i = 0; i < 15; i++) {
      cardNumber.push(Math.floor(Math.random() * 10));
    }

    // Check using Luhn algorithm
    let checkDigit = getLuhnCheckDigit(cardNumber);
    cardNumber.push(checkDigit);

    return cardNumber.join("");
  }

  function getLuhnCheckDigit(digits: number[]) {
    let sum = 0;

    // Apply the Luhn algorithm to calculate the check digit
    for (let i = 0; i < digits.length; i++) {
      let digit = digits[i];
      if ((digits.length - i) % 2 === 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }

    return (sum * 9) % 10;
  }
  return generateRandomDebitCard();
};
