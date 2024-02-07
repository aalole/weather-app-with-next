import Navbar from "@/components/Navbar";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherEntry[];
  city: City;
}

interface WeatherEntry {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: WeatherInfo[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface City {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export default function Home() {
  const queryOptions: UseQueryOptions<WeatherData, Error, WeatherData, QueryKey> = {
    queryKey: "data",
    queryFn: async () => {
      const response = await axios.get<WeatherData>(
        "https://api.openweathermap.org/data/2.5/forecast?q=nigeria&appid=4490e2d7e329d2514c1c2f8cdec960b6&cnt=50"
      );
      return response.data;
    }
  };

  const { isFetching, isError, data } = useQuery(queryOptions);

  if (isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <Navbar />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
