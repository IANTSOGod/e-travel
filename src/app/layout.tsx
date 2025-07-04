import Header from "@/components/custom/Header";
import "./globals.css";

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
      </body>
    </html>
  );
}
