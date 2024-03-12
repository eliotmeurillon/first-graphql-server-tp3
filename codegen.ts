import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#DataSourceContext",
        mappers: {
          Track: "./models#TrackModel",
          Author: "./models#AuthorModel",
          Film: "./models#FilmModel",
          Person: "./models#PersonModel",
        },
      },
    },
  },
};
export default config;
