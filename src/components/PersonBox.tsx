import React, { Children, FC, ReactNode } from "react";

type PersonBox = {
  name: string;
  children?: ReactNode;
};

const PersonBox: FC<PersonBox> = (props) => {
  return (
    <div className="personBox">
      <h3>{props.name}</h3>
      {props.children}
    </div>
  );
};

export default PersonBox;
