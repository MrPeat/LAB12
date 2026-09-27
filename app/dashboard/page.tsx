import LogoutButton from '@/components/LogoutButton';
import ReactionButton from '@/components/ReactionButton';

export const dynamic = 'force-dynamic';
import { listMessages } from '@/lib/messageService';

// เปลี่ยนมาดึงข้อมูลจาก Database โดยตรงเลย เพื่อไม่ให้มีปัญหา localhost ตอนอยู่บน Vercel
async function getContactMessages() {
  try {
    return await listMessages();
  } catch (error) {
    console.error("Database error:", error);
    return [];
  }
}

export default async function DashboardPage() {
  const messages = await getContactMessages();

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-green-600">My Dashboard</h1>
          <p className="text-gray-500 mt-1">กล่องจดหมาย: รายการข้อความติดต่อจากผู้ใช้งาน</p>
        </div>
        <LogoutButton />
      </div>

      {/* ตรวจสอบว่ามีข้อมูลส่งมาหรือยัง */}
      {messages.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed">
          <p className="text-gray-500">ยังไม่มีข้อความติดต่อเข้ามาในขณะนี้</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((msg: any, index: number) => (
            <div key={index} className="border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow bg-white relative">
              <span className="absolute top-4 right-4 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                ข้อความที่ {index + 1}
              </span>
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                คุณ: {msg.name}
              </h2>
              <p className="text-sm text-blue-600 mb-4">📧 {msg.email}</p>
              <div className="text-gray-700 bg-gray-50 p-3 rounded text-sm border-l-4 border-green-500 mb-3">
                "{msg.message}"
              </div>
              <ReactionButton messageId={msg.id} initialReactions={msg.reactions || 0} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}