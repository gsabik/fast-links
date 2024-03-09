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

	const deleteLink = (id: string) => {
		setLinks(links.filter(link => link.id !== id));
	}

	return (
		<LinksContext.Provider value={{ 
			links,
			addLink,
			deleteLink
		 }}>{children}
		 </LinksContext.Provider>
	);
}