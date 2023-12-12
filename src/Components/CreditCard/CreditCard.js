import "./CreditCard.css";
import { cards } from "../../data/cards";
//
import React from "react";
import { useState } from "react";

//
const PrototypeCard = ({ issuer, cardNumber, exp, cvv, name, avatar }) => {
  return (
    <div className="card">
      <img src={avatar} alt={name} />
      <p className="name">{name}</p>
      <p className="number">{cardNumber}</p>
      <p className="expire">{exp}</p>
      <p className="cvv">{cvv}</p>
      <p className="issuer">{issuer}</p>
    </div>
  );
};

//
const CreditCard = () => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <React.Fragment>
      <section>
        <div className="searchbar-container">
          <h1 className="app-title">browse oncredit</h1>
          <input
            onChange={handleInput}
            placeholder="Type the issuer to search"
            type="text"
            name="searchbar"
            id="searchbar"
            value={value}
          />
        </div>
      </section>
      <section className="grid">
        {cards
          .filter((card) => {
            if (card.issuer.toLowerCase().includes(value.toLowerCase())) {
              return card;
            }
          })
          .map((card, index) => {
            return (
              <div key={index + 1}>
                <PrototypeCard {...card} />
              </div>
            );
          })}
      </section>
    </React.Fragment>
  );
};

export default CreditCard;
