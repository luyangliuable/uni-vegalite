// https://mapshaper.org/

document.addEventListener("DOMContentLoaded", function () {
    // console.log(rentBySuburbYear);

    let uniqueSuburbs = [...new Set(rentBySuburbYear.map(item => item.Suburb))];

    uniqueSuburbs.sort((a, b) => a.localeCompare(b));

    var rentBySuburbYearLineChart = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "width": 900,
        "height": 450,
        "title": "Average Price of Rent per Room vs Year by Suburb",
        "data": {
            "values": rentBySuburbYear
        },
        "selection": {
            "Select": {
                "type": "single",
                "fields": ["Suburb"],
                "init": { "Suburb": "Armadale" },
                "bind": {
                    "input": "select",
                    "options": uniqueSuburbs
                }
            }
        },
        "transform": [{
            "filter": { "selection": "Select" }
        }],
        "mark": { "type": "line", "point": { filled: true, size: 100 } },
        "encoding": {
            "x": {
                "field": "Year",
                "type": "Ordinal",
                // "axis": { "format": "%Y" }
            },
            "y": {
                "field": "Price",
                "type": "quantitative",
                "title": "Rent Price"
            },
            "tooltip": [
                { "field": "Year", "type": "ordinal", "title": "Year" },
                { "field": "Price", "type": "quantitative", "title": "Rent Price" }
            ]
        }
    };

    vegaEmbed('#rent-by-suburb-year-line-chart', rentBySuburbYearLineChart);
});
