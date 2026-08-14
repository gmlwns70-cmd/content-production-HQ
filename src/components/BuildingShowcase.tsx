import React, { useState } from 'react';
import { 
  Building2, 
  Maximize2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Search, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Target, 
  PenTool, 
  Image as ImageIcon, 
  Share2, 
  RefreshCw,
  Eye,
  Info,
  X
} from 'lucide-react';
import { hqBuildingCutaway } from '../assets/images';
import { FloorId, EngineSOP } from '../types';
import { FLOORS_DATA, ENGINES_SOP_DATA } from '../data/hqData';

interface BuildingShowcaseProps {
  selectedFloor: FloorId;
  onSelectFloor: (floorId: FloorId) => void;
  onSelectEngine: (engine: EngineSOP) => void;
}

export const BuildingShowcase: React.FC<BuildingShowcaseProps> = ({
  selectedFloor,
  onSelectFloor,
  onSelectEngine
}) => {
  const [hoveredFloor, setHoveredFloor] = useState<FloorId | null>(null);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  const activeFloor = hoveredFloor || selectedFloor;

  const flowSteps = [
    { label: '의뢰 접수', floor: '3F', icon: <Search className="w-3.5 h-3.5 text-indigo-400" /> },
    { label: '전략 수립', floor: '3F HQ', icon: <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" /> },
    { label: '콘텐츠 제작', floor: '2F', icon: <PenTool className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: '발행 · 전환', floor: '2F', icon: <Target className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: '확장 · 성과 분석', floor: '1F', icon: <Layers className="w-3.5 h-3.5 text-cyan-400" /> },
    { label: '성과 피드백 & 시스템 개선', floor: '3F HQ', icon: <RefreshCw className="w-3.5 h-3.5 text-purple-400" /> },
  ];

  return (
    <section id="building-blueprint" className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Callout Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>CONTENT PRODUCTION HQ ARCHITECTURE BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              콘텐츠 제작본부 HQ 빌딩 구조도
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              <strong className="text-indigo-300">전략은 3층에서</strong>, <strong className="text-emerald-300">제작과 전환은 2층에서</strong>, <strong className="text-cyan-300">확장과 성과는 1층에서!</strong> 기획부터 성과 환류까지 하나의 시스템으로 작동합니다.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsZoomModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition cursor-pointer shadow-lg active:scale-95"
            >
              <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>HQ 조감도 확대 보기</span>
            </button>
          </div>
        </div>

        {/* Blueprint Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Architectural Cutaway Image */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl group">
              
              {/* HQ Building Image */}
              <img 
                src={hqBuildingCutaway} 
                alt="CONTENT PRODUCTION HQ 3-Story Building Cutaway Architecture"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40 pointer-events-none"></div>

              {/* Floating Building Title Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-700 backdrop-blur-md text-xs font-mono font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>HQ CONTENT PRODUCTION HQ</span>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-950/80 border border-indigo-500/50 text-indigo-300 backdrop-blur-md">
                  3-STORY VIRTUAL TOWER
                </span>
              </div>

              {/* Interactive Floor Overlay Hotspots */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
                
                {/* 3F Hotspot Zone (Top 35%) */}
                <div 
                  onClick={() => onSelectFloor('3F')}
                  onMouseEnter={() => setHoveredFloor('3F')}
                  onMouseLeave={() => setHoveredFloor(null)}
                  className={`cursor-pointer transition-all duration-300 rounded-2xl p-3 sm:p-4 border backdrop-blur-[2px] flex items-start justify-between ${
                    activeFloor === '3F' 
                      ? 'bg-indigo-950/70 border-indigo-400 shadow-lg shadow-indigo-950/80 ring-2 ring-indigo-500/40' 
                      : 'bg-slate-950/40 border-slate-700/50 hover:bg-indigo-950/50 hover:border-indigo-500/70'
                  }`}
                  style={{ height: '30%' }}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-indigo-600 text-white shadow-md">
                        3F
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white drop-shadow-md">
                        HQ 본부층 (두뇌 & 전략 컨트롤타워)
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-indigo-200 hidden sm:block">
                      의뢰 접수 → 전략 수립 → 5개 전문 엔진 배정 → 6대 QC 검수 → 시스템 진화
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900/80 text-indigo-300 border border-indigo-500/40 shrink-0">
                    전략 · 관리 · 최종 검수
                  </span>
                </div>

                {/* 2F Hotspot Zone (Middle 35%) */}
                <div 
                  onClick={() => onSelectFloor('2F')}
                  onMouseEnter={() => setHoveredFloor('2F')}
                  onMouseLeave={() => setHoveredFloor(null)}
                  className={`cursor-pointer transition-all duration-300 rounded-2xl p-3 sm:p-4 border backdrop-blur-[2px] flex items-start justify-between ${
                    activeFloor === '2F' 
                      ? 'bg-emerald-950/70 border-emerald-400 shadow-lg shadow-emerald-950/80 ring-2 ring-emerald-500/40' 
                      : 'bg-slate-950/40 border-slate-700/50 hover:bg-emerald-950/50 hover:border-emerald-500/70'
                  }`}
                  style={{ height: '32%' }}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-emerald-600 text-white shadow-md">
                        2F
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white drop-shadow-md">
                        핵심 제작 · 출고 엔진층 (콘텐츠 제작부터 전환까지)
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1 hidden sm:flex">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900/90 text-emerald-300 border border-emerald-500/40">KMONG BLOG V1</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900/90 text-emerald-300 border border-emerald-500/40">VISUAL ENGINE</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900/90 text-emerald-300 border border-emerald-500/40">PUBLISH ENGINE</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900/90 text-emerald-300 border border-emerald-500/40">CONVERSION ENGINE</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900/80 text-emerald-300 border border-emerald-500/40 shrink-0">
                    1이미지=1파일 출고
                  </span>
                </div>

                {/* 1F Hotspot Zone (Bottom 30%) */}
                <div 
                  onClick={() => onSelectFloor('1F')}
                  onMouseEnter={() => setHoveredFloor('1F')}
                  onMouseLeave={() => setHoveredFloor(null)}
                  className={`cursor-pointer transition-all duration-300 rounded-2xl p-3 sm:p-4 border backdrop-blur-[2px] flex items-start justify-between ${
                    activeFloor === '1F' 
                      ? 'bg-cyan-950/70 border-cyan-400 shadow-lg shadow-cyan-950/80 ring-2 ring-cyan-500/40' 
                      : 'bg-slate-950/40 border-slate-700/50 hover:bg-cyan-950/50 hover:border-cyan-500/70'
                  }`}
                  style={{ height: '30%' }}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-cyan-600 text-white shadow-md">
                        1F
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white drop-shadow-md">
                        확장 · 성과 엔진층 (재가공 · 5단계 퍼널 분석)
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-cyan-200 hidden sm:block">
                      REPURPOSE ENGINE (YouTube, Shorts, SNS 6X 확장) + PERFORMANCE ENGINE (퍼널 누수 진단)
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900/80 text-cyan-300 border border-cyan-500/40 shrink-0">
                    6X 멀티채널 확장
                  </span>
                </div>

              </div>

            </div>

            {/* Bottom Slogan / Mission Box */}
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-indigo-400 font-bold">OUR MISSION</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    “전략이 있는 콘텐츠로 사람의 마음을 움직이고, 비즈니스의 성과를 만든다.”
                  </div>
                </div>
              </div>
              <span className="font-mono text-[10px] text-slate-400 hidden sm:inline-block">
                당신의 콘텐츠가 성과가 되는 곳
              </span>
            </div>
          </div>

          {/* Right Column: Detailed Floor Panel & Direct SOP Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Active Floor Card */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-sm font-black px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                      {activeFloor}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {FLOORS_DATA[activeFloor].name}
                      </h3>
                      <p className="text-xs text-slate-400">{FLOORS_DATA[activeFloor].subtitle}</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {FLOORS_DATA[activeFloor].description}
                </p>

                {/* Engine list of this floor */}
                <div className="space-y-2 mb-4">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                    배정된 전문 엔진 및 모듈 (클릭하여 SOP 열람):
                  </span>
                  <div className="space-y-1.5 pt-1">
                    {FLOORS_DATA[activeFloor].engineIds.map((engineId) => {
                      const engine = ENGINES_SOP_DATA[engineId];
                      if (!engine) return null;
                      return (
                        <button
                          key={engineId}
                          onClick={() => onSelectEngine(engine)}
                          className="w-full text-left p-2.5 rounded-xl bg-slate-950 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-500/50 transition flex items-center justify-between group cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                            <span className="text-xs font-semibold text-white group-hover:text-indigo-300">
                              {engine.engineName}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 group-hover:text-indigo-400 flex items-center gap-1">
                            {engine.codeName}
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Floor Role Highlights */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-1.5">
                  1급 출고 운영 기준:
                </span>
                <ul className="space-y-1 text-xs text-slate-400">
                  {FLOORS_DATA[activeFloor].role.slice(0, 3).map((r, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Quick Floor Switcher Tabs */}
            <div className="grid grid-cols-3 gap-2">
              {(['3F', '2F', '1F'] as FloorId[]).map((f) => (
                <button
                  key={f}
                  onClick={() => onSelectFloor(f)}
                  className={`py-3 rounded-2xl text-xs font-bold font-mono transition cursor-pointer border flex flex-col items-center gap-0.5 ${
                    selectedFloor === f 
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30' 
                      : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 border-slate-800'
                  }`}
                >
                  <span className="text-sm font-black">{f}</span>
                  <span className="text-[10px] font-sans font-medium">
                    {f === '3F' ? '두뇌·전략' : f === '2F' ? '핵심제작' : '확장·성과'}
                  </span>
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Continuous Flow Chart */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                FLOW PIPELINE
              </span>
              <h3 className="text-sm font-bold text-white">콘텐츠 생산 흐름도 (3F ↔ 2F ↔ 1F 무한 순환)</h3>
            </div>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">END-TO-END QUALITY ASSURANCE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {flowSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-2 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-slate-500">0{idx + 1}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-indigo-400 border border-slate-800 font-semibold">
                    {step.floor}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  {step.icon}
                  <span className="text-xs font-bold text-white leading-tight">{step.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen High-Res Zoom Inspector Modal */}
      {isZoomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div 
            className="bg-slate-950 border border-slate-800 rounded-3xl w-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-indigo-400" />
                <div>
                  <h3 className="text-base font-bold text-white">
                    CONTENT PRODUCTION HQ 빌딩 건축 조감도 (Full Blueprint)
                  </h3>
                  <p className="text-xs text-slate-400">3개 층 구조 및 5대 핵심 생산 흐름 상세도</p>
                </div>
              </div>
              <button
                onClick={() => setIsZoomModalOpen(false)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-slate-950">
              <img 
                src={hqBuildingCutaway} 
                alt="Full HQ Building Architecture Blueprint"
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain rounded-2xl border border-slate-800 shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-indigo-400">전략(3F) · 제작·전환(2F) · 확장·성과(1F)</span>
              <button
                onClick={() => setIsZoomModalOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
