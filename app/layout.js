import ComingSoon from '@/components/ComingSoon';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Bed Bench | Premium Furniture',
  description: 'Furniture crafted for comfort, made to last.',
};

export default function RootLayout({ children }) {
  return <html lang="en">
    <body>

      {/* {children} */}
      <ComingSoon />
      <WhatsAppButton />
    </body>
  </html>;
}
