/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BuildingShowcase } from './components/BuildingShowcase';
import { BuildingInteractive } from './components/BuildingInteractive';
import { EngineDetailModal } from './components/EngineDetailModal';
import { PipelineSimulator } from './components/PipelineSimulator';
import { LoopDiagram } from './components/LoopDiagram';
import { PrinciplesSection } from './components/PrinciplesSection';
import { PackagesSection } from './components/PackagesSection';
import { ProjectConsultationModal } from './components/ProjectConsultationModal';
import { Footer } from './components/Footer';
import { FloorId, EngineSOP } from './types';

export default function App() {
  const [selectedFloor, setSelectedFloor] = useState<FloorId>('3F');
  const [selectedEngineForModal, setSelectedEngineForModal] = useState<EngineSOP | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationDefaultPackage, setConsultationDefaultPackage] = useState('GROWTH');
  const [activeSection, setActiveSection] = useState('hero');

  const handleOpenConsultation = (pkgName?: string) => {
    if (pkgName) {
      setConsultationDefaultPackage(pkgName);
    }
    setIsConsultationOpen(true);
  };

  const handleSelectFloor = (floorId: FloorId) => {
    setSelectedFloor(floorId);
    const el = document.getElementById('building-blueprint');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBuilding = () => {
    const el = document.getElementById('building-blueprint');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 flex flex-col justify-between">
      
      {/* Navigation */}
      <Navbar 
        onOpenConsultation={() => handleOpenConsultation()} 
        onSelectFloor={handleSelectFloor}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero 
          onExploreBuilding={scrollToBuilding}
          onOpenSimulator={scrollToSimulator}
        />

        {/* 2. Visual 3-Story HQ Building Architecture Cutaway Blueprint */}
        <BuildingShowcase 
          selectedFloor={selectedFloor}
          onSelectFloor={setSelectedFloor}
          onSelectEngine={(engine) => setSelectedEngineForModal(engine)}
        />

        {/* 3. Interactive 3F Virtual Building Explorer & Elevator */}
        <BuildingInteractive 
          selectedFloor={selectedFloor}
          onSelectFloor={setSelectedFloor}
          onSelectEngine={(engine) => setSelectedEngineForModal(engine)}
        />

        {/* 4. Live AI Production Pipeline Simulator */}
        <PipelineSimulator />

        {/* 5. Closed-Loop Continuous Evolution System */}
        <LoopDiagram />

        {/* 6. 5 Operating Principles (SOP Ethics) */}
        <PrinciplesSection />

        {/* 7. Service Packages & Pricing Calculator */}
        <PackagesSection 
          onSelectPackageForConsultation={(pkg) => handleOpenConsultation(pkg)}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Engine SOP Modal */}
      <EngineDetailModal 
        engine={selectedEngineForModal}
        onClose={() => setSelectedEngineForModal(null)}
      />

      {/* Project Consultation / Order Modal */}
      <ProjectConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultPackage={consultationDefaultPackage}
      />

    </div>
  );
}
