import React, {Fragment, useEffect, useState} from "react";
import PostItem from "../HomeScreen/PostItem";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import queryString from "query-string";
import {fetchPostsByName} from "../../services/PostsService";

const ResultsScreen = () => {
    const [priceFilter, setPriceFilter] = useState("");
    const [conditionFilter, setConditionFilter] = useState("");
    const {posts} = useSelector(state => state.postReducer)
    const dispatch = useDispatch();
    const handlePriceFilter = (event) => {
        setPriceFilter(event.target.value);
        dispatch({
            type: 'filter-by-price',
            payload: event.target.value
        });
    }
    const handleConditionFilter = (event) => {
        setConditionFilter(event.target.value);
        dispatch({
            type: 'filter-by-condition',
            payload: event.target.value
        });
    }
    const location = useLocation();
    const queryPair = queryString.parse(location.search);
    useEffect(() => fetchPostsByName(dispatch, Object.values(queryPair)[0]), [])
    return(
        <Fragment>
            <div className="row p-3">
                <div className="col-6">
                    <select name="price" className="form-select wd-result-dropdown" onChange={(e)=>handlePriceFilter(e)}>
                        <option selected value="0">Price Filter</option>
                        <option value="1">less than $50</option>
                        <option value="2">between $50 to $100</option>
                        <option value="3">greater than $100 </option>
                    </select>
                </div>
                <div className="col-6">
                    <select name="condition" className="form-select wd-result-dropdown" onChange={(e)=>handleConditionFilter(e)}>
                        <option selected value="0">Condition Filter</option>
                        <option value="1">New</option>
                        <option value="2">Old</option>
                        <option value="3">Renewed</option>
                    </select>
                </div>
            </div>
            <ul className="list-group">
                {
                    posts.map(post => <PostItem key={post._id} post={post}/>)
                }
            </ul>

        </Fragment>
    )
};

export default ResultsScreen;