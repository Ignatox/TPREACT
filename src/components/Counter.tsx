import * as React from 'react';
import Button from 'react-bootstrap/Button';
type CounterProps={
    initialValue: number;
    step:number;

};
//(si no tiene el initial value, le da un 0 por defecto)
const Counter: React.FC<CounterProps> = ({ initialValue = 0, step = 1}) => {
    //State 
    const [count, setCount] = React.useState<number>(initialValue);
    
    //Handlers
    function decrement(){
        setCount((prevState: number) => prevState - (step))
    }
    function increment(){
        setCount((prevState: number) => prevState + (step))
    }
    function reset(){
        setCount(initialValue);
    }
    
    //Render
    return(
        //Lo mismo que hacer react.fragment
        <>  
            <Button onClick={decrement} variant="primary">-</Button>
            {count}
            <Button onClick={increment} variant="default">+</Button>

        </>

    );

};

export default Counter;