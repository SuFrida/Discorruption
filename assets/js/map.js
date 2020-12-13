google.charts.load('upcoming', {
    'packages': ['geochart']
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Estado', 'Calificación'],
        ['Baja California', 4],
        ['Sonora', 5],
        ['Chihuahua', 5],
        ['Coahuila', 5],
        ['Nuevo León', 5],
        ['Tamaulipas', 5],
        ['Sinaloa', 5],
        ['Nayarit', 5],
        ['Durango', 5],
        ['Zacatecas', 4],
        ['Jalisco', 4],
        ['Colima', 4],
        ['Tlaxcala', 4],
        ['Aguascalientes', 4],
        ['Zacatecas', 4],
        ['San Luis Potosí', 4],
        ['Puebla', 4],
        ['Guanajuato', 4],
        ['Querétaro', 4],
        ['Hidalgo', 4],
        ['Morelos', 4],
        ['Estado de México', 4],
        ['Distrito Federal', 4],
        ['Baja California Sur', 2],
        ['Michoacán', 2],
        ['Guerrero', 2],
        ['Oaxaca', 2],
        ['Veracruz', 2],
        ['Tabasco', 2],
        ['Campeche', 3],
        ['Chiapas', 2],
        ['Quintana Roo', 3],
        ['Yucatán', 3]
    ]);

    var options = {
        region: 'MX', // Mexico
        resolution: 'provinces',
        colorAxis: {
            //     	minValue=1,
            //     maxValue=5,
            values: [1, 2, 3, 4, 5],
            colors: ['black', '#e15554', '#028090', '#8acdd0', '#f8f8f8'],
        },
        backgroundColor: '#81d4fa',
        datalessRegionColor: '#eeeeee',
        defaultColor: '#f5f5f5'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
    chart.draw(data, options);
};