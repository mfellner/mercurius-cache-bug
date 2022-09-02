import Fastify from "fastify";
import mercurius from "mercurius";
import mercuriusCache from "mercurius-cache";

const schema = `#graphql
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello(parent, args, context) {
      console.log("query hello", context.count++);
      throw new Error("oops");
      // return "world";
    },
  },
};

const app = Fastify();

app.register(mercurius, {
  schema,
  resolvers,
  context: () => ({ count: 0 }),
  graphiql: true,
});

app.register(mercuriusCache, {
  ttl: 2, // seconds
  all: true,
  storage: {
    type: "memory",
    options: {
      size: 2048,
    },
  },
});

app.listen({ port: 3002, host: "0.0.0.0" });
