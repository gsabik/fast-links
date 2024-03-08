"use client";

import { createContext, ReactNode, useState } from "react";
import { Link, LinksContextType } from "@/utils/types";

interface Props {
	children: ReactNode
}

export const LinksContext = createContext<LinksContextType | null>(null);

export const LinksProvider = ({ children }: Props) => {
	const [links, setLinks] = useState<Link[]>([]);

	const addLink = (link: Link) => {
		setLinks([...links, link]);
	}

	return (
		<LinksContext.Provider value={{ 
			links,
			addLink
		 }}>{children}
		 </LinksContext.Provider>
	);
}