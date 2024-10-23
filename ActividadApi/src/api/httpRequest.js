import axios from "axios";

const url = "https://rickandmortyapi.com/api/character"

export const getAllCharacters = async () => {
    const response = await axios.get(url)
    console.log(response.data.results)
    return response.data.results
}