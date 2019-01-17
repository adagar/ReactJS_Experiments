import React from "react";

const Contact = (props) => {
  setTimeout(() => {
    props.history.push("/about");
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        accusamus dolor soluta voluptatem molestiae magnam eaque, quo impedit
        consequatur quasi voluptatum eum recusandae libero fugiat voluptates
        odit vero perspiciatis blanditiis.
      </p>
    </div>
  );
};

export default Contact;
