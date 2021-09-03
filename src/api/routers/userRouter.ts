import express from 'express';
import Keycloak from 'keycloak-connect'
import container from '../../config/inversify.config';
import Symbols from '../../config/inversifySymbols';

let keycloak = container.get<Keycloak.Keycloak>(Symbols.Keycloack)

const router = express.Router();

router.get('/user', keycloak.protect('user'), function(req, res) {
    console.log('Hello User');
})

export { router };