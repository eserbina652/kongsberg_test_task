import {Nullable} from "../../types";

export interface ApiCharacters {
    info: {
        count: number;
        pages: number;
        next: Nullable<string>;
        prev: Nullable<string>;
    };
    results: ICharacter[];
}

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: Nullable<string>;
    gender: string;
    origin: IOrigin;
    location: ILocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

interface IOrigin {
    name: string;
    url: string;
}

interface ILocation {
    name: string;
    url: string;
}