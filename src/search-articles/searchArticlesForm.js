import './searchArticles.css';
import Navbar from '../components/Navbar';

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from '@mui/material/Checkbox';

import { Link } from "react-router-dom";



function SearchArticles() {
    
    const [topic, setTopic] = useState('');
    const handleTopic = (e) => {
        setTopic(e.target.value);
    }
    const [name, setName] = useState('');
    const handleName = (e) => {
        setName(e.target.value);
    }
    const [isTrending, setIsTrending] = useState(false);
    const handleTrinding = (e) => {
        setIsTrending(e.target.checked);
        setName('');
        setTopic('');
        setStartDate(new Date());
        console.log(e.target.checked);
    }
    const [startDate, setStartDate] = useState(new Date());


  return (
    <div className='page'>
      <Navbar />

        <div className="search-wrapper">

            <div className="search-articles">
                {/* devide yhe page to 2 main parts left and right */}
                <div className='top-part'>
                    <img src="../images/Logo.png" alt="Logo" />
                </div>
                
                <div className="bottom-part">
                    <div className="search-person">
                        {/*one text input field, one input date field and a button to submit */}
                        <div className="search-person-content">
                            {/* <div>
                                <h1>Search Person</h1>
                                <p>Enter the name of the person you want to search about</p>
                            </div> */}
                            <div className='input-form'>
                                <div className='input-form-container'>
                                    <input id='start-input-topic' type="text" placeholder="Enter Topic" value={topic} onChange={handleTopic}></input>
                                    <input id='start-input-name' type="text" placeholder="Enter Name" value={name} onChange={handleName}></input>
                                    <div>
                                        <DatePicker maxDate={new Date()} style={{width: "fitContent"}} id='start-input-date' selected={startDate}
                                                    minDate={new Date('2023-5')} onChange={(date) => setStartDate(date)} />
                                    </div>

                                    <div>
                                        <Checkbox label="Trending Articles" color="default" value={isTrending} onChange={handleTrinding} />
                                        Trending Articles
                                    </div>
                                    <Link to="/articles"> <button id='start-input-button'>Search</button> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default SearchArticles;
