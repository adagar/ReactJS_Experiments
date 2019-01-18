import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        accusamus dolor soluta voluptatem molestiae magnam eaque, quo impedit
        consequatur quasi voluptatum eum recusandae libero fugiat voluptates
        odit vero perspiciatis blanditiis.
      </p>
    </div>
  );
};

export default Rainbow(About);
