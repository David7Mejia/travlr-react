import './Upload.css'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as uploadActions from "../../store/upload";
import {useHistory} from 'react-router-dom'

function Upload() {
    const dispatch = useDispatch();
    const [image_url, setImageUrl] = useState('')
    const [description, setDescription] = useState('')
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        let user_id = sessionUser.id;
        let username = sessionUser.username
        history.push('/')
        return dispatch(uploadActions.postImageThunk({ image_url, user_id, username, description }))
    }
    return (
        <div className='wrapper-upload'>

        <form onSubmit={onSubmit} className='upload-form'>
            <label className='upload-img-txt'>
                Upload an Image
                <br />
                <input
                    placeholder='Image URL'
                    className='form-input-url'
                    type='text'
                    value={image_url}
                    onChange={e => setImageUrl(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                <textarea
                    placeholder='Description'
                    type='text'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                    rows="3"
                    cols="30"
                    />
            </label>
            <button id='main-btn' className='upload-btn' type="submit">Upload Post!</button>
        </form>
        </div>
    )

}
export default Upload
