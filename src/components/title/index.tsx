import { oswald } from "@/app/fonts";

interface TitleProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Title({ className, children }: TitleProps) {
  return (
    <h2 className={`text-7xl text-center text-blue-600 ${oswald.className} ${className || ""}`}>
      {children}
    </h2>
  );
}