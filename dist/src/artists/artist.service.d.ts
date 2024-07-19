import { Repository } from 'typeorm';
import { Artist } from './artist.entity';
export declare class ArtistsService {
    private artistRepo;
    constructor(artistRepo: Repository<Artist>);
    findArtist(userId: number): Promise<Artist>;
}
