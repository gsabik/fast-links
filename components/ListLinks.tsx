"use client";

import { useContext } from "react";
import { LinksContext } from "@/context/LinksContext";
import { Card, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import ItemLink from "./ItemLink";
import { Link, LinksContextType } from "@/utils/types";

const ListLinks = () => {
	const { links } = useContext(LinksContext) as LinksContextType;

	return (
		<>
			{
				links.length === 0
				?
				<Card className="flex justify-center w-full">
					<CardContent>
						<p className="font-medium pt-6 text-center">No agregaste ningún Fastlink!</p>
					</CardContent>
				</Card>
				:
				<ScrollArea className={`border ${links.length > 5 && "h-72"} p-4 rounded-md w-full`}>
					<div className="flex flex-col space-y-4">
						{
							links.map((link: Link) => (
								<ItemLink key={link.id} link={link}/>
							))
						}
					</div>
				</ScrollArea>
			}
		</>
	);
}

export default ListLinks;