// smooth scrolling
$('#contact a, .btn').on('click', function(event){
    if(this.hash !==''){
        event.preventDefault();
        const hash = this.hash;
        $('html,vbody').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});