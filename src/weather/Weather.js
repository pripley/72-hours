
import React, {useState, useEffect} from 'react';
import WeatherResults from './WeatherResults'


const baseUrl= 'api.openweathermap.org/data/2.5/weather?'
const key= '34e2880098d5257b2af9558fa92656e1'



const Weather = (props) => {
    const [results, setResults] = useState('');
    const [description, setDescription] = useState('');
    const [humidity, setHumidity] = useState('');
    
   const [temp, setTemp] = useState('Imperial:');
    const [toggle, setToggle] = useState(false);

  


    const fetchURL = (e) => {
        
       
        console.log('weather url', e);
        fetch(e)

        .then(res => res.json())
        .then(response => {
            console.log(response);
            console.log(response.main.temp);
            setResults(response.main.temp)
             console.log(response.weather[0].description);   
            setDescription(response.weather[0].description)
            console.log(response.main.humidity)
            setHumidity(response.main.humidity)
        })
        .catch(err => console.log(err));
    }
    
const handleSubmit= () => {
    let lat = props.lat === 0 ? localStorage.getItem('latitude') : props.lat
    let long = props.long === 0 ? localStorage.getItem('longitude') : props.long
    let urlTwo = `http://api.openweathermap.org/data/2.5/weather?lat=${lat.toString()}&lon=${long.toString()}&appid=${key}&units=metric` 
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat.toString()}&lon=${long.toString()}&appid=${key}&units=imperial`

    fetchURL(urlTwo)
    if (toggle === false){
        fetchURL(urlTwo)
        setTemp('Celius: ')
        setToggle(true)
    } else {fetchURL(url)
        setTemp('Imperial: ')
        setToggle(false)
    }
}


    useEffect(() => {
        let lat = props.lat === 0 ? localStorage.getItem('latitude') : props.lat
        let long = props.long === 0 ? localStorage.getItem('longitude') : props.long
        
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat.toString()}&lon=${long.toString()}&appid=${key}&units=imperial`
     fetchURL(url)
    console.log('weather', url);
    }, [])
    
    return ( <div>
        <h2>Current Weather:</h2>
        <WeatherResults results={results} description={description} temp={temp} humidity={humidity} />
        <button onClick={handleSubmit}>For Agents Only!:</button> 
        
    </div> );
}
 
export default Weather;