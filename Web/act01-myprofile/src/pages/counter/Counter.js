import './Counter.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../reducers/counterSlice';

function Counter() {

    const [number, setNumber] = useState(1);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

    const handleUp = () => {
        console.log(number);
        setNumber(number + 1);
        dispatch(increment());
    }

    const handleDown = () => {
        console.log(number);
        setNumber(number -1);
        dispatch(decrement());
    }

    return (
        <div className="Counter">
            <h1>Counter - {number}</h1>
            <h1>Counter Redux - {count}</h1>
            <Button className="ButtonUp" variant="success" size="lg" onClick={handleUp}>UP</Button>
            {' - '}
            <Button className="ButtonDown" variant="danger" size="lg" onClick={handleDown}>DOWN</Button>
        </div>
    );
}

export default Counter;