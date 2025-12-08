'use client';
import React, { createContext, useState, ReactNode, useContext } from 'react';

// 1. Define the shape of the data managed by the context
interface AppContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    // Add other global states here (e.g., user preferences, cart count)
}

// 2. Create the context with a default value of undefined
export const AppContext = createContext<AppContextType | undefined>(undefined);

// 3. Create a custom hook for easy access to the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    // Ensures the hook is only used inside the provider
    throw new Error('useAppContext must be used within AppContextProvider');
  }
  return context;
}

// 4. The Provider component that manages the state and provides it
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    // State management
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Function to update the state
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // The value object that will be passed down to consumers
    const value: AppContextType = {
        isDarkMode,
        toggleDarkMode,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
