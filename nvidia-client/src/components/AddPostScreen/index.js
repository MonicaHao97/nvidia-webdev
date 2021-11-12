import React, {Fragment, useEffect, useState} from "react";
import {postNewPost} from "../../services/PostsService";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";

const AddPostScreen = () => {
    const [post, setPost] = useState({});
    const image = [];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        name, title, description, price, condition, location, contact, pictures,
    } = post;

    const onChange = (event) => {
        setPost({
            ...post,
            [event.target.name]: event.target.value
        })
    };


    const onSubmit = (event) => {
        event.preventDefault();
        console.log(image)
        let newPost = post
        newPost.pictures = image
        setPost(newPost)
        console.log(pictures)
        postNewPost(dispatch, post);
        navigate('/home');
    }

    const changeImage = (e) => {
        const files = e.currentTarget.files;
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        })
    }

    const _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result
        let base64 = btoa(binaryString)

        image.push(base64)
    }


    return(
        <Fragment>
            <form className="row justify-content-center">
                <label htmlFor="name" className="col-10">Name</label>
                <div className="col-10 p-2">
                    <input type="text" className="form-control wd-post-form"
                           id="name"
                           name="name"
                           value={name}
                           onChange={event=>onChange(event)}
                           placeholder="Type name here"/>
                </div>
                <label htmlFor="title" className="col-10">Title</label>
                <div className="col-10 p-2">
                    <input type="text" className="form-control wd-post-form"
                           id="title"
                           name="title"
                           value={title}
                           onChange={event=>onChange(event)}
                           placeholder="Type your title here"/>
                </div>
                <label htmlFor="description" className="col-10">Description</label>
                <div className="col-10 p-2">
                    <textarea className="form-control wd-post-form"
                              id="description"
                              name="description"
                              value={description}
                              onChange={event=>onChange(event)}
                              rows="5" placeholder="Give a summary about your offer!"/>
                </div>
                <label htmlFor="price" className="col-10">Price</label>
                <div className="col-10 p-2">
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input type="number" className="form-control wd-post-form"
                               id="price"
                               name="price"
                               value={price}
                               onChange={(event)=> {
                                   setPost({
                                       ...post,
                                       price: parseInt(event.target.value)
                                   })
                               }}
                               placeholder="0"/>
                    </div>
                </div>
                <div className="col-10">
                    <label className="col-10">Condition</label>
                    <div className="col-10 form-check">
                        <input className="form-check-input" type="radio"
                               name="condition"
                               id="c1"
                               value="new"
                               onChange={event=>onChange(event)}
                        />
                        <label className="form-check-label" htmlFor="c1">
                            New </label>
                    </div>
                    <div className="col-10 form-check">
                        <input className="form-check-input" type="radio" name="condition" id="c2" value="old"
                               onChange={event=>onChange(event)}/>
                        <label className="form-check-label" htmlFor="c2">
                            Old </label>
                    </div>
                    <div className="col-10 form-check">
                        <input className="form-check-input" type="radio" name="condition" id="c3" value="renewed"
                               onChange={event=>onChange(event)}/>
                        <label className="form-check-label" htmlFor="c3">
                            Renewed </label>
                    </div>
                </div>
                <label htmlFor="location" className="col-10">Location</label>
                <div className="col-10 p-2">
                    <input type="text" className="form-control wd-post-form" id="location"
                           name="location"
                           value={location}
                           onChange={event=>onChange(event)}
                           placeholder="Enter your location here"/>
                </div>
                <label htmlFor="email" className="col-10">Email</label>
                <div className="col-10 p-2">
                    <input type="email" className="form-control wd-post-form" id="email"
                           name="contact"
                           value={contact}
                           onChange={event=>onChange(event)}
                           placeholder="ex: offerup@nvidia.com"/>
                </div>
                <label htmlFor="image" className="col-10">Upload Image (First image will be your thumbnail)</label>

                <div className="col-10 p-2">
                    <input type="file" id='pictures' name="pictures" accept=".jpeg, .png, .jpg" multiple onChange={changeImage}/>
                </div>

                {/*<div className="col-10 p-2">*/}
                {/*    <input type="file" id='pictures' name="pictures" multiple onChange={(event) => {*/}
                {/*        setPost({*/}
                {/*            ...post,*/}
                {/*            pictures: event.target.files*/}
                {/*        })*/}
                {/*    }}/>*/}

                {/*</div>*/}

                <button className="col-2 m-3 btn btn-primary" onClick={(event)=>onSubmit(event)}>Submit</button>
            </form>

        </Fragment>
    )
};

export default AddPostScreen;