export function dateInRange(date: Date, from: Date, to: Date): boolean {
  return date >= from && to >= date;
}
