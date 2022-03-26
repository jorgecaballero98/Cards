import React from "react";
import Card from "./Card";

import image1 from "../assets/img/image1.jpg";
import image2 from "../assets/img/image2.jpg";
import image3 from "../assets/img/image3.jpg";
import image4 from "../assets/img/image4.jpg";
import image5 from "../assets/img/image5.jpg";
import image6 from "../assets/img/image6.jpg";
import image7 from "../assets/img/image7.jpg";
import image8 from "../assets/img/image8.jpg";
import image9 from "../assets/img/image9.jpg";
import image10 from "../assets/img/image10.jpg";
import image11 from "../assets/img/image11.jpg";
import image12 from "../assets/img/image12.jpg";

const cards = [
  {
    id: 1,
    title: "Bitcoin Web",
    image: image1,
    url: "https://bitcoin.org/es/",
  },
  {
    id: 2,
    title: "Cardano Web",
    image: image2,
    url: "https://cardano.org/",
  },
  {
    id: 3,
    title: "Ethereum Web",
    image: image3,
    url: "https://ethereum.org/en",
  },
  {
    id: 4,
    title: "Solana Web",
    image: image4,
    url: "https://solana.com/es",
  },
  {
    id: 5,
    title: "BNB Web",
    image: image5,
    url: "https://www.binance.com/en/bnb",
  },
  {
    id: 6,
    title: "Ripple Web",
    image: image6,
    url: "https://ripple.com/",
  },
  {
    id: 7,
    title: "TetherUS Web",
    image: image7,
    url: "https://tether.to/es/",
  },
  {
    id: 8,
    title: "Polkadot Web",
    image: image8,
    url: "https://polkadot.network/",
  },
  {
    id: 9,
    title: "Avalanche Web",
    image: image9,
    url: "https://www.avax.network/",
  },
  {
    id: 10,
    title: "Tron Web",
    image: image10,
    url: "https://tron.network/",
  },
  {
    id: 11,
    title: "Doge Coin Web",
    image: image11,
    url: "https://dogecoin.com/",
  },
  {
    id: 12,
    title: "Shiba Inu Web",
    image: image12,
    url: "https://www.shibatoken.com/",
  },
];

export default function Cards() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-3" key={card.id}>
              <Card
                title={card.title}
                imageSource={card.image}
                url={card.url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
