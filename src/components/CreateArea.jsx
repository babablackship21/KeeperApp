import React, { useState } from "react";

function CreateArea(props) {
  const [item, updateItem] = useState({ title: "", content: "" });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    updateItem((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.addItem(item);
    updateItem({ title: "", content: "" });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={item.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={item.content}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
