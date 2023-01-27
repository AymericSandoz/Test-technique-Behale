import React, { useEffect, useState, useContext } from "react";
import DatePicker from "react-date-picker";
import axios from "axios";
import SessionForm from "../session/SessionForm";
import WeeklyGoalForm from "../weeklyGoal/WeeklyGoalForm";

const Home = () => {
  return (
    <div className="home">
      <p>Hello Home</p>
      <SessionForm />
      <WeeklyGoalForm />
    </div>
  );
};

export default Home;
