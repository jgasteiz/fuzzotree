
/*
 *  Javascript app which prints an ul-tree given a json object with the
 *  following format:
        var json_object = [
            {
                label: 'this labes are needed',
                children: [
                    {
                        label: 'children are optional'
                    },
                    {
                        label: 'the object may be as deep as you want!',
                        children: [
                            {
                                label: 'children are optional'
                            },
                            {
                                label: 'the object may be as deep as you want!',
                                children: children: [
                                    {
                                        label: 'enough'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'thanks for sharing!'
            }
        ];
 *
 */
var FUZZOTREE = (function(){

    /*
     *  Recursive function that creates an ul with many li elements as
     *  children it has
     *
     */
    function treefy(tree, className) {
        var ul = $(document.createElement('ul')),
            li,
            child,
            ulAux;
        if (className) {
            ul.addClass(className);
        }
        for (var i = 0; i < tree.length; i++) {
            child = tree[i];
            if (child.label) {
                li = $(document.createElement('li'))
                        .appendTo(ul);
                if (child.children) {
                    li.addClass("fuzz-clickable")
                        .append(treefy(child.children));
                }
            }
        }
        return ul;
    }

    /*
     *  When click a clickable li, it toggles its childre (if any)
     *
     */
    function clickableListeners() {
        $("a.fuzz-clickable").click(function() {
            $(this).children().toggle();
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