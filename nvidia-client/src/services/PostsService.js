const POST_API = 'http://localhost:4000/api/posts';
const SEARCH_API = 'http://localhost:4000/api/search';

// const POST_API = 'https://nvidia-assignment.herokuapp.com/api/posts';
// const SEARCH_API = 'https://nvidia-assignment.herokuapp.com/api/search';

export const fetchAllPosts = (dispatch) =>
    fetch(POST_API)
        .then(response => response.json())
        .then(posts =>
            dispatch({
                type: 'fetch-all-posts',
                payload: posts
            })
        );

export const fetchPostById = (dispatch, id) => {
    fetch(`${POST_API}/${id}`)
        .then(response => response.json())
        .then(post =>
            dispatch({
                type: 'fetch-post-by-id',
                payload: post
            })
        );
}


export const fetchPostsByName = (dispatch, name) => {
    fetch(`${SEARCH_API}/?name=${name}`)
        .then(response => response.json())
        .then(
            posts =>
                dispatch({
                    type: 'fetch-posts-by-name',
                    payload: posts
                })
        );
}

export const postNewPost = (dispatch, newPost) =>
    fetch(POST_API, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(post =>
            dispatch({
                type: 'create-post',
                payload: post
            })
        );