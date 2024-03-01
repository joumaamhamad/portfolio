import React, { createContext, useReducer } from 'react';

export const Info = createContext();

const initialState = {

    MyInfo: {
        name: 'Mhamad Jomaa',
        email: 'mhamad_jomaa@outlook.com',
        address: 'Lebanon,South lebanon,Zrerieh',
        number: '+96170583380',
        linkedinLink: 'www.linkedin.com/in/mhamad-jomaa-76409a230',
        githubLink: 'https://github.com/joumaamhamad',
    }
}

function reducer(state , action){
    switch(action.type){

    }
}


export function StoreProvider(props){

    const [state , dispatch] = useReducer(reducer , initialState);
    const value = {state , dispatch};

    return <Info.Provider value={value}>{props.children}</Info.Provider>
}