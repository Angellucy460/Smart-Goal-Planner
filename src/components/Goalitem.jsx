import React from 'react';
import { deleteGoal } from '../services/api';

export default function GoalItem({ goal, setGoals }) {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  const daysLeft = (new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24);

  const handleDelete = async () => {
    await deleteGoal(goal.id);
    setGoals(prev => prev.filter(g => g.id !== goal.id));
  };

  return (
    <div className="goal">
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Deadline: {goal.deadline}</p>
      <progress value={goal.savedAmount} max={goal.targetAmount}></progress>
      <p>{goal.savedAmount} / {goal.targetAmount}</p>
      {progress >= 100 && <p>✅ Goal Completed</p>}
      {daysLeft < 0 && progress < 100 && <p>⚠️ Overdue</p>}
      {daysLeft < 30 && daysLeft > 0 && progress < 100 && <p>⏳ Deadline Approaching</p>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
