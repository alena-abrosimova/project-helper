import {HttpResponse} from '@angular/common/http';

export function openFileInCard(response: HttpResponse<Blob>): string {
  const blob = new Blob([response.body], {type: 'application/pdf'});

  return URL.createObjectURL(blob);
}
