import React from 'react';

const TicketCards = (props) => {

    console.log(props.eventdata)
    const eventMapper = () =>{
        return props.eventdata.map((Data) => {
            return (
                <div>
                
                <a href={Data.url} target="_blank" >{Data.name}</a>
                
                </div>
            )
        })
    }

    return (
        <div>
            {eventMapper()}
            </div>
      );
}
 
export default TicketCards;


