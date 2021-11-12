import React, {useState} from 'react'
import {useNavigate} from "react-router";


const SearchArea = () => {
    const navigate = useNavigate();
    let [searchName, setSearchName] = useState("");
    const clickHandler = () => {
        navigate(`/results/?name=${searchName}`);
    }
    return(
        <div className="my-4">
            <div className="row mb-2">
                <div className="col-10 position-relative">
                    <i className="fas fa-search wd-search-icon"/>
                    <input type="text" className="wd-btn-rounded-corner ps-5 form-control"
                           onChange={(event)=>{
                               setSearchName(event.target.value);
                               //console.log(searchName);
                           }}
                           placeholder="Search Items"/>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary float-end wd-btn-rounded-corner" onClick={clickHandler}>Search</button>
                </div>
            </div>
        </div>

    );
}
export default SearchArea;