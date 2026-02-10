"use client";

import { landPermits } from "@/data/mockData";

function formatPrice(price: number): string {
  if (price >= 10000) {
    const eok = Math.floor(price / 10000);
    const remainder = price % 10000;
    return remainder > 0 ? `${eok}억 ${remainder.toLocaleString()}만` : `${eok}억`;
  }
  return `${price.toLocaleString()}만`;
}

function getPurposeColor(purpose: string): string {
  if (purpose.includes("주택") || purpose.includes("재건축") || purpose.includes("공동주택")) return "bg-green-500/20 text-green-400 border-green-500/30";
  if (purpose.includes("오피스") || purpose.includes("업무")) return "bg-blue-500/20 text-blue-400 border-blue-500/30";
  if (purpose.includes("복합") || purpose.includes("판매")) return "bg-purple-500/20 text-purple-400 border-purple-500/30";
  if (purpose.includes("신도시")) return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
  return "bg-gray-500/20 text-gray-400 border-gray-500/30";
}

export default function LandPermitBoard() {
  return (
    <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-800">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <h2 className="text-lg font-bold text-white">토지거래허가 현황</h2>
        <span className="text-xs text-gray-500">서울 및 수도권 토지거래허가구역</span>
      </div>

      {/* 요약 카드 */}
      <div className="grid grid-cols-3 gap-3 px-5 py-4 border-b border-gray-800/50">
        <div className="bg-gray-800/50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-white">{landPermits.length}</p>
          <p className="text-xs text-gray-500 mt-1">이번 주 허가 건수</p>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-red-400">
            {formatPrice(landPermits.reduce((sum, l) => sum + l.price, 0))}
          </p>
          <p className="text-xs text-gray-500 mt-1">총 거래 금액</p>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-blue-400">
            {(landPermits.reduce((sum, l) => sum + l.area, 0) / 1000).toFixed(1)}천㎡
          </p>
          <p className="text-xs text-gray-500 mt-1">총 거래 면적</p>
        </div>
      </div>

      {/* 헤더 */}
      <div className="grid grid-cols-12 gap-2 px-5 py-2 text-xs text-gray-500 border-b border-gray-800/50 bg-gray-900/50">
        <div className="col-span-2">위치</div>
        <div className="col-span-2">용도</div>
        <div className="col-span-2">면적</div>
        <div className="col-span-2 text-right">거래금액</div>
        <div className="col-span-2">목적</div>
        <div className="col-span-2 text-right">허가일</div>
      </div>

      {/* 목록 */}
      <div className="divide-y divide-gray-800/30">
        {landPermits.map((l) => (
          <div
            key={l.id}
            className="grid grid-cols-12 gap-2 px-5 py-3 hover:bg-gray-800/40 transition-colors items-center"
          >
            <div className="col-span-2">
              <p className="text-sm text-white">{l.district}</p>
              <p className="text-xs text-gray-500">{l.dong}</p>
            </div>
            <div className="col-span-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-300">
                {l.landType}
              </span>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-300">{l.area.toLocaleString()}㎡</p>
            </div>
            <div className="col-span-2 text-right">
              <p className="text-sm font-bold text-white">{formatPrice(l.price)}</p>
            </div>
            <div className="col-span-2">
              <span className={`text-xs px-2 py-0.5 rounded-full border ${getPurposeColor(l.purpose)}`}>
                {l.purpose}
              </span>
            </div>
            <div className="col-span-2 text-right">
              <p className="text-xs text-gray-500">{l.permitDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
