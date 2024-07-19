import { Artist } from 'src/artists/artist.entity';
import { Playlist } from 'src/playlists/playlist.entity';
export declare class Song {
    id: number;
    title: string;
    releasedDate: Date;
    duration: Date;
    lyrics: string;
    artists: Artist[];
    playList: Playlist;
}
