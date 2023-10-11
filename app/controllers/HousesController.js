import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"



function _drawHouses() {
  // console.log('DRAWING HOUSES')
  const houses = AppState.houses
  let content = ''
  houses.forEach(house => content += house.HouseCardTemplate)
  setHTML('houseCards', content)
}

export class HousesController {
  constructor() {
    // console.log('houses controller hooked up')
    this.getHouses()
    _drawHouses()

    AppState.on('houses', _drawHouses)
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async createHouse(event) {
    try {
      event.preventDefault()
      // console.log('form submitted');
      const form = event.target
      const houseFormData = getFormData(form)
      // console.log(houseFormData)
      await housesService.createHouse(houseFormData)
      form.reset()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

}