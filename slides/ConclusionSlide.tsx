
import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Award, Target, CheckCircle } from 'lucide-react';

const ConclusionSlide: React.FC = () => {
    return (
        <SlideLayout title="Conclusion">
            <div className="text-2xl text-gray-300 mb-12">
                <p>This project successfully demonstrates that leveraging Large Language Models is a viable and highly effective strategy for the future of automated application security testing.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
                <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4">
                    <Target className="h-8 w-8 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold mb-2">Objective Met</h3>
                        <p className="text-gray-400">Created an automated tool that effectively analyzes Android apps and generates actionable reports.</p>
                    </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4">
                    <Award className="h-8 w-8 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold mb-2">Core Innovation Validated</h3>
                        <p className="text-gray-400">Testing proved the AI-driven approach can accurately identify a wide range of vulnerabilities and confirm their remediation.</p>
                    </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold mb-2">Efficient & Practical</h3>
                        <p className="text-gray-400">The system is scalable and efficient enough for practical use, handling large applications in a reasonable timeframe.</p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
};

export default ConclusionSlide;
