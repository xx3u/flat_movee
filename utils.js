function tabclick(tabName) {
    let auto = $('.auto_main');
    for (let i= 0; i < auto.length; i++) {
        auto[i].style.display = 'none';
    };
    $('.auto_main.' + tabName).show();
}