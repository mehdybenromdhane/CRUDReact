import  Container  from "react-bootstrap/Container"
import events from "../data/events.json"
import Event from "./Event"
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"
import { useState } from "react"
function Events() {


    const [isShowAlert , setIsShowAlert] = useState(false)


    const showAlert = ()=>{

        setIsShowAlert(true)

        setTimeout(()=>
        setIsShowAlert(false)
        , 2000 )
    }
  return (


    <>

<Container>

    <Row>
   {events.map((event,index)=>(

      <Event  key={index} event={event} showAlert={showAlert}  />
     
   ))}

</Row>




{isShowAlert &&(<Alert variant="success">
      <Alert.Heading>You are booked an event</Alert.Heading>
      
    </Alert>) }

</Container>
    
    </>
  )
}

export default Events