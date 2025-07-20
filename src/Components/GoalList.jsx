import Item from "../Components/Item"

function GoalList({goals, setGoals}) {
     return (
    <div>
      <h2 style={{color: "purple"}}>My Goals</h2>
      {goals.map(goal => (
        <Item key={goal.id} goal={goal} setGoals={setGoals} />
      ))}
    </div>
  );
}

export default GoalList;