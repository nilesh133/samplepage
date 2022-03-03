import React, { createContext, useState } from 'react';

export const CodeContext = createContext(null);
const CodeProvider = ({ children }) => {
    const[state, setState] = useState("");

    return (
        <CodeContext.Provider value={{
            state,
            setState,
        }}>
            {children}
        </CodeContext.Provider>
    )
};

export default CodeProvider;
