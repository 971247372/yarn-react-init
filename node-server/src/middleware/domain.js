import { create } from 'domain';
import moment from 'moment';

const domainMiddleware = (req, res, next) => {
  const domain = create();
  domain.id = domainMiddleware.id(req);
  domain.req = req;
  domain.res = res;
  domain.add(req);
  domain.add(res);
  domain.run(next);
  domain.on('error', next);
};

let count = 0;

domainMiddleware.id = req => moment().format('YYYY-MM-DD HH:mm:ss') + ' No. ' + count++;

export default domainMiddleware;
