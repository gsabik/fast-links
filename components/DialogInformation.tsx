import { Button } from "./ui/button";
import { 
	Dialog, 
	DialogContent, 
	DialogDescription, 
	DialogTrigger 
} from "./ui/dialog";

const DialogInformation = () => {
	return (
		<Dialog>
			<DialogTrigger>
				<Button variant="outline">¿Por qué?</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogDescription className="py-8 text-justify">
					<p>
						Muchas personas se preguntarán: ¿Cuál es la finalidad de este proyecto? ¿No tiene la misma funcionalidad o utlidad que un aplicación de tareas?.
						Bien, les voy a responder estas preguntas. 
					</p>
					<br/>
					<p>
						Fastlinks surge con la necesidad de tener al alcance los enlaces que uno considera importantes.
						En mi caso, siendo un desarrollador frontend en busca de mi primer empleo IT, facilitarme los enlaces de mi portfolio, LinkedIn, curriculum vitae y correo electrónico, todo en un solo espacio.
					</p>
					<br/>
					<p>
						Desde mi punto de vista, un proyecto no se debería valorar solo por la calidad o complejidad del código, o que tan atractivo se a nivel diseño, si no
						que también pueda solucionar un problema o facilitar un requerimiento.
					</p>
				</DialogDescription>
			</DialogContent>
		</Dialog>
	);
}

export default DialogInformation;