import React from 'react';

export type Quiz = {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]    
}

export type QuestionType = {
    question: string,
    answer: string,
    correct_answer: string,
    option: string[]
}

export type QuestionpropsType={
    question:string,
    option:string[],
    callback: (e:React.FormEvent<EventTarget>,ans:string) =>void
}