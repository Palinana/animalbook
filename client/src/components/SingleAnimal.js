import React from "react";

const SingleAnimal = ({ animal, listAll }) => (
  <div className="text-center">
    <img src={animal.image} alt="animal"/>
    <div>
      <h2>
        {animal.name} (Age: {animal.age})
      </h2>
      <button onClick={listAll}>List all Animals</button>
    </div>
  </div>
);

export default SingleAnimal;