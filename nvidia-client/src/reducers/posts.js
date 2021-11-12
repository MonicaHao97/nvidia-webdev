const initialState = {
    posts: [],
    post: {},
    filteredPosts: []
}

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'fetch-all-posts':
            return {
                ...state,
                posts: action.payload
            }
        case 'fetch-post-by-id':
            return {
                ...state,
                post: action.payload
            }
        case 'fetch-posts-by-name':
            return {
                ...state,
                posts: action.payload,
                filteredPosts: action.payload
            }
        case 'filter-by-price':
            console.log(action);
            switch(action.payload) {
                case "0":
                    state.posts = state.filteredPosts;
                    return {
                        ...state,
                        posts:state.posts
                    }
                case "1":
                    state.posts = state.filteredPosts;
                    return {
                        ...state,
                        posts: state.posts.filter(post=>post.price<50)
                    }
                case "2":
                    state.posts = state.filteredPosts;
                    return {
                        ...state,
                        posts: state.posts.filter(post=>post.price>=50 && post.price <= 100)
                    }
                case "3":
                    state.posts = state.filteredPosts;
                    return {
                        ...state,
                        posts: state.posts.filter(post=>post.price>100)
                    }
                default:
                    return state;
            }
        case 'filter-by-condition':
            console.log(action);
            switch(action.payload) {
                case "0":
                    state.posts = state.filteredPosts;
                    return {
                        ...state,
                        posts:state.posts
                    }
                case "1":
                    state.posts = state.filteredPosts;
                    return {
                        ...state,
                        posts: state.posts.filter(post=>post.condition==="new")
                    }
                case "2":
                    state.posts = state.filteredPosts;
                    return {
                        ...state,
                        posts: state.posts.filter(post=>post.condition==="old")
                    }
                case "3":
                    state.posts = state.filteredPosts;
                    return {
                        ...state,
                        posts: state.posts.filter(post=>post.condition==="renewed")
                    }
                default:
                    return state;
            }
        case 'create-post':
            return ({
                ...state,
                posts: [action.payload, ...state.posts]
            });
        default:
            return(state);
    }
};


export default postReducer;