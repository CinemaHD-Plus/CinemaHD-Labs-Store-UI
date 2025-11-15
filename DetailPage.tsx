
import React, { useState } from 'react';
import { appDetailsData } from '../data/mockData';
import { StarRating } from '../components/StarRating';
import { TagIcon } from '../components/icons';

interface DetailPageProps {
  packageName: string;
}

export const DetailPage: React.FC<DetailPageProps> = ({ packageName }) => {
  const app = appDetailsData; // In a real app, you'd fetch based on packageName
  const [selectedImage, setSelectedImage] = useState(app.screenshots[0].image.url);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative rounded-xl overflow-hidden h-48 md:h-64 lg:h-80 mb-[-4rem] md:mb-[-6rem]">
        <img src={app.banner_url} alt={`${app.title} banner`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
          <img src={app.icon_url} alt={`${app.title} icon`} className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-brand-surface shadow-lg" />
          <div className="flex-grow pt-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{app.title}</h1>
            <a href={`#/author/${app.dev.username}`} className="text-lg text-brand-primary hover:underline">{app.dev.display_name}</a>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-brand-secondary">{app.avg_rating.toFixed(1)}</span>
                <StarRating rating={app.avg_rating} />
              </div>
              <span className="text-brand-text-muted">({app.total_ratings} reviews)</span>
            </div>
          </div>
          <div className="w-full md:w-auto">
             <button className="w-full bg-brand-primary text-white text-lg font-bold px-10 py-4 rounded-lg hover:bg-brand-primary/90 transition-all shadow-lg">
                {app.price > 0 ? `Buy for $${app.price.toFixed(2)}` : 'Install'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
            <div className="bg-brand-surface p-4 rounded-lg">
                <img src={selectedImage} alt="Selected screenshot" className="w-full h-auto object-contain rounded-lg mb-4 max-h-[60vh]"/>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {app.screenshots.map((ss, index) => (
                        <button key={index} onClick={() => setSelectedImage(ss.image.url)} className={`rounded-md overflow-hidden transition-all duration-200 ${selectedImage === ss.image.url ? 'ring-2 ring-brand-primary' : 'hover:opacity-80'}`}>
                            <img src={ss.thumbnail.url} alt={ss.name} className="w-full h-full object-cover"/>
                        </button>
                    ))}
                </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Description</h2>
            <div 
              className="prose prose-invert prose-p:text-brand-text-muted prose-strong:text-brand-text bg-brand-surface p-6 rounded-lg"
              dangerouslySetInnerHTML={{ __html: app.description }}
            ></div>
          </div>

          <div>
             <h2 className="text-2xl font-bold mb-4">Ratings & Reviews</h2>
             <div className="space-y-4">
               {app.ratings.slice(0, 4).map((rating) => (
                 <div key={rating.uuid} className="bg-brand-surface p-4 rounded-lg">
                   <div className="flex items-center mb-2">
                     <img src={rating.avatar_url || 'https://i.pravatar.cc/40?u=' + rating.userid} alt={rating.username} className="w-10 h-10 rounded-full mr-3" />
                     <div>
                       <p className="font-semibold">{rating.username}</p>
                       <StarRating rating={rating.score} />
                     </div>
                   </div>
                   <p className="text-sm text-brand-text-muted">{rating.review}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
