/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Bot, X } from 'lucide-react';
import { useState } from 'react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed bottom-12 right-14 z-50">
      <div className="relative">
        <button
          className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        </button>

        {/* Conditionally render the iframe above the button */}
        {isOpen && (
          <div className="absolute top-auto bottom-full mb-4 right-0 bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden transition-all duration-300">
            <iframe
              className="h-96 w-96"
              src="https://app.fastbots.ai/embed/cm2e866m507rhn8bklawwg1j0"
              title="Chatbot"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
