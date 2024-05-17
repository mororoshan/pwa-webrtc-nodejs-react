import { observer } from "mobx-react-lite";
import React from "react";
import store from "../../utils/stores/WebRTS.store";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { useForm } from "react-hook-form";

type Props = {};

const Chat = observer((props: Props) => {
    const { register, handleSubmit, watch, getValues, setFocus, resetField } =
        useForm<{ chatMessage: string }>({
            mode: "onChange",
        });

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-center">Chat</h1>
            <div className="w-full rounded bg-gray-600">
                <div className="overflow-y-auto will-change-scroll snap-y overflow-x-hidden h-40 p-1">
                    {store.messages.map((message, index) => (
                        <div key={index} className={`flex flex-col p-2`}>
                            <div
                                className={`bg-gray-500 rounded flex snap-end scroll-my-1 flex-col p-1 ${
                                    message.me ? "self-end" : "self-start"
                                }`}
                            >
                                {!message.me && <div>{message.from}</div>}
                                <div>{message.message}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center w-full">
                <form
                    className="flex items-center gap-1 w-2/3"
                    action="submit"
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (!getValues("chatMessage")) return;
                        const message = {
                            value: getValues("chatMessage"),
                            from: store.name,
                        };

                        store.sendMassageToAll('text-message', message);
                        store.addChatMessage(true, store.name, message.value);

                        resetField("chatMessage");
                    }}
                >
                    <Input {...register("chatMessage")} />
                    <Button type="submit" className="w-16">
                        Send
                    </Button>
                </form>
            </div>
        </div>
    );
});

export default Chat;
