
import React from 'react';
import { ShieldCheck, University } from 'lucide-react';

const TitleSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-blue-900/50">
      <div className="text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
            <ShieldCheck className="h-16 w-16 text-blue-400" />
            <University className="h-16 w-16 text-green-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          Android Application Vulnerability Scanner
        </h1>
        <p className="text-2xl text-gray-300 mb-12">
          Leveraging AI for Enhanced Mobile Security
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-300">Md. Sarwar Jahan Sabit</h3>
                <p className="text-gray-400">Reg No: 19502004665</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-300">Md Alif Hossain Rocky</h3>
                <p className="text-gray-400">Reg No: 19502004632</p>
            </div>
        </div>

        <div className="mt-12">
            <p className="text-lg text-gray-400">Department of Computer Science and Engineering (CSE)</p>
            <p className="text-lg text-gray-400">Institute of Science and Technology (IST)</p>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
