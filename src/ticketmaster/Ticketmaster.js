import React, { useState, useEffect } from 'react';
import TicketCards from './TicketCards';




const Ticketmaster = (props) => {
    let location = '39.613579,-86.117882';
let url = `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${location}&apikey=ZO5H86TC4ovXr2EiURqfW1K75YwE9NQq`
    const [eventData, setEventData] = useState([])
    const [trigger, setTrigger] = useState(false)
    let fetchTicket= () =>{
        fetch(url)
        .then(res => res.json())
        .then((json) => {
            setEventData(json._embedded.events)
            setTrigger(true)
            console.log(json)
        })
    } 

    useEffect(() => {
        fetchTicket()
    }, [])
    return ( <div>
        <h1>hello from ticket</h1>
    
        <TicketCards eventdata={eventData} trigger={trigger}/>
    
    </div> )
}
 
export default Ticketmaster;