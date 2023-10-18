import { useState } from 'react'
import Button from 'react-bootstrap/Button';


//Importamos con carga perezosa , tiene que estar adentro de un suspense(que le muestro la usuario mientras lo cargo con react.suspense)
const Users = React.lazy(() => import ('./pages/Users.tsx') );
const Home = React.lazy(() => import ('./pages/Home.tsx') );
const About = React.lazy(() => import ('./pages/About.tsx') );


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <button variant="primary"onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
     
    </>
  )
}

export default App
