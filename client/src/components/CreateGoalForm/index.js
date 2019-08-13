import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_GOAL, LOADING } from "../../utils/actions";
import API from "../../utils/API";

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
    <div>
      <h1>Create a Goal</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={titleRef} placeholder="Title" />
        <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Body" />
        {/* <input className="form-control mb-5" ref={authorRef} placeholder="Category" /> */}
        {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        const options = [
  'one', 'two', 'three'
]
const options = [
{ value: 'one', label: 'One' },
{ value: 'two', label: 'Two' },
{
 type: 'group', name: 'group1', items: [
   { value: 'three', label: 'Three' },
   { value: 'four', label: 'Four' }
 ]
},
{
 type: 'group', name: 'group2', items: [
   { value: 'five', label: 'Five' },
   { value: 'six', label: 'Six' }
 ]
}
] */}
{/*Dropdown taken from:  MIT | Build for CSViz project @Wiredcraft */}

        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Goal
        </button>
      </form>
    </div>
  );
}

export default CreateGoalForm;
