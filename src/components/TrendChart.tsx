"use client";

import { trendData } from "@/data/mockData";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const regions = [
  { key: "gangnam", name: "강남구", color: "#ef4444" },
  { key: "seocho", name: "서초구", color: "#f97316" },
  { key: "songpa", name: "송파구", color: "#eab308" },
  { key: "yongsan", name: "용산구", color: "#22c55e" },
  { key: "mapo", name: "마포구", color: "#3b82f6" },
];

function formatTooltipValue(value: number): string {
  if (value >= 10000) {
    const eok = Math.floor(value / 10000);
    const remainder = value % 10000;
    return remainder > 0 ? `${eok}억 ${remainder.toLocaleString()}만` : `${eok}억`;
  }
  return `${value.toLocaleString()}만`;
}

function formatYAxis(value: number): string {
  return `${(value / 10000).toFixed(0)}억`;
}

export default function TrendChart() {
  const [activeRegions, setActiveRegions] = useState<Set<string>>(
    new Set(regions.map((r) => r.key))
  );

  const toggle = (key: string) => {
    setActiveRegions((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        if (next.size > 1) next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="bg-gray-900 rounded-2xl border border-gray-800 p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-white">주요 지역 시세 추세</h2>
          <p className="text-xs text-gray-500 mt-1">84㎡ 기준 평균 실거래가 (최근 2년)</p>
        </div>
        <div className="flex gap-1.5 flex-wrap justify-end">
          {regions.map((r) => (
            <button
              key={r.key}
              onClick={() => toggle(r.key)}
              className={`px-2.5 py-1 text-xs rounded-full border transition-all ${
                activeRegions.has(r.key)
                  ? "border-transparent text-white"
                  : "border-gray-700 text-gray-500 bg-transparent"
              }`}
              style={
                activeRegions.has(r.key)
                  ? { backgroundColor: r.color + "33", borderColor: r.color }
                  : {}
              }
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trendData} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
            <defs>
              {regions.map((r) => (
                <linearGradient key={r.key} id={`grad-${r.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={r.color} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={r.color} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="month" stroke="#6b7280" tick={{ fontSize: 12 }} />
            <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} tickFormatter={formatYAxis} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #374151",
                borderRadius: "12px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#9ca3af" }}
              formatter={(value: number | undefined, name: string | undefined) => {
                if (value === undefined) return ["", ""];
                const region = regions.find((r) => r.key === name);
                return [formatTooltipValue(value), region?.name || name || ""];
              }}
            />
            {regions.map((r) =>
              activeRegions.has(r.key) ? (
                <Area
                  key={r.key}
                  type="monotone"
                  dataKey={r.key}
                  stroke={r.color}
                  strokeWidth={2}
                  fill={`url(#grad-${r.key})`}
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 2 }}
                />
              ) : null
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
