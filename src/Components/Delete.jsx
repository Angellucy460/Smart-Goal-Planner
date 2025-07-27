const URL = "https://angellucy460.github.io/Smart-Goal-Planner/"

function Delete({id, setGoals}) {
    function HandleDelete() {
        fetch(`${URL}/goals/${id}`, { method: "DELETE" })
            .then(() => {
                fetch(`${URL}/goals`)
                    .then(res => res.json())
                    .then(data => setGoals(data));
            });
    }

    return <button onClick={HandleDelete} style={{backgroundcolor:"red"}} >Delete</button>;
    }



export default Delete;