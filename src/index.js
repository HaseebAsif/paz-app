import './index.css'

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import ConnectWeb3 from './contexts/ConnectWeb3'

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app',
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ConnectWeb3>
      <App />
    </ConnectWeb3>
  </ApolloProvider>,
  document.getElementById('root'),
)
