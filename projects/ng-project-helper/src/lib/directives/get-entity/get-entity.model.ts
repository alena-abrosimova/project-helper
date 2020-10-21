export class EntityParams {
  [key: string]: any;
}

export class EntityApiParams {
  constructor(public url: string,
              public id: number,
              public path?: string,
              public params?: EntityParams) {
  }
}
