
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';
import Gameover from './components/Gameover';
function App() {
  
  const [questions,setQuestions]=useState([
    {
      id:1,question:"What is the best web Developper",answers:
        [
        {id:1,value:"khalid",iscorrect:false},
        {id:2,value:"khalid issil",iscorrect:true},
        {id:3,value:"issil",iscorrect:false},
        {id:4,value:"khalid Again",iscorrect:false},
        ]
    },
    {
      id:2,question:"How Old Are me",answers:
        [
        {id:1,value:"12",iscorrect:false},
        {id:2,value:"20",iscorrect:true},
        {id:3,value:"15",iscorrect:false},
        {id:4,value:"3",iscorrect:false},
        ]
    }
  ])


  const [currentquestion,setCurrentquestion]=useState(1);


  const [rewards,setReward]=useState([
    {id:1,amount:"100 $"},
    {id:2,amount:"200 $"},
    {id:3,amount:"400 $"},
    {id:4,amount:"800 $"},
    {id:5,amount:"1600 $"},
    {id:6,amount:"3200 $"},
    {id:7,amount:"6400 $"},
    {id:8,amount:"12800 $"},
    {id:9,amount:"25600 $"},
    {id:10,amount:"50000 $"},
    {id:11,amount:"100000 $"}
  ]);

  const [currentreward,setCurrentreward]=useState(1);

  const [gameover,setGameover]=useState(false);





  useEffect(()=>{
    setTimeout(() => {
      setCurrentreward(currentquestion);
    }, 1000);
  },[currentquestion])

  return (
    <div className="App">
      
          {gameover && <Gameover rewards={rewards} currentreward={currentreward}/>}
          {!gameover && <Home questions={questions} currentquestion={currentquestion} setCurrentquestion={setCurrentquestion} setGameover={setGameover}/>}
          <Sidebar rewards={rewards} currentreward={currentreward}/>
    </div>
  );
}

export default App;
