import React from "react";

const AllAnimals = ({ animals, pickAnimal }) => (
  <div className="text-center">
    <div>
        <div className="AllAnimals__container">
            <ul className="AllAnimals__list">
                {animals.map(animal => (
                    <li key={animal.id}>
                        <button className="AllAnimals__link" onClick={pickAnimal(animal.id)}>
                        {animal.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  </div>
);

export default AllAnimals;