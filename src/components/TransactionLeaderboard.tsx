"use client";

import { recentTransactions, recentTimes } from "@/data/mockData";
import { useState } from "react";

function formatPrice(price: number): string {
  if (price >= 10000) {
    const eok = Math.floor(price / 10000);
    const remainder = price % 10000;
    return remainder > 0 ? `${eok}억 ${remainder.toLocaleString()}만` : `${eok}억`;
  }
  return `${price.toLocaleString()}만`;
}

function getPriceChange(current: number, prev: number | null): { text: string; color: string; arrow: string } {
  if (prev === null) return { text: "신규", color: "text-blue-400", arrow: "" };
  const diff = current - prev;
  const pct = ((diff / prev) * 100).toFixed(1);
  if (diff > 0) return { text: `+${formatPrice(diff)} (+${pct}%)`, color: "text-red-400", arrow: "▲" };
  if (diff < 0) return { text: `${formatPrice(diff)} (${pct}%)`, color: "text-blue-400", arrow: "▼" };
  return { text: "보합", color: "text-gray-400", arrow: "-" };
}

type FilterRegion = "전체" | "서울" | "수도권";

const seoulDistricts = ["강남구", "서초구", "송파구", "용산구", "마포구", "성동구", "강동구", "양천구"];

export default function TransactionLeaderboard() {
  const [filter, setFilter] = useState<FilterRegion>("전체");

  const filtered = recentTransactions.filter((t) => {
    if (filter === "전체") return true;
    if (filter === "서울") return seoulDistricts.includes(t.district);
    return true; // 수도권 = 전체
  });

  return (
    <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <h2 className="text-lg font-bold text-white">실거래가 LIVE</h2>
          <span className="text-xs text-gray-500">국토교통부 실거래가 공개시스템</span>
        </div>
        <div className="flex gap-1">
          {(["전체", "서울", "수도권"] as FilterRegion[]).map((r) => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                filter === r
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* 헤더 */}
      <div className="grid grid-cols-12 gap-2 px-5 py-2 text-xs text-gray-500 border-b border-gray-800/50 bg-gray-900/50">
        <div className="col-span-1">#</div>
        <div className="col-span-3">아파트</div>
        <div className="col-span-2">위치</div>
        <div className="col-span-1">면적</div>
        <div className="col-span-2 text-right">거래가</div>
        <div className="col-span-2 text-right">변동</div>
        <div className="col-span-1 text-right">시간</div>
      </div>

      {/* 거래 목록 */}
      <div className="divide-y divide-gray-800/30">
        {filtered.map((t, idx) => {
          const change = getPriceChange(t.price, t.prevPrice);
          return (
            <div
              key={t.id}
              className="grid grid-cols-12 gap-2 px-5 py-3 hover:bg-gray-800/40 transition-colors items-center group"
            >
              <div className="col-span-1">
                <span className={`text-sm font-bold ${idx < 3 ? "text-yellow-400" : "text-gray-600"}`}>
                  {idx + 1}
                </span>
              </div>
              <div className="col-span-3">
                <p className="text-sm font-medium text-white truncate">{t.apartmentName}</p>
                <p className="text-xs text-gray-500">{t.buildYear}년 | {t.floor}층</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-300">{t.district}</p>
                <p className="text-xs text-gray-500">{t.dong}</p>
              </div>
              <div className="col-span-1">
                <p className="text-sm text-gray-300">{t.area}㎡</p>
              </div>
              <div className="col-span-2 text-right">
                <p className="text-sm font-bold text-white">{formatPrice(t.price)}</p>
              </div>
              <div className="col-span-2 text-right">
                <p className={`text-sm font-medium ${change.color}`}>
                  {change.arrow} {change.text}
                </p>
              </div>
              <div className="col-span-1 text-right">
                <p className="text-xs text-gray-500">{recentTimes[idx]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
