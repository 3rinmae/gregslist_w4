

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }

  get HouseCardTemplate() {
    return `
    <div class="col-10 mb-3">
          <div class="d-flex shadow">
            <img class="car-img" src="${this.imgUrl}" alt="house image">
            <div class="p-3 w-100">
              <h2>Price $${this.price}</h2>
              <div class="d-flex align-items-center">
                <img class="img-fluid rounded-circle car-creator" src="${this.creator.picture}"
                  alt="${this.creator.name}">
                <h4 class="ms-2">${this.creator.name}</h4>
              </div>
              <p>Listed on: ${this.createdAt.toLocaleDateString()}</p>
              <p>Last Updated: ${this.updatedAt.toLocaleDateString()}</p>
              <h3>Built in ${this.year}</h3>
              <h3>Levels: ${this.levels}</h3>
              <h3>Bedrooms: ${this.bedrooms}</h3>
              <h3>Bathrooms: ${this.bathrooms}</h3>
              <p>${this.description}</p>
              <div class="text-end">
                <button onclick="app.HousesController.removeHouse('${this.id}')" class="btn btn-danger">Delete House</button>
              </div>
            </div>
          </div>
        </div>
    `
  }
}