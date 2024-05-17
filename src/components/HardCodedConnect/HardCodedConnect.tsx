import React, { useEffect, useState } from "react";
import { useHardCodedServerlessWebRTC } from "./hooks/useHardCodedServerlessWebRTC";
import { Messages } from "../../contexts/models/types/TSendCallback";
import { hardcodedSdpPairs } from "./hardcodedData/hardcodedSdpPairs";
import Button from "../ui/Button/Button";

type Props = {};

enum offerAnswer {
    offer = "offer",
    answer = "answer",
}

const HardCodedConnect = (props: Props) => {
    const [choseToConnect, setChoseToConnect] = useState<
        offerAnswer | undefined
    >();

    const {
        localDescription,
        setHardCodedDescriptions,
        sendMessage,
        registerEventHandler,
        connectionState,
        isLocalDescriptionReady,
        remoteDescriptionString,
    } = useHardCodedServerlessWebRTC<Messages["type"], Messages>({
        useIceServer: false,
    });

    useEffect(() => {
        const unregisterTextMessage = registerEventHandler(
            "text-message",
            (message) => {
                console.log("received text-message: ", message.data);
            }
        );

        const unregisterPingMessage = registerEventHandler("ping", () => {
            console.log("Received ping-message.");
        });

        return () => {
            unregisterTextMessage();
            unregisterPingMessage();
        };
    }, [registerEventHandler]);

    const handleToConnectTo = () => {
        setHardCodedDescriptions(
            JSON.stringify(hardcodedSdpPairs[0].pair[0]),
            JSON.stringify(hardcodedSdpPairs[0].pair[1])
        );
        setChoseToConnect(offerAnswer.offer);
    };
    const handleToConnectFrom = () => {
        setHardCodedDescriptions(
            JSON.stringify(hardcodedSdpPairs[0].pair[1]),
            JSON.stringify(hardcodedSdpPairs[0].pair[0])
        );
        setChoseToConnect(offerAnswer.answer);
    };

    useEffect(() => {
        console.log(connectionState);
    }, [connectionState]);

    return (
        <div className="border border-1 p-4">
            <h1>Hardcoded Connect</h1>
            <section className="flex items-center gap-2">
                <div>{choseToConnect && <h1>{choseToConnect}</h1>}</div>
                <div>
                    <Button onClick={() => handleToConnectTo()}>
                        Connect to
                    </Button>
                    <Button onClick={() => handleToConnectFrom()}>
                        Connect from
                    </Button>
                </div>
            </section>
            <div>
                <h1 className="text-2xl">Local Description</h1>
                {localDescription && (
                    <pre>{JSON.parse(localDescription).sdp}</pre>
                )}
            </div>
            <div>
                <h1 className="text-2xl">Hardcoded local Description</h1>
                {localDescription && (
                    <pre>{hardcodedSdpPairs[0].pair[0].sdp}</pre>
                )}
            </div>
        </div>
    );
};

export default HardCodedConnect;
