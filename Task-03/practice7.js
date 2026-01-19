const receipts = [
  { id: 1, customer: "Riya", tip: 20 },
  { id: 2, customer: "Arun", tip: 0 }, // 0 is valid
  { id: 3, customer: null }, // tip missing
  { id: 4 }, // almost everything missing
];

function formatReceipt(id, defaultTip) {
  const receipt = receipt.find((ids) => ids.id === id);
  return receipt
    ? `Receipt #${receipt.id}: ${receipt.customer ?? "Guest"} | Tip: $${receipt.tip ?? defaultTip ?? 0}`
    : "Receipt not found.";
}
console.log(formatReceipt(1));
console.log(formatReceipt(2));
console.log(formatReceipt(3));
console.log(formatReceipt(3, 15));
console.log(formatReceipt(4));
console.log(formatReceipt(4, 5));
console.log(formatReceipt(999));
