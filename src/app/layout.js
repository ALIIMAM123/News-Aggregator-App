import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import StoreProvider from "@/Redux/Provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className="bg-blue-50  text-black dark:bg-black dark:text-white" >
        <StoreProvider>
          <div className="flex flex-col h-screen">
            <header className="fixed top-0 left-0 w-full z-10">
            </header>
            <main className="flex-grow pt-16 pb-16 overflow-y-auto  text-black dark:bg-black dark:text-white">
              {children}
            </main>
            <footer className="fixed bottom-0 left-0 w-full z-10">
            </footer>
          </div>
        </StoreProvider>
      </body>
    </html>




  );
}
