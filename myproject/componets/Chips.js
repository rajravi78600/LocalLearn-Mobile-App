import React, { useState, useEffect } from "react";


// import xixon from "../images/xchip.svg";
import { View, Text } from "react-native";

const Chips = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const [bgColor, setBGColor] = useState(null);
  const [color, setColor] = useState(null);


  

  useEffect(() => {
    if (selected) {
      setBGColor("#40e0d0");
      setColor("white");
      props.onClick(props.content, "add");
    }
  }, []);

  function onClickHandler() {
    setSelected((prevVal) => !prevVal);

    if (!selected) {
      setBGColor("#40e0d0");
      setColor("white");
      props.onClick(props.content, "add");
    } else {
      setBGColor("white");
      setColor("black");
      props.onClick(props.content, "remove");
    }
  }

  return (
    <View
      onClick={onClickHandler}
      style={{
        backgroundColor: bgColor,
        color: color,
        justifyContent: selected ? "space-around" : "center",
      }}
    >
      <Text style={{}}>{props.content}</Text>
      {/* {selected && <img alt="imag" src={xixon} className={classes.xicon} />} */}
    </View>
  );
};

export default React.memo(Chips);