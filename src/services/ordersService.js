import axios from "axios";

const BASE_URL =
  "https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=100&apiKey=lMuc_oV9L2LNnDjRAvqPSfuOPa3AoQHP";

const $api = axios.create({
  baseURL: BASE_URL,
});

export default class ordersService {
  static async getOrdersData() {
    return await $api.get();
  }
}
