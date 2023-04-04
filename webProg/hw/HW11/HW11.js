// get images
function getImages() {
    var images = new Array;
    puzzleSrc = parseInt(Math.random() * 3) + 1;
    // randomize number 1 - 12
    nums = randomize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    // use puzzleSrc and randomized 1-12 to construct randomized array of image sources
    console.log(nums);
    for (i = 0; i < nums.length; i++) {
        // big ugly source string passed to DOM
        // ex: '3293.HW11.iamges/puzzle1/img1-4.jpg'
        let sourceStr = "329E.HW11.images/puzzle".concat(String(puzzleSrc), '/img', String(puzzleSrc), '-', String(nums[i]), ".jpg");
        images.push(sourceStr);
    }
    console.log(images)
    return images;
}

function randomize(arr) {
    let randomized = new Array;
    let placeholder = arr;
    while (placeholder.length != 0) {
        rIdx = parseInt(Math.random() * placeholder.length);
        randomized.push(placeholder[rIdx]);
        placeholder.splice(rIdx, 1);
    }
    return randomized;
}

function makingBank() {
    // haha that's a funny name
    // create puzzle piece bank on HTML load
    pieces = getImages();
    top = 425;    // increase by 120 every 4 pieces
    left = 30;    // increase by 110 every piece
    /*
    let piece = document.createElement("IMG");
    piece.setAttribute('src', pieces[0]);
    piece.setAttribute('class', 'piece');
    piece.style.setProperty('top', (top + 'px'));
    piece.style.left = left + 'px';
    piece.setAttribute('onmousedown', 'grabber(event);');
    document.body.appendChild(piece);
    //alert(piece.style.top);

    // repeat this process for each piece
    for (i = 1; i < pieces.length; i++) {
        // create new piece
        piece = document.createElement("IMG");
        piece.setAttribute('src', pieces[i]);
        piece.setAttribute('onmousedown', 'grabber(event);');
        piece.setAttribute('class', 'piece');
        // redefine coordinates
        if (i % 4 == 0) {
            left = 30;
            top += 120;
        }
        else {
            left += 110;
        }
        // place pieces
        piece.style.left = left + 'px';
        piece.style.top = top + 'px';
        document.body.appendChild(piece);
    }
    */
    for (i = 0; i < pieces.length; i++) {
        piece = document.getElementById(i);
        piece.setAttribute('src', pieces[i]);
        piece.setAttribute('onmousedown', 'grabber(event);');
    }
}

function grabber(event) {
   // Set the global variable for the element to be moved
   theElement = event.currentTarget;

   // Determine the position of the word to be grabbed, first removing the units from left and top
   posX = parseInt(theElement.style.left);
   posY = parseInt(theElement.style.top);

   // Compute the difference between where it is and where the mouse click occurred
   diffX = event.clientX - posX;
   diffY = event.clientY - posY;

   // Now register the event handlers for moving and dropping the word
   document.addEventListener("mousemove", mover, true);
   document.addEventListener("mouseup", dropper, true);
}

function mover(event) {
   // Compute the new position, add the units, and move the word
   theElement.style.left = (event.clientX - diffX) + "px";
   theElement.style.top = (event.clientY - diffY) + "px";
}

function dropper(event) {
   // Unregister the event handlers for mouseup and mousemove
   document.removeEventListener("mouseup", dropper, true);
   document.removeEventListener("mousemove", mover, true);
}