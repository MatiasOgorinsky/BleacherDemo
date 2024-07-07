import NFL from "../assets/nfl.webp";
import STATS from "../assets/stats.webp";
import NBA from "../assets/stats.webp";
import MMA from "../assets/mma.webp";
import COURT from "../assets/court.webp";
import TENNIS from "../assets/tennis.webp";
import CROSSWORD1 from "../assets/crossword_1.png";
import TRIVIA from "../assets/Trivia.png";
import CLUEFINDER from "../assets/clue_finder.png";
import WORDFINDER from "../assets/wordfinder.png";
import ORBITER from "../assets/orbiter.png";
import WORDAY from "../assets/worday.png";

const imageUrls = [
  {
    id: 1,
    name: "Crossword",
    link: "bleacher_demo/crossword",
    gameImage: NBA,
    iconImage: CROSSWORD1,
    description: "Solve clues to fill squares with words in crossword puzzles",
  },
  {
    id: 2,
    name: "Trivia",
    link: "bleacher_demo/trivia",
    gameImage: NFL,
    iconImage: TRIVIA,
    description: "Answer diverse topic questions correctly in a quick-thinking quiz game.",
  },
  {
    id: 3,
    name: "Clue finder",
    link: "/bleacher_demo/cluefinder",
    gameImage: STATS,
    iconImage: CLUEFINDER,
    description: "Find and highlight words in a grid using clues,testing vocabulary and attention.",
  },
  {
    id: 4,
    name: "Wordfinder",
    link: "/bleacher_demo/wordfinder",
    gameImage: MMA,
    iconImage: WORDFINDER,
    description: "Find hidden words in a grid testing vocabulary and attention.",
  },
  {
    id: 5,
    name: "Orbiter",
    link: "/bleacher_demo/orbiter",
    gameImage: COURT,
    iconImage: ORBITER,
    description: "Identify the city in an image within five attempts using hints.",
  },
  {
    id: 6,
    name: "Worday",
    link: "/bleacher_demo/worday",
    gameImage: TENNIS,
    iconImage: WORDAY,
    description: "Guess a secret word in six tries using color-coded feedback.",
  },
];

export default imageUrls;
