import * as React from 'react';
const Counter = React.lazy(() => import('../components/Counter.tsx'));

const Home:React.FC = () => {

    //Render
    return(
        <div>
            This is Home page.
            <Counter/>
            <Counter initialValue={2} step={2}/>
            <Counter step={5}/>
        </div>
    );
};

export default Home;