import React from 'react';
import SlideLayout from '../components/SlideLayout';
import ImageZoom from '../components/ImageZoom';

const DataFlowDiagramSlide: React.FC = () => {
  return (
    <SlideLayout title="Data Flow Diagram">
      <ImageZoom
        src="https://i.ibb.co/rKCytZzG/new-Level-1-Data-Flow-Diagram.png"
        alt="Data Flow Diagram"
      />
    </SlideLayout>
  );
};

export default DataFlowDiagramSlide;
