const WeatherResults = (props) => {
    return ( 
        <div>
         <p>
            Temp: {props.temp}{props.results}
         </p>
         <p>
            Weather Condition: {props.description}
         </p>
         <p>
            Humidity: {props.humidity}
         </p>
        </div>
     );
}
 
export default WeatherResults;