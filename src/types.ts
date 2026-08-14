export type FloorId = '3F' | '2F' | '1F';

export interface EngineSOP {
  engineName: string;
  codeName: string;
  floor: FloorId;
  icon: string;
  shortDesc: string;
  mission: string;
  activationCondition: string;
  inputStandard: string[];
  analysisProcess: string[];
  productionProcess: string[];
  qualityStandard: string[];
  prohibitedRules: string[];
  factCheckStandard: string[];
  outputStandard: string[];
  qaChecklist: string[];
  reworkCondition: string[];
  hqApprovalMetrics: string[];
}

export interface FloorInfo {
  id: FloorId;
  name: string;
  subtitle: string;
  badge: string;
  description: string;
  accentColor: string;
  lightBg: string;
  borderAccent: string;
  engineIds: string[];
  role: string[];
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  recommendedFor: string;
  badge?: string;
  includedEngines: string[];
  deliverables: string[];
  estimatedTurnaround: string;
  basePriceText: string;
  isPopular?: boolean;
}

export interface PipelineSimulationStep {
  floor: FloorId;
  engineId: string;
  engineName: string;
  stepTitle: string;
  status: 'pending' | 'processing' | 'completed';
  durationMs: number;
  outputPreview: {
    title: string;
    summary: string;
    details: string[];
    meta?: Record<string, string>;
  };
}
