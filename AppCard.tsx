
import React from 'react';
import type { App } from '../types';
import { StarRating } from './StarRating';
import { TagIcon } from './icons';

interface AppCardProps {
  app: App;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <a href={`#/app/${app.package_name}`} className="group block rounded-lg overflow-hidden bg-brand-surface shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative pt-[100%]">
        <img
          src={app.banner_square_url}
          alt={`${app.title} banner`}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <img
          src={app.icon_url}
          alt={`${app.title} icon`}
          className="absolute top-3 right-3 w-12 h-12 md:w-14 md:h-14 rounded-xl border-2 border-white/50 shadow-md"
        />
        <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-white font-bold text-lg leading-tight truncate">{app.title}</h3>
            <p className="text-brand-text-muted text-sm truncate">
                by <span className="hover:underline">{app.dev.display_name}</span>
            </p>
        </div>
      </div>
      <div className="p-4 bg-brand-surface">
         <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
                <StarRating rating={app.avg_rating} />
                <span className="text-sm text-brand-text-muted font-medium">{app.avg_rating.toFixed(1)}</span>
            </div>
            <span className={`text-sm font-semibold px-2 py-0.5 rounded-full ${app.price > 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'}`}>
                {app.price > 0 ? `$${app.price.toFixed(2)}` : 'Free'}
            </span>
        </div>
        <div className="flex flex-wrap gap-2 items-center text-xs text-brand-text-muted">
            <TagIcon className="w-4 h-4"/>
            {app.categories.slice(0, 2).map((cat) => (
                <span key={cat.id} className="bg-white/10 px-2 py-1 rounded">
                    {cat.name}
                </span>
            ))}
        </div>
      </div>
    </a>
  );
};
