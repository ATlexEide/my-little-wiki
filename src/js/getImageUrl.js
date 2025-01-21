// TODO: FIX IMAGE LINKS
// DONT TOUCH - IMAGES HARD
export default function getImageUrl(name, fileExtension) {
  const path = `../${name}.${fileExtension}`;
  console.log(import.meta.url);
  const url = new URL(path, import.meta.url).href;
  console.log(url);
  return url;
}
