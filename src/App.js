import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBadFq_AqIszJo9g82k-pYSn0X_5VFyqqo',
      authDomain: 'manager-3a9e7.firebaseapp.com',
      databaseURL: 'https://manager-3a9e7.firebaseio.com',
      storageBucket: 'manager-3a9e7.appspot.com',
      messagingSenderId: '881119198842'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

