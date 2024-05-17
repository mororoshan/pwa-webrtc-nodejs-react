import { Fragment, ReactElement, useEffect, useState } from "react";
import Connect from "../components/Connect/Connect";
import { observer } from "mobx-react-lite";
import store from "../utils/stores/WebRTS.store";
import { User } from "../components/Connect/classes/User";
import Button from "../components/ui/Button/Button";
import Chat from "../components/Chat/Chat";

type Props = {};

const ConnectionPage = observer((props: Props) => {
    if (!store.name) {
        return <div>Loading</div>;
    }

    const handleAddUser = (names?: string[]) => {
        if (!names) {
            store.addUsers([new User("")]);
        } else {
            store.addUsers([...names.map((name) => new User(name))]);
        }
    };

    return (
        <div className="bg-gray-700 p-6 mx-4">
            <h1>MY NAME IS {store.name}</h1>
            <section className="flex flex-wrap gap-8">
                {store.usersArray.map((user) => (
                    <Fragment key={user.randomKey}>
                        <Connect
                            testKey={0}
                            name={store.name}
                            user={user}
                            handleAddUsers={handleAddUser}
                        />
                    </Fragment>
                ))}
                <div className="flex justify-center items-center">
                    <Button className="w-12 h-12" onClick={() => handleAddUser()}>+</Button>
                </div>
            </section>
            <div className="flex justify-center w-full">
                <div className="md:w-1/3 w-full">
                    <Chat />
                </div>
            </div>
        </div>
    );
});

export default ConnectionPage;
