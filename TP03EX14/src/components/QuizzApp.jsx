import { useState } from 'react';
import Question from './Question';
import Result from './Result';
import './QuizApp.css';

const questions = [
    {
        question: 'Qual é a capital da França?',
        options: ['Berlim', 'Madrid', 'Paris', 'Lisboa'],
        answer: 2,
    },
    {
        question: 'Quem pintou a Mona Lisa?',
        options: ['Van Gogh', 'Leonardo da Vinci', 'Picasso', 'Michelangelo'],
        answer: 1,
    },
    {
        question: 'Qual é o maior planeta do sistema solar?',
        options: ['Terra', 'Marte', 'Júpiter', 'Saturno'],
        answer: 2,
    },
    {
        question: 'Quantos continentes existem?',
        options: ['5', '6', '7', '8'],
        answer: 2,
    },
    {
        question: 'Quem escreveu "Dom Quixote"?',
        options: ['Gabriel García Márquez', 'Miguel de Cervantes', 'Jorge Luis Borges', 'Paulo Coelho'],
        answer: 1,
    },
    {
        question: 'Qual é a fórmula química da água?',
        options: ['CO2', 'O2', 'H2O', 'NaCl'],
        answer: 2,
    },
    {
        question: 'Quem foi o primeiro homem a pisar na lua?',
        options: ['Yuri Gagarin', 'Buzz Aldrin', 'Neil Armstrong', 'Michael Collins'],
        answer: 2,
    },
    {
        question: 'Qual país é conhecido como a terra do sol nascente?',
        options: ['China', 'Coreia do Sul', 'Japão', 'Tailândia'],
        answer: 2,
    },
    {
        question: 'Quantos segundos há em uma hora?',
        options: ['3600', '1800', '7200', '5400'],
        answer: 0,
    },
    {
        question: 'Qual é o elemento químico representado pelo símbolo "O"?',
        options: ['Ouro', 'Oxigênio', 'Osmio', 'Óxido'],
        answer: 1,
    }
];


export default function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleOptionClick = (index) => {
        if (index === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className={`quiz-app ${showResult ? 'result' : ''}`}>
            {!showResult ? (
                <Question
                    data={questions[currentQuestion]}
                    handleOptionClick={handleOptionClick}
                />
            ) : (
                <Result score={score} total={questions.length} />
            )}
        </div>
    );
};

