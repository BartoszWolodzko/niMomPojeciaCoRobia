import GameLogic from "@/components/Game/GameLogic";
import Chat from "@/components/InGameChat/Chat";

export default function Game(){
    return (
        <div className="game-room">
            <GameLogic value={
                {
                    "time-started": "2021-03-01T12:00:00.000Z",
                    "time-ended": "2021-03-01T12:00:00.000Z",
                    "winner": "",
                    "game": "tic-tac-toe",
                    "players": {
                        "player1": {
                            "name": "Player 1",
                            "symbol": "X"
                        },
                        "player2": {
                            "name": "Player 2",
                            "symbol": "O"
                        }
                    },
                    "turn": "player1",
                    "board": [
                        [
                            {"pawn": "empty"},
                            {"pawn":"X"},
                            {"pawn": "empty"}
                        ],
                        [
                            {"pawn": "empty"},
                            {"pawn": "empty"},
                            {"pawn": "empty"}
                        ],
                        [
                            {"pawn": "empty"},
                            {"pawn": "empty"},
                            {"pawn": "empty"}
                        ]
                    ]
                }
            }/>
            <Chat />
        </div>
    )
}