export interface Link {
	id: string;
	description: string;
	url: string;
}

export type LinksContextType = {
  links: Link[];
  addLink: (link: Link) => void;
	deleteLink: (id: string) => void;
	updateLink: (id: string, newValue: Link) => void;
}