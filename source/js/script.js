$(function () {
    /* Variable */
    var top = $(".top");
    var top_logo = $(".top .logo");
    var main1 = $(".main1");
    var main2 = $(".main2");
    var main2_btns = $(".main2 .menu .button");
    var main2_popup = $(".main2 .popup");
    var main2_popup_closeBtn = $(".main2 .popup .closeBtn");

    function pageSetting() {
        /* setting */
        $(window).scrollTop(0);
        top.show();
        main1.show();
        main2.hide();
        main2_popup.hide();
    }

    pageSetting();

    /* logo click */
    top_logo.on("click", function () {
        pageSetting();
    });

    /* main2 open */
    main1.find("img").eq(1).on("click", function () {
        main1.hide();
        main2.show();
        $(window).scrollTop(0);
    });

    /* main2 button click */
    main2_btns.find("li").on('click', function () {

        main2_popup.css({ "background-image": "url('source/img/04. img/sub-1.png')"});
        main2_popup.show();
    });

    /* main2 closeBtn click */
    main2_popup_closeBtn.on('click', function () {
        main2_popup.hide();
    });

});