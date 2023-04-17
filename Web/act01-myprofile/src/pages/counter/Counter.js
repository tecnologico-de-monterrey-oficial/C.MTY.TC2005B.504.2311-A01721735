import './Counter.css';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';

function Counter(){

    
    const [number, setNumber] = useState(1);
    const handleClick = () => {
        setNumber(number + 1);
        console.log(number);
    
    }

    const decreaseClick = () => {
        setNumber(number - 1);
        console.log(number);
    }

 
    return (
        <div className="Counter">
            <h1>Counter  - {number}</h1>
            
            <Button className = "ButtonUp" variant="info" size = "lg" onClick={handleClick}>Up</Button>
            <Button className = "ButtonDown" variant="info" size = "lg" onClick={decreaseClick}>Down</Button>
            </div>
    );
}

export default Counter;