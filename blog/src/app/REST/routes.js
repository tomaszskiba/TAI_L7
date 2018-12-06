'use strict';
import postEndpoint from './post.endpoint';
import routes from './REST/routes';


const routes = (router, config) => {
  postEndpoint (router);
};
export default routes;
