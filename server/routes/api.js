const Router = require('koa-router');

const router = new Router({
  prefix: '/city'
});

router.get('/list', async (ctx, next) => {
  ctx.body = {
    code: 0,
    data: ['北京', '上海']
  };
});

module.exports = router;
