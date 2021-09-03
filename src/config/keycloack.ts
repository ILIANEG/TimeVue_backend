import * as ENV from './ENV'


export default {
    "realm": ENV.DEV.KEYCLOACK_REALM,
    "bearer-only": true,
    "auth-server-url": ENV.DEV.KEYCLOACK_AUTH_URL,
    "ssl-required": "external",
    "resource": ENV.DEV.KEYCLOACK_RESOURCE,
    "verify-token-audience": true,
    "use-resource-role-mappings": true,
    "confidential-port": 0,
}
