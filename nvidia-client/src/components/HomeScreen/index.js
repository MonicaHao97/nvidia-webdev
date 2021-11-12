import React, {Fragment} from 'react'
import {useNavigate} from "react-router";

import SearchArea from "./SearchArea";
import PostList from "./PostList";

const HomeScreen = () => {
    const navigate = useNavigate();
    return(
        <Fragment>
            <div className="container">
                <SearchArea/>
                <PostList/>
                <button className="btn btn-success wd-btn-rounded-corner my-3" onClick={()=>navigate('/post')}>Post a new Ad</button>
            </div>

        </Fragment>
    );
};
export default HomeScreen;