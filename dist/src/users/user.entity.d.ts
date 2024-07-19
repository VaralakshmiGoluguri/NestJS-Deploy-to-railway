import { Playlist } from 'src/playlists/playlist.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    playLists: Playlist[];
    twoFASecret: string;
    enable2FA: boolean;
    apiKey: string;
}
