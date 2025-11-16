import React from 'react';
import SlideLayout from '../components/SlideLayout';

const TechLogo: React.FC<{ src: string, name: string }> = ({ src, name }) => (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg transition-transform transform hover:scale-105">
        <img src={src} alt={`${name} logo`} className="h-16 mb-4 object-contain" />
        <span className="text-lg font-semibold">{name}</span>
    </div>
);

const TechStackSlide: React.FC = () => {
    const techs = [
        { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'ChatGPT API', src: 'https://api.iconify.design/simple-icons/openai.svg?color=white' },
        { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' },
        { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'JADX', src: 'https://raw.githubusercontent.com/skylot/jadx/master/jadx-gui/src/main/resources/logos/jadx-logo.png' }
    ];

    return (
        <SlideLayout title="Technology Stack">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {techs.map(tech => <TechLogo key={tech.name} {...tech} />)}
            </div>
        </SlideLayout>
    );
};

export default TechStackSlide;