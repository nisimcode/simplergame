const CALCULATOR = [
  {
    id: 1001,
    description: "Add, subtract, multiply and divide numbers.",
    question: "8 + 2 × 4 - 4",
    choices: [
      { id: 1, answer: 12, isCorrect: true },
      { id: 2, answer: 36, isCorrect: false },
      { id: 3, answer: 0, isCorrect: false },
    ],
  },
  {
    id: 1002,
    description: "Add, subtract, multiply and divide numbers.",
    question: "81 : 3 - 3 × 5",
    choices: [
      { id: 1, answer: 12, isCorrect: true },
      { id: 2, answer: 3, isCorrect: false },
      { id: 3, answer: 1, isCorrect: false },
    ],
  },
  {
    id: 1003,
    description: "Add, subtract, multiply and divide numbers.",
    question: "18 ÷ 6 + 3 × 4",
    choices: [
      { id: 1, answer: 15, isCorrect: true },
      { id: 2, answer: 24, isCorrect: false },
      { id: 3, answer: 8, isCorrect: false },
    ],
  },
  {
    id: 1004,
    description: "Add, subtract, multiply and divide numbers.",
    question: "7 + 2 × 3 - 4",
    choices: [
      { id: 1, answer: 9, isCorrect: true },
      { id: 2, answer: 23, isCorrect: false },
      { id: 3, answer: 8, isCorrect: false },
    ],
  },
  {
    id: 1005,
    description: "Add, subtract, multiply and divide numbers.",
    question: "9 : 1 - 2 × 3",
    choices: [
      { id: 1, answer: 3, isCorrect: true },
      { id: 2, answer: 21, isCorrect: false },
      { id: 3, answer: 12, isCorrect: false },
    ],
  },
  // {
  //   id: 1006,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "6 ÷ 2 + 4 - 3",
  //   choices: [
  //     { id: 1, answer: 4, isCorrect: true },
  //     { id: 2, answer: 9, isCorrect: false },
  //     { id: 3, answer: 0, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1007,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "4 + 3 × 2 - 6",
  //   choices: [
  //     { id: 1, answer: 4, isCorrect: true },
  //     { id: 2, answer: 8, isCorrect: false },
  //     { id: 3, answer: 3, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1008,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "7 × 2 - 4 : 2",
  //   choices: [
  //     { id: 1, answer: 6, isCorrect: true },
  //     { id: 2, answer: 5, isCorrect: false },
  //     { id: 3, answer: 1, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1009,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "5 - 1 x 2 + 3 ",
  //   choices: [
  //     { id: 1, answer: 6, isCorrect: true },
  //     { id: 2, answer: 10, isCorrect: false },
  //     { id: 3, answer: 11, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1010,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "3 × 3 + 3 : 3",
  //   choices: [
  //     { id: 1, answer: 10, isCorrect: true },
  //     { id: 2, answer: 4, isCorrect: false },
  //     { id: 3, answer: 12, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1011,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "9 : 3 + 3 × 3",
  //   choices: [
  //     { id: 1, answer: 12, isCorrect: true },
  //     { id: 2, answer: 3, isCorrect: false },
  //     { id: 3, answer: 6, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1012,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "27 ÷ 3 × 2 + 5",
  //   choices: [
  //     { id: 1, answer: 23, isCorrect: true },
  //     { id: 2, answer: 17, isCorrect: false },
  //     { id: 3, answer: 34, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1013,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "18 - 7 + 12 × 2",
  //   choices: [
  //     { id: 1, answer: 35, isCorrect: true },
  //     { id: 2, answer: 25, isCorrect: false },
  //     { id: 3, answer: 33, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1014,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "42 ÷ 7 × 3 - 1",
  //   choices: [
  //     { id: 1, answer: 17, isCorrect: true },
  //     { id: 2, answer: 13, isCorrect: false },
  //     { id: 3, answer: 15, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1015,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "10 - 4 × 2 + 14",
  //   choices: [
  //     { id: 1, answer: 16, isCorrect: true },
  //     { id: 2, answer: 6, isCorrect: false },
  //     { id: 3, answer: 20, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1016,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "36 ÷ 4 + 5 × 2",
  //   choices: [
  //     { id: 1, answer: 19, isCorrect: true },
  //     { id: 2, answer: 13, isCorrect: false },
  //     { id: 3, answer: 21, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1017,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "21 + 8 ÷ 2 - 3",
  //   choices: [
  //     { id: 1, answer: 22, isCorrect: true },
  //     { id: 2, answer: 20, isCorrect: false },
  //     { id: 3, answer: 12, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1018,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "45 - 9 × 1 + 7",
  //   choices: [
  //     { id: 1, answer: 43, isCorrect: true },
  //     { id: 2, answer: 36, isCorrect: false },
  //     { id: 3, answer: 53, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1019,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "19 + 27 ÷ 3 - 2",
  //   choices: [
  //     { id: 1, answer: 26, isCorrect: true },
  //     { id: 2, answer: 20, isCorrect: false },
  //     { id: 3, answer: 24, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1020,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "54 ÷ 6 × 2 - 1",
  //   choices: [
  //     { id: 1, answer: 17, isCorrect: true },
  //     { id: 2, answer: 15, isCorrect: false },
  //     { id: 3, answer: 9, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1021,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "32 - 4 × 2 + 10",
  //   choices: [
  //     { id: 1, answer: 34, isCorrect: true },
  //     { id: 2, answer: 20, isCorrect: false },
  //     { id: 3, answer: 14, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1022,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "15 + 3 × 2 - 1",
  //   choices: [
  //     { id: 1, answer: 20, isCorrect: true },
  //     { id: 2, answer: 19, isCorrect: false },
  //     { id: 3, answer: 27, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1023,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "48 ÷ 8 + 7 × 2",
  //   choices: [
  //     { id: 1, answer: 20, isCorrect: true },
  //     { id: 2, answer: 17, isCorrect: false },
  //     { id: 3, answer: 23, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1024,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "22 - 5 × 1 + 8",
  //   choices: [
  //     { id: 1, answer: 25, isCorrect: true },
  //     { id: 2, answer: 15, isCorrect: false },
  //     { id: 3, answer: 35, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1025,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "33 ÷ 3 + 6 × 2",
  //   choices: [
  //     { id: 1, answer: 13, isCorrect: true },
  //     { id: 2, answer: 17, isCorrect: false },
  //     { id: 3, answer: 25, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1026,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "12 + 42 ÷ 7 - 1",
  //   choices: [
  //     { id: 1, answer: 17, isCorrect: true },
  //     { id: 2, answer: 13, isCorrect: false },
  //     { id: 3, answer: 5, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1027,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "25 - 3 × 2 + 14",
  //   choices: [
  //     { id: 1, answer: 33, isCorrect: true },
  //     { id: 2, answer: 5, isCorrect: false },
  //     { id: 3, answer: 26, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1028,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "63 ÷ 7 × 2 + 3",
  //   choices: [
  //     { id: 1, answer: 15, isCorrect: true },
  //     { id: 2, answer: 18, isCorrect: false },
  //     { id: 3, answer: 23, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1029,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "41 - 8 × 1 - 2",
  //   choices: [
  //     { id: 1, answer: 31, isCorrect: true },
  //     { id: 2, answer: 13, isCorrect: false },
  //     { id: 3, answer: 33, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1030,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "20 + 54 ÷ 6 - 4",
  //   choices: [
  //     { id: 1, answer: 25, isCorrect: true },
  //     { id: 2, answer: 18, isCorrect: false },
  //     { id: 3, answer: 22, isCorrect: false },
  //   ],
  // },
  // {
  //   id: 1031,
  //   description: "Add, subtract, multiply and divide numbers.",
  //   question: "72 ÷ 8 × 3 + 1",
  //   choices: [
  //     { id: 1, answer: 28, isCorrect: true },
  //     { id: 2, answer: 10, isCorrect: false },
  //     { id: 3, answer: 27, isCorrect: false },
  //   ],
  // },
];

const NEXT_NUMBER = [
  {
    id: 2001,
    description: "Find the next number in the series.",
    question: "1, 1, 2, 3, 5, ...",
    choices: [
      { id: 1, answer: 8, isCorrect: true },
      { id: 2, answer: 7, isCorrect: false },
      { id: 3, answer: 9, isCorrect: false },
    ],
  },
  {
    id: 2002,
    description: "Find the next number in the series.",
    question: "1, 4, 9, 16, 25, ...",
    choices: [
      { id: 1, answer: 36, isCorrect: true },
      { id: 2, answer: 49, isCorrect: false },
      { id: 3, answer: 34, isCorrect: false },
    ],
  },
  {
    id: 2003,
    description: "Find the next number in the series.",
    question: "1, 2, 4, 8, 16, ...",
    choices: [
      { id: 1, answer: 32, isCorrect: true },
      { id: 2, answer: 24, isCorrect: false },
      { id: 3, answer: 48, isCorrect: false },
    ],
  },
  {
    id: 2004,
    description: "Find the next number in the series.",
    question: "2, 3, 5, 7, 11, ...",
    choices: [
      { id: 1, answer: 13, isCorrect: true },
      { id: 2, answer: 15, isCorrect: false },
      { id: 3, answer: 17, isCorrect: false },
    ],
  },
  {
    id: 2005,
    description: "Find the next number in the series.",
    question: "1, 2, 6, 24, 120, ...",
    choices: [
      { id: 1, answer: 720, isCorrect: true },
      { id: 2, answer: 600, isCorrect: false },
      { id: 3, answer: 124, isCorrect: false },
    ],
  },
];

const ODD_WORD = [
  {
    id: 3001,
    description: "Find the one that doesn't belong.",
    question: "Texas, New York, Florida, Los Angeles, Alaska",
    choices: [
      { id: 1, answer: "Los Angeles", isCorrect: true }, // Not state
      { id: 2, answer: "New York", isCorrect: false },
      { id: 3, answer: "Alaska", isCorrect: false },
    ],
  },
  {
    id: 3002,
    description: "Find the one that doesn't belong.",
    question: "Dolphin, Gorilla, Bear, Shark, Fox",
    choices: [
      { id: 1, answer: "Shark", isCorrect: true }, // Not mammal
      { id: 2, answer: "Dolphin", isCorrect: false },
      { id: 3, answer: "Fox", isCorrect: false },
    ],
  },
  {
    id: 3003,
    description: "Find the one that doesn't belong.",
    question: "Uranus, Mars, Jupiter, Venus, Pluto",
    choices: [
      { id: 1, answer: "Pluto", isCorrect: true }, // Not planet
      { id: 2, answer: "Mars", isCorrect: false },
      { id: 3, answer: "Jupiter", isCorrect: false },
    ],
  },
  {
    id: 3004,
    description: "Find the one that doesn't belong.",
    question: "Argentina, Uruguay, Chile, Mexico, Peru",
    choices: [
      { id: 1, answer: "Mexico", isCorrect: true }, // Not in North America
      { id: 2, answer: "Peru", isCorrect: false },
      { id: 3, answer: "Uruguay", isCorrect: false },
    ],
  },
  {
    id: 3005,
    description: "Find the one that doesn't belong.",
    question:
      "Abraham Lincoln, George Washington, Theodore Roosevelt, Benjamin Franklin, John F. Kennedy",
    choices: [
      { id: 1, answer: "Benjamin Franklin", isCorrect: true }, // Not president
      { id: 2, answer: "John F. Kennedy", isCorrect: false },
      { id: 3, answer: "Theodore Roosevelt", isCorrect: false },
    ],
  },
];

const TASKS = [...CALCULATOR, ...ODD_WORD, ...NEXT_NUMBER];

export default TASKS;
