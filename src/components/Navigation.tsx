import React from 'react';
import { Home, User, Gamepad2, PenTool, Rocket } from 'lucide-react';
import { PageType } from '../types';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onNewPost: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate, onNewPost }) => {
  const navItems = [
    { id: 'home' as PageType, label: 'Home', icon: Home },
    { id: 'about' as PageType, label: 'About', icon: User },
    { id: 'games' as PageType, label: 'Games', icon: Gamepad2 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Rocket className="text-purple-400" size={32} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Cosmic Blog
            </h1>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === id
                    ? 'bg-purple-600/30 text-purple-300 border border-purple-400/30'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
            
            <button
              onClick={onNewPost}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <PenTool size={18} />
              <span>Write</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;