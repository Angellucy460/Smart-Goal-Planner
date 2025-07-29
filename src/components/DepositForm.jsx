import React, { useState } from 'react';
import { updateGoal } from '../services/api';

export default function DepositForm({ goals, setGoals }) {
  const [amount, setAmount] = useState('');
  const [goalId, setGoalId] = useState('');

  const handleDeposit = async e => {
    e.preventDefault();
    const goal = goals.find(g => g.id === goalId);
    const newAmount = goal.savedAmount + Number(amount);

    await updateGoal(goalId, { savedAmount: newAmount });
    setGoals(prev =>
      prev.map(g => (g.id === goalId ? { ...g, savedAmount: newAmount } : g))
    );
    setAmount('');
    setGoalId('');
  };

  return (
    <form onSubmit={handleDeposit}>
      <h2>Make Deposit</h2>
      <select value={goalId} onChange={e => setGoalId(e.target.value)}>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <button type="submit">Deposit</button>
    </form>
  );
}
