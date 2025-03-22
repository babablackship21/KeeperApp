import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, updateItems] = useState([]);

  function addItem(item) {
    updateItems((prev) => {
      return [...prev, item];
    });
  }

  function deleteItem(id) {
    console.log("clicked");
    updateItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {items.map((item, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={item.title}
            content={item.content}
            deleteItem={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
