import axios from "axios";

export const getCocktails = async (query) => {
  try {
    const data = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/${query}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
