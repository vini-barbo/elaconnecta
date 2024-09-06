import FooterMain from "@/components/ui/layout/footerMain";
import HeaderMain from '@/components/ui/layout/headerMain';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className="bg-white h-[100dvh]  flex flex-col justify-between" >
                <HeaderMain />
                <div className="h-full flex flex-col justify-between md:flex-row-reverse">
                    <div className="w-full h-full">
                        {children}
                    </div>
                    <FooterMain />
                </div>
            </body>
        </html>
    );
}
