import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "WorldWide Group",
    template: "%s · WorldWide Group",
  },
  description:
    "Distribución y representación de marcas globales. Operación B2B con foco en confianza, alcance y ejecución.",
  metadataBase: new URL("https://worldwidegroup.com"),
  openGraph: {
    title: "WorldWide Group",
    description:
      "Distribución y representación de marcas globales. Operación B2B con foco en confianza, alcance y ejecución.",
    type: "website",
    url: "https://worldwidegroup.com",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "WorldWide Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WorldWide Group",
    description:
      "Distribución y representación de marcas globales. Operación B2B con foco en confianza, alcance y ejecución.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
