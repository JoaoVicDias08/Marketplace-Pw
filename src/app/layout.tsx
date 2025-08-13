  import "./globals.css";

  import { redHatDisplay } from "./fonts";

  export default function RootLayout({ children }: { children: React.ReactNode}) {
    return (
      <html lang="pt-BR" className={redHatDisplay.className}>
        <body>{children}</body>
      </html>
    );
  }


