import { InputFile } from "grammy";
import sharp from "sharp";

export async function resizeImage(url: string) {
  const response = await fetch(url);
  const inputBuffer = await response.arrayBuffer();
  const image = sharp(new Int16Array(inputBuffer));
  const metadata = await image.metadata();

  const aspectRatio = metadata.width! / metadata.height!;
  const width = metadata.width! >= metadata.height! ? 512 : 512 / aspectRatio;
  const height = metadata.height! >= metadata.width! ? 512 : 512 / aspectRatio;
  image.resize(width, height);
  image.webp({ quality: 50 });
  const newImage = await image.toBuffer();

  return new InputFile(newImage);
}
