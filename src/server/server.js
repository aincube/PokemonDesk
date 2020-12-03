import Hapi from '@hapi/hapi';
import ReactDom from 'react-dom/server';
import NotFoundPage from '../pages/NotFound';

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: () => {
      const result = ReactDom.renderToString(NotFoundPage());
      return result;
    },
  });

  await server.start();
  // console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', () => {
  // console.log(err);
  process.exit(1);
});

init();
