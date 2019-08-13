import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid/index";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { SET_CURRENT_GOAL, ADD_FAVORITE, REMOVE_FAVORITE } from "../../utils/actions";

const Detail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getGoal(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_GOAL, goal: res.data }))
      .catch(err => console.log(err));
  }, []);

  const addFavorite = () => {
    //to do update API
    API.updateGoal(props.match.params.id, {...state.currentGoal, completed: true})
    .then((res) => {
      dispatch({
        type: ADD_FAVORITE,
        goal: state.currentGoal
      });
    })
  };
  
  const removeFavorite = () => {
    //to do update API
    API.updateGoal(props.match.params.id, {...state.currentGoal, completed: false})
    .then((res) => {
      dispatch({
        type: REMOVE_FAVORITE,
        _id: state.currentGoal._id
      });
    })
  };

  return (
    <>{state.currentGoal ? (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                {state.currentGoal.title} by {state.currentGoal.author}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <article>
                <h1>Content:</h1>
                <p>{state.currentGoal.body}</p>
              </article>
            </div>
            {state.favorites.indexOf(state.currentGoal) !== -1 ? (
              <button className="btn btn-danger" onClick={removeFavorite}>
                Remove from Achieved Goals!
            </button>
            ) : (
                <button className="btn" onClick={addFavorite}>
                  ✅ Add to Achieved Goals
            </button>
              )}
          </div>
          <div className="row">
            <div className="col">
              <Link to="/">← Back to Goals</Link>
            </div>
          </div>
        </div>
      </div>
    ) : (
        <div>loading...</div>
      )}</>
  );
};

export default Detail;
