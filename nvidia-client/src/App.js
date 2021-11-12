import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import postReducer from './reducers/posts'

//styles(Bootstrap+Bootswatch:Cyborg+FontAwesome)
import './vendors/bootstrap/css/bootstrap.min.css'
import './vendors/bootstrap/bootstrap.min.css'
import './vendors/fontawesome/css/all.min.css';
import './App.css';

import HomeScreen from "./components/HomeScreen";
import ResultsScreen from "./components/ResultsScreen";
import DetailsScreen from "./components/DetailsScreen";
import AddPostScreen from "./components/AddPostScreen";

//redux
const reducer = combineReducers({postReducer})
const store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>

                <Link to="/home">Home</Link>
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="home" element={<HomeScreen/>}/>
                    <Route path="results" element={<ResultsScreen/>}/>
                    <Route path="details/:id" element={<DetailsScreen/>}/>
                    <Route path="post" element={<AddPostScreen/>}/>
                </Routes>

            </BrowserRouter>
        </Provider>

    );
}

export default App;