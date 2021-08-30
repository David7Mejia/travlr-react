import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import {useParams, useHistory} from 'react-router'
import {updateCommentThunk, getCommentThunk} from "../../store/comment";
import { getPostThunk } from "../../store/upload";
import '../Comments/Comments.css'


function EditComment({ids}) {
    const {id} = useParams()
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");
    const history = useHistory();
    const onSubmit = (e) => {
      e.preventDefault();
      dispatch(updateCommentThunk(ids, comment));
    };
    useEffect(() => {
      dispatch(getCommentThunk(id));
    });

    return (
      <div className="wrapper-upload">
        <form onSubmit={onSubmit} className="edit-comment-form">
          <label className="upload-img-txt">Edit Your Comment</label>
          <label>
            <textarea
              className="txt-area"
              placeholder="Comment"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              rows="3"
              cols="20"
            />
          </label>
          <button className="upload-btn" type="submit">
            Post!
          </button>
        </form>
      </div>
    );

}
export default EditComment