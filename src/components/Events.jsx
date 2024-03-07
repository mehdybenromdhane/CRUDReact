import  Container  from "react-bootstrap/Container"
import Event from "./Event"
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"
import { useEffect, useState } from "react"
import { deleteEvent, getallEvents } from "../service/api"
import { useDispatch, useSelector } from "react-redux"
import { deleteEventReducer, selectEvents } from "../redux/slices/eventsSlice"
function Events() {

    


         const [eventsData]  =useSelector(selectEvents)

           const dispatch = useDispatch()



    const [isShowAlert , setIsShowAlert] = useState(false)
    const [isWelcome, setIsWelcome] = useState(true);





    

    
    useEffect(() => {
      const isWelcomeTimeout = setTimeout(() => {
        setIsWelcome(false);
      }, 3000);
  
      return () => {
        clearTimeout(isWelcomeTimeout);
      };
    }, []);
    const showAlert = ()=>{

        setIsShowAlert(true)

        setTimeout(()=>
        setIsShowAlert(false)
        , 2000 )
    }


    const handleDelete = async (eventId)=>{

      await deleteEvent(eventId);

       dispatch(deleteEventReducer(eventId))
       
    }
  return (


    <>
 {isWelcome && (
        <Alert style={{ width: "70%", marginBottom: 40 }} variant="success">
          Hey welcome to Esprit Events
        </Alert>
      )}
<Container>

    <Row>
   {eventsData.map((event,index)=>(

      <Event  key={index} event={event} showAlert={showAlert} delete={handleDelete}  />
     
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