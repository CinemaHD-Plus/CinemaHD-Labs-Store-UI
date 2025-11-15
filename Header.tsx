
import React from 'react';
import { FilmIcon } from './icons';

export const Header = () => {
    return (
        <header className="bg-brand-surface/80 backdrop-blur-lg sticky top-0 z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="flex items-center space-x-2">
                        <FilmIcon className="w-8 h-8 text-brand-primary" />
                        <span className="text-2xl font-bold text-white">
                            Cinema<span className="text-brand-primary">HD</span>
                        </span>
                    </a>
                    <div className="flex items-center space-x-4">
                        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-brand-text-muted">
                            <a href="#" className="hover:text-brand-primary transition-colors">Apps</a>
                            <a href="#" className="hover:text-brand-primary transition-colors">Games</a>
                            <a href="#" className="hover:text-brand-primary transition-colors">Themes</a>
                        </nav>
                        <button className="bg-brand-primary text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-brand-primary/90 transition-all">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
