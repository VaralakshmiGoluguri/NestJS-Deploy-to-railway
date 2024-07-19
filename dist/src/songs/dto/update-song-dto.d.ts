import { Artist } from 'src/artists/artist.entity';
export declare class UpdateSongDto {
    readonly title: string;
    readonly artists: Artist[];
    readonly releasedDate: Date;
    readonly duration: Date;
    readonly lyrics: string;
}
