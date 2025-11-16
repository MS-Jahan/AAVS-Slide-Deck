
import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Smartphone, KeyRound, ServerCrash } from 'lucide-react';

const MotivationSlide: React.FC = () => {
  return (
    <SlideLayout title="Motivation: The Problem">
      <p className="text-2xl text-gray-300 mb-12">Android's popularity makes it a prime target. Many apps are released with critical security flaws.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <Smartphone size={48} className="text-blue-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Sensitive Data at Risk</h3>
          <p className="text-gray-400">Mobile apps handle personal, financial, and confidential information, making them valuable targets for attackers.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <KeyRound size={48} className="text-yellow-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Security is Overlooked</h3>
          <p className="text-gray-400">In the rush to develop features, security best practices are often forgotten, leaving apps vulnerable by default.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <ServerCrash size={48} className="text-red-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Consequences are Severe</h3>
          <p className="text-gray-400">Vulnerable apps can lead to data breaches, financial loss, reputation damage, and loss of user trust.</p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default MotivationSlide;
