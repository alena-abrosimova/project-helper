import { HttpResponse } from '@angular/common/http';


/**
 * Метод для вычисления URL из Blob, позволяет открыть по ссылке файл, полученный с сервера
 */
export function openFileInCard(response: HttpResponse<Blob>): string {
  const blob = new Blob([response.body], {type: 'application/pdf'});

  return URL.createObjectURL(blob);
}
