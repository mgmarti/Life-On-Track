import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_GOAL, UPDATE_GOALS, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function GoalsList() {
  const [state, dispatch] = useStoreContext();

  const removeGoal = id => {
    API.deleteGoal(id)
      .then(() => {
        dispatch({
          type: REMOVE_GOAL,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getGoals = () => {
    dispatch({ type: LOADING });
    API.getGoals()
      .then(results => {
        dispatch({
          type: UPDATE_GOALS,
          goals: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getGoals();
  }, []);

  return (
    <div>
      <h1>All Goals</h1>
      <h3 className="mb-5 mt-5">Click on a goal to view</h3>
      {state.goals.length ? (
        <List>
          {state.goals.map(goal => (
            <ListItem key={goal._id}>
              <Link to={"/goals/" + goal._id}>
                <strong>
                  {goal.title} category: {goal.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeGoal(goal._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any goals yet!</h3>
      )}
      <div className="mt-5">
        <Link to="favorites">View Achieved Goals </Link>
      </div>
    </div>
  );
}

export default GoalsList;
