import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight:["400","500","600","700"],
  variable:"--font-outfit"
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Porfolio - Arjun Nagar",
  description: "This is Arjun Nagar",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} h-full antialiased overflow-x-hidden leading-8 scroll-smooth`}
    >
      <body className="min-h-full flex flex-col dark:bg-dark-theme dark:text-white">
        {children}
      </body>
    </html>
  );
}
