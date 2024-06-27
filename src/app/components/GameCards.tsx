import React from "react";

const GameCards = () => {
  return (
    <div className="relative bg-[#f6f6f6] md:px-36 md:py-10">
      <div className="bg-white w-full mx-auto rounded-sm p-5">
        <section className="p-4">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-100">
            {/* Card 1 */}
            <div className="bg-card text-card-foreground relative w-full cursor-pointer rounded-sm shadow-none border-0">
              <a href="/nba_demo/wordmaze">
                <div className="h-56 w-full relative flex items-center rounded-sm justify-center bg-background">
                  <img src="https://playgen-assets.s3.amazonaws.com/assets/temp/nba/1.webp" className="h-full w-full object-cover rounded-sm object-top" alt="Game Image 1" />
                  <div className="absolute -bottom-6 right-2 p-2 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#5dadec" }}>
                    <img src="https://playgen-assets.s3.amazonaws.com/icons/crossword_1.png" className="h-16 w-16 object-contain" alt="Crossword Icon" />
                  </div>
                </div>
                <div className="p-0">
                  <h2 className="relative uppercase mt-2 text-3xl font-nba z-2">Crossword</h2>
                  <p className="leading-5 mt-1 text-sm">Solve clues to fill squares with words in crossword puzzles</p>
                </div>
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-card text-card-foreground relative w-full cursor-pointer rounded-sm shadow-none border-0">
              <a href="/nba_demo/trivia">
                <div className="h-56 w-full relative flex items-center rounded-sm justify-center bg-background">
                  <img src="https://playgen-assets.s3.amazonaws.com/assets/temp/nba/3.webp" className="h-full w-full object-cover rounded-sm object-top" alt="Game Image 2" />
                  <div className="absolute -bottom-6 right-2 p-2 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#90cc8e" }}>
                    <img src="https://playgen-assets.s3.amazonaws.com/icons/trivia.png" className="h-16 w-16 object-contain" alt="Trivia Icon" />
                  </div>
                </div>
                <div className="p-0">
                  <h2 className="relative uppercase mt-2 text-3xl font-nba z-2">Trivia</h2>
                  <p className="leading-5 mt-1 text-sm">Answer diverse topic questions correctly in a quick-thinking quiz game.</p>
                </div>
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-card text-card-foreground relative w-full cursor-pointer rounded-sm shadow-none border-0">
              <a href="/nba_demo/lettershot">
                <div className="h-56 w-full relative flex items-center rounded-sm justify-center bg-background">
                  <img src="https://playgen-assets.s3.amazonaws.com/assets/temp/nba/7.webp" className="h-full w-full object-cover rounded-sm object-top" alt="Game Image 3" />
                  <div className="absolute -bottom-6 right-2 p-2 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#bdddf4" }}>
                    <img src="https://playgen-assets.s3.amazonaws.com/icons/wordfinder.png" className="h-16 w-16 object-contain" alt="Wordfinder Icon" />
                  </div>
                </div>
                <div className="p-0">
                  <h2 className="relative uppercase mt-2 text-3xl font-nba z-2">Wordfinder</h2>
                  <p className="leading-5 mt-1 text-sm">Find hidden words in a grid testing vocabulary and attention.</p>
                </div>
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-card text-card-foreground relative w-full cursor-pointer rounded-sm shadow-none border-0">
              <a href="/nba_demo/quickclue">
                <div className="h-56 w-full relative flex items-center rounded-sm justify-center bg-background">
                  <img src="https://playgen-assets.s3.amazonaws.com/assets/temp/nba/2.webp" className="h-full w-full object-cover rounded-sm object-top" alt="Game Image 4" />
                  <div className="absolute -bottom-6 right-2 p-2 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#5dadec" }}>
                    <img src="https://playgen-assets.s3.amazonaws.com/icons/crossword_2.png" className="h-16 w-16 object-contain" alt="Crossword Icon 2" />
                  </div>
                </div>
                <div className="p-0">
                  <h2 className="relative uppercase mt-2 text-3xl font-nba z-2">Quick Clue</h2>
                  <p className="leading-5 mt-1 text-sm">Solve brief clues in a compact grid for quick crossword fun.</p>
                </div>
              </a>
            </div>

            {/* Card 5 */}
            <div className="bg-card text-card-foreground relative w-full cursor-pointer rounded-sm shadow-none border-0">
              <a href="/nba_demo/orbiter">
                <div className="h-56 w-full relative flex items-center rounded-sm justify-center bg-background">
                  <img src="https://playgen-assets.s3.amazonaws.com/assets/temp/nba/5.webp" className="h-full w-full object-cover rounded-sm object-top" alt="Game Image 5" />
                  <div className="absolute -bottom-6 right-2 p-2 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#8c52ff" }}>
                    <img src="https://playgen-assets.s3.amazonaws.com/icons/orbiter.png" className="h-16 w-16 object-contain" alt="Orbiter Icon" />
                  </div>
                </div>
                <div className="p-0">
                  <h2 className="relative uppercase mt-2 text-3xl font-nba z-2">Orbiter</h2>
                  <p className="leading-5 mt-1 text-sm">Identify the city in an image within five attempts using hints</p>
                </div>
              </a>
            </div>

            {/* Card 6 */}
            <div className="bg-card text-card-foreground relative w-full cursor-pointer rounded-sm shadow-none border-0">
              <a href="/nba_demo/worday">
                <div className="h-56 w-full relative flex items-center rounded-sm justify-center bg-background">
                  <img src="https://playgen-assets.s3.amazonaws.com/assets/temp/nba/6.webp" className="h-full w-full object-cover rounded-sm object-top" alt="Game Image 6" />
                  <div className="absolute -bottom-6 right-2 p-2 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#76b570" }}>
                    <img src="https://playgen-assets.s3.amazonaws.com/icons/worday.png" className="h-16 w-16 object-contain" alt="Worday Icon" />
                  </div>
                </div>
                <div className="p-0">
                  <h2 className="relative uppercase mt-2 text-3xl font-nba z-2">Worday</h2>
                  <p className="leading-5 mt-1 text-sm">Guess a secret word in six tries using color-coded feedback.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GameCards;
