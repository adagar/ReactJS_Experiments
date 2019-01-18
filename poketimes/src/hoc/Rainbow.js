import React from "react";

const Rainbow = (WrappedComponent) => {
  //Wrapped component is the component to be wrapped, dummy!
  //going to return that component, SUPER CHARGED
  const colors = ["red", "blue", "pink", "orange", "green", "yellow"];
  const randColor = colors[Math.floor(Math.random() * 5)];
  const className = randColor + "-text";

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
    //returning the original component, wrapped in a new div that changes it
  };
};

export default Rainbow;
