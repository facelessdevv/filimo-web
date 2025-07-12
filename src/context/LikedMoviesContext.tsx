import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'liked_movies';

const LikedMoviesContext = createContext<{
    likes: Set<string>;
    toggleLike: (id: string) => void;
}>({
    likes: new Set(),
    toggleLike: () => {},
});

export const LikedMoviesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [likes, setLikes] = useState<Set<string>>(new Set());

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setLikes(new Set(JSON.parse(saved)));
    }, []);

    const toggleLike = (id: string) => {
        setLikes((prev) => {
            const updated = new Set(prev);
            if (updated.has(id)) updated.delete(id);
            else updated.add(id);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(updated)));
            return updated;
        });
    };

    return (
        <LikedMoviesContext.Provider value={{ likes, toggleLike }}>
            {children}
        </LikedMoviesContext.Provider>
    );
};

export const useLikes = () => useContext(LikedMoviesContext);
