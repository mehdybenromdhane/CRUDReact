import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, NavLink } from 'react-router-dom';




function Event(props) {

  const [event,setEvent] = useState(props.event)


  const buy = ()=> {
     props.showAlert()
    setEvent((prevEvent)=>({

      ...prevEvent,
      nbParticipants:prevEvent.nbParticipants+1,
      nbTickets:prevEvent.nbTickets -1
      
    }))


  }


  const handleLike = () => {
    setEvent((eventPrev) => ({
      ...eventPrev,
      like: !eventPrev.like,
    }));
  };

  return (
    <>
<Card style={{ width: '18rem' }}>
<NavLink to={`/events/details/${event.id}`}>

      <Card.Img variant="top" src= {`images/${event.nbTickets?  event.img : "sold_out.png"}`} />
      </NavLink>

      <Card.Body>
        <Card.Title>{event.name}  </Card.Title>
        <Card.Text>
          Price : {event.price}
        </Card.Text>
        <Card.Text>
          Number of tickets :{event.nbTickets}
        </Card.Text>
        <Card.Text>
          Number of participants :{event.nbParticipants}
        </Card.Text>
        <Button variant="info" className='mx-2' onClick={handleLike}>
            {event.like ? "Dislike" : "Like"}
          </Button>
        <Button variant="primary" disabled={event.nbTickets?false:true} onClick={buy}>Book an event</Button>


        
        <Button variant="danger" onClick={()=>props.delete(event.id)}>Delete</Button>


<Button variant='success'>
   <Link to={`/events/update/${event.id}`}>

    Update
   </Link>

</Button>
      </Card.Body>
    </Card>
    
    
    
    </>
  )
}

export default Event

