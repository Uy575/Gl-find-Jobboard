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
        
        const onSuggestHandler = (text)=>{
            setText(text);
            setSuggestion([]);
        }

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
      <h4 className="jobTitleHeading">Job Title</h4> 
      <input className={formInputs} placeholder='e.g Security supervisor' type="search"   name="name" autoComplete="off"
      onChange={e => onChangeHandler(e.target.value)}
      value = {text}
      // onBlur = {()=>{
      //   setTimeout(() => {
      //       setSuggestion([]);
      //     }, 500);
      // } }
      />

      <div className="suggestionDiv">
      {suggestion && suggestion.map((suggest,i)=>{
          return <div  key={i} className='suggestion' onClick={()=>{
            onSuggestHandler(suggest);
          }}>{suggest}</div>
        })}
        </div>
        </>
  
  );
}

export default TitleSuggestion;
