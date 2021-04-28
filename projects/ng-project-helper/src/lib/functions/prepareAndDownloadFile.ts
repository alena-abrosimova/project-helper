import { HttpResponse } from '@angular/common/http';

/**
 * Метод для скачивания файла, полученного с сервера
 */
export function prepareAndDownloadFile(response: HttpResponse<Blob>, type: string, filenameRegex: RegExp = /"(.*?)"/): Blob {
  const contentDispositionHeader = decodeURIComponent(response.headers.get('content-disposition'));
  const splitContentDispositionHeader = contentDispositionHeader.split('; ');
  let filename: string;
  if (splitContentDispositionHeader.length === 2) {
    filename = filenameRegex.exec(splitContentDispositionHeader[1])[1];
  } else {
    filename = splitContentDispositionHeader[2].slice(17, );
  }

  const fileURL = URL.createObjectURL(response.body);
  const anchor = document.createElement('a');
  document.body.appendChild(anchor);
  anchor.download = filename;
  anchor.href = fileURL;
  anchor.target = '_self';
  anchor.click();
  anchor.remove();

  return new Blob([response.body], {type});
}
