import { ReactNode } from "react";
import Title from "@/components/title";

interface SectionProps {
  title?: string;            
  description?: string;       
  classname?: string;         
  children?: ReactNode;       
}

export default function Section({ title, description, classname, children }: SectionProps) {
  return (
    <section
      className={`w-full min-h-screen bg-zinc-900 flex flex-col justify-center items-center pb-5 ${classname || ""}`}
    >
      {/* Renderiza o Title se houver */}
      {title && <Title className="text-center mb-1">{title}</Title>}

      {/* Renderiza a descrição se houver */}
      {description && <p className="text-white text-center text-2xl">{description}</p>}

      {/* Conteúdo interno da seção (componentes) */}
      {children}
    </section>
  );
}
