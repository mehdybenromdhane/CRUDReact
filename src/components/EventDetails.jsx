import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container  from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col'
import Card  from 'react-bootstrap/Card'
import { getallEvents } from '../service/api'


export default function EventDetails() {

  const { id } = useParams();
  const [event, setEvent] = useState(null);


  
  useEffect(() => {
    const fetchEvent = async (eventId) => {
      const eventResult = await getallEvents(eventId);
      setEvent(eventResult.data);

      
 
    };

    
    fetchEvent(id);
  }, []);

 

  if (!event){

    return <h1> Event does not exist !!! </h1>
  }

  return (
    <Container style={{ marginTop: "30px" }}>
    <Row>
      <Col md={4}>
        <Card.Img
          variant="top"
          src={`/images/${event.img}` }         alt="event Img"
          height="300"
        />
      </Col>
      <Col md={8}>
        <Row>
          <Col md={12}>
            <h1>{event.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>{event.description}</h5>
          </Col>
          <Col>
            <p style={{ marginLeft: "50px" }}></p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>Price</h5>
          </Col>
          <Col>
            <p style={{ marginLeft: "50px" }}> {event.price} DT</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  )
}
