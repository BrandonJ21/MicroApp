import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export const PickerDespacho = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Pear", value: "pear" },
  ]);
  return (
    <DropDownPicker
      open={open}
      items={items}
      setOpen={setOpen}
      value={value}
      setValue={setValue}
      setItems={setItems}
      autoScroll
      placeholder={"tu amita"}
      placeholderStyle={{ color: 'blue' }}
    />
  );
};
