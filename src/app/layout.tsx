import Header from "@/components/custom/Header";
import "./globals.css";
import { Toaster } from "sonner";
import { ConvexClientProvider } from "@/components/custom/ConvexClientProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ConvexClientProvider>
          <>
            <Header></Header>
            {children}
          </>
        </ConvexClientProvider>
        <Toaster></Toaster>
      </body>
    </html>
  );
}
