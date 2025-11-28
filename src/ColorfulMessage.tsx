import React from "react";

export const ColorfulMessage = (props) => {
  const {color, fontSize,children } = props;
  const contententStyle = {
    color: color,
    fontSize: fontSize,
  };
  return <p style={contententStyle}>{props.children}</p>;
};
