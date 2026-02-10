"use client";

const stats = [
  { label: "오늘 거래", value: "127건", change: "+12%", up: true },
  { label: "서울 평균", value: "12.8억", change: "+2.3%", up: true },
  { label: "수도권 평균", value: "6.4억", change: "+1.8%", up: true },
  { label: "거래량 (주간)", value: "892건", change: "-5.2%", up: false },
  { label: "토지허가", value: "34건", change: "+28%", up: true },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-5 gap-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-gray-900 rounded-xl border border-gray-800 p-4 hover:border-gray-700 transition-colors"
        >
          <p className="text-xs text-gray-500 mb-1">{s.label}</p>
          <div className="flex items-end gap-2">
            <p className="text-xl font-bold text-white">{s.value}</p>
            <p className={`text-xs font-medium pb-0.5 ${s.up ? "text-red-400" : "text-blue-400"}`}>
              {s.up ? "▲" : "▼"} {s.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
