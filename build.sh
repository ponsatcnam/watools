mkdir build
cat ./src/colorline.js ./src/markline.js ./src/syllabe.js ./src/setFont.js ./src/cartable.js >./build/cartableBookmarklet.js
cd build
bookmarklet cartableBookmarklet.js  cartableBook.js
cd ..
