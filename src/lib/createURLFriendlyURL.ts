export const createURLFriendlyURL = (url: string) => {
  let newUrl: string = '';

  newUrl = url.replaceAll(', ', '-');
  newUrl = newUrl.replaceAll(',', '-');
  newUrl = newUrl.replaceAll(' ', '-');
  newUrl = newUrl.toLowerCase();

  return newUrl;
};
