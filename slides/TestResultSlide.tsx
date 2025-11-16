
import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Shield, ShieldOff } from 'lucide-react';

const testData = [
    { name: 'Path Traversal', Before: 1, After: 0, severity: 'High' },
    { name: 'Insecure Data Storage', Before: 1, After: 0, severity: 'High' },
    { name: 'Hardcoded Credentials', Before: 1, After: 0, severity: 'High' },
    { name: 'Information Disclosure', Before: 1, After: 0, severity: 'Medium' },
    { name: 'Insecure WebView', Before: 1, After: 0, severity: 'Medium' },
    { name: 'Weak Crypto', Before: 1, After: 0, severity: 'Medium' },
    { name: 'Exported Component', Before: 1, After: 0, severity: 'Low' },
    { name: 'Improper Certificate Validation', Before: 1, After: 0, severity: 'Low' },
];

const totalBefore = testData.reduce((sum, item) => sum + item.Before, 0);
const totalAfter = testData.reduce((sum, item) => sum + item.After, 0);


const TestResultSlide: React.FC = () => {
    return (
        <SlideLayout title="Test Results: OVAA Scan">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={testData}
                            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                            layout="vertical"
                        >
                            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                            <XAxis type="number" hide />
                            <YAxis type="category" dataKey="name" width={150} tick={{ fill: '#9ca3af' }}/>
                            <Tooltip
                                cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563' }}
                            />
                            <Legend />
                            <Bar dataKey="Before" fill="#ef4444" name="Vulnerable APK" />
                            <Bar dataKey="After" fill="#22c55e" name="Patched APK" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex flex-col space-y-6 text-left">
                    <div className="bg-red-900/40 p-6 rounded-lg border border-red-500/50">
                        <div className="flex items-center gap-3">
                            <ShieldOff className="h-12 w-12 text-red-400" />
                            <div>
                                <h3 className="text-xl font-bold text-red-300">Before Patch</h3>
                                <p className="text-4xl font-extrabold">{totalBefore} Vulnerabilities Found</p>
                            </div>
                        </div>
                    </div>
                     <div className="bg-green-900/40 p-6 rounded-lg border border-green-500/50">
                        <div className="flex items-center gap-3">
                            <Shield className="h-12 w-12 text-green-400" />
                            <div>
                                <h3 className="text-xl font-bold text-green-300">After Patch</h3>
                                <p className="text-4xl font-extrabold">{totalAfter} Vulnerabilities Found</p>
                            </div>
                        </div>
                    </div>
                     <p className="text-2xl text-center text-green-300 font-bold">100% Vulnerability Reduction</p>
                </div>
            </div>
        </SlideLayout>
    );
};

export default TestResultSlide;
