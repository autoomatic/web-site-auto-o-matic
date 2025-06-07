
import { Button } from "@/components/ui/button";
import { useRef } from 'react';
import { generatePDF } from '@/utils/pdfGenerator';
import ProposalHeader from './proposal/ProposalHeader';
import AnalysisSection from './proposal/AnalysisSection';
import ProposalSection from './proposal/ProposalSection';
import ExperimentSection from './proposal/ExperimentSection';
import ContractSection from './proposal/ContractSection';
import ProposalFooter from './proposal/ProposalFooter';

const CommercialProposal = () => {
  const proposalRef = useRef<HTMLDivElement>(null);

  const handleGeneratePDF = async () => {
    if (!proposalRef.current) return;
    await generatePDF(proposalRef.current, 'Proposta-Comercial-Auto-o-matic.pdf');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Botão flutuante para gerar PDF */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={handleGeneratePDF}
          className="bg-red-600 hover:bg-red-700 text-white shadow-lg"
          size="lg"
        >
          📄 Gerar PDF
        </Button>
      </div>

      <div ref={proposalRef}>
        <ProposalHeader />
        
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <AnalysisSection />
          <ProposalSection />
          <ExperimentSection />
          <ContractSection />
          <ProposalFooter />
        </div>
      </div>
    </div>
  );
};

export default CommercialProposal;
