export class PaginationOption {
  length: number = 0;
  offset: number = 0;
  constructor(public limit: number = 20) {
  }
}
