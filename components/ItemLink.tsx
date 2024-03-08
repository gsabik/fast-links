import { Link } from "@/utils/types";

type Props = Link;

const ItemLink = ({ id, description, url }: Props) => {
	return (
		<div className="flex flex-col">
			<p>{description}</p>
		</div>
	);
}

export default ItemLink;