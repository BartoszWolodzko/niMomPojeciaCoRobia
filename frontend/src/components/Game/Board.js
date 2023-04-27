import Field from "@/components/Game/Field";

export default function Board(props){
    console.log(
        "Board props:",
        props.value.value

    )
    return (
        <>
            {
                props.value.value.board.map((row, index) => {
                    return (
                        <div className="row" key={index}>
                            {
                                row.map((field, index) => {
                                    return (
                                        <Field value={field.pawn} key={index}/>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </>
    );
}