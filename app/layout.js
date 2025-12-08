import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

// Local Geist Fonts (No Google API → No Turbopack error)

export const metadata = {
  title: "thegroupnx",
  description: "menswear shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* CSS Files */}
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="stylesheet" href="/fonts/font-icons.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" type="text/css" href="/css/styles.css" />
        <link rel="shortcut icon" href="/images/logo/favicon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/images/logo/favicon.png"
        />
      </head>

      <body>
        {children}

        {/* Required JS */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />

        <Script src="/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="/js/carousel.js" strategy="afterInteractive" />

        <Script src="/js/bootstrap-select.min.js" strategy="lazyOnload" />
        <Script src="/js/lazysize.min.js" strategy="lazyOnload" />
        <Script src="/js/count-down.js" strategy="lazyOnload" />
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/multiple-modal.js" strategy="lazyOnload" />
        <Script src="/js/nouislider.min.js" strategy="lazyOnload" />
        <Script src="/js/shop.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
            <Script src="js/photoswipe-lightbox.umd.min.js"></Script>
    <Script src="js/photoswipe.umd.min.js"></Script>
    <Script src="js/zoom.js"></Script>
        <Script src="js/drift.min.js"></Script>



      </body>
    </html>
  );
}
