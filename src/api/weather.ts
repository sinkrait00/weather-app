
import axios from "axios";
import {ICity} from "../models/ICity";
import {ICoords} from "../models/ICoords";
export  const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather`,
})
export const getWeatherByCityIdReq = (city: ICity, unit: string) => instance.get(`?id=${city.id}&units=${unit}&appid=3f2cc87855f165391f51364aaa5010dd`)
export const getWeatherByCityNameReq = (city: string) => instance.get(`?q=${city}&units=metric&appid=3f2cc87855f165391f51364aaa5010dd`)
export const getCityNameReq = (coords: ICoords) => instance.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&key=AIzaSyBwVdwyclpU1vi99NNBrwZ6MQP2s9eUOSY`)


