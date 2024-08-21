interface props {
  items: string[];
  heading: string;

  onSelectitem: (item: string) => void;
}

import { useState } from "react";
function ListGroup({ items, heading, onSelectitem }: props) {
  // let items = ["New York", "Mumbai", "Bejing", "Tokyo"];
  //   Hook
  const [selectIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length == 0 && <p>No items found</p>}
        {items.map((item, index) => (
          <li
            className={
              selectIndex == index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectitem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
