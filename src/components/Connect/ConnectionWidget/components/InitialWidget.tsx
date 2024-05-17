import { ServerlessWebRTC } from "../ConnectionWidget";
import CopyLocalDescription from "./CopyLocalDescription";
import RemoteDescriptionInput from "./RemoteDescriptionInput";


export const InitialWidget = ({
  isLoading, localDescription, setRemoteDescription,
}: {
  isLoading: boolean;
  localDescription: string | undefined;
  setRemoteDescription: ServerlessWebRTC["setRemoteDescription"];
}) => (
  <div>
    <CopyLocalDescription
      isLoading={isLoading}
      localDescription={localDescription} />
    <RemoteDescriptionInput setRemoteDescription={setRemoteDescription} />
  </div>
);

export default InitialWidget;