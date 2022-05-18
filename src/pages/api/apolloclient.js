import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-us-west-2.graphcms.com/v2/cl27s3lfw2c1g01xqht6w06u9/master",
    cache: new InMemoryCache(),
});

export default client;