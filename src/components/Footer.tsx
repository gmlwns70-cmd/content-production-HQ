import React from 'react';
import { Building2, ArrowUp, Sparkles, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { BRAND_CONFIG } from '../data/hqData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base tracking-tight font-mono">
                {BRAND_CONFIG.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {BRAND_CONFIG.mainDefinition}
            </p>
            <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px] pt-1">
              <span>{BRAND_CONFIG.subtitle}</span>
            </div>
          </div>

          {/* Col 2: 3-Story Building Floors */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">3F 가상 빌딩 구조</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>• 3F: 두뇌 & 전략 컨트롤타워 (HQ)</li>
              <li>• 2F: 핵심 제작·출고 엔진층 (KMONG V1)</li>
              <li>• 1F: 확장·성과 5단계 퍼널층 (GROWTH)</li>
              <li>• LOOP: 성과 데이터 기반 SOP 무한 진화</li>
            </ul>
          </div>

          {/* Col 3: Core Principles & Standard */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">1급 출고 규격 준수</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>• 1이미지 = 1파일 독립 출고</li>
              <li>• 내부 제작 라벨 절대 미표시 원칙</li>
              <li>• AI 번역투/상투적 문체 100% 제거</li>
              <li>• 6대 QC 검수 통과 완료품만 출고</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved. Built with AI & Strategic Craftsmanship.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition"
          >
            <span>맨 위로 가기</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
