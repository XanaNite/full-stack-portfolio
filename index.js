console.log('js attched');

function animateScroll(){
    $('.navbar-container').on('click', 'li', function(){
        const scrollTo = $(this).attr('id');
        $('html, body').animate({ scrollTop: $(scrollTo).offset().top }, 500);
    });
}

$(animateScroll());