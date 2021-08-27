import React, { useState, useEffect } from 'react';
import TicketCards from './TicketCards';




const Ticketmaster = (props) => {
   
    const [eventData, setEventData] = useState([])
    
    async function  fetchTicket(url){
        let response = await fetch(url)
        let data = await response.json()
        
        
        
        setEventData(data._embedded.events)
            
            console.log(data)
        
    } 

    useEffect(() => {
        
        let lat = props.lat === 0 ? localStorage.getItem('latitude') : props.lat
        let long = props.long === 0 ? localStorage.getItem('longitude') : props.lat
        
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${lat.toString()},${long.toString()}&apikey=ZO5H86TC4ovXr2EiURqfW1K75YwE9NQq`
        
        fetchTicket(url)
    }, [])
    return ( <div>
        <h1>hello from ticket</h1>
    
        <TicketCards eventdata={eventData} />
    
    </div> )
}
 
export default Ticketmaster;