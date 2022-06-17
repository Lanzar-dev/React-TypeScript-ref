import React from "react";
import Greet from "../Greet";

type CustomComponentProps = React.ComponentProps<typeof Greet>;

const CustomComponent = (props: CustomComponentProps) => {
  return <div>{props.name}</div>;
};

export default CustomComponent;
