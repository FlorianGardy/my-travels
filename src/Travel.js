// src/Travel.js
import React from "react";

const travels = [
    {
        "id": "1",
        "destination": "Paris",
        "country": "France",
        "distance": "500 km",
        "photo": "http://levieuxbougon.l.e.pic.centerblog.net/o/3af92c39.jpg"
    },
    {
        "id": "2",
        "destination": "Tokyo",
        "country": "Japan",
        "distance": "2500 km",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5cI9Rr8EeBNjJ0LGlUKO_CzLUFJxGDyHOaHOcm322uKp7g32"
    },
    {
        "id": "3",
        "destination": "Sydney",
        "country": "Australia",
        "distance": "3200 km",
        "photo": "http://www.bourlingueurs.com/australie/fotos/fotos_sydney/opera_29.jpg"
    },
    {
        "id": "4",
        "destination": "Moscow",
        "country": "Russia",
        "distance": "1200 km",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/%E5%8F%B0%E4%B8%AD%E4%B8%83%E6%9C%9F_%28cropped%29.jpg/700px-%E5%8F%B0%E4%B8%AD%E4%B8%83%E6%9C%9F_%28cropped%29.jpg"
    },
    {
        "id": "5",
        "destination": "New York",
        "country": "U.S.A",
        "distance": "2100 km",
        "photo": "http://www.bluetigercoffee.com/wp-content/uploads/2016/05/NewYorkContactPageBanner.jpg"
    }
]

const Travel = (props) => (
    <div class="travel">
        <p>
            {travels.map(travel => (
                <div>
                    <p>Destination: {travel.destination}, country: {travel.country}, distance: {travel.distance}</p>
                    <img src={travel.photo} alt="building" />
                </div>
            ))}
        </p>
        <hr />
    </div>
);

export default Travel;