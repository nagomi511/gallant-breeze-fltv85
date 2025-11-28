import React from "react";

export const ColorfulMessage = (props) => {
  const contententStyle = {
    color: props.color,
    fontSize: props.fontSize,
  };
  return <p style={contententStyle}>{props.children}</p>;
};
