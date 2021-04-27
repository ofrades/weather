import axios from "axios";

export const getLocation = async (
  lat = "39.74362",
  lon = "-8.80705",
  lang = "pt"
) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCity = async (city = "Leiria") => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
