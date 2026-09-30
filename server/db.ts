import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const hobbyQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Which instrument does William play?',
        imgSrc: "[placeholder]",
        answer: 'Piano',
    },
    {
        points: 200,
        question:
            'Which country did Tennis originate from?',
        imgSrc: "[placeholder]",
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
                'What is William\'s favorite RPG series.',
            imgSrc: "[placeholder]",
            answer: 'Xenoblade',
        },
        {
            points: 100,
            question:
                'William\'s favorite ice cream flavor.',
            imgSrc: "[placeholder]",
            answer: 'Coffee',
        },
        {
            points: 200,
            question: 'The name of this game:',
            imgSrc: "[placeholder]",
            answer: 'Minecraft',
        },
        {
            points: 300,
            question:
                'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
            imgSrc:
                "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
            answer: 'Italy',
        }
    ]);
const lifeQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This type of 2D drawing allows you to see the sides of a 3D object at the same scale.',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: 'Isometric',
    },
    {
        points: 200,
        question:
            'This type of 2D drawing allows you to see the sides of a 3D object at the same scale.',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: 'Isometric',
    },
    {
        points: 300,
        question:
            'This type of 2D drawing allows you to see the sides of a 3D object at the same scale.',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: 'Isometric',
    },
    {
        points: 400,
        question:
            'This type of 2D drawing allows you to see the sides of a 3D object at the same scale.',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: 'Isometric',
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