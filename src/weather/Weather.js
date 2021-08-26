import React, {useState, useEffect} from 'react';
//import WeatherResults from './WeatherResults'


const baseUrl= 'api.openweathermap.org/data/2.5/weather?'
const key= '34e2880098d5257b2af9558fa92656e1'



const Weather = (props) => {
    const [results, setResults] = useState([]);
    //const [degree, setDegree] = useState("Fahernheit");
    const [metric, setMetric] = useState(false);

    const lat = localStorage.getItem('lat')
    const long = localStorage.getItem('long')

    // const handleClick = () =>{
    //     setDegree("Celius")
    // }

    const fetchURL = () => {
        let url = `${baseUrl}lat=${lat}&lon=${long}&appid=${key}`
        //url = metric ? url +`metric`: url + `imperial`;
        console.log('weather url', url);
        fetch(url)
        .then(res => res.json())
        .then(response => setResults(response))
        .catch(err => console.log(err));
    }

    // const handleClickTwo = () =>{
    //     fetch
    // }

    // useEffect(() => {
    //     console.log(degree)

    //     switch (degree) {
    //         case "Fahernheit":
    //             setDegree(false)
    //             break;

    //             case "Celius":
    //                 setDegree(true)
        
    //         default:
    //             setDegree(undefined)
    //             break;
    //     }
    // }, [degree]);

    return ( <div>
        <h2>Current Weather:</h2>
        <ul>
            <li></li>
        </ul>
        <button onClick={fetchURL}>Weather for Today:</button>
        Hello from Weather
    </div> );
}
 
export default Weather;