import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [list, setList] = useState(["Item1", "Item2", "Item3"]);
  const ref = useRef(null);

  const addItem = () => {
    let newItem = ref.current.value;
    if (newItem === "") {
      alert("Input is Empty");
      return;
    }
    ref.current.value = "";
    setList((prev) => {
      return [...prev, newItem];
    });
  };

  const deleteItem = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const itemList = list.map((item, index) => {
    return (
      <li className="item" key={index}>
        <input type="checkbox" />
        <div className="item-name">{item}</div>
        <button
          className="item-delete"
          onClick={() => {
            deleteItem(index);
          }}
        >
          delete
        </button>
      </li>
    );
  });

  return (
    <div className="App">
      <h1 className="heading">TODO LIST</h1>
      <div className="input-container">
        <input type="text" className="input-item" ref={ref} />
        <button className="add-item" onClick={addItem}>
          +
        </button>
      </div>

      <ol className="list">
        {itemList.length === 0 ? (
          <span style={{ opacity: 0.6 }}>No Items</span>
        ) : (
          itemList
        )}
      </ol>
    </div>
  );
}

export default App;
