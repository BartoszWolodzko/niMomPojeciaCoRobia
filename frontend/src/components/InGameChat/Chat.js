import {useSocket} from "@/contexts/SocketContext";
import MessagesDisplay from "@/components/InGameChat/MessagesDisplay";
import MessagesSendForm from "@/components/InGameChat/MessageSendForm";
export default function Chat(){
    return (
        <div className={"chat"}>
            <MessagesDisplay />
            <MessagesSendForm />
        </div>
    );
}