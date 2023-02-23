import './searchPerson.css';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Link } from "react-router-dom";

function SearchPerson() {

    const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="search-person">
    {/*one text input field, one input date field and a button to submit */}
        <div className="search-person-content">
            {/* <div>
                <h1>Search Person</h1>
                <p>Enter the name of the person you want to search about</p>
            </div> */}
            <div className='input-form'>
                <div className='input-form-container'>
                    <input id='start-input-name' type="text" placeholder="Enter name"></input>
                    <div>
                        <DatePicker maxDate={new Date()} style={{width: "fitContent"}} id='start-input-date' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <Link to="/topics"> <button id='start-input-button'>Search</button> </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SearchPerson;
