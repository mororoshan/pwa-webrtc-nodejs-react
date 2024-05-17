import { useRef, useState } from "react";
import { ServerlessWebRTC } from "../ConnectionWidget";
import { useForm } from "react-hook-form";
import Input from "../../../ui/Input/Input";
import Button from "../../../ui/Button/Button";

export const RemoteDescriptionInput = ({
    setRemoteDescription,
}: {
    setRemoteDescription: ServerlessWebRTC["setRemoteDescription"];
}) => {
    const handleConnect = async () => {
        console.log(window.isSecureContext, navigator);
        if (window.isSecureContext && navigator.clipboard) {
            await navigator.clipboard
                .readText()
                .then((clipText) => {
                    console.log(clipText);
                    setRemoteDescription(clipText);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    return (
        <div>
            <Button className="w-full" onClick={async () => handleConnect()}>Connect</Button>
        </div>
    );
};

export default RemoteDescriptionInput;
