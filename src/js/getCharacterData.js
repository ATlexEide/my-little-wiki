import fetchCharacterData from "./fetchCharacterData";
async function getCharacterData(character = "all") {
  try {
    const characters = [];
    const charactersObjRaw = await fetchCharacterData(character);
    for (const [key, val] of Object.entries(charactersObjRaw)) {
      characters.push(val);
    }
    return characters;
    // console.log("ARRAY ", charactersArray);
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
}
export default getCharacterData;
