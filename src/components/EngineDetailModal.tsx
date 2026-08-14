import React from 'react';
import { 
  X, 
  ShieldAlert, 
  CheckCircle2, 
  Flame, 
  Workflow, 
  AlertTriangle, 
  FileCheck, 
  Building2,
  FileCode,
  Zap,
  Check
} from 'lucide-react';
import { EngineSOP } from '../types';

interface EngineDetailModalProps {
  engine: EngineSOP | null;
  onClose: () => void;
}

export const EngineDetailModal: React.FC<EngineDetailModalProps> = ({ engine, onClose }) => {
  if (!engine) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              {engine.floor} • {engine.codeName}
            </span>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                {engine.engineName}
              </h3>
              <p className="text-xs text-slate-400">정식 표준 운영 절차 (SOP v1.0 Standard)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          
          {/* Mission Box */}
          <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/40 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider font-mono">
              <Zap className="w-4 h-4" />
              <span>MISSION — 이 엔진이 존재하는 이유</span>
            </div>
            <p className="text-white font-medium text-sm sm:text-base leading-relaxed">
              "{engine.mission}"
            </p>
          </div>

          {/* 2-Column Specs: Activation & Input */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Activation Condition */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">ACTIVATION CONDITION (가동 조건)</span>
              <p className="text-xs text-slate-200">{engine.activationCondition}</p>
            </div>

            {/* Input Standard */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">INPUT STANDARD (입력 표준)</span>
              <ul className="space-y-1 text-xs text-slate-300">
                {engine.inputStandard.map((inp, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-indigo-400">•</span>
                    <span>{inp}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Analysis & Production Process */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase flex items-center gap-2">
              <Workflow className="w-4 h-4 text-emerald-400" />
              <span>PRODUCTION & ANALYSIS PROCESS (작업 프로세스)</span>
            </h4>
            
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              {engine.analysisProcess.length > 0 && (
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-emerald-400">1. 분석 및 판단 단계</span>
                  <div className="text-xs text-slate-300 pl-2 border-l-2 border-emerald-500/40">
                    {engine.analysisProcess.map((ap, i) => (
                      <div key={i} className="py-0.5">{ap}</div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-1 pt-2">
                <span className="text-xs font-semibold text-indigo-400">2. 제작 및 생산 파이프라인</span>
                <div className="text-xs text-slate-300 pl-2 border-l-2 border-indigo-500/40 space-y-1">
                  {engine.productionProcess.map((pp, i) => (
                    <div key={i} className="py-0.5">{pp}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Prohibited Rules & Fact Check */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Prohibited Rules */}
            <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/40 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-400 font-mono">
                <AlertTriangle className="w-4 h-4" />
                <span>PROHIBITED RULES (절대 금지 사항)</span>
              </div>
              <ul className="space-y-1 text-xs text-red-200">
                {engine.prohibitedRules.map((pr, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span>🚫</span>
                    <span>{pr}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fact Check Standard */}
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 font-mono">
                <ShieldAlert className="w-4 h-4" />
                <span>FACT CHECK STANDARD (검증 기준)</span>
              </div>
              <ul className="space-y-1 text-xs text-amber-200">
                {engine.factCheckStandard.map((fc, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span>🔍</span>
                    <span>{fc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Output Standard & QA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono font-bold text-slate-400">OUTPUT STANDARD</span>
              <div className="text-xs text-slate-200 space-y-1">
                {engine.outputStandard.map((out, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-indigo-300">
                    <FileCode className="w-3.5 h-3.5" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono font-bold text-slate-400">QA CHECKLIST</span>
              <div className="text-xs text-slate-200 space-y-1">
                {engine.qaChecklist.map((qa, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                    <span>{qa}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono font-bold text-slate-400">HQ APPROVAL</span>
              <div className="text-xs text-slate-200 space-y-1">
                {engine.hqApprovalMetrics.map((hq, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-amber-300">
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>{hq}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>STANDARD OPERATING PROCEDURE COMPLIANT</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition cursor-pointer"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
