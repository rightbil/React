import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import HelloJSX from './components/JSX';
import FunctionProps from './components/FunctionProps';
function App() {
  return (
   <div className="App">ab
      <FunctionComponent/>
      <ClassComponent/>
      <HelloJSX/>
      <FunctionProps firstName='Desu' lastName='Bezabih'> 
      
      <p> Nurse (Rn) </p>
      
       </FunctionProps>
      
      <FunctionProps firstName='Bililign' lastName='Gebru'>

      </FunctionProps>
      <FunctionProps firstName='Mihret' lastName='Alemu'>
      <p>JRES - student</p>
      </FunctionProps>

      <FunctionProps firstName='Mihret' lastName='Alemu'>
      <button>Quest - employee</button>
      </FunctionProps>

      <ClassComponent firstName='Bililign' lastName='Gebru' > 
      
      </ClassComponent>
      
    </div>
  );

}

export default App;
