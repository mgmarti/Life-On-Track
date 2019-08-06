import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateGoalForm from "../components/CreateGoalForm";
import GoalsList from "../components/GoalsList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <CreateGoalForm />
        </Col>
        <Col size="md-6 sm-12">
          <GoalsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
