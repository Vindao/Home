const express = require('express');

const Example = express.Router();

Example.get('/example', (req: any, res: any, next: any) => {
  res.send('This is an awesome fsdfer example route.');
});

export default Example;
