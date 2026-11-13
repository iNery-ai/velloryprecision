import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FAF6F0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://velloryprecision.vercel.app"),
  title: "Caneta Depiladora — Vellory Precision",
  description:
    "Caneta Depiladora da Vellory Precision. Retoque os fios ao redor da sobrancelha com ponta compacta e LED integrado. Oferta de Black Friday por R$ 89,90 no Pix com frete grátis e 7 dias para devolução.",
  keywords: [
    "caneta depiladora",
    "vellory precision",
    "depilador facial portatil",
    "aparador de sobrancelhas",
    "depilacao facial indolor",
    "depilador recarregavel usb",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Caneta Depiladora — Vellory Precision",
    description:
      "Caneta Depiladora da Vellory Precision com ponta compacta, LED integrado e recarga via USB. R$ 89,90 no Pix com frete grátis.",
    images: [
      {
        url: "/images/caneta-com-tampa.png",
        width: 1080,
        height: 1080,
        alt: "Caneta Depiladora — Vellory Precision",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={instrumentSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Meta Pixel Code Oficial no HEAD */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1160826213302373');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1160826213302373&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
