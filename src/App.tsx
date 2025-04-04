import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-100 to-white text-gray-800 p-6">
      <header className="flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold text-blue-700">AI 리포트 서비스</h1>
        <nav className="space-x-4 text-sm">
          <a href="#about" className="hover:underline">소개</a>
          <a href="#features" className="hover:underline">기능</a>
          <a href="#pricing" className="hover:underline">요금제</a>
        </nav>
      </header>

      <section className="text-center py-20" id="hero">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-900">24시간 AI 투자 분석 리포트</h2>
        <p className="text-lg mb-6">주식, 코인, 경제 뉴스를 실시간으로 요약하고 분석해드립니다.</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">프리미엄 시작하기</button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 py-16" id="features">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2">📡 실시간 AI 분석</h3>
          <p>24시간 시장을 감시하고, 핵심 이슈를 즉시 분석합니다.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2">📬 긴급 알림 전송</h3>
          <p>중요 뉴스가 발생하면 카카오톡 또는 이메일로 바로 전달!</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2">🧠 맞춤형 리포트</h3>
          <p>코인, 주식, 경제 중 선택한 분야만 제공해 드립니다.</p>
        </div>
      </section>

      <section className="py-16 text-center" id="pricing">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">요금제 안내</h2>
        <p className="mb-8 text-gray-600">AI 프리미엄 리포트는 단 하나의 요금제로 제공됩니다.</p>
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">💎 프리미엄 요금제</h3>
          <ul className="text-left text-gray-700 mb-4 list-disc list-inside">
            <li>실시간 긴급 뉴스 요약 제공</li>
            <li>카카오톡 / 이메일 알림</li>
            <li>코인 / 주식 / 경제 분야별 선택 가능</li>
            <li>24시간 AI 자동 분석</li>
          </ul>
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg">프리미엄 구독 시작하기</button>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-8 border-t mt-12">
        © 2025 AI Report Service. All rights reserved.
      </footer>
    </div>
  );
}

export default App;