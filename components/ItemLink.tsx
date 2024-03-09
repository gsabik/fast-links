import { useContext } from "react";
import { LinksContext } from "@/context/LinksContext";
import { Button } from "./ui/button";
import { Copy, Pencil, Trash } from "lucide-react";
import { Link, LinksContextType } from "@/utils/types";

type Props = Link;

const ItemLink = ({ id, description, url }: Props) => {
	const { deleteLink } = useContext(LinksContext) as LinksContextType;

	return (
		<div className="flex flex-col">
			<div className="flex flex-row items-center justify-between">
				<p>{description}</p>
				<div className="flex flex-row space-x-2">
					<Button size="icon" variant="outline">
						<Copy className="h-4 w-4"/>
					</Button>
					<Button onClick={() => deleteLink(id)} size="icon" variant="outline">
						<Trash className="h-4 w-4"/>
					</Button>
					<Button size="icon" variant="outline">
						<Pencil className="h-4 w-4"/>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ItemLink;