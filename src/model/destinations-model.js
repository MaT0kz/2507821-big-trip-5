
export default class DestinationsModel {
  #destinationsApiService = null;
  #destinations = [];

  constructor({destinationsApiService}) {
    this.#destinationsApiService = destinationsApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  async init() {
    try {
      this.#destinations = await this.#destinationsApiService.destinations;
    } catch(err) {
      this.#destinations = [];
    }
  }

  getDestination(destinationId) {
    return this.#destinations.filter((destination) => destination.id === destinationId)[0];
  }
}
