

function ready() {

    function createNode(element) {
        return document.createElement(element);
    }
    function append(parent, el) {
        return parent.appendChild(el);
    }

    for (j = 1; j <= 10; j++) {
        fetch('https://picsum.photos/id/' + j + '/536/310')
            .then((response) => {
                const mydiv = document.getElementById("mydiv");
                const innerdiv = createNode('div');
                let img = createNode('img');
                img.setAttribute('src', response.url);
                append(innerdiv, img);
                append(mydiv, innerdiv);

            })
            .catch((error) => console.log(error))
    }
    setTimeout(function () {
        var slides = document.querySelector('.slider-items').children;
        var nextslide = document.querySelector(".next");
        var prevslide = document.querySelector(".prev");
        var index = 0;
        slides[index].classList.add("active");
        var totalslides = slides.length;

        nextslide.onclick = function () {
            next("next");
        }
        prevslide.onclick = function () {
            next("prev");
        }

        function next(direction) {

            if (direction == "next") {
                index++;
                if (index == totalslides) {
                    index = 0;
                }

            }
            else {
                if (index == 0) {
                    index = totalslides - 1;
                }
                else {
                    index--;
                }
            }
            for (let i = 0; i < totalslides; i++) {
                slides[i].classList.remove('active');
            }
            slides[index].classList.add("active");

        }

    }, 800);



}


document.addEventListener("readystatechange", ready);






