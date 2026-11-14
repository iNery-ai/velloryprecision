import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import { META_PIXEL_ID } from "@/lib/pixel";
import { companyLinks } from "@/data/product";
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {/* Microsoft Clarity Code */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "zd9m709lsc");
            `,
          }}
        />
        {/* Back Redirect Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = '${process.env.NEXT_PUBLIC_BACK_REDIRECT_URL || companyLinks.checkout}';

                function setBackRedirect(url) {
                  var urlBackRedirect = url;
                  var search = (document.location.search || '').replace(/^\\?/, '').trim();
                  if (search) {
                    urlBackRedirect = urlBackRedirect.trim() + (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') + search;
                  } else {
                    urlBackRedirect = urlBackRedirect.trim();
                  }

                  history.pushState({}, '', location.href);
                  history.pushState({}, '', location.href);
                  history.pushState({}, '', location.href);

                  window.addEventListener('popstate', function() {
                    console.log('onpopstate', urlBackRedirect);
                    setTimeout(function() {
                      location.href = urlBackRedirect;
                    }, 1);
                  });
                }

                setBackRedirect(link);
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
