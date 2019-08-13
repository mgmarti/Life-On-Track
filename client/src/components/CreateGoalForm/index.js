import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_GOAL, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import './GoalForm.css';

function CreateGoalForm() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveGoal({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_GOAL,
          goal: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <div className="goal-container">
      <h2 className='large text-primary'>Create a Goal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input className="form-control text-title" required ref={titleRef} placeholder="Title" />
        </div>
        <div className="form-group">
          <textarea className="form-control text-space" required ref={bodyRef} placeholder="Body" />
        </div>
        <input className="form-control text-category" ref={authorRef} placeholder="Category" />
        <div className="submitcontainer">
          <button className="btn button-bg" disabled={state.loading} type="submit">
            Save Goal
          </button>
        </div>
      </form>
    </div>

  );
}

export default CreateGoalForm;
