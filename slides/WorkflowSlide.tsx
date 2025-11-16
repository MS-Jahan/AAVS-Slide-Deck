import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { ArrowRight, User, Server, BrainCircuit, FileCode, FileText, Mail, ArrowDown } from 'lucide-react';

// A single component for the workflow steps for simplicity and consistency
const StepCard: React.FC<{
  icon: React.ElementType;
  title: string;
  subtitle: string;
  color: string;
  className?: string;
}> = ({ icon: Icon, title, subtitle, color, className = '' }) => (
  // Make cards wider on mobile (w-full max-w-sm) and give them a fixed width/height on desktop for uniformity
  <div className={`flex w-full max-w-sm flex-col items-center justify-center rounded-lg bg-gray-800 p-4 text-center lg:h-36 lg:w-44 ${className}`}>
    <Icon className={`h-10 w-10 mb-3 ${color}`} />
    <h3 className="font-bold">{title}</h3>
    <p className="text-sm text-gray-400">{subtitle}</p>
  </div>
);

// A simple arrow component that adapts to screen size
const FlowArrow: React.FC = () => (
  <div className="flex-shrink-0 text-gray-500 my-2 lg:my-0">
    <ArrowDown className="h-8 w-8 lg:hidden" />
    <ArrowRight className="h-8 w-8 hidden lg:block" />
  </div>
);

const WorkflowSlide: React.FC = () => {
  return (
    <SlideLayout title="System Workflow">
      {/* Changed to lg:items-center for vertical alignment */}
      <div className="flex w-full flex-col items-center justify-center gap-2 lg:flex-row lg:items-center lg:gap-4">
        
        <StepCard icon={User} title="1. User Uploads" subtitle="Uploads APK" color="text-green-400" />

        <FlowArrow />

        <StepCard icon={Server} title="2. Backend" subtitle="Queues Task" color="text-yellow-400" />

        <FlowArrow />
        
        {/* Made this card wider and taller to accommodate content and stand out */}
        <div className="flex w-full max-w-sm flex-col items-center justify-center rounded-lg border border-blue-500 bg-blue-900/50 p-4 text-center lg:h-48 lg:w-64">
          <BrainCircuit className="h-10 w-10 mb-3 text-blue-300" />
          <h3 className="font-bold">3. Analysis Orchestrator</h3>
          <p className="text-sm text-gray-300 mb-4">(Python Engine)</p>
          <div className="flex w-full flex-col space-y-2">
            <div className="flex items-center gap-2 rounded bg-gray-800 p-2">
              <FileCode className="h-5 w-5 flex-shrink-0 text-gray-400"/>
              <span className="text-sm">Decompile APK (JADX)</span>
            </div>
            <div className="flex items-center gap-2 rounded bg-gray-800 p-2 ring-2 ring-purple-500 shadow-lg shadow-purple-500/20">
              <BrainCircuit className="h-5 w-5 flex-shrink-0 text-purple-400"/>
              <span className="font-bold text-sm text-purple-300">Analyze with ChatGPT API</span>
            </div>
          </div>
        </div>

        <FlowArrow />

        <StepCard icon={FileText} title="4. Report" subtitle="Generate PDF" color="text-purple-400" />
        
        <FlowArrow />

        <StepCard icon={Mail} title="5. Notify User" subtitle="View in UI" color="text-green-400" />

      </div>
    </SlideLayout>
  );
};

export default WorkflowSlide;