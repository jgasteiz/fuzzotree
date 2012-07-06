/*
 *  Main fuzzotree class
 *
 */
var FUZZOTREE = (function(){

    /*
     *  Recursive function that creates an ul with many li elements as
     *  children it has.
     *
     */
    function treefy(tree, className) {
        var ul = $(document.createElement('ul')),
            li,
            a,
            child,
            ulAux;
        if (className) {
            ul.addClass(className);
        }
        for (var i = 0; i < tree.length; i++) {
            child = tree[i];
            if (child.label) {
                li = $(document.createElement('li'))
                        .addClass("son")
                        .appendTo(ul);
                a = $(document.createElement('a'))
                        .html(child.label)
                        .appendTo(li);
                if (child.a) {
                    $(li).append(
                        $(document.createElement('a'))
                            .attr("href", child.a)
                            .attr("target", "_blank")
                            .addClass("window"));
                }
                if (child.children) {
                    a.addClass("fuzz-clickable");
                    li.addClass("father")
                        .append(treefy(child.children));
                }
            }
        }
        return ul;
    }

    /*
     *  When click a clickable anchor, it toggles its "ul" child
     *
     */
    function clickableListeners() {
        $("a.fuzz-clickable").click(function() {
            $(this).parent().toggleClass("protective");
        });
    }

    /*
     *  Initializes the tree
     *
     */
    var init = function(data) {
        if (!data) {
            $("#container").html("Must give a json object");
            return false;
        }
        var tree = treefy(data, "fuzzotree");
        $("#container").html(tree);
        clickableListeners();
    };

    return {
        init: init
    }

})();