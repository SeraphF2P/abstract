import "@/style/globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "@/components/toast";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className=" bg-white font-inter  text-black  antialiased dark:bg-black  dark:text-white"
    >
      <body className=" bg-white font-inter  text-black antialiased  dark:bg-black  dark:text-white">
        <ThemeProvider>
          <Toaster  position="bottom-right" />
          {children}
        </ThemeProvider>
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}