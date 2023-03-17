import React, { useEffect, useState } from "react";
import axios from "axios";
import removeIcon from "../../../Assets/Icons/c-remove.svg";
import { useDispatch, useSelector } from "react-redux";
import { addJobType } from "../../../Redux/LocationAndJobTypeReducer";
import { useSearchParams } from "react-router-dom";
import "./TitleSuggestion.css";

function TitleSuggestion({ formInputs }) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const jobcatagory = searchParams.get("title");

  const [title, setTitle] = useState([]);
  const [text, setText] = useState(jobcatagory === null ? "" : jobcatagory);
  const [suggestion, setSuggestion] = useState([]);
  useEffect(() => {
    const loadJobTitle = async () => {
      const response = await axios.get(
        "https://staging.get-licensed.co.uk/vantage/api/title/suggestions"
      );
      setTitle(response.data.data);
    };

    loadJobTitle();
  }, []);

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestion([]);
  };
  dispatch(addJobType(text));
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = title.filter((title) => {
        const regex = new RegExp(`${text}`, "gi");
        return title.match(regex);
      });
    }
    setSuggestion(matches);
    setText(text);
  };

  return (
    <>
      <h4 className="jobTitleHeading">Job Title</h4>
      <div style={{ position: "relative" }}>
        {text && (
          <img
            src={removeIcon}
            alt="remove"
            id="rmv-ico"
            onClick={() => setText("")}
          />
        )}
        <input
          className={formInputs}
          placeholder="e.g Security supervisor"
          type="text"
          name="name"
          autoComplete="off"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
          // onBlur = {()=>{
          //   setTimeout(() => {
          //       setSuggestion([]);
          //     }, 500);
          // } }
        />

        <div className="suggestionDiv">
          {text.length >= 3 &&
            suggestion.map((suggest, i) => {
              return (
                <div
                  key={i}
                  className="suggestion"
                  onClick={() => {
                    onSuggestHandler(suggest);
                  }}
                >
                  {suggest}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default TitleSuggestion;
