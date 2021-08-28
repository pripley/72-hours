const WeatherResults = (props) => {
    return ( 
        <div>
            <p>
                {props.temp}{props.results}
            </p>
        </div>
     );
}
 
export default WeatherResults;