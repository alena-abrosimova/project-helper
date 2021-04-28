import {HttpResponse} from '@angular/common/http';
/**
 * Метод для вычисления URL из Blob, позволяет открыть в новом окне файл, полученный с сервера
 */
export function openFileInNewTab(response: HttpResponse<Blob>, type: string): Blob {
  const fileURL = URL.createObjectURL(response.body);
  window.open(fileURL, '_blank');

  return new Blob([response.body], {type});
}
