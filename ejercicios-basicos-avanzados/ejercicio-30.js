const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
];

const tracksByGenre = {};

for (const track of tracks) {
    const trackGenre = track.genre;

    if (!tracksByGenre[trackGenre]) {
        tracksByGenre[trackGenre] = [];
    }

    tracksByGenre[trackGenre].push(track);
}


console.log("\n=== EJERCICIO 30 ===\n");

console.log("TRACKS POR GENERO:\n");
console.log(tracksByGenre);
console.log();
