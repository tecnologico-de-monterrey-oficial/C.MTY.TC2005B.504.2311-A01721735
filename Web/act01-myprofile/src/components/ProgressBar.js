import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {useState} from 'react';

function StripedExample() {

    const [number, setNumber] = useState(0);
    const increase = () => {
        if(number < 100){
        setNumber(number + 20);
        console.log(number);
    }
    }

    const decrease = () => {
        if(number > 0){
            setNumber(number - 20);
            console.log(number);
        }
        
    }


    

  return (
    <div>
      <ProgressBar striped variant="success" animated now={number} label = {number} />
      <Button className = "ButtonIncrease" variant="info" size = "lg" onClick={increase}>Increase Percentage</Button>
      <Button className = "ButtonDecrease" variant="danger" size = "lg" onClick={decrease}>Decrease Percentage</Button>
    </div>
  );
}

export default StripedExample;