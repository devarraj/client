// import logo from './logo.svg';
import './App.css';
// import Navbar from './Navbar.js';
import Example from "./components/example"
import Navbar from "./components/Navbar"
import FunctionExample from './FunctionExample';
import FormComponent from './FormComponent';
import ClassCounter from './ClassCounter';
import FunctionCounter from './FunctionCounter';
import A from './A';
import DataFetchComponent from './DataFetchComponent';
import WebPage from './components/WebPage';


function App() {
  return (
    <div className="App DivStyle">
    {/* <Navbar/> 
    <Navbar websiteName="Rajkumar Devarinti king"/>
    <Example data = "DR"/>
   <FunctionExample/> 
   <FormComponent/>
   <ClassCounter/>
   <FunctionCounter/>
   <A/>
   <DataFetchComponent/>*/}
   <WebPage/>
   
    </div>
   
  );
}

export default App;

