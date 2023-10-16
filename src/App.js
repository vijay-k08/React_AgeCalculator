import { useState } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';

function App() {
  
  const [date,setDate]=useState('');
  const [age,setAge]=useState(null);
  return (
    <div className="App">
      <Header />
      <Body 
      date = {date}
      setDate = {setDate} 
      age = {age}
      setAge = {setAge}/>
    </div>
  );
}

export default App;