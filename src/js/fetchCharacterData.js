const url = "https://ponyapi.net/v1/character/";
async function fetchCharacterData(character = "all") {
  try {
    const request = await fetch(url + character);
    const res = await request.json();
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error occured");
  }
}
export default fetchCharacterData;
