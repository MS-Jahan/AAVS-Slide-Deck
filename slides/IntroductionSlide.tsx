
import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Cpu, FileScan, ShieldAlert } from 'lucide-react';

const IntroductionSlide: React.FC = () => {
  return (
    <SlideLayout title="Introduction">
      <div className="text-2xl text-gray-300 mb-12">
        <p>What if we could use the power of AI to automatically find security holes in Android apps?</p>
        <p className="mt-2">This project introduces an automated scanner that does exactly that.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4">
          <Cpu className="h-8 w-8 text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-400">Utilizes a Large Language Model (LLM) to understand code context and identify complex vulnerabilities.</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4">
          <FileScan className="h-8 w-8 text-green-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold mb-2">Comprehensive Static Scanning</h3>
            <p className="text-gray-400">Decompiles APK files to analyze source code, manifest files, and resources without running the app.</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4">
          <ShieldAlert className="h-8 w-8 text-red-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold mb-2">Actionable Security Reports</h3>
            <p className="text-gray-400">Generates clear, detailed reports with remediation advice to help developers secure their apps.</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default IntroductionSlide;
