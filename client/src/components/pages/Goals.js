import React from "react";
import { Col, Row, Container } from "../Grid";
import CreateGoalForm from "../CreateGoalForm";
import GoalsList from "../GoalsList";

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
