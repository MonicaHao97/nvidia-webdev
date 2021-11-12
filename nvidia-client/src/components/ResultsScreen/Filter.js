import React from 'react';
import Price from "./Price";
import Condition from "./Condition";
import PostList from "../HomeScreen/PostList";

const Filter = () => {
    return(
        <div className="row p-3">
            <div className="col-6">
                <Price/>
            </div>
            <div className="col-6">
                <Condition/>
            </div>
            <div className="p-3">
                <PostList/>
            </div>
        </div>
    );
}

export default Filter;