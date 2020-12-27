var imageData = ctx.getImageData(sx, sy, sw, sh);


var csv = "";

for (var i = 0, h = imageData.height; i < h; i++)
{
  for (var j = 0, w = imageData.width; j < w; j++)
  {
    if ((i * w + j) % 4 == 3) continue;
    csv += imageData[i * w + j];
    csv += ", ";
  }

  csv += "\n";
}

document.querySelector("pre").innerHtml = csv;
