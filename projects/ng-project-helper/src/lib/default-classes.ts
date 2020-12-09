import { PaginationOption } from './models/paginationOptions';


export class DefaultStringChoices<T> {
  [key: string]: T;
}

export class DefaultUrls {
  [key: string]: string[];
}

export class DefaultParams {
    [key: string]: any;

    ordering?: string;
    paginationOption?: PaginationOption;
}
