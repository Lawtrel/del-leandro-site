export type ImportedMedia = {
  src: string;
  filename: string;
  kind: "image" | "video";
  date: string;
  author: string;
};

export const importedMedia: ImportedMedia[] = [];
