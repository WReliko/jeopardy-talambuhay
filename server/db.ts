import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const hobbyQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Which famous piano player\'s first name is Wolfgang',
        answer: 'Mozart',
    },
    {
        points: 200,
        question:
            'Which country did Tennis originate from?',
        answer: 'France',
    },
    {
        points: 300,
        question:
            'What\'s the most used language in coding?',
        answer: 'Javascript',
    },
    {
        points: 400,
        question: 'What year was Nintendo created?',
        answer: '1889',
    }
]);

const favQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'Shulk is a character from which RPG Series',
            imgSrc: "Shulk.png",
            answer: 'Xenoblade Chronicles',
        },
        {
            points: 100,
            question:
                'William\'s favorite ice cream flavor.',
            imgSrc: "coffee_beans.jpg",
            answer: 'Coffee',
        },
        {
            points: 200,
            question: 'The name of this game:',
            imgSrc: "minecraft.avif",
            answer: 'Minecraft',
        },
        {
            points: 300,
            question:
                'Chartreuse is a shade of which color?',
            answer: 'Green',
        }
    ]);
const lifeQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
        'This country has the second largest population in the world',
        
        answer: 'China',
    },
    {
        points: 200,
        question:
            'Solve this equation for x: 6x + 12 = 264',
        answer: '42',
    },
    {
        points: 300,
        question:
        'This big tech company was founded in 1976 and is known for its network of devices.',    
        answer: 'Apple',
            
    },
    {
        points: 400,
        question:
            'What is the name of this piece',
        imgSrc: "Rondo.png",
        answer: 'Rondo Alla Turca',
    }

]);


const categories = [
    {
        title: 'William\'s Hobbies',
        questions: hobbyQuestions
    },
    {
        title: `William's Favorites`,
        questions: favQuestions
    },
    {
        title: "William's Present Life",
        questions: lifeQuestions
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