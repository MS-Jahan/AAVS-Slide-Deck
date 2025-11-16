import React from 'react';
import SlideLayout from '../components/SlideLayout';
import ImageZoom from '../components/ImageZoom';

const DatabaseSchemaSlide: React.FC = () => {
  return (
    <SlideLayout title="Database Schema">
      <ImageZoom
        src="https://i.ibb.co/R4bPD54q/new-db-schema-design.png"
        alt="Database Schema Diagram"
      />
    </SlideLayout>
  );
};

export default DatabaseSchemaSlide;
