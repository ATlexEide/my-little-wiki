// TODO: FIX IMAGE LINKS
// DONT TOUCH - IMAGES HARD
export default function getImageUrl(name, fileExtension) {
  const path = `./${name}.${fileExtension}`;
  console.log(new URL(path, import.meta.url).href);
  return new URL(path, import.meta.url).href;
}
