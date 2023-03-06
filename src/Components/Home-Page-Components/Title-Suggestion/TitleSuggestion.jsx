import React, { useEffect, useState } from "react";
import axios from "axios";
import './TitleSuggestion.css'
function TitleSuggestion({formInputs}) {

    const  [title,setTitle] = useState([])
    const  [text,setText] = useState('')
    const  [suggestion,setSuggestion] = useState([])
    useEffect(()=>{
         const loadJobTitle = async ()=>{
            const response  = await axios.get('https://staging.get-licensed.co.uk/vantage/api/title/suggestions');
            setTitle(response.data.data);
         }
         loadJobTitle();
    },[])

    const onChangeHandler = (text)=>{
        let matches = [];
        if(text.length > 0 ){
            matches = title.filter((title)=>{
                const regex = new RegExp(`${text}`,"gi");
                return title.match(regex)
            })
        }
        console.log("matches",matches);
        setSuggestion(matches)
        setText(text)
    }
  return (
      <>
      <h4>Job Title</h4> 
      <input className={formInputs} placeholder='e.g Security supervisor' type="text"   name="name"
      onChange={e => onChangeHandler(e.target.value)}
      value = {text}
      />
      <div style={{marginTop:'0.7rem',overflowY:'scroll',height:'20rem',width:'15rem'}}>
      {suggestion && suggestion.map((suggest,i)=>{
          console.log("title",suggest);
          return <div key={i} className='suggestion'>{suggest}</div>
        })}
        </div>
        </>
  
  );
}

export default TitleSuggestion;
