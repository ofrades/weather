import axios from "axios";

export const getLocation = async (
  lat = "39.74362",
  lon = "-8.80705",
  lang = "pt"
) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=${lang}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCity = async (city = "Leiria", lat, lon) => {
  try {
    if (city === "Your Location" || city === undefined) {
      const reverseLocation = await axios.get(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${reverseLocation.data[0].name}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      return response.data;
    } else {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
