const express = require('express');
const qr = require('qr-image');
const app = express();
const path = require('path')
const staticPath = path.join(__dirname,"public");
app.use(express.static(staticPath));
app.use(express.static(path.resolve(__dirname,"public")))

app.get('/qr', (req, res) => {
  const text = req.query.text;
  const qr_svg = qr.image(text, { type: 'svg' });
  res.type('svg');
  qr_svg.pipe(res);
});

app.listen(3000, () => console.log('QR code generator API listening on port 3000!'));
