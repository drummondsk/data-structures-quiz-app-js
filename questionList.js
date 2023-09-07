const questions = [
    {
        question: "Name one right only for United States citizens", 
        answers : [
            {text: "Attend public school", response: false},
            {text: "Run for federal office", response: false},
            {text: "Freedom of speech", response: true},
            {text: "Freedom of religion", response: false}

        ]
    },
    {
        question: "Name one war fought by the United States in the 1800s", 
        answers : [
            {text:"World War ||", response: false},
            {text:"Korean War", response: false},
            {text:"Mexican-American War", response: true},
            {text:"World War |", response: false}

        ]
    },
    {
        question: "We elect a President for how many years?", 
        answers : [
            {text:"Eight (8)", response: false},
            {text:"Ten (10)", response: false},
            {text:"Four (4)", response: true},
            {text:"Two (2)", response: false}

        ]
    }
];

export { questions };