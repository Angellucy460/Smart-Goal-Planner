import  { useEffect, useState} from "react";
import GoalList from "./Components/GoalList";
import GoalForm from "./Components/GoalForm"; 

function App() {
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/goals")
    .then(res => res.json())
    .then(data => setGoals(data))
  },[]);
  return (
    <div>
      <h1 style={{textAlign: "center", fontsize: "36px", color: "purple", }}>Goal Tracker</h1>
      <GoalForm setGoals={setGoals}/>
      <GoalList goals={goals} setGoals={setGoals}/>
    </div>
  )
}


export default App;