import React from 'react';
import GoalItem from './GoalItem';

export default function GoalList({ goals, setGoals }) {
  return (
    <div>
      <h2>Your Goals</h2>
      {goals.map(goal => (
        <GoalItem key={goal.id} goal={goal} setGoals={setGoals} />
      ))}
    </div>
  );
}
