import { Component } from 'react';
import MainTabScreen from "../components/maintab";
import { Provider } from 'react-redux';
import { store } from '../state/store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainTabScreen />
      </Provider>
    );
  }
}

export default App;