import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routing />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
