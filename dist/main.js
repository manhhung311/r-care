/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const CustomerInformation_controller_1 = __webpack_require__(4);
const CustomerInformation_service_1 = __webpack_require__(16);
const mongoose_1 = __webpack_require__(13);
const config_1 = __webpack_require__(24);
const Models_1 = __webpack_require__(25);
const CustomerInformation_repository_1 = __webpack_require__(17);
const FeedBacks_repository_1 = __webpack_require__(23);
const transformer_middleware_1 = __webpack_require__(27);
const jwt_1 = __webpack_require__(29);
const core_1 = __webpack_require__(1);
const auth_guards_1 = __webpack_require__(30);
const Users_service_1 = __webpack_require__(31);
const Users_repository_1 = __webpack_require__(33);
const roles_guards_1 = __webpack_require__(34);
const Roles_repository_1 = __webpack_require__(32);
const PurchaseInformation_controller_1 = __webpack_require__(35);
const PurchaseInformation_service_1 = __webpack_require__(39);
const PurchaseInformation_repository_1 = __webpack_require__(40);
const mangament_controller_1 = __webpack_require__(41);
const axios_1 = __webpack_require__(43);
const Mangament_service_1 = __webpack_require__(42);
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(transformer_middleware_1.TransformerMiddleware)
            .forRoutes({ path: '*', method: 1 }, { path: '*', method: 2 }, { path: '*', method: 0 }, { path: '*', method: 4 });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    uri: 'mongodb+srv://manhhung:ManhHung311@atlascluster.rmf14gu.mongodb.net/?retryWrites=true&w=majority',
                    dbName: 'test',
                }),
                inject: [config_1.ConfigService],
            }),
            mongoose_1.MongooseModule.forFeature(Models_1.default),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
        ],
        controllers: [
            CustomerInformation_controller_1.CustomerInformationController,
            PurchaseInformation_controller_1.PurchaseInformationController,
            mangament_controller_1.MangamentController,
        ],
        providers: [
            jwt_1.JwtService,
            FeedBacks_repository_1.FeedbacksRepository,
            Users_repository_1.UsersRepository,
            Roles_repository_1.RolesRepository,
            CustomerInformation_repository_1.CustomerInformationRepository,
            PurchaseInformation_repository_1.PurchaseInformationRepository,
            CustomerInformation_service_1.CustomerInformationService,
            PurchaseInformation_service_1.PurchaseInformationService,
            Mangament_service_1.MangamentService,
            Users_service_1.UsersService,
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guards_1.AuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guards_1.RolesGuard,
            },
        ],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerInformationController = void 0;
const customerInformation_create_dto_1 = __webpack_require__(5);
const customerInformation_query_dto_1 = __webpack_require__(8);
const customerInformation_update_dto_1 = __webpack_require__(9);
const common_1 = __webpack_require__(3);
const roles_decorator_1 = __webpack_require__(10);
const users_decorator_1 = __webpack_require__(11);
const Roles_entity_1 = __webpack_require__(12);
const Users_entity_1 = __webpack_require__(14);
const CustomerInformation_service_1 = __webpack_require__(16);
let CustomerInformationController = class CustomerInformationController {
    constructor(customerInformationService) {
        this.customerInformationService = customerInformationService;
    }
    query(user, query) {
        return this.customerInformationService.query(user, query);
    }
    getById(id, user) {
        return this.customerInformationService.getById(id, user);
    }
    create(user, data) {
        return this.customerInformationService.create(user, data);
    }
    update(user, data) {
        return this.customerInformationService.update(user, data);
    }
    deleteInfo(user) {
    }
};
exports.CustomerInformationController = CustomerInformationController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.GET, subject: Roles_entity_1.SUBJECT.customer }),
    __param(0, (0, users_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _b : Object, typeof (_c = typeof customerInformation_query_dto_1.CustomerInformationQueryDTO !== "undefined" && customerInformation_query_dto_1.CustomerInformationQueryDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CustomerInformationController.prototype, "query", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.GET, subject: Roles_entity_1.SUBJECT.customer }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, users_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], CustomerInformationController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.CREATE, subject: Roles_entity_1.SUBJECT.customer }),
    __param(0, (0, users_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _e : Object, typeof (_f = typeof customerInformation_create_dto_1.CustomerInformationCreateDTO !== "undefined" && customerInformation_create_dto_1.CustomerInformationCreateDTO) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], CustomerInformationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.UPDATE, subject: Roles_entity_1.SUBJECT.customer }),
    __param(0, (0, users_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _g : Object, typeof (_h = typeof customerInformation_update_dto_1.CustomerInformationUpdateDTO !== "undefined" && customerInformation_update_dto_1.CustomerInformationUpdateDTO) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], CustomerInformationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.DELETE, subject: Roles_entity_1.SUBJECT.customer }),
    __param(0, (0, users_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _j : Object]),
    __metadata("design:returntype", void 0)
], CustomerInformationController.prototype, "deleteInfo", null);
exports.CustomerInformationController = CustomerInformationController = __decorate([
    (0, common_1.Controller)('customerInformation'),
    __metadata("design:paramtypes", [typeof (_a = typeof CustomerInformation_service_1.CustomerInformationService !== "undefined" && CustomerInformation_service_1.CustomerInformationService) === "function" ? _a : Object])
], CustomerInformationController);


/***/ }),
/* 5 */
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
exports.CustomerInformationCreateDTO = void 0;
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(7);
class CustomerInformationCreateDTO {
}
exports.CustomerInformationCreateDTO = CustomerInformationCreateDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerInformationCreateDTO.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerInformationCreateDTO.prototype, "brithDay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerInformationCreateDTO.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerInformationCreateDTO.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerInformationCreateDTO.prototype, "wards", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerInformationCreateDTO.prototype, "district", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerInformationCreateDTO.prototype, "province", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerInformationCreateDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CustomerInformationCreateDTO.prototype, "emails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CustomerInformationCreateDTO.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CustomerInformationCreateDTO.prototype, "linkSocial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerInformationCreateDTO.prototype, "jobs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerInformationCreateDTO.prototype, "income", void 0);


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 8 */
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
exports.CustomerInformationQueryDTO = void 0;
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(7);
class CustomerInformationQueryDTO {
}
exports.CustomerInformationQueryDTO = CustomerInformationQueryDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    __metadata("design:type", String)
], CustomerInformationQueryDTO.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    __metadata("design:type", String)
], CustomerInformationQueryDTO.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CustomerInformationQueryDTO.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CustomerInformationQueryDTO.prototype, "limit", void 0);


/***/ }),
/* 9 */
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
exports.CustomerInformationUpdateDTO = void 0;
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(7);
const customerInformation_create_dto_1 = __webpack_require__(5);
class CustomerInformationUpdateDTO extends customerInformation_create_dto_1.CustomerInformationCreateDTO {
}
exports.CustomerInformationUpdateDTO = CustomerInformationUpdateDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'id khach hang',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerInformationUpdateDTO.prototype, "id", void 0);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = __webpack_require__(3);
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => {
    return (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
};
exports.Roles = Roles;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const common_1 = __webpack_require__(3);
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),
/* 12 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesSchema = exports.Roles = exports.TYPEROLE = exports.SUBJECT = exports.ACTION = void 0;
const mongoose_1 = __webpack_require__(13);
var ACTION;
(function (ACTION) {
    ACTION["CREATE"] = "CREATE";
    ACTION["GET"] = "GET";
    ACTION["DELETE"] = "DELETE";
    ACTION["UPDATE"] = "UPDATE";
})(ACTION || (exports.ACTION = ACTION = {}));
var SUBJECT;
(function (SUBJECT) {
    SUBJECT["customer"] = "customer";
    SUBJECT["purchase"] = "purchase";
    SUBJECT["feedBacks"] = "feedBacks";
})(SUBJECT || (exports.SUBJECT = SUBJECT = {}));
var TYPEROLE;
(function (TYPEROLE) {
    TYPEROLE["ADMIN"] = "ADMIN";
    TYPEROLE["USER"] = "USER";
})(TYPEROLE || (exports.TYPEROLE = TYPEROLE = {}));
let Roles = class Roles {
};
exports.Roles = Roles;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Roles.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Roles.prototype, "isAdmin", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Roles.prototype, "permissions", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Roles.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Roles.prototype, "ComId", void 0);
exports.Roles = Roles = __decorate([
    (0, mongoose_1.Schema)()
], Roles);
exports.RolesSchema = mongoose_1.SchemaFactory.createForClass(Roles);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 14 */
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
exports.UsersSchema = exports.Users = void 0;
const mongoose_1 = __webpack_require__(13);
const mongoose_2 = __webpack_require__(15);
const Roles_entity_1 = __webpack_require__(12);
let Users = class Users {
};
exports.Users = Users;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "UserAvatar", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "UserId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "ComId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "GroupId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "FullName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "ComName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "UserRole", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose_2.default.Schema.ObjectId, ref: Roles_entity_1.Roles.name }],
    }),
    __metadata("design:type", Array)
], Users.prototype, "roles", void 0);
exports.Users = Users = __decorate([
    (0, mongoose_1.Schema)()
], Users);
exports.UsersSchema = mongoose_1.SchemaFactory.createForClass(Users);


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 16 */
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerInformationService = void 0;
const common_1 = __webpack_require__(3);
const CustomerInformation_repository_1 = __webpack_require__(17);
const FeedBacks_repository_1 = __webpack_require__(23);
let CustomerInformationService = class CustomerInformationService {
    constructor(customerInformationRepository, feedbacksRepository) {
        this.customerInformationRepository = customerInformationRepository;
        this.feedbacksRepository = feedbacksRepository;
    }
    async create(user, info) {
        info.ComId = user.ComId;
        const information = await this.customerInformationRepository.create(info);
        return information;
    }
    converStringToJson(obj) {
        try {
            return JSON.parse(obj);
        }
        catch (ex) {
            return null;
        }
    }
    async query(user, query) {
        const { skip, limit } = query, data = __rest(query, ["skip", "limit"]);
        const infoCustom = await this.customerInformationRepository.findAllByCompany(skip, limit, data, user.ComId);
        const info = infoCustom.items.map((item) => {
            return Object.assign(Object.assign({}, item), { _doc: Object.assign(Object.assign({}, item._doc), { star: item.feedBacks.reduce((n, { rate }) => n + rate, 0) /
                        item.feedBacks.length || 0 }) });
        });
        return Object.assign(Object.assign({}, infoCustom), { items: info, secret: user.secret });
    }
    async getById(id, user) {
        const customer = await this.customerInformationRepository.findOneById(id);
        if (!customer)
            throw new common_1.NotFoundException();
        return Object.assign(Object.assign({}, customer), { secret: user.secret });
    }
    async update(user, info) {
        const infoCustom = await this.customerInformationRepository.findOneById(info.id);
        if (!infoCustom)
            throw new common_1.NotFoundException();
        if (infoCustom.ComId !== user.ComId)
            throw new common_1.ForbiddenException();
        await this.customerInformationRepository.update(info.id, Object.assign(Object.assign({}, info), { isHidden: true }));
        delete info.id;
        const newInfo = await this.create(user, info);
        return newInfo;
    }
    async deleteCustom(user, idInfo) {
        const infoCustom = await this.customerInformationRepository.findOneById(idInfo);
        if (!infoCustom)
            throw new common_1.NotFoundException();
        if (infoCustom.ComId !== user.ComId)
            throw new common_1.ForbiddenException();
        return this.customerInformationRepository.softDelete(idInfo);
    }
};
exports.CustomerInformationService = CustomerInformationService;
exports.CustomerInformationService = CustomerInformationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof CustomerInformation_repository_1.CustomerInformationRepository !== "undefined" && CustomerInformation_repository_1.CustomerInformationRepository) === "function" ? _a : Object, typeof (_b = typeof FeedBacks_repository_1.FeedbacksRepository !== "undefined" && FeedBacks_repository_1.FeedbacksRepository) === "function" ? _b : Object])
], CustomerInformationService);


/***/ }),
/* 17 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerInformationRepository = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(13);
const base_repository_1 = __webpack_require__(18);
const CustomerInformation_entity_1 = __webpack_require__(19);
let CustomerInformationRepository = class CustomerInformationRepository extends base_repository_1.BaseRepositoryAbstract {
    constructor(customerInformation_model) {
        super(customerInformation_model);
        this.customerInformation_model = customerInformation_model;
    }
    async findAllByCompany(skip, limit, query, ComId) {
        const [count, items] = await Promise.all([
            this.customerInformation_model.count(Object.assign(Object.assign({}, query), { ComId: ComId, isHidden: false, deleted_at: null })),
            this.customerInformation_model
                .find(Object.assign(Object.assign({}, query), { ComId: ComId, isHidden: false, deleted_at: null }))
                .populate([{ path: 'feedBacks' }])
                .skip(skip)
                .limit(limit),
            ,
        ]);
        return { count, items };
    }
};
exports.CustomerInformationRepository = CustomerInformationRepository;
exports.CustomerInformationRepository = CustomerInformationRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(CustomerInformation_entity_1.CustomerInformation.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], CustomerInformationRepository);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseRepositoryAbstract = void 0;
class BaseRepositoryAbstract {
    constructor(model) {
        this.model = model;
        this.model = model;
    }
    async create(dto) {
        const created_data = await this.model.create(dto);
        return created_data.save();
    }
    async findOneById(id) {
        const item = await this.model.findById(id);
        return item.deleted_at ? null : item;
    }
    async findOneByCondition(condition = {}) {
        return await this.model
            .findOne(Object.assign(Object.assign({}, condition), { deleted_at: null }))
            .exec();
    }
    async findAll(condition, options) {
        const [count, items] = await Promise.all([
            this.model.count(Object.assign(Object.assign({}, condition), { deleted_at: null })),
            this.model.find(Object.assign(Object.assign({}, condition), { deleted_at: null }), options === null || options === void 0 ? void 0 : options.projection, options),
        ]);
        return { count, items };
    }
    async update(id, dto) {
        return await this.model.findOneAndUpdate({ _id: id, deleted_at: null }, dto, { new: true });
    }
    async softDelete(id) {
        const delete_item = await this.model.findById(id);
        if (!delete_item) {
            return false;
        }
        return !!(await this.model
            .findByIdAndUpdate(id, { deleted_at: new Date() })
            .exec());
    }
    async permanentlyDelete(id) {
        const delete_item = await this.model.findById(id);
        if (!delete_item) {
            return false;
        }
        return !!(await this.model.findByIdAndDelete(id));
    }
}
exports.BaseRepositoryAbstract = BaseRepositoryAbstract;


/***/ }),
/* 19 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerInformationSchema = exports.CustomerInformation = void 0;
const PurchaseInformation_entity_1 = __webpack_require__(20);
const mongoose_1 = __webpack_require__(13);
const class_transformer_1 = __webpack_require__(21);
const mongoose = __webpack_require__(15);
const feedbacks_entity_1 = __webpack_require__(22);
const Users_entity_1 = __webpack_require__(14);
let CustomerInformation = class CustomerInformation {
};
exports.CustomerInformation = CustomerInformation;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)((value) => { var _a, _b; return (_b = (_a = value.obj) === null || _a === void 0 ? void 0 : _a._id) === null || _b === void 0 ? void 0 : _b.toString(); }, { toClassOnly: true }),
    __metadata("design:type", String)
], CustomerInformation.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerInformation.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerInformation.prototype, "brithDay", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerInformation.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerInformation.prototype, "ComId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerInformation.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerInformation.prototype, "wards", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerInformation.prototype, "district", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerInformation.prototype, "province", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerInformation.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], CustomerInformation.prototype, "emails", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], CustomerInformation.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], CustomerInformation.prototype, "linkSocial", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerInformation.prototype, "jobs", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerInformation.prototype, "income", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], CustomerInformation.prototype, "isHidden", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.ObjectId, ref: Users_entity_1.Users.name }),
    __metadata("design:type", typeof (_a = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _a : Object)
], CustomerInformation.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose.Schema.ObjectId, ref: PurchaseInformation_entity_1.PurchaseInformation.name }],
    }),
    __metadata("design:type", Array)
], CustomerInformation.prototype, "purchases", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.ObjectId, ref: feedbacks_entity_1.Feedbacks.name }] }),
    __metadata("design:type", Array)
], CustomerInformation.prototype, "feedBacks", void 0);
exports.CustomerInformation = CustomerInformation = __decorate([
    (0, mongoose_1.Schema)()
], CustomerInformation);
exports.CustomerInformationSchema = mongoose_1.SchemaFactory.createForClass(CustomerInformation);


/***/ }),
/* 20 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PurchaseInformationSchema = exports.PurchaseInformation = void 0;
const mongoose_1 = __webpack_require__(13);
const mongoose_2 = __webpack_require__(15);
const Users_entity_1 = __webpack_require__(14);
const class_transformer_1 = __webpack_require__(21);
const feedbacks_entity_1 = __webpack_require__(22);
let PurchaseInformation = class PurchaseInformation {
};
exports.PurchaseInformation = PurchaseInformation;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)((value) => { var _a, _b; return (_b = (_a = value.obj) === null || _a === void 0 ? void 0 : _a._id) === null || _b === void 0 ? void 0 : _b.toString(); }, { toClassOnly: true }),
    __metadata("design:type", String)
], PurchaseInformation.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PurchaseInformation.prototype, "ComId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PurchaseInformation.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PurchaseInformation.prototype, "currencyUnit", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PurchaseInformation.prototype, "describe", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PurchaseInformation.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PurchaseInformation.prototype, "unit", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PurchaseInformation.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PurchaseInformation.prototype, "transportFee", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PurchaseInformation.prototype, "province", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PurchaseInformation.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], PurchaseInformation.prototype, "isHidden", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.ObjectId, ref: feedbacks_entity_1.Feedbacks.name }),
    __metadata("design:type", typeof (_a = typeof feedbacks_entity_1.Feedbacks !== "undefined" && feedbacks_entity_1.Feedbacks) === "function" ? _a : Object)
], PurchaseInformation.prototype, "feedBack", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.ObjectId, ref: Users_entity_1.Users.name }),
    __metadata("design:type", typeof (_b = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _b : Object)
], PurchaseInformation.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], PurchaseInformation.prototype, "createdAt", void 0);
exports.PurchaseInformation = PurchaseInformation = __decorate([
    (0, mongoose_1.Schema)()
], PurchaseInformation);
exports.PurchaseInformationSchema = mongoose_1.SchemaFactory.createForClass(PurchaseInformation);


/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 22 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeedbacksSchema = exports.Feedbacks = void 0;
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(13);
const class_transformer_1 = __webpack_require__(21);
const Users_entity_1 = __webpack_require__(14);
let Feedbacks = class Feedbacks {
};
exports.Feedbacks = Feedbacks;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)((value) => { var _a, _b; return (_b = (_a = value.obj) === null || _a === void 0 ? void 0 : _a._id) === null || _b === void 0 ? void 0 : _b.toString(); }, { toClassOnly: true }),
    __metadata("design:type", String)
], Feedbacks.prototype, "id", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], Feedbacks.prototype, "product", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], Feedbacks.prototype, "comment", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], Feedbacks.prototype, "recommendations", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], Feedbacks.prototype, "suggestion", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", Number)
], Feedbacks.prototype, "rate", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], Feedbacks.prototype, "ComId", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Feedbacks.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_2.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Feedbacks.prototype, "isHidden", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose_1.default.Schema.ObjectId, ref: Users_entity_1.Users.name }),
    __metadata("design:type", typeof (_b = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _b : Object)
], Feedbacks.prototype, "user", void 0);
exports.Feedbacks = Feedbacks = __decorate([
    (0, mongoose_2.Schema)()
], Feedbacks);
exports.FeedbacksSchema = mongoose_2.SchemaFactory.createForClass(Feedbacks);


/***/ }),
/* 23 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeedbacksRepository = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(13);
const base_repository_1 = __webpack_require__(18);
const feedbacks_entity_1 = __webpack_require__(22);
let FeedbacksRepository = class FeedbacksRepository extends base_repository_1.BaseRepositoryAbstract {
    constructor(feedbacks_model) {
        super(feedbacks_model);
        this.feedbacks_model = feedbacks_model;
    }
    async findAllByCompany(ComId, query) {
        const [count, items] = await Promise.all([
            this.feedbacks_model.count(Object.assign(Object.assign({}, query.conditions), { ComId: ComId, deleted_at: null })),
            this.feedbacks_model
                .find(Object.assign(Object.assign({}, query.conditions), { ComId: ComId, deleted_at: null }))
                .populate('feedBacks')
                .skip(query.skip)
                .limit(query.limit),
            ,
        ]);
        return { count, items };
    }
};
exports.FeedbacksRepository = FeedbacksRepository;
exports.FeedbacksRepository = FeedbacksRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(feedbacks_entity_1.Feedbacks.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], FeedbacksRepository);


/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const CustomerInformation_entity_1 = __webpack_require__(19);
const PurchaseInformation_entity_1 = __webpack_require__(20);
const expenses_entity_1 = __webpack_require__(26);
const feedbacks_entity_1 = __webpack_require__(22);
const Users_entity_1 = __webpack_require__(14);
const Roles_entity_1 = __webpack_require__(12);
const entities = [
    { name: CustomerInformation_entity_1.CustomerInformation.name, schema: CustomerInformation_entity_1.CustomerInformationSchema },
    { name: expenses_entity_1.Expenses.name, schema: expenses_entity_1.ExpensesSchema },
    { name: feedbacks_entity_1.Feedbacks.name, schema: feedbacks_entity_1.FeedbacksSchema },
    { name: PurchaseInformation_entity_1.PurchaseInformation.name, schema: PurchaseInformation_entity_1.PurchaseInformationSchema },
    { name: Users_entity_1.Users.name, schema: Users_entity_1.UsersSchema },
    { name: Roles_entity_1.Roles.name, schema: Roles_entity_1.RolesSchema },
];
exports["default"] = entities;


/***/ }),
/* 26 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpensesSchema = exports.Expenses = void 0;
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(13);
const PurchaseInformation_entity_1 = __webpack_require__(20);
const Users_entity_1 = __webpack_require__(14);
let Expenses = class Expenses {
};
exports.Expenses = Expenses;
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], Expenses.prototype, "name", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", Number)
], Expenses.prototype, "price", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Expenses.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_2.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Expenses.prototype, "isHidden", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], Expenses.prototype, "ComId", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose_1.default.Schema.ObjectId, ref: Users_entity_1.Users.name }),
    __metadata("design:type", typeof (_b = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _b : Object)
], Expenses.prototype, "user", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose_1.default.Schema.ObjectId, ref: PurchaseInformation_entity_1.PurchaseInformation.name }),
    __metadata("design:type", typeof (_c = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _c : Object)
], Expenses.prototype, "purchaseInformation", void 0);
exports.Expenses = Expenses = __decorate([
    (0, mongoose_2.Schema)()
], Expenses);
exports.ExpensesSchema = mongoose_2.SchemaFactory.createForClass(Expenses);


/***/ }),
/* 27 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformerMiddleware = void 0;
const common_1 = __webpack_require__(3);
const crypto = __webpack_require__(28);
const jwt_1 = __webpack_require__(29);
let TransformerMiddleware = class TransformerMiddleware {
    constructor(jwt) {
        this.jwt = jwt;
    }
    async use(req, res, next) {
        try {
            if (req.headers.authorization.startsWith('Bearer ')) {
                const token = req.headers.authorization.replace('Bearer ', '');
                const info = await this.verifyToken(token);
                req.body = this.Transformer(req.body, info.EncryptKey);
                next();
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (ex) {
            throw new common_1.UnauthorizedException();
        }
    }
    Transformer(obj, secret) {
        try {
            let newObj = {};
            for (const key in obj) {
                if (key == 'email' ||
                    key == 'lastName' ||
                    key == 'firstName' ||
                    key == 'id' ||
                    key == 'isHidden' ||
                    key == '_id' ||
                    key == 'ComId' ||
                    key == 'idUser')
                    newObj[key] = obj[key];
                else if (typeof obj[key] !== 'string') {
                    if (Array.isArray(obj[key])) {
                        const newArray = [];
                        for (const index in obj[key]) {
                            if (Array.isArray(obj[key][index]))
                                newArray.push(this.Transformer(obj[key][index], secret));
                            else
                                newArray.push(this.Encoding(obj[key][index], secret));
                        }
                        newObj[key] = newArray;
                    }
                    else {
                        newObj[key] = this.Transformer(obj[key], secret);
                    }
                }
                else
                    newObj[key] = obj[key] ? this.Encoding(obj[key], secret) : obj[key];
            }
            return newObj;
        }
        catch (ex) {
            console.log(ex);
        }
    }
    Encoding(text, secret) {
        try {
            const cipher = crypto.createDecipheriv('aes-256-ctr', Buffer.from(secret.padEnd(32, '\0')), Buffer.from(secret.padEnd(16, '\0')));
            return Buffer.concat([
                cipher.update(text, 'utf-8'),
                cipher.final(),
            ]).toString('hex');
        }
        catch (ex) {
            console.log(ex);
            return null;
        }
    }
    async verifyToken(token) {
        try {
            return this.jwt.verify(token, {
                secret: process.env.SECRET,
            });
        }
        catch (ex) {
            return null;
        }
    }
};
exports.TransformerMiddleware = TransformerMiddleware;
exports.TransformerMiddleware = TransformerMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], TransformerMiddleware);


/***/ }),
/* 28 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 29 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 30 */
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
var AuthGuard_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(24);
const jwt_1 = __webpack_require__(29);
const Users_service_1 = __webpack_require__(31);
let AuthGuard = AuthGuard_1 = class AuthGuard {
    constructor(jwtService, configService, usersService) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.usersService = usersService;
    }
    async canActivate(context) {
        var _a;
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: this.configService.get('SECRET'),
            });
            let user = (_a = AuthGuard_1.users) === null || _a === void 0 ? void 0 : _a.find((item) => item.UserId === payload.UserId);
            if (!user) {
                user = await this.usersService.getUserById(payload.UserId);
                user.secret = payload.EncryptKey;
                user.token = token;
                AuthGuard_1.users.push(user);
            }
            if (!user)
                user = await this.usersService.createUser({
                    FullName: payload.FullName,
                    UserAvatar: payload.UserAvatar,
                    UserId: payload.UserId,
                    ComId: payload.ComId,
                    GroupId: payload.GroupId,
                    email: payload.email,
                    ComName: payload.ComName,
                    UserRole: payload.UserRole,
                });
            user.secret = payload.EncryptKey;
            user.token = token;
            request['user'] = user;
        }
        catch (ex) {
            console.log(ex);
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
    extractTokenFromHeader(request) {
        var _a, _b;
        const [type, token] = (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard;
AuthGuard.users = Array();
exports.AuthGuard = AuthGuard = AuthGuard_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object, typeof (_c = typeof Users_service_1.UsersService !== "undefined" && Users_service_1.UsersService) === "function" ? _c : Object])
], AuthGuard);


/***/ }),
/* 31 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(3);
const Roles_repository_1 = __webpack_require__(32);
const Users_repository_1 = __webpack_require__(33);
let UsersService = class UsersService {
    constructor(usersRepository, rolesRepository) {
        this.usersRepository = usersRepository;
        this.rolesRepository = rolesRepository;
    }
    async getUserById(id) {
        return this.usersRepository.findByUserId(id);
    }
    async createUser(data) {
        const user = await this.usersRepository.create(data);
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof Users_repository_1.UsersRepository !== "undefined" && Users_repository_1.UsersRepository) === "function" ? _a : Object, typeof (_b = typeof Roles_repository_1.RolesRepository !== "undefined" && Roles_repository_1.RolesRepository) === "function" ? _b : Object])
], UsersService);


/***/ }),
/* 32 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesRepository = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(13);
const base_repository_1 = __webpack_require__(18);
const Roles_entity_1 = __webpack_require__(12);
let RolesRepository = class RolesRepository extends base_repository_1.BaseRepositoryAbstract {
    constructor(roles) {
        super(roles);
        this.roles = roles;
    }
};
exports.RolesRepository = RolesRepository;
exports.RolesRepository = RolesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(Roles_entity_1.Roles.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], RolesRepository);


/***/ }),
/* 33 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(13);
const base_repository_1 = __webpack_require__(18);
const Users_entity_1 = __webpack_require__(14);
let UsersRepository = class UsersRepository extends base_repository_1.BaseRepositoryAbstract {
    constructor(users) {
        super(users);
        this.users = users;
    }
    async findByUserId(id) {
        return await this.users.findOne({ UserId: id }).populate('roles');
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(Users_entity_1.Users.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UsersRepository);


/***/ }),
/* 34 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(3);
const core_1 = __webpack_require__(1);
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndMerge('roles', [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => {
            if (user.isAdmin || user.roles.find((item) => item.isAdmin))
                return true;
            if (user.roles.find((item) => {
                return item.permissions.find((permission) => (permission.subject === role.subject &&
                    permission.action === role.action &&
                    (permission.role === role.role ||
                        permission.role === null ||
                        permission.role === undefined)) ||
                    permission.isAdmin);
            }))
                return true;
            return false;
        });
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);


/***/ }),
/* 35 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PurchaseInformationController = void 0;
const purchaseInformation_create_dto_1 = __webpack_require__(36);
const purchaseInformation_query_dto_1 = __webpack_require__(37);
const purchaseInformation_update_dto_1 = __webpack_require__(38);
const common_1 = __webpack_require__(3);
const roles_decorator_1 = __webpack_require__(10);
const users_decorator_1 = __webpack_require__(11);
const Roles_entity_1 = __webpack_require__(12);
const Users_entity_1 = __webpack_require__(14);
const PurchaseInformation_service_1 = __webpack_require__(39);
let PurchaseInformationController = class PurchaseInformationController {
    constructor(purchaseInformationService) {
        this.purchaseInformationService = purchaseInformationService;
    }
    query(user, query) {
        return this.purchaseInformationService.query(user, query);
    }
    getById(id, user) {
        return this.purchaseInformationService.getById(id, user);
    }
    create(user, data) {
        return this.purchaseInformationService.create(user, data);
    }
    update(user, data) {
        return this.purchaseInformationService.update(user, data);
    }
    deleteInfo(user) {
    }
};
exports.PurchaseInformationController = PurchaseInformationController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.GET, subject: Roles_entity_1.SUBJECT.purchase }),
    __param(0, (0, users_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _b : Object, typeof (_c = typeof purchaseInformation_query_dto_1.PurchaseInformationQueryDTO !== "undefined" && purchaseInformation_query_dto_1.PurchaseInformationQueryDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], PurchaseInformationController.prototype, "query", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.GET, subject: Roles_entity_1.SUBJECT.customer }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, users_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], PurchaseInformationController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.CREATE, subject: Roles_entity_1.SUBJECT.purchase }),
    __param(0, (0, users_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _e : Object, typeof (_f = typeof purchaseInformation_create_dto_1.PurchaseInformationCreateDTO !== "undefined" && purchaseInformation_create_dto_1.PurchaseInformationCreateDTO) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], PurchaseInformationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.UPDATE, subject: Roles_entity_1.SUBJECT.purchase }),
    __param(0, (0, users_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _g : Object, typeof (_h = typeof purchaseInformation_update_dto_1.PurchaseInformationUpdateDTO !== "undefined" && purchaseInformation_update_dto_1.PurchaseInformationUpdateDTO) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], PurchaseInformationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.DELETE, subject: Roles_entity_1.SUBJECT.purchase }),
    __param(0, (0, users_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _j : Object]),
    __metadata("design:returntype", void 0)
], PurchaseInformationController.prototype, "deleteInfo", null);
exports.PurchaseInformationController = PurchaseInformationController = __decorate([
    (0, common_1.Controller)('PurchaseInformation'),
    __metadata("design:paramtypes", [typeof (_a = typeof PurchaseInformation_service_1.PurchaseInformationService !== "undefined" && PurchaseInformation_service_1.PurchaseInformationService) === "function" ? _a : Object])
], PurchaseInformationController);


/***/ }),
/* 36 */
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
exports.PurchaseInformationCreateDTO = void 0;
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(7);
class PurchaseInformationCreateDTO {
}
exports.PurchaseInformationCreateDTO = PurchaseInformationCreateDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PurchaseInformationCreateDTO.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PurchaseInformationCreateDTO.prototype, "currencyUnit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PurchaseInformationCreateDTO.prototype, "describe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PurchaseInformationCreateDTO.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PurchaseInformationCreateDTO.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PurchaseInformationCreateDTO.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PurchaseInformationCreateDTO.prototype, "transportFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PurchaseInformationCreateDTO.prototype, "idUser", void 0);


/***/ }),
/* 37 */
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
exports.PurchaseInformationQueryDTO = void 0;
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(7);
class PurchaseInformationQueryDTO {
}
exports.PurchaseInformationQueryDTO = PurchaseInformationQueryDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PurchaseInformationQueryDTO.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'asaa',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PurchaseInformationQueryDTO.prototype, "limit", void 0);


/***/ }),
/* 38 */
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
exports.PurchaseInformationUpdateDTO = void 0;
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(7);
const purchaseInformation_create_dto_1 = __webpack_require__(36);
class PurchaseInformationUpdateDTO extends purchaseInformation_create_dto_1.PurchaseInformationCreateDTO {
}
exports.PurchaseInformationUpdateDTO = PurchaseInformationUpdateDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'id khach hang',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PurchaseInformationUpdateDTO.prototype, "id", void 0);


/***/ }),
/* 39 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PurchaseInformationService = void 0;
const common_1 = __webpack_require__(3);
const CustomerInformation_repository_1 = __webpack_require__(17);
const PurchaseInformation_repository_1 = __webpack_require__(40);
let PurchaseInformationService = class PurchaseInformationService {
    constructor(purchaseInformationRepository, customerInformationRepository) {
        this.purchaseInformationRepository = purchaseInformationRepository;
        this.customerInformationRepository = customerInformationRepository;
    }
    async create(user, data) {
        data.ComId = user.ComId;
        const infoCustom = await this.customerInformationRepository.findOneById(data.idUser);
        if (!infoCustom)
            throw new common_1.NotFoundException('cannot find user by id');
        const information = await this.purchaseInformationRepository.create(data);
        infoCustom.purchases.push(information);
        infoCustom.save();
        return Object.assign(Object.assign({}, information), { secret: user.secret });
    }
    converStringToJson(obj) {
        try {
            return JSON.parse(obj);
        }
        catch (ex) {
            return null;
        }
    }
    async query(user, query) {
        return Object.assign(Object.assign({}, (await this.purchaseInformationRepository.findAllByCompany(user.ComId, query))), { secret: user.secret });
    }
    async getById(id, user) {
        const purchase = await this.purchaseInformationRepository.findOneById(id);
        if (!purchase)
            throw new common_1.NotFoundException();
        console.log('service', Object.assign(Object.assign({}, purchase), { secret: user.secret }));
        return Object.assign(Object.assign({}, purchase), { secret: user.secret });
    }
    async update(user, info) {
        const infoCustom = await this.purchaseInformationRepository.findOneById(info.id);
        if (!infoCustom)
            throw new common_1.NotFoundException();
        if (infoCustom.ComId !== user.ComId)
            throw new common_1.ForbiddenException();
        await this.purchaseInformationRepository.update(info.id, Object.assign(Object.assign({}, info), { isHidden: true }));
        delete info.id;
        const newInfo = await this.create(user, info);
        return newInfo;
    }
    async deletePurchase(user, id) {
        const infoCustom = await this.purchaseInformationRepository.findOneById(id);
        if (!infoCustom)
            throw new common_1.NotFoundException();
        if (infoCustom.ComId !== user.ComId)
            throw new common_1.ForbiddenException();
        return this.purchaseInformationRepository.softDelete(id);
    }
};
exports.PurchaseInformationService = PurchaseInformationService;
exports.PurchaseInformationService = PurchaseInformationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof PurchaseInformation_repository_1.PurchaseInformationRepository !== "undefined" && PurchaseInformation_repository_1.PurchaseInformationRepository) === "function" ? _a : Object, typeof (_b = typeof CustomerInformation_repository_1.CustomerInformationRepository !== "undefined" && CustomerInformation_repository_1.CustomerInformationRepository) === "function" ? _b : Object])
], PurchaseInformationService);


/***/ }),
/* 40 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PurchaseInformationRepository = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(13);
const base_repository_1 = __webpack_require__(18);
const PurchaseInformation_entity_1 = __webpack_require__(20);
let PurchaseInformationRepository = class PurchaseInformationRepository extends base_repository_1.BaseRepositoryAbstract {
    constructor(purchaseInformation) {
        super(purchaseInformation);
        this.purchaseInformation = purchaseInformation;
    }
    async findAllByCompany(ComId, query) {
        const [count, items] = await Promise.all([
            this.purchaseInformation.count({
                ComId: ComId,
                deleted_at: null,
            }),
            this.purchaseInformation
                .find({ ComId: ComId, deleted_at: null })
                .skip(query.skip)
                .limit(query.limit),
            ,
        ]);
        return { count, items };
    }
};
exports.PurchaseInformationRepository = PurchaseInformationRepository;
exports.PurchaseInformationRepository = PurchaseInformationRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(PurchaseInformation_entity_1.PurchaseInformation.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], PurchaseInformationRepository);


/***/ }),
/* 41 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MangamentController = void 0;
const customerInformation_create_dto_1 = __webpack_require__(5);
const customerInformation_update_dto_1 = __webpack_require__(9);
const common_1 = __webpack_require__(3);
const roles_decorator_1 = __webpack_require__(10);
const users_decorator_1 = __webpack_require__(11);
const Roles_entity_1 = __webpack_require__(12);
const Users_entity_1 = __webpack_require__(14);
const Mangament_service_1 = __webpack_require__(42);
let MangamentController = class MangamentController {
    constructor(mangament) {
        this.mangament = mangament;
    }
    getAllUser(user) {
        return this.mangament.getAllUser(user);
    }
    create(user, data) {
    }
    update(user, data) {
    }
    deleteInfo(user) {
    }
};
exports.MangamentController = MangamentController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)({
        role: Roles_entity_1.TYPEROLE.ADMIN,
        action: Roles_entity_1.ACTION.GET,
        subject: Roles_entity_1.SUBJECT.customer,
    }),
    __param(0, (0, users_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], MangamentController.prototype, "getAllUser", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.CREATE, subject: Roles_entity_1.SUBJECT.customer }),
    __param(0, (0, users_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _c : Object, typeof (_d = typeof customerInformation_create_dto_1.CustomerInformationCreateDTO !== "undefined" && customerInformation_create_dto_1.CustomerInformationCreateDTO) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], MangamentController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.UPDATE, subject: Roles_entity_1.SUBJECT.customer }),
    __param(0, (0, users_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _e : Object, typeof (_f = typeof customerInformation_update_dto_1.CustomerInformationUpdateDTO !== "undefined" && customerInformation_update_dto_1.CustomerInformationUpdateDTO) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], MangamentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    (0, roles_decorator_1.Roles)({ action: Roles_entity_1.ACTION.DELETE, subject: Roles_entity_1.SUBJECT.customer }),
    __param(0, (0, users_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof Users_entity_1.Users !== "undefined" && Users_entity_1.Users) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], MangamentController.prototype, "deleteInfo", null);
exports.MangamentController = MangamentController = __decorate([
    (0, common_1.Controller)('mangament'),
    __metadata("design:paramtypes", [typeof (_a = typeof Mangament_service_1.MangamentService !== "undefined" && Mangament_service_1.MangamentService) === "function" ? _a : Object])
], MangamentController);


/***/ }),
/* 42 */
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MangamentService = void 0;
const axios_1 = __webpack_require__(43);
const common_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(44);
const CustomerInformation_repository_1 = __webpack_require__(17);
const FeedBacks_repository_1 = __webpack_require__(23);
const PurchaseInformation_repository_1 = __webpack_require__(40);
let MangamentService = class MangamentService {
    constructor(feedbacksRepository, customerInformationRepository, purchaseInformationRepository, httpService) {
        this.feedbacksRepository = feedbacksRepository;
        this.customerInformationRepository = customerInformationRepository;
        this.purchaseInformationRepository = purchaseInformationRepository;
        this.httpService = httpService;
    }
    async getAllUser(user) {
        const params = {
            ComId: user.ComId,
        };
        return this.httpService
            .post('https://remindwork.com/api/MobileApiAccount/GetStaffOfCompany', params, {
            headers: {
                Authorization: 'Bearer ' + user.token,
            },
        })
            .pipe((0, rxjs_1.map)((resp) => resp.data));
    }
    async create(user, data) {
        data.ComId = user.ComId;
        const customer = await this.customerInformationRepository.findOneById(data.idInfo);
        if (!customer)
            throw new common_1.ForbiddenException();
        const purchase = await this.purchaseInformationRepository.findOneById(data.idPurchase);
        const feedback = await this.feedbacksRepository.create(data);
        customer.feedBacks = [...customer.feedBacks, feedback];
        await customer.save();
        purchase.feedBack = feedback;
        await purchase.save();
        return feedback;
    }
    converStringToJson(obj) {
        try {
            return JSON.parse(obj);
        }
        catch (ex) {
            return null;
        }
    }
    async query(user, query) {
        query.conditions = this.converStringToJson(query.conditions);
        return this.feedbacksRepository.findAllByCompany(user.ComId, query);
    }
    async update(user, feedBack) {
        const infoCustom = await this.feedbacksRepository.findOneById(feedBack.id);
        if (!infoCustom)
            throw new common_1.NotFoundException();
        if (infoCustom.ComId !== user.ComId)
            throw new common_1.ForbiddenException();
        const customer = await this.customerInformationRepository.findOneById(feedBack.idInfo);
        if (!customer)
            throw new common_1.ForbiddenException();
        const purchase = await this.purchaseInformationRepository.findOneById(feedBack.idPurchase);
        await this.feedbacksRepository.update(feedBack.id, Object.assign(Object.assign({}, feedBack), { isHidden: true }));
        const newFeedBack = await this.create(user, feedBack);
        customer.feedBacks = [
            ...customer.feedBacks.filter((item) => item.id !== feedBack.id),
            newFeedBack,
        ];
        purchase.feedBack = newFeedBack;
        await customer.save();
        await purchase.save();
        return newFeedBack;
    }
    async deleteFeedbacks(user, id) {
        const infoCustom = await this.feedbacksRepository.findOneById(id);
        if (!infoCustom)
            throw new common_1.NotFoundException();
        if (infoCustom.ComId !== user.ComId)
            throw new common_1.ForbiddenException();
        return this.feedbacksRepository.softDelete(id);
    }
};
exports.MangamentService = MangamentService;
exports.MangamentService = MangamentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof FeedBacks_repository_1.FeedbacksRepository !== "undefined" && FeedBacks_repository_1.FeedbacksRepository) === "function" ? _a : Object, typeof (_b = typeof CustomerInformation_repository_1.CustomerInformationRepository !== "undefined" && CustomerInformation_repository_1.CustomerInformationRepository) === "function" ? _b : Object, typeof (_c = typeof PurchaseInformation_repository_1.PurchaseInformationRepository !== "undefined" && PurchaseInformation_repository_1.PurchaseInformationRepository) === "function" ? _c : Object, typeof (_d = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _d : Object])
], MangamentService);


/***/ }),
/* 43 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 44 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformInterceptor = void 0;
const common_1 = __webpack_require__(3);
const operators_1 = __webpack_require__(46);
const crypto = __webpack_require__(28);
let TransformInterceptor = class TransformInterceptor {
    constructor() {
        this.isJson = (obj) => {
            try {
                JSON.parse(obj);
            }
            catch (e) {
                return false;
            }
            return true;
        };
    }
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            return this.loadData(data);
        }));
    }
    Transformer(obj, secret) {
        try {
            let newObj = {};
            if (obj)
                for (const key in obj) {
                    if (key == 'email' ||
                        key == 'lastName' ||
                        key == 'firstName' ||
                        key == 'id' ||
                        key == 'isHidden' ||
                        key == '_id' ||
                        key == 'ComId' ||
                        key == 'idUser' ||
                        key == 'star')
                        newObj[key] = obj[key];
                    else if (typeof obj[key] !== 'string') {
                        if (Array.isArray(obj[key])) {
                            const newArray = [];
                            for (const index in obj[key]) {
                                if (Array.isArray(obj[key][index]))
                                    newArray.push(this.Transformer(obj[key][index], secret));
                                else
                                    newArray.push(this.Decoding(obj[key][index], secret));
                            }
                            newObj[key] = newArray;
                        }
                        else {
                            newObj[key] = this.Transformer(obj[key], secret);
                        }
                    }
                    else
                        newObj[key] = obj[key] ? this.Decoding(obj[key], secret) : obj[key];
                }
            return newObj;
        }
        catch (ex) {
            console.log(ex);
        }
    }
    loadData(data) {
        if (Array.isArray(data.items)) {
            for (const item in data.items) {
                data.items[item] = this.Transformer(data.items[item]._doc, data.secret);
            }
        }
        else {
            data = this.Transformer(data._doc, data.secret);
        }
        delete data.secret;
        delete data.token;
        return data;
    }
    Decoding(text, secret) {
        try {
            const decipher = crypto.createDecipheriv('aes-256-ctr', Buffer.from(secret.padEnd(32, '\0')), Buffer.from(secret.padEnd(16, '\0')));
            const data = Buffer.concat([
                decipher.update(text, 'hex'),
                decipher.final(),
            ]).toString();
            return data;
        }
        catch (ex) {
            return null;
        }
    }
};
exports.TransformInterceptor = TransformInterceptor;
exports.TransformInterceptor = TransformInterceptor = __decorate([
    (0, common_1.Injectable)()
], TransformInterceptor);


/***/ }),
/* 46 */
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const common_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(6);
const transform_interceptor_1 = __webpack_require__(45);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('r-care api gateway')
        .setDescription('description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 3001);
}
bootstrap();

})();

/******/ })()
;