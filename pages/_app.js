import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import 'tailwindcss/tailwind.css';

const apolloClient = new ApolloClient({
  uri: 'https://demo.saleor.io/graphql/',
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
