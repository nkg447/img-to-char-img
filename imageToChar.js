image = new MarvinImage();
var skip = 2;
function setURL(url) {
  image.load(
    url,
    //"https://www.picclickimg.com/d/l400/pict/232247297253_/Naruto-Vinyl-Decal-Sticker-Anime-Sasuke-Kakashi-Yamato.jpg",
    imageLoaded
  );
}

function go() {
  skip = Math.max(2, +document.getElementById("ratio").value);
  var url = "https://cors-anywhere.herokuapp.com/" + document.getElementById("url").value;
  setURL(url);
}

function getChar(rgb) {
  if (rgb < 50) return "■";
  if (rgb < 100) return "#";
  if (rgb < 150) return "!";
  if (rgb < 200) return "^";
  return " ";
}

function imageLoaded() {
  var r, b, g, tavg;
  var charImage = "";
  for (var i = 0; i < image.getHeight(); i += skip) {
    for (var j = 0; j < image.getWidth(); j += skip) {
      r = image.getIntComponent0(j, i);
      b = image.getIntComponent1(j, i);
      g = image.getIntComponent2(j, i);
      tavg = (r + g + b) / 3;
      charImage = charImage + getChar(tavg) + getChar(tavg);
    }
    charImage = charImage + "<br/>";
  }
  document.getElementById("charImg").innerHTML = charImage;
}
