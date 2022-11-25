
const Gameover = ({rewards,currentreward}) => {
    
    return ( 
        <div className="game-over">
            <h1>Game Over</h1>
            <h1>Your Scor is {rewards[currentreward-1].amount}</h1>
        </div>
    );
}
export default Gameover;