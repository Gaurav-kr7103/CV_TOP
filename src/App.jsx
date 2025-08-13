import './App.css';
import {Cards} from "./Cards";
import { useState } from 'react';

function App() {
    const [formData,setFormData] = useState({
      fname : "",
      email : "",
      tel : "",
    });
    const [educationList, setEducationList] = useState([]);
    const [expList, setExpList] = useState([]);

  return (
    <>
      <Cards 
      formData={formData} setFormData={setFormData}
      educationList={educationList} setEducationList={setEducationList}
      expList={expList} setExpList={setExpList} />
      {/* Hello World! */}
    </>
  )
}

export default App
