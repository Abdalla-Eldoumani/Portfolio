"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Code, Briefcase, Mail, FileText, Github, Linkedin, Command } from 'lucide-react';

interface CommandItem {
  id: string;
  label: string;
  icon: React.ElementType;
  action: () => void;
  keywords: string[];
  shortcut?: string;
}

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setSearch('');
  };

  const commands: CommandItem[] = [
    {
      id: 'home',
      label: 'Go to Home',
      icon: Home,
      action: () => scrollToSection('home'),
      keywords: ['home', 'start', 'top', 'hero'],
      shortcut: '1'
    },
    {
      id: 'about',
      label: 'View About Section',
      icon: User,
      action: () => scrollToSection('about'),
      keywords: ['about', 'bio', 'information', 'me'],
      shortcut: '2'
    },
    {
      id: 'skills',
      label: 'See Skills & Expertise',
      icon: Code,
      action: () => scrollToSection('skills'),
      keywords: ['skills', 'technologies', 'expertise', 'stack'],
      shortcut: '3'
    },
    {
      id: 'experience',
      label: 'View Experience',
      icon: Briefcase,
      action: () => scrollToSection('experience'),
      keywords: ['experience', 'work', 'jobs', 'career'],
      shortcut: '4'
    },
    {
      id: 'projects',
      label: 'Browse Projects',
      icon: FileText,
      action: () => scrollToSection('projects'),
      keywords: ['projects', 'portfolio', 'work', 'code'],
      shortcut: '5'
    },
    {
      id: 'contact',
      label: 'Get in Touch',
      icon: Mail,
      action: () => scrollToSection('contact'),
      keywords: ['contact', 'email', 'reach', 'message'],
      shortcut: '6'
    },
    {
      id: 'github',
      label: 'Open GitHub Profile',
      icon: Github,
      action: () => window.open('https://github.com/Abdalla-Eldoumani', '_blank'),
      keywords: ['github', 'code', 'repository', 'git'],
      shortcut: 'g'
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn Profile',
      icon: Linkedin,
      action: () => window.open('https://www.linkedin.com/in/abdallaeldoumani/', '_blank'),
      keywords: ['linkedin', 'professional', 'network'],
      shortcut: 'l'
    },
    {
      id: 'resume',
      label: 'Download Resume',
      icon: FileText,
      action: () => window.open('/my-resume.pdf', '_blank'),
      keywords: ['resume', 'cv', 'download', 'pdf'],
      shortcut: 'r'
    },
  ];

  const filteredCommands = commands.filter(command => {
    const searchLower = search.toLowerCase();
    return (
      command.label.toLowerCase().includes(searchLower) ||
      command.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
    );
  });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Cmd/Ctrl + K to open
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setIsOpen(prev => !prev);
      return;
    }

    // Escape to close
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearch('');
      return;
    }

    if (!isOpen) return;

    // Arrow navigation
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  }, [isOpen, filteredCommands, selectedIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Prevent body scroll when palette is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Hint to show command palette exists
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hint Badge */}
      <AnimatePresence>
        {showHint && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 2 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="glass-effect px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 hover-lift shadow-lg"
            >
              <Command size={14} className="flex-shrink-0" />
              <span className="hidden sm:inline">Press</span>
              <kbd className="command-kbd text-xs">⌘K</kbd>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="command-palette-overlay"
              onClick={() => {
                setIsOpen(false);
                setSearch('');
              }}
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="command-palette"
            >
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  className="command-input pl-14"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                />
              </div>

              {/* Commands List */}
              <div className="command-list">
                {filteredCommands.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    No commands found
                  </div>
                ) : (
                  filteredCommands.map((command, index) => {
                    const Icon = command.icon;
                    return (
                      <button
                        key={command.id}
                        className={`command-item w-full ${
                          index === selectedIndex ? 'selected' : ''
                        }`}
                        onClick={command.action}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        <Icon size={18} />
                        <span className="flex-1 text-left">{command.label}</span>
                        {command.shortcut && (
                          <kbd className="command-kbd">{command.shortcut}</kbd>
                        )}
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-800 px-4 py-3 flex items-center justify-between text-xs text-gray-400 flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="command-kbd text-xs">↑↓</kbd>
                    <span className="hidden xs:inline">Navigate</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="command-kbd text-xs">↵</kbd>
                    <span className="hidden xs:inline">Select</span>
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <kbd className="command-kbd text-xs">Esc</kbd>
                  <span className="hidden xs:inline">Close</span>
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};