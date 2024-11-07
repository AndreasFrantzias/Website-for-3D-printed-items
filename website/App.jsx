import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import React from 'react';
import canlidimage from './assets/canlid2.png';
import foximage from './assets/lowpolyfox.png';

const App = () =>{
  const cardData =[
    {
    image: canlidimage,
    title: 'Can Lid Cover',
    description: 'Lid cover for your beverages',
    },
    {
      image:foximage,
      title:'Low poly fox',
      description:'a low poly fox',
    },
  ];

  return(
    <>
    <Header></Header>
    <div className="card-container">
      {cardData.map((card,index)=> (
        <Card
         key={index}
         image={card.image}
         title={card.title}
         description={card.description}
         />
        ))}
    </div>
    <Footer></Footer>
    </>
  );
};

export default App
