import React, {Fragment, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchPostById} from "../../services/PostsService";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";

const DetailsScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const {post} = useSelector(state => state.postReducer);
    useEffect(() => {
        fetchPostById(dispatch, id);
    }, [id])

    const {name, title, description, contact, location, price, condition, pictures} = post;
    return(
        <Fragment>
            <div className="container">
                <div>
                    <div className="ps-3 mt-3">
                        <div className="form-group wd-border my-3">
                            <label htmlFor="name" className="pt-2 ps-3 form-label wd-fg-color-dark-gray">Name</label>
                            <input type="text"
                                   className="form-control text-white wd-no-background"
                                   id="name"
                                   name="name"
                                   value={name}
                            />
                        </div>

                        <div className="form-group wd-border my-3">
                            <label htmlFor="location" className="pt-2 ps-3 form-label wd-fg-color-dark-gray">Location</label>
                            <input type="text"
                                   className="form-control text-white wd-no-background"
                                   id="location"
                                   name="location"
                                   value={location}
                            />
                        </div>

                        <div className="form-group wd-border my-3">
                            <label htmlFor="location" className="pt-2 ps-3 form-label wd-fg-color-dark-gray">Contact</label>
                            <input type="text"
                                   className="form-control text-white wd-no-background"
                                   id="contact"
                                   name="contact"
                                   value={contact}
                            />
                        </div>

                        <div className="form-group wd-border my-3">
                            <label htmlFor="price" className="pt-2 ps-3 form-label wd-fg-color-dark-gray">Price($)</label>
                            <input type="text"
                                   className="form-control text-white wd-no-background"
                                   id="price"
                                   name="price"
                                   value={price}
                            />
                        </div>

                        <div className="form-group wd-border my-3">
                            <label htmlFor="condition" className="pt-2 ps-3 form-label wd-fg-color-dark-gray">Condition</label>
                            <input type="text"
                                   className="form-control text-white wd-no-background"
                                   id="condition"
                                   name="condition"
                                   value={condition}
                            />
                        </div>


                        <div className="form-group wd-border my-3">
                            <label htmlFor="title" className="pt-2 ps-3 form-label wd-fg-color-dark-gray">Title</label>
                            <input type="text"
                                   className="form-control text-white wd-no-background"
                                   id="title"
                                   name="title"
                                   value={title}
                            />
                        </div>

                        <div className="form-group wd-border my-3">
                            <label htmlFor="description" className="pt-2 ps-3 form-label wd-fg-color-dark-gray">Full Description</label>
                            <input type="textarea"
                                   className="form-control text-white wd-no-background"
                                   id="description"
                                   name="description"
                                   value={description}
                            />
                        </div>
                        {pictures && pictures.length > 0  &&
                        <div className="form-group wd-border my-3">
                            {
                                pictures.map((picture, idx) => <span key={idx}>
                                    < img src={`data:image/png;base64,${picture}`} alt="pic" className="wd-image-rounded-corner"/>
                                </span>)
                            }
                        </div>
                        }


                    </div>
                    <div>
                        <button className="btn btn-primary wd-btn-rounded-corner" onClick={()=>navigate(-1)}>Go Back</button>
                    </div>
                </div>

            </div>

        </Fragment>
    )
};

export default DetailsScreen;