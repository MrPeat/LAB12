import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

// 1. กำหนด Metadata สำหรับแท็บของเบราว์เซอร์ (Tab Title)
export const metadata: Metadata = {
  title: {
    template: '%s | My Profile',
    default: 'My Profile - Peat', 
  },
  description: 'บล็อกส่วนตัว สร้างด้วย Next.js + TypeScript',
};

// 2. ฟังก์ชัน RootLayout ที่จะครอบคลุมทุกหน้า
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        
        {/* --- ส่วน Navbar ด้านบน --- */}
        <nav className="bg-blue-900 text-white px-8 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
          <Link href="/" className="text-xl font-bold text-white hover:text-blue-300 transition-colors">
            My Profile
          </Link>
          <div className="flex gap-6 font-medium">
            <Link href="/" className="hover:text-blue-300 transition-colors">หน้าแรก</Link>
            <Link href="/courses" className="hover:text-blue-300 transition-colors">รายวิชา</Link>
            <Link href="/blog-spa" className="hover:text-blue-300 transition-colors">บทความ</Link>
            <Link href="/contact" className="hover:text-blue-300 transition-colors">ติดต่อ</Link>
            <Link href="/dashboard" className="hover:text-blue-300 transition-colors">Dashboard</Link>
            <Link href="/login" className="hover:text-blue-300 transition-colors">เข้าสู่ระบบ</Link>
          </div>
        </nav>

        {/* --- ส่วนเนื้อหา (หน้า Home, Courses, Posts จะมาแทรกตรง children นี้) --- */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* --- ส่วน Footer ด้านล่างสุด --- */}
        <footer className="bg-white text-center py-6 text-gray-400 text-sm border-t mt-auto">
          <p>© 2026 My Profile - สร้างด้วย Next.js + TypeScript (Deployed via Vercel)</p>
          <p className="mt-1">0214321 Web App Design & Development - v1.0.0</p>
        </footer>

      </body>
    </html>
  );
}