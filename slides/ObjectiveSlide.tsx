
import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { UploadCloud, SearchCode, FileText } from 'lucide-react';

const ObjectiveSlide: React.FC = () => {
  return (
    <SlideLayout title="Our Objective: The Solution">
      <p className="text-2xl text-gray-300 mb-12">To build an intelligent, accessible, and effective tool for developers to proactively secure their Android applications.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <UploadCloud size={48} className="text-green-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Develop a Web-Based Platform</h3>
          <p className="text-gray-400">Create a simple interface where developers can upload APK files for analysis, making security testing easy and accessible.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <SearchCode size={48} className="text-blue-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Implement AI-Driven Analysis</h3>
          <p className="text-gray-400">Leverage advanced LLMs to perform deep static analysis, finding vulnerabilities that traditional scanners might miss.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <FileText size={48} className="text-purple-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Generate Detailed Reports</h3>
          <p className="text-gray-400">Provide clear, actionable reports that not only identify vulnerabilities but also offer concrete steps for remediation.</p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default ObjectiveSlide;
