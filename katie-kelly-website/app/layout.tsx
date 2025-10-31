import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Katie Kelly | FinTech Operations Leader',
  description: 'Scaling growth-stage FinTech platforms through operational excellence. Specializing in team building, client delivery, and operational efficiency.',
  keywords: ['FinTech', 'Operations', 'Leadership', 'Platform Scaling', 'Team Building'],
  authors: [{ name: 'Katie Kelly' }],
  openGraph: {
    title: 'Katie Kelly | FinTech Operations Leader',
    description: 'Scaling growth-stage FinTech platforms through operational excellence.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
