import { dateToString } from './dateToString';


export function dateToPlain(strFormat?: string): (value: Date) => string {
  return value => value ? dateToString(value, strFormat) : null;
}

export function dateToClass(): (value: string) => Date {
  return value => value ? new Date(value) : null;
}
