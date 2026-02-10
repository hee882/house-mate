import TransactionLeaderboard from "@/components/TransactionLeaderboard";
import TrendChart from "@/components/TrendChart";
import LandPermitBoard from "@/components/LandPermitBoard";
import AdBanner from "@/components/AdBanner";
import StatsBar from "@/components/StatsBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712]">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-white">하우스메이트</h1>
            <span className="text-xs text-gray-500 hidden sm:block">실시간 부동산 실거래가 대시보드</span>
          </div>
          <nav className="flex items-center gap-4">
            <button className="text-sm text-blue-400 font-medium px-3 py-1.5 rounded-lg bg-blue-500/10">
              실거래가
            </button>
            <button className="text-sm text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors">
              토지허가
            </button>
            <button className="text-sm text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors">
              시세추세
            </button>
          </nav>
        </div>
      </header>

      {/* 메인 */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* 상단 통계 바 */}
        <StatsBar />

        {/* 광고 배너 (상단) */}
        <AdBanner variant="horizontal" />

        {/* 실거래가 리더보드 + 추세 차트 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TransactionLeaderboard />
          </div>
          <div className="space-y-6">
            <TrendChart />
            <AdBanner variant="square" />
          </div>
        </div>

        {/* 토지거래허가 섹션 */}
        <LandPermitBoard />

        {/* 하단 광고 */}
        <AdBanner variant="horizontal" />
      </main>

      {/* 푸터 */}
      <footer className="border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-400">하우스메이트</span>
              <span className="text-xs text-gray-600">|</span>
              <span className="text-xs text-gray-600">부동산 실거래가 정보 서비스</span>
            </div>
            <div className="text-xs text-gray-600 text-center sm:text-right">
              <p>본 서비스의 데이터는 국토교통부 실거래가 공개시스템을 기반으로 합니다.</p>
              <p className="mt-1">투자 판단의 책임은 본인에게 있으며, 참고 자료로만 활용해 주세요.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
