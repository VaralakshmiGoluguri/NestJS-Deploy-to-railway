import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Song } from './song.entity';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDto } from './dto/update-song-dto';
import { Artist } from 'src/artists/artist.entity';
export declare class SongsService {
    private songsRepository;
    private artistsRepository;
    constructor(songsRepository: Repository<Song>, artistsRepository: Repository<Artist>);
    create(songDTO: CreateSongDTO): Promise<Song>;
    findAll(): Promise<Song[]>;
    findOne(id: number): Promise<Song>;
    remove(id: number): Promise<DeleteResult>;
    update(id: number, recordToUpdate: UpdateSongDto): Promise<UpdateResult>;
    paginate(options: IPaginationOptions): Promise<Pagination<Song>>;
}
