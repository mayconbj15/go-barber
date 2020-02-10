import { Router } from 'express';

const routes = new Router();

routes.get("/route", (req, res) => {
  return res.json({ message: "Coleeee" });
});

export default routes;
