import React, {Dispatch, SetStateAction, useState} from 'react';
import {createContext, ReactNode} from 'react';
import {IUser} from '../shared/types';

interface IContext {
  currentUser: null | IUser;
  setCurrentUser: Dispatch<SetStateAction<IUser | null>>;
}

const defaultValue = {
  currentUser: null,
  setCurrentUser: () => null,
};

export const CurrentUserContext = createContext<IContext>(defaultValue);

export const CurrentUserContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContextProvider;
