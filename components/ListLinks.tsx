"use client";

import { useContext } from "react";
import { LinksContext } from "@/context/LinksContext";
import { Card, CardContent } from "./ui/card";
import ItemLink from "./ItemLink";
import { Link, LinksContextType } from "@/utils/types";

const ListLinks = () => {
	const { links } = useContext(LinksContext) as LinksContextType;

	return (
		<Card className="w-full">
			<CardContent className="py-4 space-y-4">
				{
					links.length === 0
					?
					<p className="font-medium text-center">No agregaste ningún Fastlink!</p>
					:
					links.map((link: Link) => (
						<ItemLink key={link.id} link={link}/>
					))
				}
			</CardContent>
		</Card>
	);
}

export default ListLinks;