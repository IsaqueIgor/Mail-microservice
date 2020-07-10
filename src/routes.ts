import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const routes = Router();

routes.post('/messages', async (req, res) => {
  const { subject, body, tags } = req.body;

  return res.json('Not implemented');
});

export default routes;
