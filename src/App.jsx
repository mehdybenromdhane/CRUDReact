
import './App.css'
import React, { Suspense } from 'react'
import { Route , Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import NavigationBar from './components/NavigationBar'
import EventDetails from './components/EventDetails'
import AddEvent from './components/AddEvent'


const Events = React.lazy(()=>import('./components/Events'))
function App() {

  return (
<>

<NavigationBar/>

<Suspense fallback={<p>Loading ...</p>}>
<Routes>

  <Route path="events">

    <Route  index element={<Events/>}/>
    <Route  path="add" element={<AddEvent/>}/>

    <Route  path="details/:id" element={<EventDetails/>}/>
 
  </Route> 
  
  <Route path="*" element={<NotFound/>}/>

</Routes>
</Suspense>
</>



      
  )
}

export default App
