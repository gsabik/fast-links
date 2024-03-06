import { Input } from "./ui/input";
import { Button } from "./ui/button";

const InputLinks = () => {
	return (
		<form className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
			<Input placeholder="Blog"/>
			<Input placeholder="johndoe.com"/>
			<Button>Agregar</Button>
		</form>
	);
}

export default InputLinks;