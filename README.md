# fuzzotree

Javascript app which prints an ul-tree given a json object with the following format:

        var json_object = [
            {
                "label": "These labels are needed",
                "children": [
                    {
                        "label": "Children are optional"
                    },
                    {
                        "label": "The object may be as deep as you want!",
                        "children": [
                            {
                                "label": "Children are optional"
                            },
                            {
                                "label": "The object may be as deep as you want!",
                                "children": [
                                    {
                                        "label": "Children are optional"
                                    },
                                    {
                                        "label": "The object may be as deep as you want!",
                                        "children": [
                                            {
                                                "label": "Children are optional"
                                            },
                                            {
                                                "label": "The object may be as deep as you want!",
                                                "children": [
                                                    {
                                                        "label": "Ok, enough"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "label": "Ah! you can also pass a link",
                "a": "http://javimanzano.me"
            },
            {
                "label": "It'll open in a new tab",
                "a": "http://54.247.176.13/"
            },
            {
                "label": "Thanks for sharing!",
                "a": "https://github.com/jgasteiz/fuzzotree"
            }
        ];