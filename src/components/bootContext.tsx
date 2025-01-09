"use client"

import type React from "react";
import {
	createContext,
	useState,
	useContext,
	type ReactNode,
} from "react";

// Define the context type
interface terminalLoadType {
	isLoaded: boolean;
	setIsLoaded: (loaded: boolean) => void;
}

// Create the context
const terminalLoadContext = createContext<terminalLoadType | undefined>(
	undefined,
);

export const TerminalProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<terminalLoadContext.Provider value={{ isLoaded, setIsLoaded }}>
			{children}
		</terminalLoadContext.Provider>
	);
};

// Custom hook to use the SiteLoadingContext
export const useTerminalLoading = (): terminalLoadType => {
	const context = useContext(terminalLoadContext);
	if (!context) {
		throw new Error("useSiteLoading must be used within a terminalProvider");
	}
	return context;
};
