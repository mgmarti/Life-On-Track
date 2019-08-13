import React, { useEffect } from "react";
import { ListItem, List } from "../List/index";
import DeleteBtn from "../DeleteBtn/index";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../../utils/actions";

const FavoritesList = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_FAVORITES });
  };

  const removeFromFavorites = id => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: id
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);


  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Achieved Goals</h1>
      {state.favorites.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a goal to view in detail</h3>
          {state.favorites.map(goal => (
            <ListItem key={goal._id}>
              <Link to={"/goals/" + goal._id}>
                <strong>
                  {goal.title} category: {goal.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromFavorites(goal._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
          <h3>You haven't added any achieved goals yet!</h3>
        )}
      <div className="mt-5">
        <button className="btn button-bg" disabled={state.loading} type="submit">
          <Link to="goals" className="achieved">Back to goals</Link>
        </button>
      </div>
    </div>
  );
};

export default FavoritesList;
