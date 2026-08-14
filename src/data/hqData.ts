import { FloorInfo, EngineSOP, ServicePackage } from '../types';

export const BRAND_CONFIG = {
  name: 'CONTENT PRODUCTION HQ',
  subtitle: 'AI × 전략 × 제작 × 전환 × 확장 × 성과',
  mainDefinition: '콘텐츠를 대신 만들어주는 회사가 아니라, 고객의 목표를 분석하고 콘텐츠를 제작·확장·측정하여 실제 성과로 연결하는 AI 기반 콘텐츠 생산 시스템을 운영하는 회사',
  slogan1: '콘텐츠를 만드는 곳에서, 성과를 만드는 곳으로.',
  slogan2: '전략부터 제작, 전환, 확장, 성과까지 하나의 시스템으로.',
  vision: '국내 최고 수준의 AI 기반 콘텐츠 제작·운영 시스템',
  buildingName: '3-Story CONTENT PRODUCTION HQ',
};

export const FLOORS_DATA: Record<string, FloorInfo> = {
  '3F': {
    id: '3F',
    name: 'CONTENT PRODUCTION HQ',
    subtitle: '두뇌 & 전략 컨트롤타워 (Brain & Strategic Tower)',
    badge: 'CONTROL TOWER',
    description: '고객 요청이 들어오면 무조건 바로 제작하지 않고, 프로젝트 분석/전략 수립 후 전문 엔진 배정 및 최종 QC 검수를 총괄합니다.',
    accentColor: 'indigo',
    lightBg: 'bg-indigo-950/40',
    borderAccent: 'border-indigo-500/50',
    engineIds: ['project-analysis', 'content-strategy', 'engine-routing', 'quality-control', 'system-improvement'],
    role: [
      '① PROJECT ANALYSIS: 고객 요청 분석, 사업/상품 이해, 타깃·경쟁·목적 분석',
      '② CONTENT STRATEGY: 콘텐츠 유형, 핵심 메시지, 검색 및 CTA 전략 수립',
      '③ ENGINE ROUTING: 블로그/비주얼/발행/전환/리퍼포즈/성과 엔진 최적 배정',
      '④ QUALITY CONTROL: 전략 적합성, 사실성, 브랜드, 전환 가능성, 출고 규격 최종 검수',
      '⑤ SYSTEM IMPROVEMENT: 성과 분석 데이터 기반 전 엔진 SOP 지속 업그레이드'
    ]
  },
  '2F': {
    id: '2F',
    name: 'PRODUCTION FLOOR',
    subtitle: '핵심 제작·출고 엔진층 (Core Production & Delivery Floor)',
    badge: 'CORE FACTORY',
    description: '블로그 원고 생산부터 개별 비주얼 에셋, 플랫폼별 발행 조립, 전환 엔지니어링까지 실제 고품질 콘텐츠가 탄생하는 핵심 생산층입니다.',
    accentColor: 'emerald',
    lightBg: 'bg-emerald-950/40',
    borderAccent: 'border-emerald-500/50',
    engineIds: ['blog-engine', 'visual-engine', 'publish-engine', 'conversion-engine'],
    role: [
      '✍️ BLOG ENGINE (KMONG V1): 검색의도~Fact Check~AI문체제거~최종원고',
      '🎨 VISUAL ENGINE: 1이미지=1파일 독립출고, 본문 삽입위치 가이드, 내부라벨 비표시',
      '🚀 PUBLISH ENGINE: 플랫폼별 독자 시선 흐름에 맞춘 최적 레이아웃 조립',
      '🎯 CONVERSION ENGINE: "왜 연락해야 하는가?" 반론제거, 신뢰요소, 강력한 CTA'
    ]
  },
  '1F': {
    id: '1F',
    name: 'GROWTH FLOOR',
    subtitle: '확장·성과 엔진층 (Repurposing & Analytics Floor)',
    badge: 'GROWTH & DATA',
    description: '콘텐츠를 일회성으로 버리지 않고 유튜브·쇼츠·인스타·광고 등으로 다각화하며, 5단계 퍼널 분석을 통해 3F 컨트롤타워로 학습 데이터를 전달합니다.',
    accentColor: 'cyan',
    lightBg: 'bg-cyan-950/40',
    borderAccent: 'border-cyan-500/50',
    engineIds: ['repurpose-engine', 'performance-engine'],
    role: [
      '♻️ REPURPOSE ENGINE: MASTER CONTENT 1개 → YouTube, Shorts, Reels, SNS, 광고카피 확장',
      '📊 PERFORMANCE ENGINE: 노출 → 클릭 → 체류 → 행동 → 전환 5단계 퍼널 분석',
      '🔄 DATA FEEDBACK: 성과 인사이트를 3F HQ로 상향 전송하여 전사 SOP 혁신'
    ]
  }
};

export const ENGINES_SOP_DATA: Record<string, EngineSOP> = {
  'project-analysis': {
    engineName: 'PROJECT ANALYSIS MODULE',
    codeName: 'HQ-MOD-01',
    floor: '3F',
    icon: 'SearchCheck',
    shortDesc: '고객 의뢰 심층 분석, 비즈니스 본질 파악 및 핵심 목적 정의',
    mission: '단순 제작 의뢰를 넘어 고객 비즈니스의 수익 모델, 고객 세그먼트, 경쟁 구도, 해결 과제를 입체적으로 해체하여 승리하는 콘텐츠의 기반을 마련한다.',
    activationCondition: '신규 고객 프로젝트 접수 시 3F HQ 컨트롤타워에서 즉각 자동 활성화.',
    inputStandard: [
      '고객사 기본 정보 (사업 분야, 주력 상품/서비스, 가격대)',
      '의뢰 콘텐츠 목적 (신규 유입, 브랜드 인지도, 특정 상품 판매, 문의 획득)',
      '타깃 고객 페르소나 (연령, 성별, 직업, 직면한 핵심 고통/Pain Point)',
      '기존 마케팅 채널 및 레퍼런스 데이터'
    ],
    analysisProcess: [
      '1단계: 비즈니스 BM 및 고유 강점(USP) 추출',
      '2단계: 타깃 고객의 검색 의도 및 결제 직전 심리 장벽 분석',
      '3단계: 경쟁사 상위 랭킹 콘텐츠 대비 차별화 포인트 발굴',
      '4단계: 필수 팩트/데이터 및 법적 규제 검토 항목 리스트업'
    ],
    productionProcess: [
      '비즈니스 요약 브리프 작성',
      '목적별 핵심 KPI(문의율/조회수/전환수) 가이드라인 설정',
      'CONTENT STRATEGY 모듈로 분석 리포트 이관'
    ],
    qualityStandard: [
      '타깃 고객의 고통이 구체적인 정량/정성적 언어로 정의되었는가',
      '경쟁사와의 명확한 차별화 프레임워크가 수립되었는가'
    ],
    prohibitedRules: [
      '불명확한 추측성 타깃팅 금지',
      '고객사의 핵심 강점이 누락된 일반론적 분석 금지'
    ],
    factCheckStandard: [
      '고객사 공식 홈페이지 및 상품 제원 데이터 교차 검증',
      '관련 업계 시장 통계 및 법률 규제 사항 사전 체크'
    ],
    outputStandard: [
      'Project Analysis Brief v1.0 (PDF/JSON 표준 규격)'
    ],
    qaChecklist: [
      '고객 목적이 100% 명문화되었는가',
      '2F 생산 엔진에 필요한 모든 필수 정보가 확보되었는가'
    ],
    reworkCondition: [
      '타깃 정의가 모호하거나 비즈니스 본질 이해가 왜곡된 경우'
    ],
    hqApprovalMetrics: [
      'HQ 디렉터 승인 필수',
      '전략 정합도 점수 90점 이상'
    ]
  },
  'content-strategy': {
    engineName: 'CONTENT STRATEGY MODULE',
    codeName: 'HQ-MOD-02',
    floor: '3F',
    icon: 'Compass',
    shortDesc: '콘텐츠 아키텍처, 검색 전략, 핵심 메시지 및 전환 경로 설계',
    mission: '정보 전달에 머무르지 않고, 독자가 글을 읽으며 자연스럽게 신뢰를 갖고 구매/문의로 이어지도록 하는 마스터 전략을 수립한다.',
    activationCondition: 'PROJECT ANALYSIS 완료 후 자동 연동.',
    inputStandard: [
      'Project Analysis Brief v1.0',
      '키워드 검색량 및 경쟁도 데이터',
      '고객 행동 목표(CTA) 정의서'
    ],
    analysisProcess: [
      '메인/서브 키워드 및 연관 롱테일 키워드 맵핑',
      '독자의 심리적 저항선을 허무는 논리 전개 구조 설계',
      '후킹(Hook) 포인트 및 전환(Offer) 앵글 매칭'
    ],
    productionProcess: [
      '1단계: 콘텐츠 형식 및 톤앤매너 확정',
      '2단계: 단계별 헤드라인 및 목차 골격 생성',
      '3단계: 엔진별 세부 제작 지침(Order Sheet) 발행'
    ],
    qualityStandard: [
      '검색 유입과 설득 전환이 단절 없이 1:1로 맞물리는 구조인가'
    ],
    prohibitedRules: [
      '키워드만 나열된 무의미한 구성 금지',
      '맥락 없는 무차별적 구매 유도 금지'
    ],
    factCheckStandard: [
      '타깃 키워드의 실제 검색 의도(정보성 vs 상업성) 정확성 확인'
    ],
    outputStandard: [
      'Master Content Strategy Sheet'
    ],
    qaChecklist: [
      '제목-도입부-본문-결론-CTA의 일관성 확인'
    ],
    reworkCondition: [
      '독자의 행동을 이끌어낼 명확한 훅이나 오퍼가 부재한 경우'
    ],
    hqApprovalMetrics: [
      'HQ 전략 총괄 승인'
    ]
  },
  'engine-routing': {
    engineName: 'ENGINE ROUTING & DISPATCH',
    codeName: 'HQ-MOD-03',
    floor: '3F',
    icon: 'GitFork',
    shortDesc: '프로젝트 맞춤형 2F/1F 최적 엔진 파이프라인 자동 배정',
    mission: '고객의 목적과 패키지에 맞춰 2F 제작 엔진과 1F 성장 엔진을 가장 효율적인 시퀀스로 연결하고 통제한다.',
    activationCondition: '전략 수립 완료 즉시 각 층 엔진으로 오더 전달.',
    inputStandard: ['Master Content Strategy Sheet', '서비스 패키지 등급'],
    analysisProcess: ['필요 엔진 조합 및 선후행 종속성 연산', '실시간 엔진 리소스 밸런싱'],
    productionProcess: ['2F BLOG ENGINE -> VISUAL ENGINE -> PUBLISH ENGINE -> CONVERSION ENGINE 트리거'],
    qualityStandard: ['누락 없는 엔진 데이터 전달 및 파이프라인 무결성'],
    prohibitedRules: ['선행 공정 완료 전 후행 공정 임의 조기 출고 금지'],
    factCheckStandard: ['엔진 간 데이터 포맷 규격 일치 확인'],
    outputStandard: ['Pipeline Execution Matrix'],
    qaChecklist: ['전 엔진 작업 큐 상태 정상 가동 확인'],
    reworkCondition: ['엔진 간 전달 파라미터 누락 발생 시'],
    hqApprovalMetrics: ['HQ 시스템 매니저 모니터링']
  },
  'quality-control': {
    engineName: 'QUALITY CONTROL (QC) DESK',
    codeName: 'HQ-MOD-04',
    floor: '3F',
    icon: 'ShieldCheck',
    shortDesc: '전략 적합성, 사실성, AI 문체 제거, 완벽한 출고 규격 최종 검수',
    mission: '어떠한 미완성/오류 결과물도 고객에게 도달하지 못하도록 최종 방어선을 구축하고 완벽한 출고 상태를 보증한다.',
    activationCondition: '2F 및 1F 제작 결과물 입고 시 가동.',
    inputStandard: ['각 엔진별 생성 원고, 개별 이미지 파일, 발행 구조표, 오퍼 스크립트'],
    analysisProcess: ['6대 QC 필터 (전략 적합성, 콘텐츠 품질, 사실성, 브랜드 적합성, 전환 가능성, 출고 규격) 전수 검사'],
    productionProcess: ['통과 시 최종 패키징 / 불합격 시 해당 엔진으로 즉시 재작업(Rework) 반려'],
    qualityStandard: ['고객이 추가 편집할 필요 없는 100% 즉시 게시 가능 상태 달성'],
    prohibitedRules: ['내부 제작 라벨 노출된 상태로 출고 절대 금지', '팩트 미확인 항목 통과 금지'],
    factCheckStandard: ['수치, 법적 문구, 가격, 연락처 전수 팩트체크'],
    outputStandard: ['Final Approved Client Package'],
    qaChecklist: ['6대 QC 지표 모두 PASS 판정'],
    reworkCondition: ['1개 항목이라도 미달 시 즉각 재작업'],
    hqApprovalMetrics: ['HQ 최고 검수관 최종 전자 서명']
  },
  'system-improvement': {
    engineName: 'SYSTEM IMPROVEMENT & SOP UPDATER',
    codeName: 'HQ-MOD-05',
    floor: '3F',
    icon: 'RefreshCw',
    shortDesc: '1F 성과 데이터 분석을 통한 전사 엔진 SOP 무한 학습 및 진화',
    mission: '실제 발행된 콘텐츠의 성과 데이터를 수집하여 무엇이 성공하고 실패했는지를 파악하고 모든 엔진의 SOP를 지속 진화시킨다.',
    activationCondition: '1F PERFORMANCE ENGINE에서 분석 리포트 수신 시 자동 루프 가동.',
    inputStandard: ['Performance Funnel Report (노출-클릭-체류-행동-전환 데이터)'],
    analysisProcess: ['성과 우수 요인과 저조 요인의 통계적 상관관계 도출', '엔진별 개선 포인트 추출'],
    productionProcess: ['각 엔진의 SOP 룰셋 및 프롬프트 파이프라인 실시간 업데이트'],
    qualityStandard: ['회차를 거듭할수록 평균 전환율 및 체류 시간 우상향 증명'],
    prohibitedRules: ['데이터 기반이 아닌 직관적 임의 SOP 변경 금지'],
    factCheckStandard: ['A/B 테스트 통계 유의성 검증'],
    outputStandard: ['SOP Revision Log vX.X'],
    qaChecklist: ['전사 엔진 신규 룰셋 배포 완료 확인'],
    reworkCondition: ['SOP 개정 후 성과 지표 저하 시 롤백'],
    hqApprovalMetrics: ['HQ 엔지니어링 위원회 승인']
  },
  'blog-engine': {
    engineName: 'KMONG BLOG ENGINE V1',
    codeName: 'PROD-ENG-01',
    floor: '2F',
    icon: 'PenTool',
    shortDesc: '검색의도 장악, Hook-본문-SEO-Fact Check 완결형 전문 블로그 엔진',
    mission: '단순한 키워드 반복 글이 아닌, 독자가 "내가 찾던 정보다", "믿을 만하다"라고 느끼고 문의/구매 행동으로 전환되는 고품질 블로그 원고를 생산한다.',
    activationCondition: '3F HQ 전략 지침 수신 시 작동.',
    inputStandard: [
      'Master Strategy Sheet (타깃 키워드, 검색 의도, 후킹 앵글, 독자 고통)',
      '비즈니스 핵심 사실 데이터',
      '전환 목표 액션 (문의/예약/구매)'
    ],
    analysisProcess: [
      '의뢰 분석 → 검색의도 분석 → 고객 분석 → 콘텐츠 목표 결정 → 키워드 전략 → 제목 전략'
    ],
    productionProcess: [
      '1. 콘텐츠 구조화 및 서론 Hooking 카피라이팅',
      '2. 설득 심리학 기반 3단 본문 전개 (공감 → 솔루션 → 증명)',
      '3. SEO 자연어 최적화 및 키워드 밀도 밸런싱',
      '4. AI 특유의 번역투/상투적 어조 완벽 제거 (인간 필력화)',
      '5. Fact Check 및 내용 중복 제거',
      '6. QA 자체 검수 후 최종 원고 완성'
    ],
    qualityStandard: [
      '키워드 개수에 집착하지 않고 독자의 체류 시간과 신뢰도를 극대화하는 문장 구성',
      'AI 생성 냄새가 전혀 없는 자연스럽고 설득력 있는 문체'
    ],
    prohibitedRules: [
      '상투적인 AI 어투(예: "~에 대해 알아보겠습니다", "결론적으로" 등) 사용 금지',
      '근거 없는 허위 과장 표현 금지'
    ],
    factCheckStandard: [
      '인용 통계 및 법률/의학/전문 용어의 정확성 필수 확인'
    ],
    outputStandard: [
      'Master Blog Post Draft (마크다운 및 텍스트 규격, 이미지 삽입 마커 포함)'
    ],
    qaChecklist: [
      '검색의도 일치율 98% 이상',
      'AI 문체 제거 체크 완료',
      '본문-CTA 연결성 검증'
    ],
    reworkCondition: [
      '가독성이 떨어지거나 훅이 약해 초반 이탈이 우려되는 경우'
    ],
    hqApprovalMetrics: [
      '2F 디렉터 1차 승인 후 3F QC 이관'
    ]
  },
  'visual-engine': {
    engineName: 'VISUAL ENGINE',
    codeName: 'PROD-ENG-02',
    floor: '2F',
    icon: 'Image',
    shortDesc: '1이미지=1파일 독립 출고, 본문 삽입 가이드 포함 고품격 비주얼 에셋',
    mission: '원고의 메시지를 직관적으로 전달하고 독자의 시류를 붙잡는 비주얼을 제작하되, 고객이 잘라낼 필요 없는 100% 독립 완성 파일로 출고한다.',
    activationCondition: 'BLOG ENGINE 원고 작성 완료 즉시 연동 가동.',
    inputStandard: [
      '블로그 본문 원고 및 이미지 삽입 지점 마커',
      '브랜드 컬러 팔레트 및 디자인 가이드'
    ],
    analysisProcess: [
      '본문 섹션별 시각화 유형 분석 (대표 썸네일, 공감형, 정보형, 인포그래픽, 로드맵, CTA 배너)'
    ],
    productionProcess: [
      '1. 대표 썸네일: 시선 압도형 타이포 & 오브젝트 디자인',
      '2. 공감형 이미지: 독자의 고통 상황을 직관적으로 시각화',
      '3. 정보/인포그래픽 이미지: 핵심 데이터를 도표/다이어그램화',
      '4. 실행 로드맵/CTA 이미지: 다음 행동을 자극하는 비주얼 가이드',
      '5. 개별 파일화: 01_썸네일.png, 02_공감이미지.png, 03_정보도표.png, 04_CTA배너.png 각각 독립 파일 생성'
    ],
    qualityStandard: [
      '이미지 1개 = 파일 1개 = 바로 게시 가능한 무편집 출고 규격',
      '이미지 내부에는 오직 독자가 봐야 하는 후킹 카피/핵심 정보/CTA만 표기'
    ],
    prohibitedRules: [
      '**중요**: "공감형", "정보형", "본문이미지01" 같은 내부 제작 라벨을 이미지 내부에 절대 표기하지 않음!',
      '통짜 이미지나 자르기가 필요한 미분리 그래픽 출고 절대 금지'
    ],
    factCheckStandard: [
      '도표 및 그래프 수치 원고와 완벽 일치 검증'
    ],
    outputStandard: [
      '① 독립 개별 이미지 파일 세트 (WebP/PNG 고해상도)',
      '② 각 이미지별 역할/핵심 메시지 가이드',
      '③ 정확한 본문 삽입 위치 가이드맵'
    ],
    qaChecklist: [
      '라벨 비표시 원칙 준수 확인',
      '해상도 및 텍스트 가독성 검수'
    ],
    reworkCondition: [
      '내부 라벨이 노출되었거나 파일이 통합되어 있어 사용자 편집이 필요한 경우'
    ],
    hqApprovalMetrics: [
      '비주얼 아트 디렉터 승인'
    ]
  },
  'publish-engine': {
    engineName: 'PUBLISH ENGINE',
    codeName: 'PROD-ENG-03',
    floor: '2F',
    icon: 'Send',
    shortDesc: '네이버/워드프레스/브런치 등 플랫폼별 독자 시선 흐름 최적 조립',
    mission: '아무리 훌륭한 글과 이미지도 플랫폼 환경에 맞게 조립되지 않으면 이탈합니다. 플랫폼별 알고리즘과 독자의 스크롤 호흡에 맞춘 최적의 조립 레이아웃을 구축한다.',
    activationCondition: '원고 및 비주얼 에셋 세트 완성 후 조립 단계 진입.',
    inputStandard: ['완성 원고', '독립 비주얼 파일 세트', '발행 타깃 플랫폼(네이버 블로그, 티스토리, WP, 브런치 등)'],
    analysisProcess: ['플랫폼별 뷰포트 너비, 모바일 가독성, 알고리즘 선호 서식 분석'],
    productionProcess: [
      '1. 플랫폼 맞춤형 최종 제목 검수 (글자수 및 클릭률 최적화)',
      '2. 강력한 첫 문단 및 훅 배치',
      '3. 문단 길이 조절 (모바일 3~4줄 호흡)',
      '4. 최적 이미지 삽입 순서 조립 (제목 → 첫문단 → 공감 이미지 → 핵심 정보 → 정보 이미지 → 상세 내용 → 실행 이미지 → CTA)',
      '5. 태그, 카테고리, 내부/외부 링크, CTA 배너 위치 확정'
    ],
    qualityStandard: ['스크롤을 멈추지 않고 끝까지 읽게 만드는 자연스러운 시선 유도 동선'],
    prohibitedRules: ['가독성을 해치는 통문단 배치 금지', '이미지 밀집으로 인한 로딩 지연 구조 금지'],
    factCheckStandard: ['삽입 링크 URL 및 태그 유효성 검사'],
    outputStandard: ['Platform Assembly Guide & HTML/Rich Text Format'],
    qaChecklist: ['모바일 및 PC 반응형 레이아웃 시뮬레이션 PASS'],
    reworkCondition: ['모바일 화면에서 문단이 뭉쳐 가독성이 저하될 때'],
    hqApprovalMetrics: ['퍼블리싱 리드 승인']
  },
  'conversion-engine': {
    engineName: 'CONVERSION ENGINE',
    codeName: 'PROD-ENG-04',
    floor: '2F',
    icon: 'Target',
    shortDesc: '"왜 연락해야 하는가?" 명확한 해답을 주는 오퍼 & 반론 제거 엔지니어링',
    mission: '콘텐츠가 단순 조회수에서 끝나지 않고 실제 사업 성과(문의, 상담, 예약, 방문, 구매)로 이어지도록 독자의 심리적 장벽을 제거하고 행동을 촉발한다.',
    activationCondition: '발행 조립 단계에서 전환 설계 모듈 병행 가동.',
    inputStandard: ['비즈니스 전환 목표', '고객 저항 요인', '제공 가능한 오퍼(무료 진단, 샘플, 할인, 긴급성)'],
    analysisProcess: [
      '핵심 질문 검증: "이 콘텐츠를 끝까지 읽은 고객이 왜 지금 당장 우리에게 연락해야 하는가?"'
    ],
    productionProcess: [
      '1. 고객 행동 목표(Primary CTA) 단일화 및 구체화',
      '2. 거절할 수 없는 오퍼(No-Brainer Offer) 설계',
      '3. 3대 신뢰 요소(사회적 증거, 포트폴리오, 수치 데이터) 배치',
      '4. 구매 직전 마지막 망설임(반론) 사전 제거 스크립트 작성',
      '5. 원클릭 문의 연결 버튼 및 마찰 없는 전환 퍼널 구현'
    ],
    qualityStandard: ['독자가 연락하지 않고는 못 배기게 만드는 명확한 가치 제안과 신뢰 구축'],
    prohibitedRules: ['모호하거나 수동적인 마무리(예: "도움이 되셨길 바랍니다") 금지', '과도한 낚시성 오퍼 금지'],
    factCheckStandard: ['오퍼 혜택 및 유효 기간 정확성 검증'],
    outputStandard: ['Conversion Architecture Specification'],
    qaChecklist: ['핵심 질문에 대해 100% 명확한 해답 제시 여부 확인'],
    reworkCondition: ['CTA가 불분명하거나 고객이 연락할 명분이 결여된 경우'],
    hqApprovalMetrics: ['전환 전략 디렉터 승인']
  },
  'repurpose-engine': {
    engineName: 'REPURPOSE ENGINE',
    codeName: 'GROWTH-ENG-01',
    floor: '1F',
    icon: 'Layers',
    shortDesc: 'MASTER CONTENT 1개 → YouTube, Shorts, SNS, 광고 멀티채널 자산화',
    mission: '정성껏 만든 마스터 콘텐츠를 단 한 번 쓰고 버리지 않고, 각 플랫폼 특성에 맞춘 멀티 포맷 콘텐츠로 복제·확장하여 콘텐츠 생산성을 500% 이상 폭증시킨다.',
    activationCondition: '2F 마스터 콘텐츠 완성 및 승인 후 즉시 멀티 채널 포맷팅 가동.',
    inputStandard: ['Approved Master Content (블로그 원고 및 비주얼 에셋 세트)'],
    analysisProcess: ['플랫폼별 호흡 분석 (YouTube 대본, Shorts/Reels 60초 컷, 인스타 카드뉴스 10장, SNS 텍스트, 광고 카피)'],
    productionProcess: [
      '1. YouTube 롱폼 영상 시나리오 & 타임스탬프 추출',
      '2. Shorts/Reels/TikTok용 60초 초고속 후킹 숏폼 대본 생성',
      '3. Instagram용 8~10장 슬라이드 카드뉴스 텍스트 & 기획안',
      '4. LinkedIn/Threads/Facebook용 인사이트 중심 요약 포스팅',
      '5. 메타/구글 검색 광고용 고효율 카피라이팅 5종 변환',
      '6. 카카오톡 채널/문자 마케팅용 단문 푸시 메시지 추출'
    ],
    qualityStandard: ['단순 복사 붙여넣기가 아닌, 각 채널 문법에 100% 최적화된 리라이팅'],
    prohibitedRules: ['긴 호흡의 글을 모바일 숏폼에 그대로 축약 없이 넣는 행위 금지'],
    factCheckStandard: ['채널 변환 중 핵심 메시지 및 팩트 왜곡 여부 검수'],
    outputStandard: ['Multi-Channel Asset Package (6대 채널 변환 완료)'],
    qaChecklist: ['플랫폼별 글자수 및 규격 완벽 일치 확인'],
    reworkCondition: ['채널 특성에 맞지 않는 부적절한 톤앤매너 발견 시'],
    hqApprovalMetrics: ['멀티채널 그로스 리드 승인']
  },
  'performance-engine': {
    engineName: 'PERFORMANCE ENGINE',
    codeName: 'GROWTH-ENG-02',
    floor: '1F',
    icon: 'BarChart3',
    shortDesc: '노출-클릭-체류-행동-전환 5단계 퍼널 분석 및 3F HQ 피드백 루프',
    mission: '단순한 조회수를 넘어 5단계 퍼널을 세밀하게 분해하여 누수 구간을 찾고, 축적된 데이터를 3F HQ로 상향 전달하여 다음 콘텐츠의 성공률을 수학적으로 높인다.',
    activationCondition: '콘텐츠 발행 후 실시간 및 누적 데이터 수집 시 상시 가동.',
    inputStandard: ['노출수, 클릭률(CTR), 평균 체류시간, 스크롤 깊이, CTA 클릭수, 최종 상담/전환수'],
    analysisProcess: [
      '• 노출이 낮다면 → 주제 / 검색수요 / 키워드 재검토',
      '• 노출은 되는데 클릭이 낮다면 → 제목 / 대표이미지 / 썸네일 후킹 재검토',
      '• 클릭은 되는데 체류가 낮다면 → 도입부 훅 / 콘텐츠 구조 / 가독성 / 이미지 재검토',
      '• 읽기는 하는데 행동하지 않는다면 → CTA / 오퍼 / 신뢰요소 / 반론제거 재검토',
      '• 문의는 오는데 구매가 낮다면 → 상품 / 가격 / 제안 / 상담 프로세스까지 확장 분석'
    ],
    productionProcess: [
      '1. 5단계 퍼널 상태 진단 및 취약점 맵핑',
      '2. 성공 패턴 및 실패 요인 분류',
      '3. 3F HQ 시스템 개선 모듈로 전달할 최적화 인사이트 리포트 생성'
    ],
    qualityStandard: ['추상적 평가가 아닌, 실행 가능한 정량/정성적 개선 액션 도출'],
    prohibitedRules: ['조회수 단일 지표로 콘텐츠 가치를 평가하는 행위 엄금'],
    factCheckStandard: ['분석 데이터 트래킹 태그 정합성 확인'],
    outputStandard: ['Funnel Intelligence Report & HQ Feedback Signal'],
    qaChecklist: ['5개 퍼널 단계별 명확한 솔루션 도출 여부 확인'],
    reworkCondition: ['원인 규명이 모호한 통계 단순 나열 리포트 반려'],
    hqApprovalMetrics: ['HQ 데이터 수석 분석관 승인']
  }
};

export const OPERATING_PRINCIPLES = [
  {
    num: 'ONE',
    title: '사용자가 마무리 작업을 하지 않게 한다',
    desc: '우리 회사가 제작한 결과물을 고객이 다시 잘라내고, 정리하고, 편집하고, 재구성해야 한다면 완성품이라고 보기 어렵습니다. 바로 사용할 수 있는 100% 독립 상태가 우리의 출고 기준입니다.',
    icon: 'CheckCircle'
  },
  {
    num: 'TWO',
    title: '내부 작업과 고객 결과물을 엄격히 구분한다',
    desc: '기획서, 작업코드, 공정명, "본문이미지 01"과 같은 내부 라벨은 회사 내부에서만 사용합니다. 고객에게는 완성된 독자용 카피와 독립 비주얼 에셋만 제공합니다.',
    icon: 'Layers'
  },
  {
    num: 'THREE',
    title: 'AI가 썼다는 느낌을 최소화한다 (인간 중심)',
    desc: 'AI를 사용하는 것은 우리의 생산 기술일 뿐입니다. 결과물은 사람이 읽고, 사람이 깊이 이해하며, 사람이 신뢰하고, 사람이 다음 행동을 하도록 작성되어야 합니다.',
    icon: 'UserCheck'
  },
  {
    num: 'FOUR',
    title: '확인되지 않은 사실을 절대 만들지 않는다',
    desc: '가격, 통계, 효능, 인증, 법률, 정책, 제품 사양 등은 임의로 생성하지 않습니다. 철저한 팩트체크를 거친 검증된 정보만 콘텐츠에 담습니다.',
    icon: 'ShieldAlert'
  },
  {
    num: 'FIVE',
    title: '제작량보다 실제 전환과 성과가 중요하다',
    desc: '"블로그 10개 만들었습니다"라는 단순 수량보다 "어떤 콘텐츠가 실제 고객 행동과 매출을 만들었는가?"를 가장 중요한 가치 척도로 봅니다.',
    icon: 'TrendingUp'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'starter',
    name: 'STARTER',
    tagline: '빠르고 확실한 기본 생산 라인',
    recommendedFor: '신뢰할 수 있는 고품질 블로그 원고와 독립 비주얼이 필요한 초기 비즈니스',
    includedEngines: ['BLOG ENGINE V1', 'VISUAL ENGINE'],
    deliverables: [
      '검색의도 최적화 마스터 블로그 원고 1편',
      '독립 파일 출고 비주얼 에셋 4~6종 (썸네일/공감/정보/CTA)',
      '본문 이미지 정확 삽입 가이드',
      'AI 문체 제로 & 팩트체크 검증 완료'
    ],
    estimatedTurnaround: '24시간 이내 출고',
    basePriceText: '기본형'
  },
  {
    id: 'growth',
    name: 'GROWTH',
    tagline: '플랫폼 최적 조립 & 전환 엔지니어링',
    recommendedFor: '단순 글 작성을 넘어 실제 문의와 방문 전환을 극대화하고 싶은 성장기 기업',
    badge: '추천 (BEST)',
    isPopular: true,
    includedEngines: ['BLOG ENGINE', 'VISUAL ENGINE', 'PUBLISH ENGINE', 'CONVERSION ENGINE'],
    deliverables: [
      'STARTER 전체 포함',
      '플랫폼 맞춤형 시선 흐름 조립 레이아웃 (네이버/WP 등)',
      '거절할 수 없는 오퍼(No-Brainer Offer) 및 CTA 설계',
      '고객 반론 사전 제거 스크립트',
      '3F HQ 최종 QC 검수 리포트'
    ],
    estimatedTurnaround: '48시간 이내 출고',
    basePriceText: '성장형'
  },
  {
    id: 'growth-pro',
    name: 'GROWTH PRO',
    tagline: '1개 마스터 콘텐츠 → 6개 채널 폭풍 확장',
    recommendedFor: '블로그 하나로 유튜브, 쇼츠, 인스타, 광고까지 올인원 확장을 원하는 마케터/대표님',
    includedEngines: ['BLOG ENGINE', 'VISUAL ENGINE', 'PUBLISH ENGINE', 'CONVERSION ENGINE', 'REPURPOSE ENGINE'],
    deliverables: [
      'GROWTH 전체 포함',
      'MASTER CONTENT 1개 기반 멀티채널 확장 패키지',
      'YouTube 롱폼 시나리오 & 60초 숏폼/릴스 대본',
      'Instagram 슬라이드 카드뉴스 기획안',
      '고효율 광고 카피 5종 & 카톡 푸시 메시지',
      '채널별 즉시 게시용 에셋 세트'
    ],
    estimatedTurnaround: '3일 이내 출고',
    basePriceText: '확장형'
  },
  {
    id: 'full-hq',
    name: 'FULL HQ TOTAL',
    tagline: '전략부터 성과 피드백 루프까지 전담 운영',
    recommendedFor: '콘텐츠 생산과 성과 분석, 지속적 SOP 진화 시스템 전체를 위탁 운영할 파트너',
    badge: 'ENTIRE SYSTEM',
    includedEngines: ['전략(3F)', '제작(2F)', '발행·전환(2F)', '멀티채널(1F)', 'PERFORMANCE ENGINE(1F)', 'HQ 환류'],
    deliverables: [
      'GROWTH PRO 전체 포함',
      '3F HQ 전담 프로젝트 분석 및 마스터 전략 수립',
      '노출-클릭-체류-행동-전환 5단계 퍼널 데이터 리포트',
      '성과 저조 구간 원인 분석 및 즉각 A/B 개선안 발행',
      '전용 엔진 커스텀 SOP 구축 및 데이터 피드백 루프 가동'
    ],
    estimatedTurnaround: '월간 전담 파이프라인 가동',
    basePriceText: '통합 파트너십'
  }
];

export const SAMPLE_SIMULATIONS = [
  {
    id: 'real-estate',
    category: '부동산 / 인테리어',
    title: '성수동 30평형 오피스 인테리어 시공 전문점',
    target: '사무실 이전을 앞둔 3040 스타트업 대표 및 총무팀장',
    goal: '방문 실측 무료 상담 예약 30건 달성',
    keywords: '성수동 사무실 인테리어, 스타트업 오피스 시공 비용, 인테리어 턴키 업체 추천'
  },
  {
    id: 'saas',
    category: 'IT / B2B SaaS',
    title: '중소기업 자동 급여정산 & 근태관리 솔루션',
    target: '엑셀 작업으로 야근하는 중소기업 인사담당자 및 대표',
    goal: '14일 무료 체험 계정 가입 및 데모 신청 유도',
    keywords: '급여명세서 자동발송, 5인이상 근태관리 프로그램, 2026 주휴수당 계산기'
  },
  {
    id: 'medical-legal',
    category: '전문직 / 법률·세무',
    title: '상속세 절세 및 가업승계 전문 세무회계법인',
    target: '상속세 조사 통지서를 받았거나 자산 승계를 고민하는 자산가',
    goal: '1:1 비밀 비대면 세무 진단 문의 획득',
    keywords: '상속세 세무조사 대응, 가업상속공제 요건, 강남 상속 전문 세무사'
  }
];
