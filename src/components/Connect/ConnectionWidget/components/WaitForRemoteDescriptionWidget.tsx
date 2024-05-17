import { RemoteDescriptionInput } from "./RemoteDescriptionInput";
import { ServerlessWebRTC } from "../ConnectionWidget";

export const WaitForRemoteDescriptionWidget = ({
  setRemoteDescription,
}: {
  setRemoteDescription: ServerlessWebRTC["setRemoteDescription"];
}) => (
  <div>   
    <RemoteDescriptionInput setRemoteDescription={setRemoteDescription} />
  </div>
);

export default WaitForRemoteDescriptionWidget;