export default function formatRupee(n) {
  if (n === null || n === undefined) return "";
  return "₹" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
