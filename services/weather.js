import axios from "axios";

export const getLocation = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCity = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
