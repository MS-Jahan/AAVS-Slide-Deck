
import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { PlayCircle, GitMerge, Settings2 } from 'lucide-react';

const FutureWorkSlide: React.FC = () => {
  return (
    <SlideLayout title="Future Work">
      <p className="text-2xl text-gray-300 mb-12">The project provides a strong foundation. Future enhancements could expand its capabilities significantly.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <PlayCircle size={48} className="text-blue-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Dynamic Analysis (DAST)</h3>
          <p className="text-gray-400">Integrate an Android emulator to run apps and analyze their runtime behavior, catching flaws that static analysis can't see.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <GitMerge size={48} className="text-purple-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">CI/CD Integration</h3>
          <p className="text-gray-400">Create plugins for popular CI/CD platforms like GitHub Actions or Jenkins to automate security scanning in the development pipeline.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <Settings2 size={48} className="text-green-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Hybrid Analysis Model</h3>
          <p className="text-gray-400">Combine AI findings with results from traditional SAST tools like MobSF for cross-validation and even broader vulnerability coverage.</p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default FutureWorkSlide;
