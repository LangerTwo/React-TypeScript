import React, { useState, type PropsWithChildren } from "react";

// interface UserContextProps {
//     children: React.ReactNode;
// }

export const UserContextProvider = ({ children }: PropsWithChildren) => {
    // const [name, setName] = useState('Leo');

    return <>{children}</>
};