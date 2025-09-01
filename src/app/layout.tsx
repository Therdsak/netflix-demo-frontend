import { ReactNode } from "react";
import { languages } from "@/i18n/config";
import { ReactQueryProvider } from "@/presentation/providers/ReactQueryProvider";
import { ThemeProvider } from "@/presentation/context/ThemeContext";
import "./globals.css";
import AppInitializer from "@/presentation/components/AppInitializer";

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <html lang={locale} dir={"ltr"}>
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
