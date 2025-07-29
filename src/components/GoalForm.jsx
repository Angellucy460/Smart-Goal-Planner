import React, { useState } from 'react';
import { createGoal } from '../services/api';

export default function GoalForm({ setGoals }) {
  const [form, setForm] = useState({
    name: '',
    targetAmount: '',
    category: '',
    deadline: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const newGoal = {
      ...form,
      savedAmount: 0,
      createdAt: new Date().toISOString()
    };
    const added = await createGoal(newGoal);
    setGoals(prev => [...prev, added]);
    setForm({ name: '', targetAmount: '', category: '', deadline: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Goal</h2>
      <input placeholder="Name" name="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input type="number" placeholder="Target Amount" value={form.targetAmount} onChange={e => setForm({ ...form, targetAmount: +e.target.value })} />
      <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
      <input type="date" value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} />
      <button type="submit">Add Goal</button>
    </form>
  );
}
