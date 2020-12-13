var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "Adjudicaciones Directas",
        "Invitación Restringida",
        "Licitación Pública",
        "Otros"
    ],
    datasets: [{
        data: [78.16, 8.18, 13.21, 0.45],
        backgroundColor: [
            "#FF6384",
            "#63FF84",
            "#84FF63",
            "#6384FF"
        ]
    }]
};

var pieChart = new Chart(oilCanvas, {
    type: 'pie',
    data: oilData
});