import { Playlist } from './playlist.entity';
import { CreatePlayListDto } from './dto/create-playlist.dto';
import { PlayListsService } from './playlists.service';
export declare class PlayListsController {
    private playListService;
    constructor(playListService: PlayListsService);
    create(playlistDTO: CreatePlayListDto): Promise<Playlist>;
}
