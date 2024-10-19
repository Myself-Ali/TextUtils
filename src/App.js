import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForm from './components/TextForm';
import FAQs from './components/FAQs';
import Nav from './components/Nav';
import Alert from './components/Alert';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert= (type, message)=>{
    setAlert({
      type: type,
      message: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= 'black';
      showAlert("success", "! Dark Mode Enabled Successfully");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("success", "! Light Mode Enabled Successfully");
    }
  }
  return (
    <div className="App">
      <Nav mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter text here" mode={mode} />
      <FAQs />
    </div>
  );
}

export default App;
