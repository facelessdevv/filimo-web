import React, {useEffect, useRef, useState} from 'react';

const INITIAL_PROXY_URL = 'http://localhost:4000/api/movies';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const currentUrlRef = useRef(INITIAL_PROXY_URL);
    const intervalRef = useRef(null);
    const [darkMode, setDarkMode] = useState(false);

    const colors = {
        background: darkMode ? '#000' : '#fff',
        card: darkMode ? '#111' : '#f9f9f9',
        text: darkMode ? '#fff' : '#000',
        subtext: darkMode ? '#ccc' : '#333',
        shadow: darkMode ? '0 4px 12px rgba(255,255,255,0.05)' : '0 4px 12px rgba(0,0,0,0.1)',
        buttonBg: darkMode ? '#222' : '#eee',
        buttonColor: darkMode ? '#fff' : '#000',
    };

    const fetchMovies = async () => {
        try {
            const response = await fetch(currentUrlRef.current);
            const data = await response.json();


            const filteredMovies = data.data.filter(
                (movie) => movie.output_type == "movie"
            );
            // Extract movies from data.data (array)

            setMovies((prev) => [...prev, ...filteredMovies.flatMap((item) => item.movies.data).slice(0, 6)]);

            // Get next page URL

            const forward = data.links?.forward;
            if (forward) {
                const proxyUrl = `http://localhost:4000/api/movies?url=${encodeURIComponent(forward)}`;
                currentUrlRef.current = proxyUrl;

            } else {
                console.log('❌ No more pages.');
                clearInterval(intervalRef.current);
            }
        } catch (err) {
            console.error('🚨 Error fetching movies:', err);
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        fetchMovies(); // Initial fetch
        intervalRef.current = setInterval(fetchMovies, 10000);
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div
            style={{
                padding: '2rem',
                fontFamily: 'Vazir, Arial, sans-serif',
                background: colors.background,
                color: colors.text,
                minHeight: '100vh',
                direction: 'rtl',
                transition: 'background 0.3s ease, color 0.3s ease',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem',
                }}
            >
                <h1 style={{margin: 0}}>🎬 فیلیمو اکسپلورر</h1>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        background: colors.buttonBg,
                        color: colors.buttonColor,
                        border: '1px solid',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                    }}
                >
                    {darkMode ? '🌞 حالت روشن' : '🌙 حالت تاریک'}
                </button>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '1.5rem',
                }}
            >
                {movies.map((movie, idx) => (
                    <div
                        key={movie.id || idx}
                        style={{
                            background: colors.card,
                            borderRadius: '12px',
                            boxShadow: colors.shadow,
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <img
                            src={movie.pic.movie_img_m || ''}
                            alt={movie.movie_title || 'بدون عنوان'}
                            style={{width: '100%', height: '300px', objectFit: 'cover'}}
                        />
                        <div style={{padding: '1rem'}}>
                            <h3 style={{
                                fontSize: '1rem',
                                marginBottom: '0.5rem'
                            }}>{movie.movie_title || 'بدون عنوان'}</h3>
                            <p style={{
                                fontSize: '0.875rem',
                                color: colors.subtext,
                                display: '-webkit-box',
                                WebkitLineClamp: 6,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>{movie.descr || 'بدون توضیح'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
