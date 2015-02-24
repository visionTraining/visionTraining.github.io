/**
 * Created by rikimaru on 23.02.15.
 */

$(function() {

    var GRID_SIZE = 24;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomColor() {
        var r = getRandomInt(0, 255);
        var g = getRandomInt(0, 255);
        var b = getRandomInt(0, 255);
        var color = "rgba(" + r + ", " + g + ", " + b + ", ";
        return color;
    }

    function getNewRandomNumbersLine(maxN) {
        var arr = [];
        var resArr = [];
        for( var i = 1; i <= maxN; i++ ) {
            arr.push(i);
        }
        var length = arr.length;
        for( var i = 0; i < length; i++ ) {
            resArr.push(
                arr.splice(
                    getRandomInt(0, arr.length-1),
                    1
                )[0]
            );
        }
        return resArr;
    }

    function refresh() {
        var tmpl = $("#grid-tmpl").html();
        var resGrid = _.template(tmpl);
        var data = {
            data : {
                rows : _.chunk(getNewRandomNumbersLine(GRID_SIZE), 6)
            },
            colors : []
        };
        for( var i = 0; i < GRID_SIZE; i++ ) {
            data.colors[i] = randomColor();
        }
        $("#content").html(resGrid(data));
    }
    refresh();
    $("#refresh").on("click", function(){
        refresh();
    });
});