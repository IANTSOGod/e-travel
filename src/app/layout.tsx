import Header from "@/components/custom/Header";
import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header></Header>
        {children}
        <Toaster></Toaster>
      </body>
    </html>
  );
}
