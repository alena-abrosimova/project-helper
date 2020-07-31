import {HttpResponse} from '@angular/common/http';

export function printFile(response: HttpResponse<Blob>, type: string): Blob {
  const fileURL = URL.createObjectURL(response.body);
  window.open(fileURL, '_blank').print();

  return new Blob([response.body], {type});
}
