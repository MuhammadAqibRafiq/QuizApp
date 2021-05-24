import React,{useState} from 'react';
import {QuestionpropsType} from './../type/type';
import Button from '@material-ui/core/Button';
// import quiz from '../App'

export const QuestionCard:React.FC<QuestionpropsType> = ({question,option,callback}) => {
    // console.log(question,option);
    
    let  [selectedAns, setSelectedAns] = useState('');

    const handleSelect = (e:any)   => {
        // console.log(e.target.value)
        setSelectedAns(e.target.value)
    }

    return (
        <div className='questioncard'>
            <div className='header'>
            <h2>QUIZ APP</h2>
            </div>
            <div className='question'>
            QUESTION :  {question}
        </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns )}>
                {
                    option.map(( opt:string , ind:number ) => {
                    return(
                        <div className='choice' key={ind}>
                        <label>
                        <input type="radio" name='opt' value={opt} 
                        required checked={ selectedAns===opt} onChange={handleSelect}/>
                        </label>
                        {opt}
                        </div>
                    )
})
                }
                <div className='button'>
                <Button variant="contained" color='primary' type='submit'> SUBMIT</Button>
                
                </div>
            </form>

        </div>
    )
}
