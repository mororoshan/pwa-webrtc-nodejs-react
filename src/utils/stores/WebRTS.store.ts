import { makeAutoObservable, observable } from "mobx";
import { User } from "../../components/Connect/classes/User";
import {
    Messages,
    TMassageTypes,
} from "../../contexts/models/types/TSendCallback";


class WebRTCStore {
    users: User[] = observable([new User("")]);
    name: string = "";
    messages: { me: boolean; from: string; message: string }[] = [];
    constructor() {
        makeAutoObservable(this);
        
        fetch("https://randomuser.me/api/")
            .then((response) => response.json())
            .then((data) => {
                this.name = data.results[0].name.first;
            });
    }

    get usersArray() {
        return this.users;
    }

    addChatMessage(me: boolean, from: string, message: string) {
        this.messages.push({ me, from, message });
    }

    addUsers(user: User[]) {
        this.users = [...this.users, ...user];
    }

    sendMassageToAll(type: TMassageTypes, massage: Messages["data"]) {
        console.log(window.RTCSessionDescription);
        this.users.forEach((user) => {
            user.handleSendMassage(type, massage);
        });
    }
}

export default new WebRTCStore();
