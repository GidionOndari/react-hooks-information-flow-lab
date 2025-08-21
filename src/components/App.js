import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items"; 

function App() {
  const [items] = useState(itemData);
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeClick() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
