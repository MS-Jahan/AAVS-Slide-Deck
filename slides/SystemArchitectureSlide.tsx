import React from 'react';
import SlideLayout from '../components/SlideLayout';
import ImageZoom from '../components/ImageZoom';

const SystemArchitectureSlide: React.FC = () => {
  return (
    <SlideLayout title="System Architecture">
      <ImageZoom
        src="https://i.ibb.co/Pss8fNB9/new-High-Level-System-Workflow-Diagram.png"
        alt="System Architecture Diagram"
      />
    </SlideLayout>
  );
};

export default SystemArchitectureSlide;
