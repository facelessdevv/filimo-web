/*
useEffect(() => {
    const fetchMovies = async () => {
        try {
            const res = await fetch('http://localhost:4000/api/movies');
            const data = await res.json();

            // ✅ Safely extract rows (Filimo-style structure)
            const rows = Array.isArray(data.data) ? data.data : [];

            // Now do something with `rows`, e.g. extract 3 movies per row
            const movies = rows.flatMap(row => row.movies || []);

            setMovies(movies); // Or however you're storing them
        } catch (err) {
            console.error('Error fetching movies:', err);
        }
    };

    fetchMovies();
}, []);
*/
