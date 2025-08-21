"use client";

import Navbar from "@/components/navbar";
import Section from "@/components/section";
import Button from "@/components/button";

export default function Home() {
  return (
    <>
      <Navbar /> {/* Componente da navbar */}

      <Section title="VNShip" description="Suas entregas seguras e rápidas"> {/* Section home */}
        <div className="flex gap-5">
          <Button
          to="servicos"
          className="w-36 h-11 mt-8"
          variant="primary">
            Ver Serviços
          </Button>

          <Button
            className="w-32 h-11 mt-8"
            variant="secondary"
            onClick={() => alert("Atenção!")}
          >
            Contato
          </Button>
        </div>
      </Section>
    </>
  );
}