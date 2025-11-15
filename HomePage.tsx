
import React, { useState, useMemo } from 'react';
import { homePageApps } from '../data/mockData';
import type { App } from '../types';
import { AppCard } from '../components/AppCard';
import { SearchIcon, ChevronDownIcon } from '../components/icons';

const categories = ["All", "Tools", "Productivity", "Entertainment", "Media & Video", "Personalization"];
const sortOptions = ["Popularity", "Last Update", "Rating", "Name"];

const SearchFilterBar: React.FC<{
    onSearch: (query: string) => void;
    onCategoryChange: (category: string) => void;
    onSortChange: (sort: string) => void;
    onFilterChange: (filters: { paid: boolean, free: boolean }) => void;
}> = ({ onSearch, onCategoryChange, onSortChange, onFilterChange }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    
    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        onCategoryChange(category);
    };

    return (
        <div className="bg-brand-surface rounded-lg p-4 mb-8 sticky top-20 z-30 shadow-md">
            <div className="relative mb-4">
                <input
                    type="text"
                    placeholder="Search for apps..."
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full bg-brand-bg border border-white/10 rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-brand-primary focus:outline-none transition-all"
                />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-muted" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2">
                    {categories.map(cat => (
                        <button 
                            key={cat}
                            onClick={() => handleCategoryClick(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-brand-primary text-white' : 'bg-white/10 hover:bg-white/20'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <label className="text-sm">
                            <input type="checkbox" onChange={(e) => onFilterChange({ paid: e.target.checked, free: false })} className="mr-1 accent-brand-primary"/> Paid
                        </label>
                         <label className="text-sm">
                            <input type="checkbox" onChange={(e) => onFilterChange({ paid: false, free: e.target.checked })} className="mr-1 accent-brand-primary"/> Free
                        </label>
                    </div>
                    <div className="relative">
                        <select 
                            onChange={(e) => onSortChange(e.target.value)}
                            className="appearance-none bg-white/10 rounded-lg pl-3 pr-8 py-2 text-sm font-semibold focus:ring-2 focus:ring-brand-primary focus:outline-none cursor-pointer"
                        >
                            {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-muted pointer-events-none" />
                    </div>
                 </div>
            </div>
        </div>
    );
}

export const HomePage = () => {
    const [apps, setApps] = useState<App[]>(homePageApps);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortOption, setSortOption] = useState('Popularity');
    const [filters, setFilters] = useState({ paid: false, free: false });

    const filteredAndSortedApps = useMemo(() => {
        let result = [...homePageApps];

        if (searchQuery) {
            result = result.filter(app => 
                app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                app.dev.display_name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (activeCategory !== 'All') {
            result = result.filter(app => app.categories.some(cat => cat.name === activeCategory));
        }
        
        if (filters.paid) {
            result = result.filter(app => app.price > 0);
        }
        if (filters.free) {
            result = result.filter(app => app.price === 0);
        }

        switch (sortOption) {
            case 'Rating':
                result.sort((a, b) => b.avg_rating - a.avg_rating);
                break;
            case 'Name':
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'Popularity': // default sort
            default:
                // Using a mix of rating and a pseudo-random stable sort
                result.sort((a,b) => b.avg_rating - a.avg_rating || a.package_name.localeCompare(b.package_name));
                break;
        }

        return result;
    }, [searchQuery, activeCategory, sortOption, filters]);

    const handleFilterChange = (newFilters: {paid: boolean, free: boolean}) => {
        setFilters(prev => ({...prev, ...newFilters}));
    }

    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white">Discover Your Next Favorite App</h1>
                <p className="text-lg text-brand-text-muted mt-2">The best of CinemaHD, curated for you.</p>
            </div>
            
            <SearchFilterBar 
                onSearch={setSearchQuery} 
                onCategoryChange={setActiveCategory}
                onSortChange={setSortOption}
                onFilterChange={handleFilterChange}
            />

            {filteredAndSortedApps.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredAndSortedApps.map(app => (
                        <AppCard key={app.package_name} app={app} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-xl text-brand-text-muted">No apps found. Try adjusting your filters.</p>
                </div>
            )}
        </main>
    );
};
