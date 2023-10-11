import 'server-only';
import fs from 'fs';
import path from 'path';

const getLocalFilePath = (filePath: string): string => {
  return path.join(process.cwd(), filePath);
};

const getFilenames = (filePath: string): string[] => {
  return fs.readdirSync(filePath);
};

const createUrlPath = (fileNames: string[]): string[] => {
  return fileNames.map((filename) => `/home/background/${filename}`);
};

export const generateBackgroundUrls = (filePath: string): string[] => {
  const localBackgroundFilePath = getLocalFilePath(filePath);
  const filenames = getFilenames(localBackgroundFilePath);
  const urls = createUrlPath(filenames);

  return urls;
};
