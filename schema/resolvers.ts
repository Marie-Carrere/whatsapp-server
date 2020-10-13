import { DateTimeResolver, URLResolver } from "graphql-scalars";
import { chats } from "../fixtures/db";

const resolvers = {
  Date: DateTimeResolver,
  URL: URLResolver,

  Query: {
    chats() {
      return chats;
    }
  }
};

export default resolvers;
