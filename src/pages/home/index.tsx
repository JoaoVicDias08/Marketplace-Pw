"use client";

import Navbar from "@/components/navbar";
import Section from "@/components/section";
import Button from "@/components/button";

export default function Home() {
  return (
    <>
      <Navbar /> {/* Componente da navbar */}

      {/* Seção Home */}
      <Section id="home" title="VNShip" description="Suas entregas seguras e rápidas">
        <div className="flex gap-5">
          <Button to="servicos" className="w-36 h-11 mt-8" variant="primary">
            Ver Serviços
          </Button>
          <Button to="contato" className="w-32 h-11 mt-8" variant="secondary">
            Contato
          </Button>
        </div>
      </Section>

      {/* Seção Delivery */}
      <Section id="servicos" title="Delivery" description="Veja informações sobre nossas entregas.">
        <div className="flex flex-col items-center mt-8 gap-4">
          <p className="text-white text-lg">Aqui você encontra detalhes sobre o serviço de delivery da VNShip.</p>
        </div>
      </Section>

      {/* Seção Dúvidas */}
      <Section id="duvidas" title="Dúvidas" description="Perguntas frequentes sobre nossos serviços.">
        <div className="flex flex-col items-center mt-8 gap-4">
          <p className="text-white text-lg">Aqui você pode colocar perguntas e respostas frequentes.</p>
        </div>
      </Section>

      {/* Seção Sobre */}
      <Section id="sobre" title="Sobre" description="Saiba mais sobre a VNShip.">
        <div className="flex flex-col items-center mt-8 gap-4">
          <p className="text-white text-lg">Informações sobre a empresa, missão, visão, etc.</p>
        </div>
      </Section>
    </>
  );
}