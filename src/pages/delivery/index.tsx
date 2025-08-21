"use client";

import Navbar from "@/components/navbar";
import Section from "@/components/section";
import Button from "@/components/button";

export default function Delivery() {
	return (
		<>
			<Navbar />
			<Section title="Delivery" description="Veja informações sobre nossas entregas.">
				<div className="flex flex-col items-center mt-8 gap-4">
					<p className="text-white text-lg">Aqui você encontra detalhes sobre o serviço de delivery da VNShip.</p>
					<Button variant="primary" className="w-40" onClick={() => window.location.href = "/"}>
						Voltar para Home
					</Button>
				</div>
			</Section>
		</>
	);
}
