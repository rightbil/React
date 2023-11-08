import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import HelloJSX from './components/JSX';
import FunctionProps from './components/FunctionProps';
function App() {
  return (
   <div className="App">
     <FunctionComponent/>
      <ClassComponent/>
      <HelloJSX/>
      <FunctionProps firstName='Desu' lastName='Bezabih'/>
      <FunctionProps firstName='Bililign' lastName='Gebru'/>
      
    </div>
  );

}

export default App;
