export default function Message({message}){
    return (
        <div className="message">
            <span className="author">{message.author}</span>
            <span className="content">{message}</span>
        </div>
    );
}