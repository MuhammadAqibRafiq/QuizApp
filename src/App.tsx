import React,{useEffect,useState} from 'react';
import './App.css';
import {getQuizDetail} from './Service/quiz_service'
import {QuestionType} from "./type/type";
import {QuestionCard} from './Component/QuestionCard'
import logo from './loading.gif'

function App() {


  let [quiz, setQuiz] = useState <QuestionType[]>([]);
  let [currentQuiz, setCurrentQuiz] = useState(0)
  let [score,setScore]=useState(0)

  useEffect(()=>{
    async function fetchData(){
      const questions:QuestionType[] = await getQuizDetail(5,'easy'); 
      setQuiz(questions);
    } 
    fetchData();

  },[])

  const handleSubmit = (e:React.FormEvent<EventTarget>,userAns:string) =>{

    const currentQuestion: QuestionType = quiz[currentQuiz]
    if(userAns=== currentQuestion.correct_answer){
      setScore(++score);
    }

    // console.log(userAns)
    e.preventDefault();
    if( currentQuiz !== quiz.length-1)
    setCurrentQuiz(++currentQuiz)
    else { alert(` Quiz completed : Your Score ${score} out of ${quiz.length} `);
      setCurrentQuiz(0);
      setScore(0);
    }
  }

if (!quiz.length)
return <img src={logo}/>

  return (
    <div className='app'>

    <div className='app__body'>
      <QuestionCard 
           option={quiz[currentQuiz].option}
           question={quiz[currentQuiz].question}
           callback={handleSubmit}
      />
    </div>
    
    </div>
  );
}

export default App;