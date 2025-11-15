
import React, { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';
import { AuthorPage } from './pages/AuthorPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

interface Route {
    path: string;
    params: Record<string, string>;
}

const parseRoute = (hash: string): Route => {
    const path = hash.substring(1); // remove #
    const parts = path.split('/').filter(p => p);

    if (parts[0] === 'app' && parts[1]) {
        return { path: 'details', params: { packageName: parts[1] } };
    }
    if (parts[0] === 'author' && parts[1]) {
        return { path: 'author', params: { username: parts[1] } };
    }
    return { path: 'home', params: {} };
};

const App = () => {
    const [route, setRoute] = useState<Route>(parseRoute(window.location.hash));

    useEffect(() => {
        const handleHashChange = () => {
            setRoute(parseRoute(window.location.hash));
            window.scrollTo(0, 0);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderPage = () => {
        switch (route.path) {
            case 'details':
                return <DetailPage packageName={route.params.packageName} />;
            case 'author':
                return <AuthorPage username={route.params.username} />;
            case 'home':
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <div className="flex-grow">
                {renderPage()}
            </div>
            <Footer />
        </div>
    );
};

export default App;
