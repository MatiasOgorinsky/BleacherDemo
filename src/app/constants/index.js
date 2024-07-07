import NFL from "../assets/nfl.webp";
import STATS from "../assets/stats.webp";
import NBA from "../assets/NBA.webp";
import MMA from "../assets/mma.webp";
import COURT from "../assets/court.webp";
import TENNIS from "../assets/tennis.webp";
import CROSSWORD1 from "../assets/crossword_1.png";
import TRIVIA from "../assets/Trivia.png";
import CLUEFINDER from "../assets/clue_finder.png";
import WORDFINDER from "../assets/wordfinder.png";
import ORBITER from "../assets/orbiter.png";
import WORDAY from "../assets/worday.png";

const gamesUrls = [
  {
    id: 1,
    name: "Crossword",
    link: "/games/crossword",
    gameImage: NBA,
    iconImage: CROSSWORD1,
    description: "Solve clues to fill squares with words in crossword puzzles",
    source: "https://play.playgen.io/FwePr1Q8c",
  },
  {
    id: 2,
    name: "Trivia",
    link: "games/trivia",
    gameImage: NFL,
    iconImage: TRIVIA,
    description: "Answer diverse topic questions correctly in a quick-thinking quiz game.",
    source: "https://play.playgen.io/1b88Jqsyy",
  },
  {
    id: 3,
    name: "Cluefinder",
    link: "/games/cluefinder",
    gameImage: STATS,
    iconImage: CLUEFINDER,
    description: "Find and highlight words in a grid using clues,testing vocabulary and attention.",
    source: "https://play.playgen.io/A221ASYAU",
  },
  {
    id: 4,
    name: "Wordfinder",
    link: "/games/wordfinder",
    gameImage: MMA,
    iconImage: WORDFINDER,
    description: "Find hidden words in a grid testing vocabulary and attention.",
    source: "https://play.playgen.io/8GNgpuONT",
  },
  {
    id: 5,
    name: "Orbiter",
    link: "/games/orbiter",
    gameImage: COURT,
    iconImage: ORBITER,
    description: "Identify the city in an image within five attempts using hints.",
    source: "https://play.playgen.io/PFm7z6Ufq",
  },
  {
    id: 6,
    name: "Worday",
    link: "/games/worday",
    gameImage: TENNIS,
    iconImage: WORDAY,
    description: "Guess a secret word in six tries using color-coded feedback.",
    source: "https://play.playgen.io/0JzIVvhVO",
  },
];

export default gamesUrls;
