mkdir -p build
cat ./src/colorline.js ./src/markline.js ./src/mT.js >./build/mTest.js
cd build
bookmarklet mTest.js  minTest.js
cat >installMinTest.html<<EOF
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Installing the watools bookmarlet TEST</title>
</head>
<body>
</body>
<h1>Installing the watools bookmarlet TEST</h1>
<p>
to install the watools bookmarklet drop the  link below to your bookmark toolbar :<br/>
<a href="
EOF
cat minTest.js>>installMinTest.html
cat >>installMinTest.html<<EOF
">🎒MIN TEST📙📘📗📕</A>
</body>
</html>
EOF
cd ..
