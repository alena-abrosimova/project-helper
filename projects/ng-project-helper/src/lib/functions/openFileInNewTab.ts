import {HttpResponse} from '@angular/common/http';

export function openFileInNewTab(response: HttpResponse<Blob>, type: string): Blob {
  const fileURL = URL.createObjectURL(response.body);
  window.open(fileURL, '_blank');

  return new Blob([response.body], {type});
}
