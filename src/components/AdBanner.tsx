"use client";

interface AdBannerProps {
  variant?: "horizontal" | "vertical" | "square";
}

export default function AdBanner({ variant = "horizontal" }: AdBannerProps) {
  const sizes = {
    horizontal: "h-24",
    vertical: "h-[600px]",
    square: "h-64",
  };

  return (
    <div
      className={`${sizes[variant]} w-full bg-gray-900 rounded-2xl border border-dashed border-gray-700 flex flex-col items-center justify-center gap-2 text-gray-600 hover:border-gray-500 transition-colors`}
    >
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
      <span className="text-xs font-medium">AD SPACE</span>
      <span className="text-[10px] text-gray-700">광고 문의: ad@housemate.kr</span>
    </div>
  );
}
