import Piece from "@/components/Game/Piece";

export default function Field(props){
    return (
        <div className="field">
            <Piece value={props.value} />
        </div>
    );
}