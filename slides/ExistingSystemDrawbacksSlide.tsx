
import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { XCircle, CheckCircle } from 'lucide-react';

const ExistingSystemDrawbacksSlide: React.FC = () => {
  return (
    <SlideLayout title="Why a New Approach?">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="bg-gray-800 p-6 rounded-lg border border-red-500/50">
          <h3 className="text-2xl font-bold mb-4 text-red-400">Traditional Scanners</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" /> 
              <span><span className="font-semibold">Limited Scope:</span> Often rely on known patterns and signatures, missing novel or complex bugs.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" /> 
              <span><span className="font-semibold">High False Positives:</span> Can produce noisy results, wasting developer time on non-issues.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" /> 
              <span><span className="font-semibold">Struggle with Obfuscation:</span> Code obfuscation techniques can easily confuse traditional analysis tools.</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-green-500/50">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Our AI-Powered Approach</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /> 
              <span><span className="font-semibold">Contextual Understanding:</span> LLMs understand code logic, not just patterns, to find more nuanced flaws.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /> 
              <span><span className="font-semibold">Lower False Positives:</span> By understanding intent, AI can better distinguish real vulnerabilities from safe code.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /> 
              <span><span className="font-semibold">Adapts to New Threats:</span> Can identify zero-day vulnerabilities without needing predefined signatures.</span>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
};

export default ExistingSystemDrawbacksSlide;
