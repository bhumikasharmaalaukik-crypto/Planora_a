import './App.css';

function Greeting(props){
  return <h1> Hello, I am {props.name}!</h1>;
}

function App() {
  const name = "Ram";
  const age= 24;

  return(
    <div>
      <Greeting name={"Ram"} />
      <Greeting name={"Sita"}/>
      <Greeting name={"Hanuman"} />
      </div>
    );

  }
// Component = Function that returns JSX

export default App
