import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFoodAction } from "./actions/foodAction";
import "./App.css";
import Foods from "./components/Foods";
import Header from "./components/Header";

function App() {
  const APP_ID = "50cf5325";
  const APP_KEY = "fb4a0907b1ac83964e3da8b44d04998d";
  const [search, setSearch] = useState("chiken");
  const dispatch = useDispatch();

  useEffect(() => {
    const getFood = async () => {
      const res = await axios.get(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      dispatch(setFoodAction(res.data.hits));
    };
    getFood();
  }, [search, dispatch]);

  const onClickSubmit = async () => {
    const res = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    dispatch(setFoodAction(res.data.hits));
  };

  return (
    <div>
      <Header setSearch={setSearch} onClickSubmit={onClickSubmit} />
      <Foods />
      <footer>
        Developed by{" "}
        <a href="https://rashed-abir.web.app/" target="_blank" rel="noreferrer">
          Rashed Abir
        </a>
      </footer>
    </div>
  );
}

export default App;
