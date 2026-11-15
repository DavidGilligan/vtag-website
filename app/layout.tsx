import type {Metadata} from 'next';import Header from '@/components/Header';import Footer from '@/components/Footer';import './globals.css';
export const metadata:Metadata={title:{default:'V-TAG | Your vehicle. Its history. One identity.',template:'%s | V-TAG'},description:'Discover V-TAG, a new approach to digital vehicle identity, service records and vehicle history.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-GB"><body><Header/>{children}<Footer/></body></html>}
