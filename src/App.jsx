import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import './App.css'
import { Characters } from './components/Characters';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})



function App() {

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>GraphQL</h1>
        <Characters />
      </div>
    </ApolloProvider>
  )
}

export default App
