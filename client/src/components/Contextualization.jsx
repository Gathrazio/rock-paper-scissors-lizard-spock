export default function Contextualization () {
    return (
        <div className='prevent-select text-sm shadow-xl bg-teal-500 text-slate-900 p-5  sm:mx-auto w-full mb-[0px] '>
            <p>This is a small, mobile-friendly frontend site using React.js and TailwindCSS where one can play an extended version of rock-paper-scissors called rock-paper-scissors-lizard-Spock (RPSLS). This game originated with Sam Kass & The Big Bang Theory.</p>

            <br></br>

            <p>The hands/moves and their relationships describe a tournament (a complete oriented graph) on 5 vertices. The graph has 10 directed edges corresponding to the 10 rules of the game, as elucidated by Sheldon Cooper (see the clip <a className="text-violet-800 font-bold" href="https://www.youtube.com/watch?v=pIpmITBocfM">here</a>). Each hand has a score of 2, meaning each hand beats exactly two other hands. As each hand has the maximum score, each hand is a champion of this graph -- this essentially means the game is fair.</p>
            <br></br>

            <p>When you play RPSLS many times against the house (which chooses its hand completely randomly), your win percentage will approach 40%. To see why this is the case, we can think of the game as a Bernoulli process or Bernoulli random variable -- a trial in which one either wins (produces a 1) or fails to win (produces a 0). Suppose you chose some hand out of the five -- it doesn't matter which. Since each hand has a score of 2, you will win if the house chooses 2 out of the 5 hands. So, the probability of winning is 2/5, or 40%. In the case of Bernoulli random variables, the expected value is exactly this probability of success: 2/5. The law of large numbers says that the average of the instances of a random variable, as the number of trials goes to infinity, will be close to and approach the expected value. Hence the first sentence of this paragraph makes sense.</p>

        </div>
    )
}