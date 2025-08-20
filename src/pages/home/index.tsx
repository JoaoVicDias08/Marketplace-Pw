"use client";

import Navbar from "@/components/navbar";
import Section from "@/components/section";
import Button from "@/components/button";

export default function Home() {
  return (
    <>
      <Navbar />

      <Section title="VNShip" description="Suas entregas seguras e rápidas">
        <Button to="servicos" className="mt-8">
          Ver Serviços
        </Button>
      </Section>
    </>
  );
}