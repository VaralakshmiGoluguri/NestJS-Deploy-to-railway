import { Song } from 'src/songs/song.entity';
import { User } from 'src/users/user.entity';
export declare class Artist {
    id: number;
    user: User;
    songs: Song[];
}
