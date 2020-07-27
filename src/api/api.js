import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const covidData = async (country) => {

  let changeableUrl = url

  if (country){
    changeableUrl = `${url}/countries/${country}`
  }


  try {
    const { data } = await axios.get(changeableUrl);

    const modifiedData = {
      confirmed: data.confirmed,
      deaths: data.deaths,
      recovered: data.recovered,
      lastUpdate: data.lastUpdate
    };

    return modifiedData
  } catch (error) {
    console.log(error);
  }
};

export const dailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));

  } catch (error) {
    console.log(error);
  }
};


export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};