import React from "react";

//converting from container component to UI component by converting from class to function
//const Ninjas = (props) => {
//can destructure right at import like this
const Ninjas = ({ ninjas, deleteNinja }) => {
  //class Ninjas extends Component {
  //console.log(this.props);
  //   const ninjaList = ninjas.map((ninja) => {
  //     if (ninja.age > 20) {
  //       return (
  //         <div className="ninja" key={ninja.id}>
  //           <div>Name: {ninja.name}</div>
  //           <div>Age: {ninja.age}</div>
  //           <div>Belt: {ninja.belt}</div>
  //         </div>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  const ninjaList = ninjas.map((ninja) => {
    return ninja.age > 31 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete me!
        </button>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
