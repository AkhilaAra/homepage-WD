$(".dark-btn").click(
    function(){
        $(".container").toggleClass("dark");
        $(".box").toggleClass("dark");
    }
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
        $(".rat").toggleClass("reveal")
        // $(".rat").css("opacity", "1");
        // // $(".reveal-btn").css("display", "none");
        // $(".reveal-btn").hide();
    }
);

$( ".draggable" ).draggable({
    snap:true,
    grid: [40,40],
    containment: '.container',
    scroll: false
});

