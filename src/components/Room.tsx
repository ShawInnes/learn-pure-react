import React, {createContext, FC, useContext, useState} from 'react';

type RoomContextModel = {
    isLit: boolean;
    onToggleLight?: () => void;
}

const RoomContext = createContext<RoomContextModel>({isLit: false});

export const RoomStore: FC = ({children}) => {
    const [isLit, setLit] = useState(false);

    const toggleLight = () => {
        setLit(!isLit);
    }

    return (
        <RoomContext.Provider value={{isLit, onToggleLight: toggleLight}}>
            {children}
        </RoomContext.Provider>
    );
};

type RoomProps = {

};

export const Room: FC<RoomProps> = () => {
    const {isLit, onToggleLight} = useContext<RoomContextModel>(RoomContext);

    return (
        <div className={`room ${
            isLit ? 'lit' : 'dark' }`}>
            The room is {isLit ? 'lit' : 'dark'}. <br />
            <button onClick={onToggleLight}>
                Flip
            </button>
        </div>
    );
}
