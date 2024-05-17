import { useServerlessWebRTC } from "../../../utils/hooks/ServerlessWebRTC";
import { ConnectedWidget, DisconnectedWidget, InitialWidget, SendLocalDescriptionWidget, WaitForRemoteDescriptionWidget } from "./components";
import { ConnectionState } from "./models/types/ConnectionState";


export type ServerlessWebRTC = ReturnType<typeof useServerlessWebRTC>;

export const ConnectionWidget = ({
  connectionState,
  isLoading,
  localDescription,
  setRemoteDescription,
}: {
  connectionState: ConnectionState;
  isLoading: boolean;
  localDescription: string | undefined;
  setRemoteDescription: ServerlessWebRTC["setRemoteDescription"];
}) => {
  if (connectionState === "initial")
    return (
      <InitialWidget
        isLoading={isLoading}
        localDescription={localDescription}
        setRemoteDescription={setRemoteDescription}
      />
    );

  if (connectionState === "needToSendLocalDescription") {
    return (
      <SendLocalDescriptionWidget
        isLoading={isLoading}
        localDescription={localDescription}
      />
    );
  }

  if (connectionState === "waitingForRemoteDescription") {
    return (
      <WaitForRemoteDescriptionWidget
        setRemoteDescription={setRemoteDescription}
      />
    );
  }
  
  return <></>;
};