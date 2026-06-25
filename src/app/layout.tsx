import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Licht Joias e Semijoias | Alto Padrão",
  description: "Semijoias de alto padrão. Ouro 18k, Prata, Moissanites. Ilumine seus momentos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} min-h-full flex flex-col antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
