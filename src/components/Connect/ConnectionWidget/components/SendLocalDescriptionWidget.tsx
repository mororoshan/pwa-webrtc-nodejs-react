import CopyLocalDescription from "./CopyLocalDescription";

export const SendLocalDescriptionWidget = ({
    isLoading,
    localDescription,
}: {
    isLoading: boolean;
    localDescription: string | undefined;
}) => (
    <div>
        <CopyLocalDescription
            isLoading={isLoading}
            localDescription={localDescription}
        />
    </div>
);

export default SendLocalDescriptionWidget;
