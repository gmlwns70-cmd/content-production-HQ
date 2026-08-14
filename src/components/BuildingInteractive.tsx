import React, { useState } from 'react';
import { 
  Building2, 
  ArrowDown, 
  ArrowUp, 
  SearchCheck, 
  Compass, 
  GitFork, 
  ShieldCheck, 
  RefreshCw, 
  PenTool, 
  Image as ImageIcon, 
  Send, 
  Target, 
  Layers, 
  BarChart3,
  Info,
  ChevronRight,
  Sparkles,
  Zap,
  Activity
} from 'lucide-react';
import { FloorId, EngineSOP } from '../types';
import { FLOORS_DATA, ENGINES_SOP_DATA } from '../data/hqData';

interface BuildingInteractiveProps {
  selectedFloor: FloorId;
  onSelectFloor: (floorId: FloorId) => void;
  onSelectEngine: (engine: EngineSOP) => void;
}

export const BuildingInteractive: React.FC<BuildingInteractiveProps> = ({
  selectedFloor,
  onSelectFloor,
  onSelectEngine
}) => {
  const currentFloorData = FLOORS_DATA[selectedFloor];

  const getEngineIcon = (iconName: string) => {
    switch (iconName) {
      case 'SearchCheck': return <SearchCheck className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'GitFork': return <GitFork className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5" />;
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'Image': return <ImageIcon className="w-5 h-5" />;
      case 'Send': return <Send className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="building-view" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>HQ VIRTUAL ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            3층 디지털 본사 가상 투어
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            각 층을 선택하여 배정된 전문 생산 엔진과 1급 표준 운영 절차(SOP)를 확인하세요.
          </p>
        </div>

        {/* Building & Floor Selector Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3-Story Building Elevator & Floor Selector */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-400">BUILDING ELEVATOR ACTIVE</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  현재 위치: <strong className="text-indigo-400">{selectedFloor}</strong>
                </span>
              </div>

              {/* 3F Button */}
              <div 
                onClick={() => onSelectFloor('3F')}
                className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border mb-3 relative overflow-hidden ${
                  selectedFloor === '3F' 
                    ? 'bg-indigo-950/60 border-indigo-500 shadow-lg shadow-indigo-950' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-black font-mono ${selectedFloor === '3F' ? 'text-indigo-400' : 'text-slate-500'}`}>
                      3F
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        CONTENT PRODUCTION HQ
                        {selectedFloor === '3F' && <span className="w-2 h-2 rounded-full bg-indigo-400"></span>}
                      </h4>
                      <p className="text-xs text-slate-400">두뇌 & 전략 컨트롤타워 (5개 모듈)</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${selectedFloor === '3F' ? 'text-indigo-400 translate-x-1' : 'text-slate-600'}`} />
                </div>
              </div>

              {/* Down Arrow Flow Indicator */}
              <div className="flex justify-center -my-1 text-slate-600">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>

              {/* 2F Button */}
              <div 
                onClick={() => onSelectFloor('2F')}
                className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border mb-3 relative overflow-hidden ${
                  selectedFloor === '2F' 
                    ? 'bg-emerald-950/60 border-emerald-500 shadow-lg shadow-emerald-950' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-black font-mono ${selectedFloor === '2F' ? 'text-emerald-400' : 'text-slate-500'}`}>
                      2F
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        PRODUCTION FLOOR
                        {selectedFloor === '2F' && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
                      </h4>
                      <p className="text-xs text-slate-400">핵심 제작·출고 엔진층 (4개 엔진)</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${selectedFloor === '2F' ? 'text-emerald-400 translate-x-1' : 'text-slate-600'}`} />
                </div>
              </div>

              {/* Down Arrow Flow Indicator */}
              <div className="flex justify-center -my-1 text-slate-600">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>

              {/* 1F Button */}
              <div 
                onClick={() => onSelectFloor('1F')}
                className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border relative overflow-hidden ${
                  selectedFloor === '1F' 
                    ? 'bg-cyan-950/60 border-cyan-500 shadow-lg shadow-cyan-950' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-black font-mono ${selectedFloor === '1F' ? 'text-cyan-400' : 'text-slate-500'}`}>
                      1F
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        GROWTH FLOOR
                        {selectedFloor === '1F' && <span className="w-2 h-2 rounded-full bg-cyan-400"></span>}
                      </h4>
                      <p className="text-xs text-slate-400">확장·성과 엔진층 (2개 엔진)</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${selectedFloor === '1F' ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                </div>
              </div>

              {/* Upward Feedback Loop Banner */}
              <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <ArrowUp className="w-4 h-4 text-indigo-400 animate-pulse" />
                  <span>1F 성과 데이터 → 3F HQ 지속 피드백</span>
                </div>
                <span className="font-mono text-[10px] text-indigo-400 font-bold">SOP AUTO-UPGRADE</span>
              </div>
            </div>

            {/* Selected Floor Overview Banner */}
            <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 text-xs space-y-2">
              <div className="font-bold text-slate-200 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-slate-400" />
                <span>{selectedFloor} 층별 핵심 역할 정의</span>
              </div>
              <ul className="space-y-1.5 text-slate-400 pt-1">
                {currentFloorData.role.map((r, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-slate-600 font-mono">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Engine Cards of the Selected Floor */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Header of Active Floor */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {currentFloorData.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {currentFloorData.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-1">{currentFloorData.subtitle}</p>
              </div>
              <span className="text-xs text-slate-500">엔진 카드 클릭 시 상세 SOP 열람</span>
            </div>

            {/* Engines Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentFloorData.engineIds.map((engineId) => {
                const engine = ENGINES_SOP_DATA[engineId];
                if (!engine) return null;

                return (
                  <div
                    key={engineId}
                    onClick={() => onSelectEngine(engine)}
                    className="group bg-slate-950/90 hover:bg-slate-950 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-indigo-400 group-hover:text-cyan-300 group-hover:border-indigo-500/50 transition">
                          {getEngineIcon(engine.icon)}
                        </div>
                        <span className="font-mono text-[10px] text-slate-500 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                          {engine.codeName}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition">
                        {engine.engineName}
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {engine.shortDesc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200">
                      <span className="text-[11px] text-indigo-400 flex items-center gap-1 font-medium">
                        SOP 표준 규격 보기
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">100% QA</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 2F Special Notice for Visual Engine & Kmong Blog Engine */}
            {selectedFloor === '2F' && (
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>오늘 확정된 2F 핵심 출고 규격</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  • <strong>VISUAL ENGINE</strong>: 이미지 1개 = 파일 1개 = 바로 게시 가능 (사용자 재편집 불필요). 내부 라벨 절대 미표시.
                  <br />
                  • <strong>KMONG BLOG ENGINE V1</strong>: 키워드 개수가 아닌 "독자의 신뢰 및 다음 행동(문의/상담/구매)"으로 완성.
                </p>
              </div>
            )}

            {/* 1F Special Notice for Repurpose & Funnel */}
            {selectedFloor === '1F' && (
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-300 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>1F 마스터 콘텐츠 다각화 및 5단계 퍼널 분석</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  • <strong>MASTER CONTENT 1개</strong> → YouTube, Shorts, Reels, Instagram, 카드뉴스, 광고카피로 6대 채널 확장.
                  <br />
                  • <strong>5단계 퍼널</strong>: 노출 → 클릭 → 체류 → 행동 → 전환 각 단계별 병목 원인 진단.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
