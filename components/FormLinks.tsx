"use client";

import { useContext, useState } from "react";
import { LinksContext } from "@/context/LinksContext";
import { v4 as uuid } from "uuid";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link, LinksContextType } from "@/utils/types";

const initialState = {
	id: "",
	description: "",
	url: ""
};

const FormLinks = () => {
	const [link, setLink] = useState<Link>(initialState);

	const { addLink } = useContext(LinksContext) as LinksContextType;
	
	const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		setLink({
			...link,
			[e.currentTarget.name]: e.currentTarget.value
		});
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		addLink({
			...link,
			id: uuid()
		});

		setLink(initialState);
	}

	return (
		<form className="flex flex-col space-y-4 w-full md:flex-row md:space-x-4 md:space-y-0">
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
			<Button onClick={handleSubmit} type="submit">Agregar</Button>
		</form>
	);
}

export default FormLinks;