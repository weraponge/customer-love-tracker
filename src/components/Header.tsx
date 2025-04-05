
import React from 'react';
import { MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-6 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Customer Love Tracker</h1>
          </div>
          <div>
            <p className="text-white/80 text-sm">Capturing customer happiness</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
