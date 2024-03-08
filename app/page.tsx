import FormLinks from "@/components/FormLinks";
import ListLinks from "@/components/ListLinks";

const HomePage = () => {
	return (
		<section className="flex justify-center items-center h-[90vh]">
			<div className="flex flex-col items-center m-4 space-y-6 w-[35rem]">
				<h1 className="border-b-2 font-semibold text-4xl pb-2 w-fit">Tus Fastlinks</h1>
				<FormLinks/>
				<ListLinks/>
			</div>
		</section>
	);
}

export default HomePage;