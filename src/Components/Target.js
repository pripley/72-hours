import React, { useState, useEffect } from 'react';

const Target = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [crime,setCrime] = useState('')
    const [affiliation,setAffiliation] = useState('')

    function randomNumber(min, max) {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min
        return result
      }
     function targetGenerator(){
        let firstNum = randomNumber(0,9)
        let lastNum = randomNumber(0,9)
        let crimeNum = randomNumber(0,9)
        let allyNum = randomNumber(0,9)
        let firstNameArr = ['James','Paul','Rodney', 'Jean','Keanu','Johnny','Daren','Dan','Bruce','Peter']
        let lastNameArr = ['Drake','Bravo','Johnson','Smith','Biden','Reaves','Ripley','Gaines','Green','OBrien']
        let Fname = firstNameArr[firstNum]
        let Lname = lastNameArr[lastNum]
        let crimeArr = ['Jaywalking','Murder','Shoplifting','Bombing','Public Indecency','Assault','Arson','Robbery','Battery', 'Pranking the President']
        let affiliationArr =['Cobra','Hydra','Terrorist','Aim','Legion of Doom','Nazi','Isis','Spectre','Peta','Salvation Army']
        let crimecommit = crimeArr[crimeNum]
        let affiliationvar = affiliationArr[allyNum]
        setFirstName(Fname)
        setLastName(Lname)
        setCrime(crimecommit)
        setAffiliation(affiliationvar)
      
      }

    useEffect(() => {
        targetGenerator()
    }, []);
    return ( 
        <div>
            <h3>Target: {firstName} {lastName}</h3>
            <p>Crime: {crime}</p>
            <p>Affiliation: {affiliation}</p>
        </div>
     );
}
 
export default Target;