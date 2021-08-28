const WeatherResults = (props) => {
    return ( 
        <div>
         <p>
             {props.temp}{props.results}
         </p>
         <p>
             {props.description}
         </p>
         <p>
             {props.humidity}
         </p>
        </div>
     );
}
 
export default WeatherResults;