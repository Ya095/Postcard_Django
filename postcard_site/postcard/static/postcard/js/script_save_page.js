const startButton = document.querySelector(".start-button");
const carousel = document.querySelector(".carousel")
const postcard_list = document.querySelector(".postcards-list")

startButton.addEventListener("click", function(event) {
    let postcards = document.querySelectorAll('.postcard input[type="checkbox"]:checked');
    let posts_count
    let counter = 0

    postcards.forEach(function(checkbox) {
        let postcard = checkbox.closest('.postcard');
        let checkFavouriteDiv = postcard.querySelector(".check-favourite");
        let postcardDiv = checkFavouriteDiv.parentNode;
        postcardDiv.removeChild(checkFavouriteDiv);
        carousel.append(postcard)
        counter++
    });

    postcard_list.style.display="none";
    startButton.style.display="none";
    carousel.style.display="flex"


    if (counter === 0) {
        carousel.innerHTML='<h1 style="display: flex; justify-content: center; align-items: center; height: 40vh;">Не выбран ни один пост для показа</h1>'
        carousel.style.display="block";
    } else if (counter === 1) {
        posts_count = 1
    } else if (counter === 2) {
        posts_count = 2
    } else if (counter > 2) {
        posts_count = 3
    }


    $(document).ready(function(){
            $('.carousel').slick({
                infinite: true,
                slidesToShow: posts_count,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 300,
                speed: 2500
            });
        });
});