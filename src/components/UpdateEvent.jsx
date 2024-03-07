import React, { useState  ,useEffect} from 'react'
import { Button, Container, Form } from "react-bootstrap";
import { addEvent, editEvent, getallEvents } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateEvent() { 


    const param = useParams()

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

    const fetchEvent = async () => {
        const eventResult = await getallEvents(param.id);
        setEventItem(eventResult.data);
  
        
   
      };
  
    useEffect(() => {
      
        
        fetchEvent(param.id);
      }, []);
    
    const onValueChange =(e)=>{

        setEventItem({...eventItem , [e.target.name] : e.target.value})
   
    }


    const onFile =(e)=>{

        setEventItem({...eventItem , [e.target.name]:e.target.files[0].name})
    }


    const UpdateEvent = async()=>{

        const eventResult = await editEvent(param.id , eventItem)
        if(eventResult.status ==200){
            navigate("/events")
        }
    }

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Update  Event </h2>
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
        <Button variant="primary" onClick={UpdateEvent}>
          Update
        </Button>
        <Button  variant="secondary">
          Cancel
        </Button>
      </Form>
    </Container>
  )
}

export default UpdateEvent