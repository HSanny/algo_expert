import './App.css';

//  first componenent file

function App() {
  return (
    <div className="App">
      <SayHello />
      <SayHello />
    </div>
  );
}

function SayHello() {
  return <p>Hello World</p>
}

export default App;
