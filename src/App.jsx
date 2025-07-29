import React, { useEffect, useState } from 'react';
import { getGoals } from './services/api';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import DepositForm from './components/DepositForm';
import OverviewPanel from './components/OverviewPanel';

export default function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    getGoals().then(setGoals);
  }, []);

  return (
    <div className="container">
      <h1>Smart Goal Planner</h1>
      <OverviewPanel goals={goals} />
      <GoalForm setGoals={setGoals} />
      <DepositForm goals={goals} setGoals={setGoals} />
      <GoalList goals={goals} setGoals={setGoals} />
    </div>
  );
}
