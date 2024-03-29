import { Inter } from 'next/font/google';
import './globals.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ThemeProvider from '@/redux/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "T.K.'s Blog",
  description: "T.K.'s personal site, created with Next.js!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icons/cup-hot-fill.svg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
