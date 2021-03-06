import { csrfFetch } from './csrf';

const POST_COMMENT = 'comment/POST_COMMENT';
const GET_COMMENT = 'comment/GET_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT'
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT'

export const postComment = (comnt) => ({
    type: POST_COMMENT,
    comnt
})
export const getComment = (comnt) => ({
    type: GET_COMMENT,
    comnt
})
export const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    id
})
export const updateComment = (comnt) => ({
    type: UPDATE_COMMENT,
    comnt
})

//CREATE
export const postCommentThunk = payload => async(dispatch) => {
    const res = await csrfFetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(payload),
    })
    const newComnt = await res.json();
    dispatch(postComment(newComnt));
    return newComnt
}
//READ
export const getCommentThunk= (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/comments/${id}`)

    if (res.ok) {
        const allComments = await res.json()
        dispatch(getComment(allComments))
        return allComments
    }
}
export const updateCommentThunk = (id, comment) => async (dispatch) => {
    const res = await csrfFetch(`/api/comments/${id}`, {
        method: 'PUT',
        body: JSON.stringify({id, comment})
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(updateComment(data))
    }
}

//DELETE
export const deleteCommentThunk = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/comments/${id}`, {
        method: 'DELETE',
    })
    if (res.ok) {
        await res.json()
        dispatch(deleteComment(id))
        return res
    }
}

const initialState = {}


const comntReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case POST_COMMENT:
             newState = {
                ...state,
                [action.comnt.id]: action.comnt
            }
            return newState
        case GET_COMMENT:
            action.comnt.forEach(com => {
                newState[com.id] = com;
            })
            return {...newState}

        case DELETE_COMMENT:
            newState = { ...state }
            delete newState[action.id]//action.img.id
            return newState
        case UPDATE_COMMENT:
            newState[action.comnt.id] = action.comnt
            return {
                // ...state,
                ...newState
            }
        default:
            return state;
    }
}

export default comntReducer
