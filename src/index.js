import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
//import all dependencies needed to wire up the Apollo Client
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

//create the 'httpLink'that connects the client to the GraphQl API.
//server runs at the uri below
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

//instantiate the new ApolloClient by passing 'httpLink' and a new istance of 'InMemoryCache'
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
