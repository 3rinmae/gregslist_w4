import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";

class HousesService {

  async getHouses() {
    const res = await api.get('api/houses')
    // console.log('GOT HOUSE', res.data);
    const newHouses = res.data.map(housePOJO => new House(housePOJO))
    AppState.houses = newHouses
  }

  async createHouse(houseFormData) {
    const res = await api.post('api/houses', houseFormData)
    console.log('CREATED HOUSE', res.data);
    const newHouse = new House(res.data)
    AppState.houses.unshift(newHouse)
    AppState.emit('houses')
  }

}

export const housesService = new HousesService()