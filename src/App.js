import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import Drawer from "./components/Drawer/Drawer";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";

// const arr = [
//   {"title": "Baseball best goods", "price": 999, "imageURL": "img/baseball.png"},
//   {"title": "Football nice goods", "price": 1099, "imageURL": "img/football_1.jpg"},
//   {"title": "Basketball nice goods", "price": 699, "imageURL": "img/basketball.png"},
//   {"title": "Tennis nice goods", "price": 199, "imageURL": "img/tennis.jpg"},
//   {"title": "Bowling nice goods", "price": 10999, "imageURL": "img/bowling.png"},
//   {"title": "Football other nice goods", "price": 99, "imageURL": "img/football_2.jpg"},
//   {"title": "Some also useful goods", "price": 499, "imageURL": "img/bubble.jpg"},
//   {"title": "Other football best goods", "price": 79, "imageURL": "img/football_3.jpg"},
//   {"title": "Golf goods", "price": 5099, "imageURL": "img/golf.jpg"},
//   {"title": "Other basketball nice goods", "price": 2599, "imageURL": "img/man.jpg"},
//   {"title": "Ones again football goods", "price": 384, "imageURL": "img/football_4.jpg"},
//   {"title": "Is moon priceless?", "price": 9999, "imageURL": "img/moon.jpg"}
// ]

function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [basketOpened, setBasketOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const onAddToBasket = (obj) => {
    if (!basketItems.some((item) => item.title === obj.title)) {
      try {
        axios.post("https://6319e5bb8e51a64d2befd040.mockapi.io/basket", obj);
        setBasketItems((prev) => [...prev, obj]);
      } catch (err) {
        console.log(err);
        alert(err);
      }
    } else {
      alert("This item is alredy added!");
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://6319e5bb8e51a64d2befd040.mockapi.io/basket/${id}`);
      setBasketItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      alert("Unable to delete item from basket");
      console.log("Unable to delete item from basket");
      console.log(err);
    }
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get(
          "https://6319e5bb8e51a64d2befd040.mockapi.io/items"
        );
        const basketResponse = await axios.get(
          "https://6319e5bb8e51a64d2befd040.mockapi.io/basket"
        );
        setItems(itemsResponse.data);
        setBasketItems(basketResponse.data);
        setIsLoading(false);
      } catch (err) {
        alert("Unable to get items list from server");
        console.log("Unable to get items list from server");
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const loadArr = [...Array(8)];

  return (
    <div className="wrapper">
      <Header
        onCardOpen={() => setBasketOpened(true)}
        basketItems={basketItems}
      />
      {basketOpened && (
        <Drawer
          items={basketItems}
          onCardClose={(e) => setBasketOpened(false)}
          onRemoveItem={onRemoveItem}
        />
      )}
      <Routes>
        <Route
          index
          element={
            <SearchBlock
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>

      <div className="card_container">
        <Routes>
          <Route
            index
            element={
              isLoading
                ? loadArr.map((el, ind) => (
                    <Card isLoading={isLoading} key={ind} />
                  ))
                : items
                    .filter(
                      (item) =>
                        item &&
                        item.title
                          .toUpperCase()
                          .includes(searchValue.toUpperCase())
                    )
                    .map((item) => (
                      <Card
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        imageURL={item.imageURL}
                        onPlus={(obj) => onAddToBasket(obj)}
                        isLoading={isLoading}
                        basketItems={basketItems}
                      />
                    ))
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
