const BASE = 'http://localhost:3000/goals';

export const getGoals = () => fetch(BASE).then(res => res.json());

export const createGoal = goal =>
  fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(goal)
  }).then(res => res.json());

export const deleteGoal = id =>
  fetch(`${BASE}/${id}`, { method: 'DELETE' });

export const updateGoal = (id, data) =>
  fetch(`${BASE}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
