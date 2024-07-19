"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 5:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(7);
const app_controller_1 = __webpack_require__(8);
const app_service_1 = __webpack_require__(10);
const logger_middleware_1 = __webpack_require__(14);
const songs_controller_1 = __webpack_require__(15);
const songs_module_1 = __webpack_require__(28);
const playlists_module_1 = __webpack_require__(29);
const auth_module_1 = __webpack_require__(33);
const users_module_1 = __webpack_require__(45);
const artist_module_1 = __webpack_require__(48);
const data_source_1 = __webpack_require__(51);
const seed_module_1 = __webpack_require__(52);
const config_1 = __webpack_require__(11);
const configuration_1 = __webpack_require__(56);
const env_validation_1 = __webpack_require__(57);
let AppModule = class AppModule {
    constructor() {
        console.log('>>>>', `${process.cwd()}/.env.${process.env.NODE_ENV}`);
    }
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes(songs_controller_1.SongsController);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env.development', '.env.production'],
                load: [configuration_1.default],
                isGlobal: true,
                validate: env_validation_1.validate,
            }),
            typeorm_1.TypeOrmModule.forRootAsync(data_source_1.typeOrmAsyncConfig),
            songs_module_1.SongsModule,
            playlists_module_1.PlayListModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            artist_module_1.ArtistsModule,
            seed_module_1.SeedModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [])
], AppModule);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1054f950ba4e94fa5044")
/******/ })();
/******/ 
/******/ }
;