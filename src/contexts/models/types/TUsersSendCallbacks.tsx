import { TSendCallback } from "./TSendCallback";

export type TUsersSendCallbacks = {
    userId: string;
    sendCallback: () => void;
};
