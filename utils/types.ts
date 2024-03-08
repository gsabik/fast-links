export interface Link {
	id: string;
	description: string;
	url: string;
}

export type LinksContextType = {
  links: Link[];
  addLink: (link: Link) => void;
}