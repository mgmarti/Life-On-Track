import React from "react";
import { Col, Row, Container } from "../Grid";
import CreateGoalForm from "../CreateGoalForm";
import GoalsList from "../GoalsList";

const Goals = () => {
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col">
            <CreateGoalForm />
          </div>
          <div className="col">
            <GoalsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
