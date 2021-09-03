import "reflect-metadata";
import { Container, interfaces } from 'inversify';
import session from 'express-session';
import Symbols from './inversifySymbols';
import { Knex, knex } from 'knex';
import knexConfig from './knexfile';
import IUserModel from '../api/models/User/IUserModel.interface';
import UserModel from '../api/models/User/UserModel';
import Keycloak from 'keycloak-connect';
import keycloackConfig from './keycloack'
import Validator from 'validatorjs'
import { IUser } from "../api/models/User/IUser.interface";

/***INSTANTIATING CONTAINER AND SINGLETONS***/
let container = new Container();
let knexInstance: Knex = knex(knexConfig.development);
let keycloakInstance = new Keycloak({store: new session.MemoryStore()}, keycloackConfig)

/***BINDING SINGLETONS***/
container.bind<Knex>(Symbols.Knex).toConstantValue(knexInstance);
container.bind<Keycloak.Keycloak>(Symbols.Keycloack).toConstantValue(keycloakInstance)

/***BINDING MODEL/SERVICE/CONTROLLER***/
container.bind<IUserModel>(Symbols.UserModel).to(UserModel);

export default container;