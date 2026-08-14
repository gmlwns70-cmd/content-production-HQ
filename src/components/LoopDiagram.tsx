import React from 'react';
import { 
  Workflow, 
  ArrowDown, 
  ArrowUp, 
  RefreshCw, 
  TrendingUp, 
  Search, 
  MousePointerClick, 
  Clock, 
  UserCheck, 
  PhoneCall,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const LoopDiagram: React.FC = () => {
  const funnelSteps = [
    {
      step: '01. 노출 (Impression)',
      issue: '노출이 낮다면?',
      solution: '주제 선정 / 검색 수요 / 타깃 키워드 재검토',
      icon: <Search className="w-4 h-4 text-indigo-400" />
    },
    {
      step: '02. 클릭 (Click / CTR)',
      issue: '노출은 되는데 클릭이 낮다면?',
      solution: '제목 매력도 / 대표 썸네일 / 후킹 카피 재검토',
      icon: <MousePointerClick className="w-4 h-4 text-cyan-400" />
    },
    {
      step: '03. 체류 (Dwell Time)',
      issue: '클릭은 되는데 체류가 낮다면?',
      solution: '도입부 훅 / 콘텐츠 구조 / 가독성 / 이미지 배치 재검토',
      icon: <Clock className="w-4 h-4 text-emerald-400" />
    },
    {
      step: '04. 행동 (Action / CTA)',
      issue: '읽기는 하는데 행동하지 않는다면?',
      solution: 'CTA 위치 / 거절 불가 오퍼 / 신뢰 요소 / 반론 제거 재검토',
      icon: <UserCheck className="w-4 h-4 text-amber-400" />
    },
    {
      step: '05. 전환 (Conversion / Deal)',
      issue: '문의는 있는데 구매가 낮다면?',
      solution: '상품 제안 / 가격 정책 / 상담 프로세스까지 심층 확장 분석',
      icon: <PhoneCall className="w-4 h-4 text-purple-400" />
    }
  ];

  return (
    <section id="feedback-loop" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>CLOSED-LOOP CONTINUOUS EVOLUTION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            제작 → 성과 → 학습 → 개선 → 제작 무한 순환
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            우리 회사의 핵심 경쟁력은 단순한 엔진 개수가 아닌, <strong>모든 엔진이 유기적으로 연결되어 데이터로 자동 진화하는 순환 구조</strong>입니다.
          </p>
        </div>

        {/* Dynamic Circular Flow Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 3-Story Loop Sequence */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative space-y-4">
            
            {/* 3F Box */}
            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-indigo-400">3F HQ CONTROL TOWER</span>
                <span className="text-[11px] text-slate-400">의뢰 접수 → 분석 → 전략 수립</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                전문 엔진 최적 라우팅 및 1급 출고 규격 검수
              </div>
            </div>

            {/* Downward Arrow */}
            <div className="flex justify-center text-slate-500">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* 2F Box */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-emerald-400">2F PRODUCTION FLOOR</span>
                <span className="text-[11px] text-slate-400">실질 제작·출고 라인</span>
              </div>
              <div className="mt-2 text-xs text-slate-300 grid grid-cols-2 gap-2">
                <div className="p-2 rounded bg-slate-900 border border-slate-800">✍️ BLOG ENGINE V1</div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">🎨 VISUAL ENGINE (독립출고)</div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">🚀 PUBLISH ENGINE (조립)</div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">🎯 CONVERSION ENGINE (오퍼)</div>
              </div>
            </div>

            {/* Downward Arrow */}
            <div className="flex justify-center text-slate-500">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* 1F Box */}
            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-cyan-400">1F GROWTH FLOOR</span>
                <span className="text-[11px] text-slate-400">확장 & 5단계 퍼널 분석</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-white flex items-center justify-between">
                <span>♻️ REPURPOSE ENGINE</span>
                <span className="text-slate-400 text-xs">→</span>
                <span>📊 PERFORMANCE ENGINE</span>
              </div>
            </div>

            {/* Upward Ascending Loop Arrow */}
            <div className="pt-2 p-3 rounded-xl bg-gradient-to-r from-purple-950/60 to-indigo-950/60 border border-purple-500/40 flex items-center justify-between text-xs text-purple-300">
              <div className="flex items-center gap-2">
                <ArrowUp className="w-4 h-4 text-purple-400 animate-pulse" />
                <span className="font-semibold">성과 데이터가 3F HQ로 재상승하여 전사 SOP 자동 진화</span>
              </div>
              <span className="font-mono text-[10px] font-bold text-white px-2 py-0.5 rounded bg-purple-900/80">
                LOOP 100%
              </span>
            </div>

          </div>

          {/* Right Column: 5-Stage Performance Funnel Analytics Breakdown */}
          <div className="lg:col-span-6 space-y-3">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
                5단계 퍼널 정밀 진단 시스템 (PERFORMANCE ENGINE)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                단순 조회수 측정이 아닌, 각 단계의 이탈 원인을 수학적으로 규명하고 처방합니다.
              </p>
            </div>

            <div className="space-y-2.5">
              {funnelSteps.map((f, i) => (
                <div 
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition space-y-1 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-white">
                      {f.icon}
                      <span>{f.step}</span>
                    </div>
                    <span className="text-[11px] text-amber-400 font-medium">{f.issue}</span>
                  </div>
                  <p className="text-slate-400 pl-6 text-[11px]">
                    <strong className="text-emerald-400">진단 처방:</strong> {f.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
