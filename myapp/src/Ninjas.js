import React from "react";

//converting from container component to UI component by converting from class to function
//const Ninjas = (props) => {
//can destructure right at import like this
const Ninjas = ({ ninjas }) => {
  //class Ninjas extends Component {
  //console.log(this.props);
  const ninjaList = ninjas.map((ninja) => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
    );
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
