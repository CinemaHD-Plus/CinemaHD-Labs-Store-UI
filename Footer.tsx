
import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-brand-surface mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center text-brand-text-muted text-sm">
                    &copy; {new Date().getFullYear()} CinemaHD. All rights reserved.
                    <p className="mt-2">A conceptual design for a modern app store.</p>
                </div>
            </div>
        </footer>
    );
};
