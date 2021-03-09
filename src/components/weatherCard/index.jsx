import React, { useContext } from 'react'
import Cards from '../Card'
import { Row, Col} from 'react-bootstrap';
import './weatherCard.css'
import 'weather-icons/css/weather-icons.css'
import { CardContext } from '../../cardContextProvider';

export default function WeatherCard() {

    const [cardInfo] = useContext(CardContext);

    const icon= () => {
        const iconInfo = cardInfo.icon;
        switch(true){   
            case iconInfo>=200 && iconInfo<=232:
                return 'wi-thunderstorm';
            case iconInfo>=300 && iconInfo<=321:
                return 'wi-sleet';
            case iconInfo>=500 && iconInfo<=531:
                return 'wi-storm-showers';
            case iconInfo>=600 && iconInfo<=622:
                return 'wi-snow';
            case iconInfo>=701 && iconInfo<=781:
                return 'wi-fog';
            case iconInfo===800 :
                return 'wi-day-sunny';
            case iconInfo>=801 && iconInfo<=804:
                return 'wi-day-fog';
            default:
                return 'wi-day-sunny';
        }
                }
const iconclass = icon();

                console.log(iconclass);
                
    return (
        <div className="contein">
            <Cards className="contein">
                <div id="cardBackground">
                    <Row className="titulo justify-content-md-center">
                        {cardInfo.name}
                    </Row>
                    <Row className="pais justify-content-md-center">
                        {cardInfo.pais}
                    </Row>
                    <Row className="justify-content-md-center">
                        <i className={`logo wi ${iconclass}`}></i>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col className="justify-content-md-center">
                            <Row className="minMax justify-content-md-center">
                                {cardInfo.minTemp + '°c'}
                            </Row>
                            <Row className="bottonText justify-content-md-center">
                                <p className="legendas">Minimum Temperature</p>
                            </Row>
                        </Col>
                        <Col className="justify-content-md-center">
                            <Row className="tempAtual justify-content-md-center">
                                {cardInfo.tempAtual + '°c'}
                            </Row>
                            <Row className="bottonText justify-content-md-center">
                                <p className="legendas">Current Temperature</p>
                            </Row>
                        </Col>
                        <Col className="justify-content-md-center">
                            <Row className="minMax justify-content-md-center">
                                {cardInfo.maxTemp + '°c'}
                            </Row>
                            <Row className="bottonText justify-content-md-center">
                                <p className="legendas">Maximum Temperature</p>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Cards>
        </div>
        
    )
}