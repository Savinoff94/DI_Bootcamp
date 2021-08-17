import './App.css';
import Robot from './components/Robot';

const robots = [
  {name:'Robot 1', email: "email 1", username: "username1", id:1},
  {name:'Robot 2', email: "email 2", username: "username2", id:2},
  {name:'Robot 3', email: "email 3", username: "username3", id:3},
  {name:'Robot 4', email: "email 4", username: "username4", id:4}
]

function App() {
  return (
    <>
    {
      robots.map((item,i) => {
        return <Robot robotinfo = {item} />
      })
    }
    </>
  );
}

export default App;
