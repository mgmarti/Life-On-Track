import React from "react";
import { Col, Row, Container } from "../Grid/index";
import CreateGoalForm from "../CreateGoalForm/index";
import GoalsList from "../GoalsList/index";

const Goals = () => {
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

export default Goals;
