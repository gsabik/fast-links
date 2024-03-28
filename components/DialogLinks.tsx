"use client";

import { useContext, useState } from "react";
import { LinksContext } from "@/context/LinksContext";
import { Button } from "./ui/button";
import { 
	Dialog, 
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogClose
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Pencil } from "lucide-react";
import { Link, LinksContextType } from "@/utils/types";

interface Props {
	link: Link
}

const DialogLinks = ({ link }: Props) => {
	const [open, setOpen] = useState(false);
	const [editLink, setEditLink] = useState<Link>({
		id: link.id,
		description: link.description,
		url: link.url
	});

	const { updateLink } = useContext(LinksContext) as LinksContextType;

	const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		setEditLink({
			...editLink,
			[e.currentTarget.name]: e.currentTarget.value
		});
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		updateLink(link.id, editLink);
		setOpen(false);
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
					<Button size="icon" variant="outline">
						<Pencil className="h-4 w-4"/>
					</Button>
			</DialogTrigger>
			<DialogContent className="w-[60rem]">
        <DialogHeader>
					<DialogTitle>Editar</DialogTitle>
        </DialogHeader>
				<form className="flex flex-col space-y-4">
					<Label>Descripción</Label>
					<Input 
						name="description" 
						onChange={handleInputChange} 
						placeholder="Blog" 
						value={editLink.description}
					/>
					<Label>URL</Label>
					<Input 
						name="url" 
						onChange={handleInputChange} 
						placeholder="johndoe.com" 
						value={editLink.url}
					/>
					<DialogClose asChild>
						<Button onClick={handleSubmit} type="button">Actualizar</Button>
					</DialogClose>
				</form>
      </DialogContent>
		</Dialog>
	);
}

export default DialogLinks;