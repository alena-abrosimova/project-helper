export function getFullUrl(url: string, id: number, path: string): string {
  url = url ? `${url}/` : '';
  const strId = id ? `${id}/` : '';
  path = path ? `${path}/` : '';

  return `${url}${strId}${path}`;
}
