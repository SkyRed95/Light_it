$(document).ready(function () {
    var productsAPI = "http://smktesting.herokuapp.com/api/products/?format=json";
    var static = "http://smktesting.herokuapp.com/static/";
    //var arr_for_server = new Array();
    
    $.getJSON(productsAPI, function (data) {
        $.each(data, function (i, record) {
            document.write('<ul><li>' + record.title + '</li></ul>');
            document.write('<li><h2>' + record.id + '</h2></li>');
            document.write('<img src="' + static + record.img + '">');
            document.write('<p>' + record.title + '</p>');
            document.write('<li>' + record.text + '</li>');
            //arr_for_server[i] = [[record.id], [record.title], [record.img], [record.text]]
        });
    });
});