import Button from "../../../ui/Button/Button";

const CopyLocalDescription = ({
    isLoading,
    localDescription,
}: {
    isLoading: boolean;
    localDescription: string | undefined;
}) => {
    const unsecuredCopyToClipboard = (text: string) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand("copy");
        } catch (err) {
            console.error("Unable to copy to clipboard", err);
        }
        document.body.removeChild(textArea);
    };
    
    const copyToClipboard = (content: string) => {
        if (window.isSecureContext && navigator.clipboard) {
            navigator.clipboard.writeText(content);
        } else {
            unsecuredCopyToClipboard(content);
        }
    };

    return (
        <div>
            <Button
                className="w-full"
                disabled={isLoading}
                onClick={() => {
                    !isLoading &&
                        localDescription &&
                        copyToClipboard(localDescription);
                }}
            >
                Copy local description
            </Button>
        </div>
    );
};

export default CopyLocalDescription;
