import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Calculator,
  Flame,
  Zap
} from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/hqData';

interface PackagesSectionProps {
  onSelectPackageForConsultation: (pkgName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ 
  onSelectPackageForConsultation 
}) => {
  const [selectedFrequency, setSelectedFrequency] = useState<number>(4); // Monthly posts count
  const [selectedPlanId, setSelectedPlanId] = useState<string>('growth');

  const getEstimatedPrice = (planId: string, count: number) => {
    switch (planId) {
      case 'starter': return `${(count * 8).toLocaleString()}만원 ~`;
      case 'growth': return `${(count * 15).toLocaleString()}만원 ~`;
      case 'growth-pro': return `${(count * 25).toLocaleString()}만원 ~`;
      case 'full-hq': return `${(count * 40).toLocaleString()}만원 ~`;
      default: return '맞춤 협의';
    }
  };

  return (
    <section id="packages" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>SERVICE PACKAGES & PRICING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            비즈니스 목표에 맞춘 4단계 생산 패키지
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            단순 건당 단가 경쟁이 아닌, 전환율과 멀티채널 확장성을 고려한 완성형 패키지를 제공합니다.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  isPopular 
                    ? 'bg-gradient-to-b from-slate-900 via-indigo-950/60 to-slate-950 border-2 border-indigo-500 shadow-2xl shadow-indigo-950' 
                    : 'bg-slate-950 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950 font-black text-[11px] tracking-wider uppercase shadow-md">
                    가장 인기있는 플랜 (BEST)
                  </div>
                )}

                <div>
                  {/* Top info */}
                  <div className="mb-4">
                    <span className="font-mono text-xs text-indigo-400 font-bold tracking-widest">{pkg.basePriceText}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{pkg.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{pkg.tagline}</p>
                  </div>

                  {/* Included Engines Badges */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-5 space-y-1.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">탑재 엔진 라인업</span>
                    <div className="flex flex-wrap gap-1">
                      {pkg.includedEngines.map((eng, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">
                          {eng}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold text-slate-300">최종 출고 성과물:</span>
                    <ul className="space-y-2 text-xs text-slate-400">
                      {pkg.deliverables.map((del, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>납품 소요:</span>
                    <span className="font-semibold text-white">{pkg.estimatedTurnaround}</span>
                  </div>

                  <button
                    onClick={() => onSelectPackageForConsultation(pkg.name)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                      isPopular
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    <span>{pkg.name} 견적 의뢰</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Monthly Volume Estimator Widget */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">월간 콘텐츠 생산 맞춤 견적 계산기</h3>
                <p className="text-xs text-slate-400">월간 발행 빈도와 패키지를 선택하여 대략적인 예산을 확인하세요.</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[4, 8, 12, 20].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedFrequency(num)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition ${
                    selectedFrequency === num
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  월 {num}편
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div className="space-y-1">
              <span className="text-xs text-slate-400">선택 패키지 기준:</span>
              <select 
                value={selectedPlanId}
                onChange={(e) => setSelectedPlanId(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="starter">STARTER (기본형)</option>
                <option value="growth">GROWTH (추천형)</option>
                <option value="growth-pro">GROWTH PRO (확장형)</option>
                <option value="full-hq">FULL HQ (전담 파트너십)</option>
              </select>
            </div>

            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs text-slate-400">월간 예상 견적 가이드:</span>
              <div className="text-2xl font-black text-indigo-400 font-mono">
                {getEstimatedPrice(selectedPlanId, selectedFrequency)}
              </div>
            </div>

            <div className="text-right">
              <button
                onClick={() => onSelectPackageForConsultation(selectedPlanId.toUpperCase())}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition cursor-pointer"
              >
                맞춤 제안서 및 상담 요청
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
