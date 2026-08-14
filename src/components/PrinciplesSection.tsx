import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Layers, 
  UserCheck, 
  ShieldAlert, 
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { OPERATING_PRINCIPLES } from '../data/hqData';

export const PrinciplesSection: React.FC = () => {
  const getIcon = (num: string) => {
    switch (num) {
      case 'ONE': return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      case 'TWO': return <Layers className="w-6 h-6 text-indigo-400" />;
      case 'THREE': return <UserCheck className="w-6 h-6 text-cyan-400" />;
      case 'FOUR': return <ShieldAlert className="w-6 h-6 text-amber-400" />;
      case 'FIVE': return <TrendingUp className="w-6 h-6 text-purple-400" />;
      default: return <Sparkles className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="principles" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>OPERATING PHILOSOPHY & ETHICS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            CONTENT PRODUCTION HQ 5대 운영 원칙
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            타협하지 않는 품질 기준과 인간 중심의 설득 철학이 우리의 모든 엔진을 지탱합니다.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPERATING_PRINCIPLES.map((p, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-350 flex flex-col justify-between shadow-xl ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-slate-900 to-indigo-950/40 border-indigo-500/40' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {getIcon(p.num)}
                  </div>
                  <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-slate-950 text-indigo-400 border border-slate-800">
                    PRINCIPLE {p.num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {p.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>STANDARD COMPLIANT</span>
                <span className="text-emerald-400">100% ENFORCED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center max-w-4xl mx-auto space-y-2">
          <p className="text-sm font-semibold text-white">
            “건물은 세웠습니다. 이제 내부에 세계 최고 수준의 생산 설비를 가동합니다.”
          </p>
          <p className="text-xs text-slate-400">
            단순 글자 수 채우기용 AI 생성이 아닌, 실제 비즈니스 매출과 고객 문의를 만드는 완성형 시스템을 경험하세요.
          </p>
        </div>

      </div>
    </section>
  );
};
