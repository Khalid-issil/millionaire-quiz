import { useEffect, useState } from "react";
import Timer from "./Timer";

const Home = ( {questions,currentquestion,setCurrentquestion,setGameover} ) => {

    const [quizitem,setQuizitem]=useState(questions[currentquestion-1]);
    const [selectedanswer,setSelectedanswer]=useState(null);
    const [answerclass,setAnswerclass]=useState(null);
    const [timer, setTimer] = useState(10);



    // Create delay faunction 
    const delay=(delay,collback)=>
    {
        setTimeout(() => {
            collback();
        }, delay);
    }




    const HandleAnswer=(answer)=>{
        setSelectedanswer(answer.id);
        setTimer(-1);
        delay(1000,() => {
            if(answer.iscorrect)
            {
                setAnswerclass("correct");
                delay(1000,()=>{
                    setCurrentquestion(2)
                });
                
            }
            else
            {
                setAnswerclass("wrong");
                delay(2000,()=>{
                    setGameover(true)
                });
            }
        })
    }


    useEffect(()=>{
        delay(1000,()=>{
            setQuizitem(questions[currentquestion-1]);
            setAnswerclass(null);
            setSelectedanswer(null);
            setTimer(10);
        })
    },[currentquestion])

    return ( 
        <div className="home">
            <div className="timer-container">
            <div className="timer">
                    <h2><Timer setGameover={setGameover} timer={timer} setTimer={setTimer}/></h2>
            </div>
            </div>
            <div className="quiz-container">
                    <div className="quiz">
                            <div className="question">
                                <h4>{quizitem.question}</h4>
                            </div>
                            <div className="answers">
                                    {quizitem.answers.map(a=>(
                                        <p  
                                        className={`answer ${selectedanswer===a.id ? "active "+answerclass : ""}`}
                                        key={a.id} 
                                        onClick={()=>HandleAnswer(a)}
                                        >{a.value}</p>
                                    ))}
                            </div>
                    </div>
            </div>
        </div>
    );
}

export default Home;