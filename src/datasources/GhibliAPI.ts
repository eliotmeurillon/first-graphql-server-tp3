import { RESTDataSource } from "@apollo/datasource-rest";
import { FilmModel, PersonModel } from "../models";

export class GhibliAPI extends RESTDataSource {
  baseURL = "https://ghibliapi.dev/";

  getFilms() {
    return this.get<FilmModel[]>("films");
  }
  getPeople() {
    return this.get("people");
  }
  getPersonBy(id: string) {
    return this.get<PersonModel>(`people/${id}`);
  }
}
