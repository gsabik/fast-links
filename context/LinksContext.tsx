"use client";

import { createContext, ReactNode, useState } from "react";
import { Link } from "@/utils/types";

interface Props {
	children: ReactNode
}

export const LinksContext = createContext({});

export const LinksProvider = ({ children }: Props) => {
	const [links, setLinks] = useState<Link[]>([]);

	return (
		<LinksContext.Provider value={{ 
			links,
			setLinks
		 }}>{children}
		 </LinksContext.Provider>
	);
}