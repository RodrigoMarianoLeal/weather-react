import React, {useState, useContext} from 'react';
import WheatherForm from '../src/components/WheatherForm'
import WheatherCard from '../src/components/weatherCard'
import { Col } from 'react-bootstrap';
import CardContextProvider, {CardContext} from './cardContextProvider'; 
import './App.css'

function App() {
const [showCard, setshowCard] = useState(false);
const [cardInfo, setCardInfo] = useContext(CardContext);


  return (
    <div className="App">
       <div className="cabecalho">
         <i className="wi wi-snow logotop"> Weather</i>
         
       </div>
      <Col  >
     
      <WheatherForm setShowCard={setshowCard} showCard={showCard}></WheatherForm>,
       {showCard ? <WheatherCard></WheatherCard> : null}
          
        
      </Col>
    </div>
  );
}

export default () => (
  <CardContextProvider>
    <App />
  </CardContextProvider>
);
