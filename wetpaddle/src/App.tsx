import { Provider } from 'react-redux';
import './App.css'
import Tabs from './Tabs';
import { URLAndLayerManager } from './URLManager';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import { DefaultStore } from "./state/store";

const store = DefaultStore;

function App() {

  return (
    <div className="app">
      <Router>
      <Provider store={store}>
      <URLAndLayerManager/>
      <Tabs />
      </Provider>
      </Router>
    </div>
  )
}

export default App;
