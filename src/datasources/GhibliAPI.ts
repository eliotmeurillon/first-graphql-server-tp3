import { RESTDataSource } from "@apollo/datasource-rest";

export class GhibliAPI extends RESTDataSource {
  baseURL = "https://ghibliapi.dev/";

  getFilms() {
    return this.get("films");
  }
}
