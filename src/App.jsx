import './App.css';
import {Cards} from "./Cards";
import { Preview } from './Preview';
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
    <div className='body'>
      <Cards
      formData={formData} setFormData={setFormData}
      educationList={educationList} setEducationList={setEducationList}
      expList={expList} setExpList={setExpList} />
      
      <Preview className = "preview-resume" 
      formData={formData}
      educationList={educationList}
      expList={expList} />
    </div>
  )
}

export default App
