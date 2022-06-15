export interface Image {
    name: String;
    url: String;
}

export interface Location {
    name: String;
    address: String;
    coordinates: {
        lat: String;
        lon: String;
    }
}

export interface Trip {
    id: Number;
    title: String;
    location: Location;
    image: Image;
    stars: Number;
}