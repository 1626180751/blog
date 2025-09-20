import React from 'react';
import { ExternalLink, Gamepad2, Zap, Target, Puzzle } from 'lucide-react';

const GamesPage: React.FC = () => {
  const games = [
    {
      id: 'pacman',
      title: 'Pac-Man',
      description: 'Classic arcade game where you navigate mazes and collect dots while avoiding ghosts.',
      url: 'https://passer-by.com/pacman/',
      icon: Target,
      color: 'from-yellow-500 to-orange-500',
      difficulty: 'Easy',
    },
    {
      id: 'tetris',
      title: 'React Tetris',
      description: 'The beloved puzzle game built with React. Stack blocks and clear lines!',
      url: 'https://chvin.github.io/react-tetris/?lan=zh',
      icon: Puzzle,
      color: 'from-blue-500 to-purple-500',
      difficulty: 'Medium',
    },
    {
      id: 'battle-city',
      title: 'Battle City',
      description: 'Tank battle game where you defend your base and destroy enemy tanks.',
      url: 'https://battle-city.js.org/#/',
      icon: Zap,
      color: 'from-red-500 to-pink-500',
      difficulty: 'Hard',
    },
  ];

  const handleGameClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Gamepad2 className="text-purple-400 mr-4" size={48} />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Cosmic Games
            </h1>
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Take a break from reading and enjoy some classic games. Perfect for when you need 
            a moment of fun and relaxation between articles.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {games.map(({ id, title, description, url, icon: Icon, color, difficulty }) => (
            <div 
              key={id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer transform hover:-translate-y-2"
              onClick={() => handleGameClick(url)}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <Icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                {title}
              </h3>
              
              <p className="text-white/70 mb-4 leading-relaxed">
                {description}
              </p>
              
              <div className="flex justify-between items-center mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  difficulty === 'Easy' ? 'bg-green-600/30 text-green-300' :
                  difficulty === 'Medium' ? 'bg-yellow-600/30 text-yellow-300' :
                  'bg-red-600/30 text-red-300'
                }`}>
                  {difficulty}
                </span>
                <ExternalLink className="text-white/40 group-hover:text-white/70 transition-colors duration-200" size={20} />
              </div>
              
              <button className="w-full py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 text-white rounded-lg font-medium transition-all duration-200 border border-white/20 hover:border-white/40">
                Play Now
              </button>
            </div>
          ))}
        </div>

        {/* Game Features */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Play Games?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mental Break</h3>
              <p className="text-white/70">
                Take a refreshing break from reading and give your mind a different kind of challenge.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Focus Training</h3>
              <p className="text-white/70">
                Improve your concentration and reaction time with these engaging classic games.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Puzzle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Problem Solving</h3>
              <p className="text-white/70">
                Exercise your problem-solving skills with puzzles and strategic gameplay.
              </p>
            </div>
          </div>
        </div>

        {/* Gaming Tips */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Gaming Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">🎮 Take Regular Breaks</h3>
              <p className="text-white/70">
                Remember to rest your eyes and stretch every 20-30 minutes while gaming.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">🏆 Start with Easy Games</h3>
              <p className="text-white/70">
                If you're new to gaming, begin with easier games and gradually increase difficulty.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">🎯 Focus on Fun</h3>
              <p className="text-white/70">
                Don't worry about high scores initially. Focus on enjoying the experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">⚡ Stay Hydrated</h3>
              <p className="text-white/70">
                Keep water nearby and stay hydrated during longer gaming sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;