import React from 'react';

const SpaceBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Meteorites */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`meteor-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 via-yellow-300 to-transparent rounded-full shadow-lg animate-meteor"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent blur-sm opacity-60" />
          <div className="absolute -left-8 top-0 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-transparent opacity-80" />
        </div>
      ))}

      {/* Distant planets */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-30 animate-float" />
      <div className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-25 animate-float-delayed" />
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20 animate-float-slow" />
    </div>
  );
};

export default SpaceBackground;