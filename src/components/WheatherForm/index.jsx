import React, { useState, useContext } from 'react'
import { Form, Button, Row, Col, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import paises from '../../utils/paises'
import { CardContext } from '../../cardContextProvider';
import axios from '../../utils/api';
import './formulario.css'


export default function WheatherForm({ showCard, setShowCard }) {
    const initialState = {
        cidade: '',
        pais: '',
        labelPais: ''
    };


    const [cardInfo, setCardInfo] = useContext(CardContext);

    const { REACT_APP_API_KEY: API_KEY } = process.env;

    const [form, setForm] = useState(initialState);

    const onSubmit = async (event) => {
        const countryName = changeLabel(form.pais);
        console.log("CountryName:"+ countryName);
        event.preventDefault();
        try {
            const response = await axios.get(`weather?q=${form.cidade},${form.pais}&APPID=${API_KEY}`);
            setCardInfo({
                name: response.data.name,
                maxTemp: Math.round(response.data.main.temp_max - 273.15),
                minTemp: Math.round(response.data.main.temp_min - 273.15),
                tempAtual: Math.round(response.data.main.temp - 273.15),
                icon: response.data.weather[0].id,
                pais: countryName
            });
            if (form.cidade && response) {
                setShowCard(true);
            }
        }
        catch (e) {
            setShowCard(false);
            console.error(e.message);
        }
    }

    const setCountry = (event) => {
        const newLabel = changeLabel(event);
        setForm({
            ...form,
            pais: `${event}`,
            labelPais:newLabel
        });        
    }

    const changeLabel = (value) => {
        for (const [key, valor] of Object.entries(paises)) {
            if(key === value){
                return(valor);
            }
          }
    };

    const onChange = (event) => {
        const { target: { name, value } } = event;
        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <Container  >
            <Form className="ml-5" onSubmit={onSubmit} >
                <Row className="ml-5" >
                    <Col className="ml-5">
                        <Form.Group  >
                            <Form.Control
                                className="campos"
                                value={form.cidade}
                                name="cidade"
                                type="text"
                                required
                                onChange={onChange}
                                placeholder="City"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <DropdownButton id="dropdown-basic-button" title={form.labelPais || "Country"} onSelect={setCountry}>
                                
                                {Object.entries(paises).map((key, valor) =>  <Dropdown.Item eventKey={key[0]} >{key[1]}</Dropdown.Item> )}
                                
                            </DropdownButton>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="secondary" type="submit" > Search</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
