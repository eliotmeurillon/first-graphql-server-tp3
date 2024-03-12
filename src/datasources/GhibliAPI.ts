import { RESTDataSource } from "@apollo/datasource-rest";
import { FilmModel, PeopleModel } from "../models";

export class GhibliAPI extends RESTDataSource {
  baseURL = "https://ghibliapi.dev/";

  getFilms() {
    return this.get<FilmModel[]>("films");
  }
  getPeople() {
    return this.get("people");
  }
  getPersonBy(id: string) {
    return this.get<PeopleModel>(`people/${id}`);
  }
  getFilmBy(id: string) {
    return this.get<FilmModel>(`films/${id}`);
  }
}
