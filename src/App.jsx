import  { useEffect, useState} from "react";
import GoalList from "./Components/GoalList";
import GoalForm from "./Components/GoalForm"; 

const URL = "https://angellucy460.github.io/Smart-Goal-Planner/"


function App() {
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    fetch(`${URL}/goals`)
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