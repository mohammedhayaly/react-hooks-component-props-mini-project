import React from "react";

function About({ image, aboutText }) {
  const defaultImage = "https://via.placeholder.com/215";
  const altText = "blog logo";

  return (
    <aside>
      <img src={image || defaultImage} alt={altText} />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;