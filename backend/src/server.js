import { GraphQLServer, PubSub } from "graphql-yoga";

// resolvers
import Query from "./resolvers/Query.js";
import Mutation from "./resolvers/Mutation.js";
import Subscription from "./resolvers/Subscription.js";
import DateResolver from "./resolvers/Date.js";

// db
import db from "./models/db.js";

const pubSub = new PubSub();
const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: {
        Query,
        Mutation,
        Subscription,
        Date: DateResolver,
    },
    context: {
        pubSub,
        db,
    },
});

export default server;