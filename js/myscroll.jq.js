/**
 * Created by Administrator on 2016/11/1 0001.
 */
$(document).on("scroll",function () {
    $(".part").each(function (index,elem) {
        if (elem.getBoundingClientRect().top < 500) {
            $(elem).removeClass("offAnime");
            $(elem).addClass("onAnime");
            $(elem).find(".animeOpacity").each(function (indexli,myli) {
                $(myli).css("animation-delay",300 * indexli + "ms");
            });
        } else {
            $(elem).removeClass("onAnime");
            $(elem).addClass("offAnime");
        }
    })
});
