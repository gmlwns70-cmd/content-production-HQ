import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  ShieldCheck,
  FileText,
  Phone,
  Mail,
  User
} from 'lucide-react';

interface ProjectConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

export const ProjectConsultationModal: React.FC<ProjectConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultPackage = 'GROWTH'
}) => {
  const [clientName, setClientName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [selectedPkg, setSelectedPkg] = useState(defaultPackage);
  const [monthlyVolume, setMonthlyVolume] = useState('월 4~8편');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !contact) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="bg-slate-950 border border-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                CONTENT PRODUCTION HQ 프로젝트 의뢰
              </h3>
              <p className="text-xs text-slate-400">3F HQ 전략팀이 분석 후 24시간 이내 맞춤 제안서를 회신합니다.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto text-xs text-slate-300">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">프로젝트 의뢰가 3F HQ에 접수되었습니다!</h4>
              <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
                입력해주신 비즈니스 정보와 요구사항을 바탕으로 <strong>3F PROJECT ANALYSIS & STRATEGY MODULE</strong>에서 1차 분석을 시작합니다. 24시간 이내에 전담 디렉터가 연락드리겠습니다.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition"
                >
                  확인 및 닫기
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-indigo-400" />
                    <span>성함 / 담당자명 *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 홍길동 대표"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-indigo-400" />
                    <span>연락처 (전화번호) *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="010-0000-0000"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span>이메일 주소</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">사업 분야 / 업종</label>
                  <input
                    type="text"
                    placeholder="예: B2B IT 솔루션, 인테리어, 법률, 병원 등"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">관심 패키지</label>
                  <select
                    value={selectedPkg}
                    onChange={(e) => setSelectedPkg(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="STARTER">STARTER (블로그 + 비주얼)</option>
                    <option value="GROWTH">GROWTH (블로그 + 비주얼 + 발행 + 전환) [추천]</option>
                    <option value="GROWTH PRO">GROWTH PRO (멀티채널 6대 확장 포함)</option>
                    <option value="FULL HQ">FULL HQ (전략·제작·전환·성과 전담)</option>
                    <option value="CUSTOM">기타 맞춤 상담</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">희망 월간 생산 볼륨</label>
                  <select
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="단건 (1편 테스트)">단건 (1편 테스트 생산)</option>
                    <option value="월 4편">월 4편 (주 1회)</option>
                    <option value="월 8편">월 8편 (주 2회)</option>
                    <option value="월 16편 이상">월 16편 이상 (고속 성장)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  <span>주요 요구사항 및 달성하고자 하는 비즈니스 목표</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="예: 신규 서비스 런칭으로 검색 상위 노출과 무료 체험 가입 전환을 늘리고 싶습니다."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>개인정보 및 의뢰 정보는 오직 견적 산출 및 프로젝트 상담 목적으로만 안전하게 보호됩니다.</span>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold shadow-lg shadow-indigo-600/30 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>3F HQ 의뢰 접수하기</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
