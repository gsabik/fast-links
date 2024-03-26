"use client";

import { createContext, ReactNode, useState, useEffect } from "react";
import { Link, LinksContextType } from "@/utils/types";

interface Props {
	children: ReactNode
}

export const LinksContext = createContext<LinksContextType | null>(null);

export const LinksProvider = ({ children }: Props) => {
	const [links, setLinks] = useState<Link[]>([]);
	
	useEffect(() => {
		const links = JSON.parse(localStorage.getItem("links") || "");
	
		if (links.length > 0) {
			setLinks(links); 
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("links", JSON.stringify(links));
	}, [links]);

	const addLink = (link: Link) => {
		setLinks([...links, link]);
	}

	const deleteLink = (id: string) => {
		setLinks(links.filter(link => link.id !== id));
	}

	const updateLink = (id: string, newValue: Link) => {
		setLinks((links.map(link => link.id === id ? newValue : link)));
	}

	return (
		<LinksContext.Provider value={{ 
			links,
			addLink,
			deleteLink,
			updateLink
		 }}>{children}
		 </LinksContext.Provider>
	);
}