import { ReactNode } from "react";
// import { languages } from "@/i18n/config";
import { ReactQueryProvider } from "@/presentation/providers/ReactQueryProvider";
import { ThemeProvider } from "@/presentation/context/ThemeContext";
import "./globals.css";
import AppInitializer from "@/presentation/components/AppInitializer";

// export async function generateStaticParams() {
//   return languages.map((locale) => ({ locale }));
// }

// interface RootLayoutProps {
//   children: ReactNode;
//   params: {
//     locale?: string; // optional ถ้าใช้ dynamic route /[locale]
//   };
// }

// export default async function Layout({ children, params }: RootLayoutProps) {
//   const locale = params.locale || "en"; // default locale
//   return (
//     <html lang={locale} dir={"ltr"}>
//       <body>
//         <ReactQueryProvider>
//           <ThemeProvider>
//             <AppInitializer>{children}</AppInitializer>
//           </ThemeProvider>
//         </ReactQueryProvider>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ThemeProvider>
            <AppInitializer>{children}</AppInitializer>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
