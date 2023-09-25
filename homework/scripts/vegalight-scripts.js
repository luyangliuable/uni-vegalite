// https://mapshaper.org/

// var vlSpec = {
//     $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
//     data: {
//         values: avgPriceDataset
//     },
//     mark: 'point',
//     encoding: {
//         y: {
//             field: 'Suburb',
//             type: 'nominal'
//         },
//         x: {
//             // aggregate: 'average',
//             field: 'Price',
//             type: 'quantitative',
//             axis: {
//                 title: 'Average Price'
//             }
//         }
//     }
// };


document.addEventListener("DOMContentLoaded", function() {
    var topology = 
        {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "width": 800,
            "height": 450,
            "title": "Earthquakes of magnitude 4 or large between 4 Oct 2020 and 10 Oct 2020",
            // "projection": {"type": "equalEarth"},
            "layer": [
                {
                    "data": {
                        values: vicSuburbs,
                        "format": {"property": "features"}
                    },
                    "mark": {
                        "type": "geoshape",
                        "fill": "lightgray",
                        "stroke": "white"
                    }
                },
            ],
            "transform": [{
                "lookup": "properties.Suburb",
                "from": {
                    "data": {
                        "values": avgPriceDataset
                    },
                    "key": "Suburb",
                    "fields": ["Suburb"],
                    "values": ["AvgPrice"]
                }
            }],
            "mark": "geoshape",
            "encoding": {
                "tooltip": [
                    {
                        "field": "properties.Suburb",
                        "type": "nominal",
                        "title": "Suburb"
                    }
                ],
                "color": {
                    "field": "AvgPrice",
                    "type": "quantitative",
                }
            }
        };
    // vegaEmbed('#vis', vlSpec);
    vegaEmbed('#vis-topology', topology);
});
