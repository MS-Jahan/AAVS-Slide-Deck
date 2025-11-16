import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Bot, FileJson, ShieldCheck } from 'lucide-react';

const ProposedSystemFeaturesSlide: React.FC = () => {
  const features = [
    { icon: Bot, title: "Static Code Analysis (AI)", description: "AI identifies vulnerabilities in the APK's codebase like insecure coding and hardcoded credentials." },
    { icon: FileJson, title: "Manifest Analysis", description: "Examines AndroidManifest.xml for security misconfigurations like excessive permissions." },
    { icon: ShieldCheck, title: "OWASP MASVS Compliance", description: "Assesses the application's adherence to the OWASP Mobile Security Standard." },
  ];

  return (
    <SlideLayout title="Key Features">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700/80 transition-all transform hover:-translate-y-1">
            <feature.icon className="h-8 w-8 text-blue-400 mb-3" />
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
         <div className="bg-green-800/40 p-6 rounded-lg hover:bg-green-700/60 transition-all transform hover:-translate-y-1">
            <h3 className="text-lg font-bold mb-2 text-green-300">Comprehensive Reporting</h3>
            <p className="text-gray-300 text-sm">Generates detailed PDF reports with severity levels and recommended remediation steps.</p>
          </div>
      </div>
    </SlideLayout>
  );
};

export default ProposedSystemFeaturesSlide;