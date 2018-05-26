
var ctx = document.getElementById("myChart").getContext('2d');
function render_chart(data){
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.label,
        datasets: [{
            label: 'Energy KWH in previous 24 hours',
            data: data.data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

function display_chart(){
$.ajax({
            type: 'GET',
            url: "/data",
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function (data) {
                console.log(data.data);
                console.log(data.label)
                render_chart(data)

            }
        });
}

var i = 0, howManyTimes = 10;
function f() {
    display_chart();
    if( i < howManyTimes ){
        setTimeout( f, 7000 );
    }
}
f();