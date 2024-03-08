"use client";

import { useContext, useState } from "react";
import { LinksContext } from "@/context/LinksContext";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link, LinksContextType } from "@/utils/types";
import { v4 as uuid } from "uuid";

const FormLinks = () => {
	const [link, setLink] = useState<Link>({
		id: "",
		description: "",
		url: ""
	});

	const { addLink } = useContext(LinksContext) as LinksContextType;
	
	const handleInputChange = (e: any) => {
		setLink({
			...link,
			[e.target.name]: e.target.value
		});
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		addLink({
			...link,
			id: uuid()
		});
	}

	return (
		<form className="flex flex-col space-y-4 w-full md:flex-row md:space-x-4 md:space-y-0" onSubmit={handleSubmit}>
			<Input 
				name="description" 
				onChange={handleInputChange} 
				placeholder="Blog" 
				value={link.description}
			/>
			<Input 
				name="url" 
				onChange={handleInputChange} 
				placeholder="johndoe.com" 
				value={link.url}
			/>
			<Button onClick={handleSubmit}>Agregar</Button>
		</form>
	);
}

export default FormLinks;