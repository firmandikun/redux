import { Provider } from "react-redux";
import store from "./app/store";


import './App.css'
import Grid from "./components/Grid";

function App() {
  return (
    <Provider store={store} >
       <Grid />
    </Provider>
  );
}

export default App;
