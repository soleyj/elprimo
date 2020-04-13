$(document).ready(function () {


  $(document).on("click", ".generar_informe", function () {
    var mission_id = $(this).attr("member_id");
    console.log(mission_id);
    $.ajax({
      type: "GET",
      url: get_informa, // URL to your view that serves new info
      data: {
        'robot_id': mission_id,
      }
    })
  });

  $(document).on("click", ".generar_informe", function () {
    var mission_id = $(this).attr("member_id");
    console.log(mission_id);
    $.ajax({
      type: "GET",
      url: get_informa, // URL to your view that serves new info
      data: {
        'robot_id': mission_id,
      }
    })
  });

  $(document).on("click", ".descargar_informe", function () {
    var mission_id = $(this).attr("member_id");
    var name_id = $(this).attr("name_id");
    console.log(mission_id);
    $.ajax({
      type: "GET",
      url: dw_informa, // URL to your view that serves new info
      data: {
        'robot_id': mission_id,
      },
      xhrFields: {
        responseType: 'blob'
      },
      success: function (blob) {
        console.log((blob));
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = "Informe de " + name_id + ".pdf";
        link.click();
      }
    });
  })
});


var data_in = (jQuery.parseJSON(hey))




var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];
datasets_data = []
for (var i in data_in) {

  temp_dic = {
    data: data_in[i].data_array,
    label: data_in[i].id,
    borderColor: colorArray[i],
    fill: false
  }
  datasets_data.push(temp_dic)
}




new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: data_in[0].time_array,
    datasets: datasets_data
  },
  options: {
    title: {
      display: true,
      text: 'Grafico de puntos!'
    }
  }
});
