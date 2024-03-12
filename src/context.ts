import { GhibliAPI } from "./datasources/GhibliAPI";
import { TrackAPI } from "./datasources/TrackAPI";

export type DataSourceContext = {
  dataSources: {
    trackApi: TrackAPI;
    ghibliAPI: GhibliAPI;
  };
};
