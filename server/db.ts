import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Where was the first organized game of baseball played?', 
        answer: 'Hoboken, New Jersey',
    },

    {
        points: 300,
        question:
            'What was the original name for Dunkin',
        answer: 'Open Kettle',
    },
    {
        points: 400,
        question: 'What country is the birthplace of Chess',
        answer: 'India',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What linebacker, drafted in 1981, was the the only defensive player to win MVP award? ?',
            
            answer: 'Lawrence Taylor',
        },
        {
            points: 100,
            question:
                'What Detroit Piston player was the first recipient of the NBA sportmanship award?',
            imgSrc: 'https://www.legends-mag.com/assets/media/issue_12/joe-dumars/_sizes/gettyimages-173664489_featured_2.jpg',
            answer: 'Joe Dumar',
        },
        {
            points: 300,
            question: 'What 1925 novel is centered around this mysterious millionaire named Jay Gatsby ?',
        
            answer: 'The Great Gatsby',
        },
      
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What country are the Alps located in?',
        imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/1920px-Flag_of_Switzerland_%28Pantone%29.svg.png",
        answer: 'Switzerland',
    },
    {
        points: 300,
        question:
            'During World War II, what bank was the first in japan to being selling investment trusts?',
        
        answer: 'Nomura',
    },
    { points: 100,
        question:
            'What city in the East Coast is home to 8.478 million inhabitants',
        
        answer: 'New York City',
    },
  
]);


const categories = [
    {
        title: "Ishaans Past",
        questions: pastQuestions
    },
    {
        title: "Ishaan's Present",
        questions: presentQuestions
    },
    {
        title: "My Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}