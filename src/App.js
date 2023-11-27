import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/cart" element={<Cart />}>
            Home
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
