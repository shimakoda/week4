const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers'
};
require('http').Server((req,res) => {
if(res.url === '/result4/') {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8', ...CORS});
  //var str = `{ 'message': ${req.body}, 'x-result': 42 }`;
  //res.write(str);
  }
  res.end('OK\n');
})
.listen();
