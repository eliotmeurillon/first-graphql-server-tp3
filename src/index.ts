import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";
import { TrackAPI } from "./datasources/TrackAPI.js";
import { GhibliAPI } from "./datasources/GhibliAPI.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        trackApi: new TrackAPI({ cache }),
        ghibliAPI: new GhibliAPI({ cache }),
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
