import axios from "axios";

const API_URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies,region,population,area,languages,borders,continents";

const allCountries = async () => {
  try {
    const res = await axios.get(API_URL);
    if (res.data !== undefined) {
      console.log(res.data);
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export default allCountries;
