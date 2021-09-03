import { app } from "./api/server";
import * as ENV from "./config/ENV"

app.listen(ENV.DEV.APP_PORT, () => {
    console.log('app listens at http://localhost:'+ENV.DEV.APP_PORT);
})