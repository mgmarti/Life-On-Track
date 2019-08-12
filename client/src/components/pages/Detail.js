import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid/index";
import Jumbotron from "../Jumbotron/Jumbotron";
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
    dispatch({
      type: ADD_FAVORITE,
      goal: state.currentGoal
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: state.currentGoal._id
    });
  };

  return (
    <>{state.currentGoal ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {state.currentGoal.title} by {state.currentGoal.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Content:</h1>
              <p>{state.currentGoal.body}</p>
            </article>
          </Col>
          {state.favorites.indexOf(state.currentGoal) !== -1 ? (
            <button className="btn btn-danger" onClick={removeFavorite}>
                Remove from Favorites!
            </button>
          ) : (
            <button className="btn" onClick={addFavorite}>
                ❤️ Add to Favorites
            </button>
          )}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Goals</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}</>
  );
};

export default Detail;
