const url = "https://ponyapi.net/v1/character/";
async function fetchCharacterData(character = "all") {
  try {
    const request = await fetch(url + character);
    const res = await request.json();
    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
    throw new Error("Error occured");
  }
}
export default fetchCharacterData;
