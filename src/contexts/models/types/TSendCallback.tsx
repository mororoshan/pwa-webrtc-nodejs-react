import { BaseMessage, FindByType } from "../../../utils/hooks/ServerlessWebRTC";

export type TSendCallback = <T extends TMassageTypes>(
    messageType: T,
    data: Messages["data"]
) => void;

export type Messages =
    | TextMessage
    | PingMessage
    | JSONDataMassage
    | AddUserMessage
    | ConnectedUsersMessage
    | CreateNewConnectionMessage
    | SendingAnswerOfferMessage
    | SendingOffersMessage
    | SendingAnswersMessage
    | AskForUsersMessage
    | SendNewPersonOfferPersonMessage
    | SendReceiveAnswerOfferMessage;

export type TMassageTypes =
    | "text-message"
    | "ping"
    | "send-json-data"
    | "add-user"
    | "connected-users"
    | "create-new-connection"
    | "sending-answer-offer"
    | "sending-offers"
    | "sending-answers"
    | "ask-for-users"
    | "sending-offer-from-new"
    | "receive-answer-offer";

export type TextMessage = BaseMessage<
    "text-message",
    { value: string; from: string }
>;
export type PingMessage = BaseMessage<"ping">;

export type JSONDataMassage = BaseMessage<
    "send-json-data",
    { data: string; from: string }
>;

export type AddUserMessage = BaseMessage<
    "add-user",
    { name: string; usersInNet: number }
>;
export type RemoveUserMessage = BaseMessage<"remove-user", { name: string }>;
export type SendReplyOfferMessage = BaseMessage<
    "sending-reply-offer-user",
    { name: string }
>;

export type AskForUsersMessage = BaseMessage<"ask-for-users", undefined>;

export type ConnectedUsersMessage = BaseMessage<
    "connected-users",
    { userId: string[] }
>;

export type CreateNewConnectionMessage = BaseMessage<
    "creating-new-connection",
    { userId: string; offer: string }[]
>;

export type SendingAnswerOfferMessage = BaseMessage<
    "sending-answer-offer",
    { to: string, userId: string; offer: string }
>;

export type SendingOffersMessage = BaseMessage<
    "sending-offers",
    { userId: string; offer: string | undefined }[]
>;

export type SendingAnswersMessage = BaseMessage<
    "sending-answers",
    { data: { userId: string; answer: string | undefined }[] }
>;

export type SendNewPersonOfferPersonMessage = BaseMessage<
    "sending-offer-from-new",
    { userId: string; offer: string }
>;

export type SendReceiveAnswerOfferMessage = BaseMessage<"receive-answer-offer", {
    userId: string;
    answer: string;
}>;