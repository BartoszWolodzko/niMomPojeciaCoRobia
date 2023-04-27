import Board from "@/components/Game/Board";

export default function GameLogic(props){
    return (
        <div className="game">
            <div className="title">Gra: {props.value.game}</div>
            <div className="game-info">
                <div className="player-turn">Tura gracza: {props.value.turn}</div>
            </div>
            <div className="game-board">
                <Board value={props}/>
            </div>
        </div>
    );
}