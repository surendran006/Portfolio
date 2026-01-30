import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

interface Hero3DProps {
  sceneUrl?: string;
}

const Hero3D: React.FC<Hero3DProps> = ({ sceneUrl }) => {
  const defaultSceneUrl = 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode';

  return (
    <div className="w-full h-screen relative">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-purple-500/10">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Loading 3D Scene...</p>
          </div>
        </div>
      }>
        <Spline
          scene={sceneUrl || defaultSceneUrl}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      </Suspense>
    </div>
  );
};

export default Hero3D;
