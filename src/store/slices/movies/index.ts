import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        movies: [
            {
                title: 'Ambulance',
                rating: 5,
                episodes: 1,
                genre: 'Thriller',
                img: 'ambulance.jpg'
            },
            {
                title: 'Cat in boots',
                rating: 5,
                episodes: 1,
                genre: 'Adventure',
                img: 'cat-in-boots.jpg'
            },
            {
                title: 'Batman',
                rating: 4.5,
                episodes: 1,
                genre: 'Action',
                img: 'batman.jpg'
            },
            {
                title: 'Black Panther',
                rating: 4,
                episodes: 1,
                genre: 'Action',
                img: 'black-panther.jpg'
            }
        ],
        series: [
            {
                title: 'The Crown',
                rating: 5,
                episodes: 6,
                genre: 'Drama',
                img: 'slide.jpg'
            },
            {
                title: 'Loki',
                rating: 4.5,
                episodes: 6,
                genre: 'Superhero',
                img: 'loki.jpg'
            },
            {
                title: 'Chernobyl',
                rating: 5,
                episodes: 6,
                genre: 'Mini series',
                img: 'chernobyl.jpg'
            },
            {
                title: 'Rick and Morty',
                rating: 5,
                episodes: 49,
                genre: 'Fantasy',
                img: 'rick.jpg'
            }
        ]
    }
}

const movies = createSlice({
    name: "movies",
    initialState,
    reducers: {}
})

export default movies.reducer