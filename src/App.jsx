import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import { AppRouter } from './router/AppRouter';
import './App.css'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})



function App() {

  return (
    <ApolloProvider client={client}>
      <div>
        <h1 style={{
          textAlign: 'center',
        }} >GraphQL</h1>
        <AppRouter />
      </div>
    </ApolloProvider>
  )
}

export default App
