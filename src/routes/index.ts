import express, { Router } from "express";
const indexRouter: Router = express.Router();
import { router as userRouter } from "./user.routes.js";
const routes = [
  {
    path: "/user",
    router: userRouter,
  },
];
routes.forEach((route) => {
  indexRouter.use(route.path, route.router);
});
export default indexRouter;
