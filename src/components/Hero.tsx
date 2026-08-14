import React from 'react';
import { 
  Building2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  RefreshCcw,
  Zap,
  Maximize2
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/hqData';
import { hqBuildingCutaway } from '../assets/images';

interface HeroProps {
  onExploreBuilding: () => void;
  onOpenSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreBuilding, onOpenSimulator }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-24 bg-slate-950 text-white border-b border-slate-800/80">
      {/* Background Tech Grid & Glow Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 shadow-inner backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono font-medium tracking-wide text-indigo-300">CONTENT PRODUCTION HQ</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">AI 기반 3F 가상 생산 빌딩 가동 중</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mt-8 text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            콘텐츠를 만드는 곳에서, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              성과를 만드는 곳으로.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto pt-2">
            “전략은 3층에서, 제작과 전환은 2층에서, 확장과 성과는 1층에서!”
          </p>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800 font-sans">
            {BRAND_CONFIG.mainDefinition}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreBuilding}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 group transition active:scale-95 cursor-pointer"
          >
            <Building2 className="w-4 h-4 text-indigo-200" />
            <span>3층 HQ 빌딩 구조 탐색하기</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenSimulator}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer"
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>AI 생산 파이프라인 시뮬레이터</span>
          </button>
        </div>

        {/* Hero Architectural Cutaway Feature Banner */}
        <div className="mt-14 relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Image Preview Box */}
            <div className="lg:col-span-7 relative group cursor-pointer" onClick={onExploreBuilding}>
              <img 
                src={hqBuildingCutaway} 
                alt="CONTENT PRODUCTION HQ Architectural Cutaway"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950"></div>
              
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-700 backdrop-blur-md text-xs font-mono font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>CONTENT PRODUCTION HQ 3F TOWER</span>
              </div>
            </div>

            {/* Quick Slogan & Floor Highlights */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>INTEGRATED 3-STORY SYSTEM</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                전략부터 제작, 전환, 확장, 성과까지 하나의 시스템으로 완성합니다.
              </h3>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200">
                  <span className="font-mono font-bold text-indigo-400 px-1.5 py-0.5 rounded bg-indigo-950 border border-indigo-500/50">3F</span>
                  <span><strong>전략 컨트롤타워:</strong> 프로젝트 분석, 키워드·CTA 앵글, 6대 QC 승인</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                  <span className="font-mono font-bold text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-500/50">2F</span>
                  <span><strong>핵심 제작·출고:</strong> KMONG 블로그 V1, 1이미지=1파일 비주얼, 전환 오퍼</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200">
                  <span className="font-mono font-bold text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/50">1F</span>
                  <span><strong>확장·성과:</strong> YouTube/Shorts 6대 확장, 5단계 퍼널 분석, 3F 루프 환류</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onExploreBuilding}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <span>인터랙티브 층별 조감도 자세히 보기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 3-Story Building Quick Structure Snapshot */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* 3F Card */}
          <div className="relative group bg-slate-900/80 hover:bg-slate-900 border border-indigo-500/30 hover:border-indigo-500/60 rounded-2xl p-6 transition-all duration-300 shadow-lg shadow-indigo-950/40">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-black text-indigo-400 font-mono">3F</span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                두뇌 & 컨트롤타워
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">CONTENT PRODUCTION HQ</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              고객 분석 → 전략 수립 → 5개 전문 엔진 배정 → 6대 QC 검수 → 시스템 진화 총괄
            </p>
            <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-indigo-300">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>무결점 팩트체크 & 최종 승인</span>
            </div>
          </div>

          {/* 2F Card */}
          <div className="relative group bg-slate-900/80 hover:bg-slate-900 border border-emerald-500/30 hover:border-emerald-500/60 rounded-2xl p-6 transition-all duration-300 shadow-lg shadow-emerald-950/40">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-black text-emerald-400 font-mono">2F</span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                핵심 제작·출고 층
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">PRODUCTION FLOOR</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              KMONG 블로그 엔진 V1 + 비주얼 엔진 + 플랫폼 최적 발행 + 전환 오퍼 설계
            </p>
            <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-emerald-300">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>1이미지=1파일 독립 출고 규격</span>
            </div>
          </div>

          {/* 1F Card */}
          <div className="relative group bg-slate-900/80 hover:bg-slate-900 border border-cyan-500/30 hover:border-cyan-500/60 rounded-2xl p-6 transition-all duration-300 shadow-lg shadow-cyan-950/40">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-black text-cyan-400 font-mono">1F</span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                확장·성과 엔진층
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">GROWTH FLOOR</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              마스터 콘텐츠 1개 → YouTube, Shorts, SNS 6대 채널 확장 + 5단계 퍼널 분석
            </p>
            <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-cyan-300">
              <RefreshCcw className="w-3.5 h-3.5 text-cyan-400" />
              <span>성과 데이터 → 3F HQ 피드백 환류</span>
            </div>
          </div>

        </div>

        {/* Highlight Metrics */}
        <div className="mt-12 py-6 px-8 rounded-2xl bg-slate-900/40 border border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-white font-mono">100%</div>
            <div className="text-xs text-slate-400 mt-1">즉시 사용 가능 출고 규격</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-indigo-400 font-mono">1 → 6</div>
            <div className="text-xs text-slate-400 mt-1">멀티채널 자산 확장 배수</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-emerald-400 font-mono">5단계</div>
            <div className="text-xs text-slate-400 mt-1">노출-전환 정밀 퍼널 분석</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-cyan-400 font-mono">Loop</div>
            <div className="text-xs text-slate-400 mt-1">제작→성과→학습 무한진화</div>
          </div>
        </div>

      </div>
    </section>
  );
};

