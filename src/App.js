import React, {useState} from 'react';
import WheatherForm from '../src/components/WheatherForm'
import WheatherCard from '../src/components/weatherCard'
import { Col } from 'react-bootstrap';
import CardContextProvider from './cardContextProvider'; 
import './App.css'

function App() {
const [showCard, setshowCard] = useState(false);



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

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <CardContextProvider>
    <App />
  </CardContextProvider>
);
