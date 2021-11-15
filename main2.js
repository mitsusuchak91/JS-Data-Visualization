document
    .getElementById("firstHeading")
    .insertAdjacentHTML(
        "afterend",
        '<canvas id="canvas3" width="600" height="440"></canvas>'
    );
    let dataLabels = [];
    let dataY = [];
    let chartLive = null;
    let dataPoints = [];


function updateChart() {
    fetch(
            "https://canvasjs.com/services/data/datapoints.php?xstart=" +
            (dataPoints.length + 1) +
            "&ystart=" +
            dataPoints[dataPoints.length - 1].y +
            "&length=1&type=json"
        )
        .then((res) => res.json())
        .then((data) => {
            data.forEach((value) => {
                dataPoints.push({
                    x: value[0],
                    y: parseInt(value[1]),
                });
            });
            for (i = 0; i < dataPoints.length; i++) {
                dataLabels[i] = dataPoints[i].x;
                dataY[i] = dataPoints[i].y;
            }
            setTimeout(function() {
                let ctx = document.getElementById("canvas3");
                if (!chartLive) {
                    chartLive = new Chart(ctx, {
                        type: "line",
                        data: {
                            labels: dataLabels,
                            datasets: [{
                                data: dataY,
                                label: "Crime statistics",
                                borderColor: randomColor(),
                                fill: false,
                            }, ],
                        },
                        options: {
                            title: {
                                display: true,
                                text: "Live Chart with dataPoints from External JSON",
                            },
                        },
                    });
                } else {
                    chartLive.data.labels = dataLabels;
                    chartLive.data.datasets[0].data = dataY;
                    chartLive.update();
                }
                updateChart();
            }, 1000);
        });
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
}

fetch("https://canvasjs.com/services/data/datapoints.php")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((value) => {
            dataPoints.push({
                x: value[0],
                y: parseInt(value[1]),
            });
        });
        for (i = 0; i < dataPoints.length; i++) {
            dataLabels[i] = dataPoints[i].x;
            dataY[i] = dataPoints[i].y;
        }
        console.log(dataPoints);
        console.log(dataLabels);
        console.log(dataY);

        updateChart();
    });

let table1 = document.getElementById("table1");
table1 = tableToJson(table1);

function tableToJson(table) {
    let data = [];
    for (i = 1; i < table.rows.length; i++) {
        let tableRow = table.rows[i];
        let rowData = [];
        for (j = 1; j < tableRow.cells.length; j++) {
            rowData.push(tableRow.cells[j].innerHTML);
        }
        data.push(rowData);
    }
    console.log(data);
    return data;
}

function arrayStringToFloat(table) {
    let data = [];
    for (i = 0; i < table.length; i++) {
        table[i] = table[i].replace(",", ".");
        data.push(parseFloat(table[i]));
    }
    return data;
}

function randomColor() {
    color =
        "rgb(" +
        Math.round(Math.random() * 160) +
        "," +
        Math.round(Math.random() * 160) +
        "," +
        Math.round(Math.random() * 160) +
        ")";

    return color;
}
const arrayWithoutElementAtIndex = function(arr, index) {
    return arr.filter(function(value, arrIndex) {
        return index !== arrIndex;
    });
};

document
    .getElementById("table1")
    .insertAdjacentHTML(
        "beforebegin",
        '<canvas id="canvas1" height="700" width="500"></canvas>'
    );
let ctx = document.getElementById("canvas1");
let myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: table1[0],
        datasets: [{
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[1], 0)),
                label: table1[1][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[2], 0)),
                label: table1[2][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[3], 0)),
                label: table1[3][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[4], 0)),
                label: table1[4][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[5], 0)),
                label: table1[5][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[6], 0)),
                label: table1[6][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[7], 0)),
                label: table1[7][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[8], 0)),
                label: table1[8][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[9], 0)),
                label: table1[9][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[10], 0)),
                label: table1[10][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[11], 0)),
                label: table1[11][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[12], 0)),
                label: table1[12][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[13], 0)),
                label: table1[13][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[14], 0)),
                label: table1[14][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[15], 0)),
                label: table1[15][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[16], 0)),
                label: table1[16][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[17], 0)),
                label: table1[17][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[18], 0)),
                label: table1[18][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[19], 0)),
                label: table1[19][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[20], 0)),
                label: table1[20][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[21], 0)),
                label: table1[21][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[22], 0)),
                label: table1[22][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[23], 0)),
                label: table1[23][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[24], 0)),
                label: table1[24][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[25], 0)),
                label: table1[25][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[26], 0)),
                label: table1[26][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[27], 0)),
                label: table1[27][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[28], 0)),
                label: table1[28][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[29], 0)),
                label: table1[29][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[30], 0)),
                label: table1[30][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[31], 0)),
                label: table1[31][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[32], 0)),
                label: table1[32][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[33], 0)),
                label: table1[33][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[34], 0)),
                label: table1[34][0],
                borderColor: randomColor(),
            },
            {
                data: arrayStringToFloat(arrayWithoutElementAtIndex(table1[35], 0)),
                label: table1[35][0],
                borderColor: randomColor(),
            },
        ],
    },
    options: {
        plugins: {
            decimation: {
                enabled: true,
            },
            subtitle: {
                display: true,
                text: "Number in thousand",
            },
        },
        title: {
            display: true,
            text: "Crimes recorded by the police",
        },
    },
});

