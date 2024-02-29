import React, { useState } from 'react'
import { Button, Container, Form } from "react-bootstrap";
import { addEvent } from '../service/api';
import { useNavigate } from 'react-router-dom';

function AddEvent() { 


    const navigate = useNavigate()
     const  [eventItem , setEventItem] = useState({
        name:"",
        description:"",
        img:"",
        price:0,
        nbTickets:0,
        nbParticipants:0,
        like:false
    })


    const onValueChange =(e)=>{

        setEventItem({...eventItem , [e.target.name] : e.target.value})
   
    }


    const onFile =(e)=>{

        setEventItem({...eventItem , [e.target.name]:e.target.files[0].name})
    }


    const AddEvent = async()=>{

        const eventResult = await addEvent(eventItem)
        if(eventResult.status ==201){
            navigate("/events")
        }
    }

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Add a new Event to your Event List</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 

          onChange={(e)=>onValueChange(e)}
            name="name"
            value={eventItem.name}
            type="text"
            placeholder="Enter a Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
                    onChange={(e)=>onValueChange(e)}
                    value={eventItem.description}

            as="textarea"
            rows={3}
            placeholder="Enter description "
            name="description"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control

onChange={(e)=>onValueChange(e)}
value={eventItem.price}
            type="number"
            name="price"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control

onChange={(e)=>onValueChange(e)}
value={eventItem.nbTickets}
            type="number"
            name="nbTickets"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"

            onChange={(e)=>onFile(e)}
          />
        </Form.Group>
        <Button variant="primary" onClick={AddEvent}>
          Add an Event
        </Button>
        <Button  variant="secondary">
          Cancel
        </Button>
      </Form>
    </Container>
  )
}

export default AddEvent