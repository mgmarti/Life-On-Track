import React, { useEffect } from "react";
import { ListItem, List } from "../List/index";
import DeleteBtn from "../DeleteBtn/index";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../../utils/actions";
import API from "../../utils/API";

const FavoritesList = () => {
  const [state, dispatch] = useStoreContext();
  const getFavorites = () => {
    dispatch({ type: LOADING });
      API.getGoals().then(function (response) {
      console.log(response);
      // filter goals for favorites
      const favoriteGoals = response.filter(goal => goal.completed)
      dispatch({ type: UPDATE_FAVORITES, action: { favorites: favoriteGoals } });
    })
    
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
        <h3>You haven't added any Achieved Goals yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default FavoritesList;
