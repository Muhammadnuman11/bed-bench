import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  metadataBase: new URL('https://www.bedbench.com.pk/'),
  title: {
    default: 'Bed Bench | Premium Furniture in Lahore',
    template: '%s | Bed Bench',
  },
  description: 'Discover considered beds, sofas, tables, chairs and custom furniture at Bed Bench showroom in DHA Phase 6, Lahore.',
  keywords: ['furniture Lahore', 'premium furniture Pakistan', 'beds Lahore', 'sofas Lahore', 'custom furniture Lahore', 'Bed Bench'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Bed Bench | Premium Furniture in Lahore',
    description: 'Furniture crafted for comfort, made to last.',
    url: 'https://www.bedbench.com.pk/',
    siteName: 'Bed Bench',
    locale: 'en_PK',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Bed Bench | Premium Furniture in Lahore', description: 'Furniture crafted for comfort, made to last.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return <html lang="en">
    <body>

      {children}
      <WhatsAppButton />
    </body>
  </html>;
}
