var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Helvetica";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "Adjudicaciones Directas",
        "Invitación Restringida",
        "Licitación Pública",
        "Otros (Contratos entre entes públicos y contrataciones con entes externos)"
    ],
    datasets: [{
        data: [78.16, 8.18, 13.21, 0.45],
        backgroundColor: ['#011d27', '#028090', '#f8f8f8', '#8acdd0']
    }]
};

var pieChart = new Chart(oilCanvas, {
    type: 'pie',
    data: oilData
});