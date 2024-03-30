import DialogInformation from "./DialogInformation";

const NavBar = () => {
	return (
		<nav className="max-w-screen-xl mx-auto py-4">
			<div className="flex flex-row justify-between items-center px-6">
				<h2 className="font-semibold text-4xl">Fastlinks</h2>
				<DialogInformation/>
			</div>
		</nav>
	);
}

export default NavBar;