import './globals.css';
import { config } from '@/data/config';

export const metadata = {
  title: `${config.siteName} - ${config.tagline}`,
  description: config.description,
  keywords: 'Netflix Bangladesh, ChatGPT Plus, Prime Video, Hoichoi, Chorki, subscription, cheap, bkash',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
