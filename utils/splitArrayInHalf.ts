export function splitArrayInHalf<D>(arr: D[]): [D[], D[]] {
  const midIndex = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, midIndex);
  const secondHalf = arr.slice(midIndex);

  return [firstHalf, secondHalf];
}
