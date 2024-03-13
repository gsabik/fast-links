import { useContext } from "react";
import { LinksContext } from "@/context/LinksContext";
import { Button } from "./ui/button";
import { Copy, Trash } from "lucide-react";
import DialogLinks from "./DialogLinks";
import { Link, LinksContextType } from "@/utils/types";

interface Props {
	link: Link
}

const ItemLink = ({ link }: Props) => {
	const { deleteLink } = useContext(LinksContext) as LinksContextType;

	return (
		<div className="flex flex-col">
			<div className="flex flex-row items-center justify-between">
				<p>{link.description}</p>
				<div className="flex flex-row space-x-2">
					<Button size="icon" variant="outline">
						<Copy className="h-4 w-4"/>
					</Button>
					<Button onClick={() => deleteLink(link.id)} size="icon" variant="outline">
						<Trash className="h-4 w-4"/>
					</Button>
					<DialogLinks link={link}/>
				</div>
			</div>
		</div>
	);
}

export default ItemLink;