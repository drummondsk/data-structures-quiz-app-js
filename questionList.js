const questions = [
    {
        question: "Name one right only for United States citizens", 
        answers : [
            {text: "Attend public school", correct: false},
            {text: "Run for federal office", correct: false},
            {text: "Freedom of speech", correct: true},
            {text: "Freedom of religion", correct: false}

        ]
    },
    {
        question: "Name one war fought by the United States in the 1800s", 
        answers : [
            {text:"World War ||", correct: false},
            {text:"Korean War", correct: false},
            {text:"Mexican-American War", correct: true},
            {text:"World War |", correct: false}

        ]
    },
    {
        question: "We elect a President for how many years?", 
        answers : [
            {text:"8", correct: false},
            {text:"10", correct: false},
            {text:"4", correct: true},
            {text:"2", correct: false}

        ]
    },
    {
        question: "What is the supreme law of the land?", 
        answers : [
            {text:"Martial Law", correct: false},
            {text:"The Constitution", correct: true},
            {text:"Democracy", correct: false},
            {text:"Christianity", correct: false}

        ]
    },
    {
        question: " The idea of self-government is in the first three words of the Constitution. What are these words?", 
        answers : [
            {text:"Land of Free", correct: false},
            {text:"The Patriotic Eagle", correct: false},
            {text:"The Mighty America", correct: false},
            {text:"We the People", correct: true}

        ]
    },
    {
        question: "How many amendments does the Constitution have?", 
        answers : [
            {text:"27", correct: true},
            {text:"21", correct: false},
            {text:"19", correct: false},
            {text:"31", correct: false}

        ]
    },
    {
        question: "What is the economic system in the United States?", 
        answers : [
            {text:"No Economy", correct: false},
            {text:"Capitalist Economy", correct: true},
            {text:"Command Economy", correct: false},
            {text:"Market Socialism", correct: false}

        ]
    },
    {
        question: "How many U.S. Senators are there?", 
        answers : [
            {text:"85", correct: false},
            {text:"75", correct: false},
            {text:"50", correct: false},
            {text:"100", correct: true}

        ]
    },
    {
        question: "A U.S. Senator is elected for how many years?", 
        answers : [
            {text:"6", correct: true},
            {text:"4", correct: false},
            {text:"10", correct: false},
            {text:"5", correct: false}

        ]
    },
    {
        question: "In what month do we vote for President?", 
        answers : [
            {text:"January", correct: false},
            {text:"Ocotber", correct: false},
            {text:"Novemeber", correct: true},
            {text:"September", correct: false}

        ]
    },
    {
        question: "If both the President and the Vice President can no longer serve, who becomes the President?", 
        answers : [
            {text:"Chief Justice of the United States", correct: false},
            {text:"Speaker of the House", correct: true},
            {text:"The most recent former President", correct: false},
            {text:"President of the United Nations", correct: false}

        ]
    },
    {
        question: "Who is the Commander in Chief of the Military", 
        answers : [
            {text:"The President", correct: true},
            {text:"Chief Justice of the United States", correct: false},
            {text:"Secretary of Defense", correct: false},
            {text:"Speaker of the House", correct: false}

        ]
    },
    {
        question: "What is the highest court in the United States?", 
        answers : [
            {text:"Superior Court", correct: false},
            {text:"Court of Appeal", correct: false},
            {text:"Supreme Court", correct: true},
            {text:"District Court", correct: false}

        ]
    },
    {
        question: "What is one responsibility that is only for United States citizens?", 
        answers : [
            {text:"Register for Selective Service", correct: false},
            {text:"Pay Taxes", correct: false},
            {text:"Donate Blood", correct: false},
            {text:"Serve on a Jury", correct: true}

        ]
    },
    {
        question: "Which of the following was a member of the original 13 states", 
        answers : [
            {text:"Georgia", correct: true},
            {text:"Texas", correct: false},
            {text:"Kentucky", correct: false},
            {text:"Nevada", correct: false}

        ]
    },
    {
        question: "What ocean is on the East Coast of the United States?", 
        answers : [
            {text:"Artic Ocean", correct: false},
            {text:"Indian Ocean", correct: false},
            {text:"Pacific Ocean", correct: false},
            {text:"Atlantic Ocean", correct: true}

        ]
    },
    {
        question: "Name one state that borders Canada", 
        answers : [
            {text:"Idaho", correct: true},
            {text:"New Jersey", correct: false},
            {text:"Illinois", correct: false},
            {text:"Utah", correct: false}

        ]
    },
    {
        question: "Name one State that borders Mexico", 
        answers : [
            {text:"Louisiana", correct: false},
            {text:"California", correct: true},
            {text:"Florida", correct: false},
            {text:"Mississipi", correct: false}

        ]
    },
    {
        question: "Who does a US senator represent?", 
        answers : [
            {text:"All people of the country", correct: false},
            {text:"All people of the county", correct: false},
            {text:"All people of the state", correct: true},
            {text:"All people of the house of representatives", correct: false}

        ]
    },
    {
        question: "Why do some states have more representatives than others?", 
        answers : [
            {text:"Due to the state's population", correct: true},
            {text:"Due to the state's size", correct: false},
            {text:"Due to the states's size ", correct: false},
            {text:"Mississipi", correct: false}

        ]
    },
    {
        question: "What do we show loyalty to when we say the Pledge of Allegiance?", 
        answers : [
            {text:"The United States", correct: true},
            {text:"Your state", correct: false},
            {text:"The President", correct: false},
            {text:"The Congress", correct: false}

        ]
    },
    {
        question: "All of the following are promises made when you become a citizen, except: ", 
        answers : [
            {text:"Give up Loyalty to other countries", correct: false},
            {text:"Defend the Constitution and laws of the United States", correct: false},
            {text:"Obey the laws of the United States", correct: false},
            {text:"To vote in every election", correct: true}

        ]
    },
    {
        question: "What is the minimum age requirement to vote for president?", 
        answers : [
            {text:"16", correct: false},
            {text:"18", correct: true},
            {text:"21", correct: false},
            {text:"25", correct: false}

        ]
    },
    {
        question: "Who lived in America before the Europeans arrived?", 
        answers : [
            {text:"Native Americans", correct: false},
            {text:"Romans", correct: true},
            {text:"The English", correct: false},
            {text:"South Africans", correct: false}

        ]
    },
    {
        question: "During the Cold War, what was the main concern for the United States?", 
        answers : [
            {text:"Capitalism", correct: false},
            {text:"Communism", correct: true},
            {text:"Democracy", correct: false},
            {text:"Freedom of Speech", correct: false}

        ]
    },

];

export { questions };