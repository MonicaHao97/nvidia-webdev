import React from 'react';
import {useNavigate} from "react-router-dom";

const PostItem = ({post}) => {
    const navigate = useNavigate();
    const {_id, name, title, location, pictures} = post;
    // console.log("From home screen");
    // console.log(pictures);
    return(
        <li className="list-group-item" onClick={()=>navigate(`/details/${_id}`)}>
            <div className="row">
                <div className="col-9">
                    <div className="wd-fg-color-gray">{name}</div>
                    <div><b>{title}</b></div>
                    <div>{location}</div>
                </div>
                <div className="col-3">
                    {pictures ? <img src={`data:image/png;base64,${pictures[0]}`} className="img-fluid wd-image-rounded-corner float-end" alt=""/>: ''}
                </div>
            </div>
        </li>
    );
}
export default PostItem;