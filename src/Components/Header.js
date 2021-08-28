
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [operationCol, setOperationCol] = useState('')
    const [operationAni,setOperattionAni] = useState('')
    
    function randomNumber(min, max) {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min
        return result
      }
      let OppNum1 = randomNumber(0,19)
      let OppNum2 = randomNumber(0,19)
     function OperationGenerator(){
      
      let operationColor = ['Red','Blue','Yellow','Pink','Violet','Green','Brown','Gray','White','Black','Scarlet','Marron','Saphire','Umber','Chocolate','Steel','Navy','Flamingo','Mint','Pearl','Peach','Gold']
      let operationAnimal = ['Cat','Dog','Wolf','Mouse','Rat','Wombat','Fox','Horse','Donkey','Zebra','Snake','Aligater','Lion','Naked-Molerat','Hawk','Pigion','Pikichu','Eagle','Dodo','Trout','Wolverine']
      let animal = operationAnimal[OppNum1]
      let Color = operationColor[OppNum2]
      setOperationCol(Color)
      setOperattionAni(animal)
      console.log(operationCol)
      console.log(operationAni)
      }

      useEffect(() => {
        OperationGenerator()
      }, []);
    return ( 
        <div>
            <h1>Operation: {operationCol} {operationAni}</h1>
        </div>
     );
}
 
export default Header;