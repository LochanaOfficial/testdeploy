import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novera Authentication - Best Authentication Service For All",
  description: "Novera Authentication - Best Authentication Service For All From Novera Technolgies",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const currentUser = await getCurrentUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <RegisterModal />
          <LoginModal />
          <ToasterProvider />
          <Navbar currentUser={currentUser} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

