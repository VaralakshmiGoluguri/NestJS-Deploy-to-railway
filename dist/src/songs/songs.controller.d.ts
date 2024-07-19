import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Song } from './song.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateSongDto } from './dto/update-song-dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Request } from 'express';
export declare class SongsController {
    private songsService;
    constructor(songsService: SongsService);
    create(createSongDTO: CreateSongDTO, req: Request): Promise<Song>;
    findAll(page?: number, limit?: number): Promise<Pagination<Song>>;
    findOne(id: number): Promise<Song>;
    update(id: number, updateSongDTO: UpdateSongDto): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
