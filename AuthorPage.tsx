
import React from 'react';
import { authorDetailsData } from '../data/mockData';
import { AppCard } from '../components/AppCard';

interface AuthorPageProps {
  username: string;
}

export const AuthorPage: React.FC<AuthorPageProps> = ({ username }) => {
  const author = authorDetailsData; // In a real app, you'd fetch based on username

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-brand-surface rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 mb-8">
        <img 
          src={author.avatar_url} 
          alt={author.display_name}
          className="w-32 h-32 rounded-full border-4 border-brand-primary shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold text-white">{author.display_name}</h1>
          <p className="text-lg text-brand-text-muted">@{author.username}</p>
          <p className="mt-4 text-brand-text">Developer at CinemaHD creating amazing applications for movie lovers.</p>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-white mb-6">Apps by {author.display_name}</h2>
      
      {author.apps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {author.apps.map(app => (
            <AppCard key={app.package_name} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-brand-text-muted">{author.display_name} has not published any apps yet.</p>
        </div>
      )}
    </main>
  );
};
