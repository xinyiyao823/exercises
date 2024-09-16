import { Fragment } from "react";
import { useState } from "react";

// to make component reusable, pass two arguments: {items: [], heading: string}
// use interface

interface ListGroupProps {
  items: string[];
  heading: string;
  //function that takes (item:string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //  arr[0] //variable (selectedIndex)
  //  arr[1] //updater function
  // each component has its own state

  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
