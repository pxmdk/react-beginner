import { useState } from "react";

function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Copenhagen",
    "Aalborg",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group.item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
