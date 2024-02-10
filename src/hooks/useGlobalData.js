'use client';
import { createContext, useContext, useState } from 'react';
export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
	const [ModalOpen, setModalOpen] = useState(false);
	const [ModalType, setModalType] = useState('');

	return (
		<GlobalContext.Provider
			value={{ ModalOpen, setModalOpen, ModalType, setModalType }}
		>
			{children}
		</GlobalContext.Provider>
	);
}
export function useGlobalData() {
	const globalData = useContext(GlobalContext);
	return globalData;
}
