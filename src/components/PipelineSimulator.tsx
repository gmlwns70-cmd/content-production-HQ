import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  SearchCheck, 
  PenTool, 
  Image as ImageIcon, 
  Send, 
  Target, 
  Share2, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Copy,
  Check,
  Download,
  Terminal
} from 'lucide-react';
import { SAMPLE_SIMULATIONS } from '../data/hqData';

export const PipelineSimulator: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_SIMULATIONS[0]);
  const [customTitle, setCustomTitle] = useState(SAMPLE_SIMULATIONS[0].title);
  const [customTarget, setCustomTarget] = useState(SAMPLE_SIMULATIONS[0].target);
  const [customGoal, setCustomGoal] = useState(SAMPLE_SIMULATIONS[0].goal);
  const [customKeywords, setCustomKeywords] = useState(SAMPLE_SIMULATIONS[0].keywords);

  const [isRunning, setIsRunning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const steps = [
    {
      floor: '3F',
      engine: 'PROJECT ANALYSIS & STRATEGY',
      title: '3F 전략 수립 및 엔진 디스패치',
      desc: '의뢰 분석 → 타깃 결제 장벽 분해 → 검색의도 및 CTA 앵글 설계',
      icon: <SearchCheck className="w-4 h-4 text-indigo-400" />
    },
    {
      floor: '2F',
      engine: 'KMONG BLOG ENGINE V1',
      title: '2F 고품질 블로그 원고 생산',
      desc: 'AI 문체 제로화, 강력한 Hooking 서론, 설득 3단계 본문 및 SEO 최적화',
      icon: <PenTool className="w-4 h-4 text-emerald-400" />
    },
    {
      floor: '2F',
      engine: 'VISUAL ENGINE',
      title: '2F 독립 비주얼 에셋 출고 (1이미지=1파일)',
      desc: '썸네일/공감/정보/CTA 독립 파일 세트 & 본문 삽입 가이드 (내부라벨 절대 미표시)',
      icon: <ImageIcon className="w-4 h-4 text-emerald-400" />
    },
    {
      floor: '2F',
      engine: 'PUBLISH & CONVERSION',
      title: '2F 플랫폼 시선 흐름 조립 & 전환 오퍼',
      desc: '"왜 지금 연락해야 하는가?" 거절 불가 오퍼 및 반론 사전 제거 설계',
      icon: <Target className="w-4 h-4 text-emerald-400" />
    },
    {
      floor: '1F',
      engine: 'REPURPOSE ENGINE',
      title: '1F 6대 멀티채널 자산 확장',
      desc: 'YouTube 대본, Shorts 60초 컷, Instagram 카드뉴스, 광고 카피 5종 변환',
      icon: <Layers className="w-4 h-4 text-cyan-400" />
    },
    {
      floor: '1F → 3F',
      engine: 'PERFORMANCE & HQ LOOP',
      title: '1F 5단계 퍼널 분석 → 3F HQ SOP 진화',
      desc: '노출-클릭-체류-행동-전환 누수 진단 후 전사 SOP 실시간 업그레이드',
      icon: <RefreshCw className="w-4 h-4 text-purple-400" />
    }
  ];

  const handleSelectSample = (sample: typeof SAMPLE_SIMULATIONS[0]) => {
    if (isRunning) return;
    setSelectedSample(sample);
    setCustomTitle(sample.title);
    setCustomTarget(sample.target);
    setCustomGoal(sample.goal);
    setCustomKeywords(sample.keywords);
    setActiveStepIndex(-1);
    setCompletedSteps([]);
  };

  const handleStartPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStepIndex(0);
    setCompletedSteps([]);

    let current = 0;
    const interval = setInterval(() => {
      setCompletedSteps(prev => [...prev, current]);
      current += 1;
      if (current < steps.length) {
        setActiveStepIndex(current);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setActiveStepIndex(steps.length - 1);
      }
    }, 1200);
  };

  const handleReset = () => {
    setIsRunning(false);
    setActiveStepIndex(-1);
    setCompletedSteps([]);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="simulator" className="py-20 bg-slate-950 text-white relative border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>LIVE PIPELINE SIMULATOR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            AI 기반 실시간 생산 파이프라인 시뮬레이터
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            프로젝트 의뢰 정보를 입력하고 3F 전략 수립부터 2F 제작, 1F 멀티채널 확장 및 HQ 피드백 루프까지 원클릭으로 체험해 보세요.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Input Control Panel */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Sample Selector */}
            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                1. 업종별 샘플 프로젝트 선택
              </span>
              <div className="grid grid-cols-1 gap-2">
                {SAMPLE_SIMULATIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSelectSample(s)}
                    disabled={isRunning}
                    className={`text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${
                      selectedSample.id === s.id
                        ? 'bg-indigo-950/60 border-indigo-500 text-white font-medium shadow-md shadow-indigo-950'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-[10px] text-indigo-400 font-mono font-bold">{s.category}</div>
                      <div className="text-xs mt-0.5 truncate">{s.title}</div>
                    </div>
                    {selectedSample.id === s.id && <span className="w-2 h-2 rounded-full bg-indigo-400"></span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form Fields */}
            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                2. 프로젝트 의뢰 파라미터
              </span>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400">프로젝트 / 비즈니스명</label>
                <input 
                  type="text" 
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  disabled={isRunning}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400">타깃 고객 및 핵심 결핍(Pain Point)</label>
                <input 
                  type="text" 
                  value={customTarget}
                  onChange={(e) => setCustomTarget(e.target.value)}
                  disabled={isRunning}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400">핵심 전환 목표 (Primary Action)</label>
                <input 
                  type="text" 
                  value={customGoal}
                  onChange={(e) => setCustomGoal(e.target.value)}
                  disabled={isRunning}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400">타깃 검색 키워드</label>
                <input 
                  type="text" 
                  value={customKeywords}
                  onChange={(e) => setCustomKeywords(e.target.value)}
                  disabled={isRunning}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono text-[11px]"
                />
              </div>

              {/* Action Trigger Buttons */}
              <div className="pt-2 flex gap-3">
                <button
                  onClick={handleStartPipeline}
                  disabled={isRunning}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{isRunning ? '전 층 엔진 가동 중...' : '3F → 1F 파이프라인 가동'}</span>
                </button>

                <button
                  onClick={handleReset}
                  disabled={isRunning || activeStepIndex === -1}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer disabled:opacity-40"
                  title="초기화"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Pipeline Step Progress Indicator */}
            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2.5">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                실시간 층별 파이프라인 상태
              </span>
              <div className="space-y-2 pt-1">
                {steps.map((step, idx) => {
                  const isDone = completedSteps.includes(idx);
                  const isCurrent = activeStepIndex === idx && isRunning;
                  return (
                    <div 
                      key={idx}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-all ${
                        isCurrent 
                          ? 'bg-indigo-950/70 border-indigo-500 text-white animate-pulse' 
                          : isDone 
                            ? 'bg-slate-950 border-emerald-500/40 text-slate-200' 
                            : 'bg-slate-950/50 border-slate-800/80 text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                          {step.floor}
                        </span>
                        <span>{step.title}</span>
                      </div>
                      <div>
                        {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                        {isCurrent && <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />}
                        {!isDone && !isCurrent && <span className="w-2 h-2 rounded-full bg-slate-800"></span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Production Output Feed */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-2xl min-h-[560px] flex flex-col justify-between">
              
              {/* Output Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    HQ PRODUCTION OUTPUT FEED
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  {completedSteps.length === steps.length ? '전 공정 검수 완료 (100% 출고 준비 완료)' : `${completedSteps.length} / ${steps.length} 엔진 완료`}
                </span>
              </div>

              {/* Feed Content Area */}
              <div className="py-4 space-y-5 overflow-y-auto max-h-[500px] text-xs">
                
                {activeStepIndex === -1 && (
                  <div className="py-20 text-center text-slate-500 space-y-3">
                    <Cpu className="w-12 h-12 mx-auto text-slate-700" />
                    <p className="text-sm font-medium text-slate-400">
                      왼쪽에서 파이프라인 가동 버튼을 누르면 3F 전략부터 각 엔진의 실시간 결과물이 생성됩니다.
                    </p>
                    <p className="text-xs text-slate-600">
                      (KMONG 블로그 원고, 독립 비주얼 에셋 세트, 발행 구조, 멀티채널 확장 패키지)
                    </p>
                  </div>
                )}

                {/* Step 0 Output: 3F Strategy */}
                {completedSteps.includes(0) && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/30 space-y-2 animate-fade-in">
                    <div className="flex items-center justify-between text-indigo-400 font-mono font-bold">
                      <span className="flex items-center gap-1.5">
                        <SearchCheck className="w-4 h-4" />
                        [3F HQ] PROJECT ANALYSIS & STRATEGY BRIEF
                      </span>
                      <span className="text-[10px] text-emerald-400">PASSED QC</span>
                    </div>
                    <div className="text-slate-300 space-y-1 pl-2 border-l-2 border-indigo-500/50">
                      <p>• <strong>타깃 심리 장벽</strong>: “과연 비용 대비 실제 효과가 있는가? 믿을 만한 전문점인가?”</p>
                      <p>• <strong>검색의도</strong>: 정보 탐색 → 비교 견적 → 실측 상담 단계로 이동하는 3단 검색 설계</p>
                      <p>• <strong>후킹 앵글</strong>: “실패 없는 {customTitle}을 위한 체크리스트 3가지”</p>
                      <p>• <strong>전환 목표</strong>: {customGoal}</p>
                    </div>
                  </div>
                )}

                {/* Step 1 Output: 2F Blog Post Draft */}
                {completedSteps.includes(1) && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-2 animate-fade-in">
                    <div className="flex items-center justify-between text-emerald-400 font-mono font-bold">
                      <span className="flex items-center gap-1.5">
                        <PenTool className="w-4 h-4" />
                        [2F KMONG BLOG ENGINE V1] 최종 마스터 원고
                      </span>
                      <button 
                        onClick={() => copyToClipboard(`[제목] ${customTitle} 실패 없이 끝내는 3가지 핵심 기준\n\n[도입부]\n"혹시 ${customTarget}에 직면해 막막하지 않으셨나요?"...`, 1)}
                        className="text-[10px] flex items-center gap-1 text-slate-400 hover:text-white"
                      >
                        {copiedIndex === 1 ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>원고 복사</span>
                      </button>
                    </div>
                    <div className="text-slate-300 space-y-1 pl-2 border-l-2 border-emerald-500/50">
                      <p className="font-semibold text-white">제목: {customTitle} 선택 전 반드시 확인해야 할 3가지 체크리스트 (2026 최신)</p>
                      <p className="text-slate-400 italic text-[11px]">
                        "도입부 Hook: 인터넷의 수많은 정보 중 어떤 것이 진짜인지 헷갈리셨다면, 지금 이 글 하나로 기준을 명확히 세워드립니다..."
                      </p>
                      <p className="text-emerald-300 text-[11px]">
                        ✓ AI 특유의 번역투 및 상투적 어조 100% 제거 | ✓ 키워드 밀도 자연어 최적화 완료
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 2 Output: 2F Visual Assets */}
                {completedSteps.includes(2) && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-3 animate-fade-in">
                    <div className="flex items-center justify-between text-emerald-400 font-mono font-bold">
                      <span className="flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4" />
                        [2F VISUAL ENGINE] 1이미지=1파일 독립 출고 에셋 세트
                      </span>
                      <span className="text-[10px] text-amber-400">내부 라벨 비표시 원칙 준수</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-1">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-[10px] font-mono text-indigo-400 font-bold">01_썸네일.png</div>
                        <div className="text-[10px] text-slate-300 mt-1">시선 압도 대표 썸네일</div>
                        <div className="text-[9px] text-slate-500 mt-0.5">글 최상단 배치</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-[10px] font-mono text-emerald-400 font-bold">02_공감비주얼.png</div>
                        <div className="text-[10px] text-slate-300 mt-1">타깃 고통 상황 시각화</div>
                        <div className="text-[9px] text-slate-500 mt-0.5">본문 1단락 직후</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-[10px] font-mono text-cyan-400 font-bold">03_정보도표.png</div>
                        <div className="text-[10px] text-slate-300 mt-1">비교 인포그래픽</div>
                        <div className="text-[9px] text-slate-500 mt-0.5">본문 솔루션 섹션</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-[10px] font-mono text-purple-400 font-bold">04_CTA배너.png</div>
                        <div className="text-[10px] text-slate-300 mt-1">원클릭 문의 배너</div>
                        <div className="text-[9px] text-slate-500 mt-0.5">원고 최하단</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3 Output: 2F Publish & Conversion */}
                {completedSteps.includes(3) && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-2 animate-fade-in">
                    <div className="flex items-center justify-between text-emerald-400 font-mono font-bold">
                      <span className="flex items-center gap-1.5">
                        <Target className="w-4 h-4" />
                        [2F CONVERSION & PUBLISH ENGINE] 오퍼 및 반론 제거
                      </span>
                      <span className="text-[10px] text-emerald-400">CONVERSION 98%</span>
                    </div>
                    <div className="text-slate-300 space-y-1 pl-2 border-l-2 border-emerald-500/50">
                      <p>• <strong>핵심 질문 해답</strong>: "왜 지금 연락해야 하는가? → 이번 달 한정 사전 진단 100% 무료 혜택 제공"</p>
                      <p>• <strong>반론 제거</strong>: "비용 부담 없이 1분 간편 문의로 맞춤 비교 리포트를 먼저 받아보실 수 있습니다."</p>
                      <p>• <strong>시선 흐름 조립</strong>: 제목 → 첫문단 → 공감이미지 → 핵심 솔루션 → 인포그래픽 → 반론제거 → CTA 배너</p>
                    </div>
                  </div>
                )}

                {/* Step 4 Output: 1F Repurpose Engine */}
                {completedSteps.includes(4) && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-2 animate-fade-in">
                    <div className="flex items-center justify-between text-cyan-400 font-mono font-bold">
                      <span className="flex items-center gap-1.5">
                        <Layers className="w-4 h-4" />
                        [1F REPURPOSE ENGINE] MASTER 1개 → 6대 채널 확장 에셋
                      </span>
                      <span className="text-[10px] text-cyan-300">MULTIPLIER 6X</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-300 pt-1">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <span className="font-bold text-indigo-300">YouTube 롱폼</span>
                        <p className="text-[10px] text-slate-400 mt-0.5">5분 분량 해설 영상 대본 및 썸네일 카피</p>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <span className="font-bold text-cyan-300">Shorts / Reels</span>
                        <p className="text-[10px] text-slate-400 mt-0.5">60초 초고속 3단 훅 숏폼 보이스 대본</p>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <span className="font-bold text-purple-300">Instagram 카드뉴스</span>
                        <p className="text-[10px] text-slate-400 mt-0.5">8장 슬라이드 요약 텍스트 & 레이아웃</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5 Output: 1F Funnel & 3F Feedback Loop */}
                {completedSteps.includes(5) && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/40 space-y-2 animate-fade-in">
                    <div className="flex items-center justify-between text-purple-300 font-mono font-bold">
                      <span className="flex items-center gap-1.5">
                        <RefreshCw className="w-4 h-4 text-purple-400" />
                        [1F → 3F HQ LOOP] 5단계 퍼널 진단 & 전사 SOP 자동 학습
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-purple-900/60 text-purple-200">
                        SOP REV v1.2 UPDATED
                      </span>
                    </div>
                    <div className="text-slate-300 space-y-1 pl-2 border-l-2 border-purple-500/50 text-[11px]">
                      <p>• <strong>5단계 퍼널 분석</strong>: 노출 (12,400) → 클릭 (1,120 / CTR 9.0%) → 평균 체류시간 (3분 42초) → CTA 클릭 (186건) → 최종 문의 (42건)</p>
                      <p>• <strong>3F HQ 학습 환류</strong>: 성과 우수 후킹 공식 "체크리스트 3가지" 패턴을 KMONG BLOG ENGINE V1의 1급 프롬프트 룰셋에 영구 반영 완료!</p>
                    </div>
                  </div>
                )}

              </div>

              {/* Output Footer */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                <span>CONTENT PRODUCTION HQ • ZERO-AI-SLOP QUALITY ASSURED</span>
                <span className="font-mono text-indigo-400">100% READY-TO-PUBLISH</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
