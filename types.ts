
export interface Category {
  name: string;
  id: number;
}

export interface Dev {
  pk: number;
  username: string;
  display_name: string;
  email: string;
  avatar_url?: string;
  userid?: number;
}

export interface App {
  title: string;
  icon_url: string;
  banner_square_url: string;
  avg_rating: number;
  price: number;
  package_name: string;
  categories: Category[];
  dev: Dev;
}

export interface ScreenshotDetail {
  url: string;
  width: number;
  height: number;
}

export interface Screenshot {
  image: ScreenshotDetail;
  name: string;
  thumbnail: ScreenshotDetail;
}

export interface Rating {
  username: string;
  build_id: number;
  avatar_url: string;
  score: number;
  date: string;
  review: string;
  userid: string;
  uuid: string;
}

export interface Build {
  build_id: number;
  type: string;
  changelog: string;
  permission_ids: number[];
  date: string;
  timestamp: number;
  version_code: number;
  version_name: string;
  size: string;
}

export interface AppDetails {
  banner_url: string;
  price: number;
  categories: Category[];
  xda_forum_url: string;
  xda_thread_id: string;
  fingerprint: string;
  screenshots: Screenshot[];
  ratings: Rating[];
  uuid: string;
  total_ratings: number;
  dates: {
    last_build: string;
    modified: string;
    created: string;
  };
  description: string;
  builds: Build[];
  other_apps: Pick<App, 'title' | 'icon_url' | 'avg_rating' | 'price' | 'package_name'>[];
  title: string;
  icon_url: string;
  avg_rating: number;
  on_watchlist: boolean;
  dev: Dev;
  category_ids: number[];
  paid_for: boolean;
  package_name: string;
  banner_square_url: string;
}

export interface AuthorDetails {
    userid: number;
    username: string;
    display_name: string;
    avatar_url: string;
    apps: App[];
}
