import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  Cpu, 
  Sparkles, 
  Workflow, 
  Award, 
  ShoppingBag, 
  MessageSquare,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/hqData';

interface NavbarProps {
  onOpenConsultation: () => void;
  onSelectFloor: (floorId: '3F' | '2F' | '1F') => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation, 
  onSelectFloor,
  activeSection 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => scrollTo('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300 font-mono">
                {BRAND_CONFIG.name}
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                3F HQ
              </span>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline font-sans">
              AI × 전략 × 제작 × 전환 × 확장 × 성과
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-medium text-slate-300">
          <button 
            onClick={() => scrollTo('building-blueprint')}
            className={`px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition ${activeSection === 'blueprint' ? 'text-indigo-400 bg-slate-800/80 font-semibold' : ''}`}
          >
            🏛️ HQ 빌딩 조감도
          </button>

          <button 
            onClick={() => scrollTo('building-view')}
            className={`px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition ${activeSection === 'building' ? 'text-indigo-400 bg-slate-800/80 font-semibold' : ''}`}
          >
            🏢 층별 SOP 투어
          </button>
          
          <button 
            onClick={() => scrollTo('simulator')}
            className={`px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition flex items-center gap-1.5 ${activeSection === 'simulator' ? 'text-cyan-400 bg-slate-800/80 font-semibold' : ''}`}
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>엔진 시뮬레이터</span>
          </button>

          <button 
            onClick={() => scrollTo('feedback-loop')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition flex items-center gap-1.5"
          >
            <Workflow className="w-4 h-4 text-emerald-400" />
            <span>무한 순환 루프</span>
          </button>

          <button 
            onClick={() => scrollTo('principles')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition flex items-center gap-1.5"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>5대 운영 철학</span>
          </button>

          <button 
            onClick={() => scrollTo('packages')}
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition flex items-center gap-1.5"
          >
            <ShoppingBag className="w-4 h-4 text-purple-400" />
            <span>서비스 패키지</span>
          </button>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenConsultation}
            className="relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition active:scale-95 cursor-pointer bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400"
          >
            <span className="flex items-center gap-1.5">
              <span>프로젝트 의뢰하기</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-6 space-y-2 text-sm">
          <button 
            onClick={() => scrollTo('building-view')}
            className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 flex items-center gap-2"
          >
            🏢 3층 빌딩 구조 탐색
          </button>
          <button 
            onClick={() => scrollTo('simulator')}
            className="w-full text-left px-3 py-2 rounded-lg text-cyan-400 hover:bg-slate-900 flex items-center gap-2"
          >
            <Cpu className="w-4 h-4" />
            엔진 파이프라인 시뮬레이터
          </button>
          <button 
            onClick={() => scrollTo('feedback-loop')}
            className="w-full text-left px-3 py-2 rounded-lg text-emerald-400 hover:bg-slate-900 flex items-center gap-2"
          >
            <Workflow className="w-4 h-4" />
            제작-성과 무한 순환 시스템
          </button>
          <button 
            onClick={() => scrollTo('principles')}
            className="w-full text-left px-3 py-2 rounded-lg text-amber-400 hover:bg-slate-900 flex items-center gap-2"
          >
            <Award className="w-4 h-4" />
            5대 운영 원칙 (SOP)
          </button>
          <button 
            onClick={() => scrollTo('packages')}
            className="w-full text-left px-3 py-2 rounded-lg text-purple-400 hover:bg-slate-900 flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            상품 패키지 & 가격
          </button>
          <div className="pt-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
              className="w-full py-2.5 rounded-xl bg-indigo-600 font-semibold text-center text-white"
            >
              지금 프로젝트 의뢰하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
