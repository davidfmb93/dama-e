

import express from 'express';
import { routes } from './routes'

const app = express()
const port = 3000

const callRoute = (routeElement) =>  app[routeElement.method](routeElement.route, async (req, res) => {
  const request = await require(`./Controllers/${routeElement.controller}`).controller(req.query)
  res.json(request)
})

routes.map( routeElement => callRoute(routeElement))

app.listen(port, () =>  console.log(`Example app listening on port ${port}`) )
