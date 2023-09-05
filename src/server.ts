import App from "./app";
import UsersRoute from "./features/users/users.route";

const app = new App([new UsersRoute()]);

app.listen();
