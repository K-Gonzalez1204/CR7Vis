var scatter_dataset = [];
var scatter_num = [];
var scatter_index = [];
var scatter_name_chinese = [];
var scatter_name_foreigner = [];
var scatter_position = [];
var scatter_goal_total = [];
var scatter_assist_total = [];


//散点图
var scatterChart = echarts.init(document.getElementById('scatter_diagram'));
window.addEventListener("resize",function() {
    scatterChart.resize();
});

var option;

option = {
    title: {
        text: 'C罗与200位著名球星',
        subtext: '进球数-助攻数对比',
        left: '10%',
        top: 'top',
        textStyle: {
            color: "rgba(255, 255, 255, 1)",
            fontSize: 36,
        },
        subtextStyle: {
            color: "rgba(144, 144, 144, 1)",
            fontSize: 20,
        },
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '7%',
        containLabel: true
    },
    dataset: [],
    tooltip: {
        trigger: 'item',
        showDelay: 50,
        hideDelay: 50,
        enterable: true,
        confine: true,
        showContent: true,
        formatter: function (params) {
            let mess;
            if(params.seriesName == 'Attacker'){
                mess = '前锋';
            }else if(params.seriesName == 'Midfield'){
                mess = '中场';
            }else{
                mess = '后卫';
            }
            let image_str1 = "<img style='width:160px;height:240px;' src=\"player_list/top200_player_photos/";
            let image_str2 = ".jpg\" alt="+params.value[6]+">";
            image_str1 = image_str1 + params.value[6] + image_str2;
            return (image_str1 + '<br/>' +
                params.value[1] + '<br/>' +
                params.value[2] + '<br/>' +
                '司职： ' + mess + '<br/>' +
                '总进球数： ' + params.value[4] + '<br/>' +
                '总助攻数： ' + params.value[5] + '<br/>'
            );
        },
        axisPointer: {
            show: true,
            type: 'none',
            lineStyle: {
                type: 'dashed',
                width: 1
            },
            label: {
                precision: 0
            }
            // animation: true
        }
    },
    brush: {},
    legend: {
        data: ['Attacker','Midfield','Defender'],
        left: 'center',
        bottom: 10,
        textStyle: {
            color: "rgba(235, 235, 235, 1)"
        },
    },
    xAxis: [
        {
            type: 'value',
            name: '总助攻',
            nameTextStyle: {
                color: "rgba(245, 245, 245, 1)",
                fontSize: 16,
            },
            scale: true,
            interval: 100,
            axisLabel: {
                formatter: '{value}'
            },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '总进球',
            nameTextStyle: {
                color: "rgba(245, 245, 245, 1)",
                fontSize: 16,
            },            
            scale: true,
            interval: 100,
            axisLabel: {
                formatter: '{value}'
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [
        {
            name: 'Attacker',
            type: 'scatter',
            emphasis: {
                focus: 'series'
            },
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                color: '#990000',
                borderColor: '#555555',
                borderType: "solid",
                borderWidth: 0.5
            },
            emphasis: {
                focus: 'self'
            },
            encode:{
                x: 5,
                y: 4
            },
            datasetIndex: 1 
        },
        {
            name: 'Midfield',
            type: 'scatter',
            emphasis: {
                focus: 'series'
            },
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                color: '#339900',
                borderColor: '#555555',
                borderType: "solid",
                borderWidth: 0.5
            },
            emphasis: {
                focus: 'self'
            },
            encode:{
                x: 5,
                y: 4
            },
            datasetIndex: 2 
        },
        {
            name: 'Defender',
            type: 'scatter',
            emphasis: {
                focus: 'series'
            },
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                color: '#0033FF',
                borderColor: '#555555',
                borderType: "solid",
                borderWidth: 0.5
            },
            emphasis: {
                focus: 'self'
            },
            encode:{
                x: 5,
                y: 4
            },
            datasetIndex: 3 
        }
    ]
}; 

$.getJSON('source/top200_player.json', function(data){
    $.each(data, function(i, value){
        scatter_num.push(value.num);
        scatter_index.push(value.index);
        scatter_name_chinese.push(value.name_chinese);
        scatter_name_foreigner.push(value.name_foreigner);
        scatter_position.push(value.position);
        scatter_goal_total.push(value.goal_total);
        scatter_assist_total.push(value.assist_total);
        scatter_dataset.push([value.num,value.name_chinese,value.name_foreigner,value.position,value.goal_total,value.assist_total,value.index]);
    });
    // console.log(scatter_dataset);

    scatterChart.setOption({
        dataset: [
            {
                source: scatter_dataset,
                dimensions: ['num','name_c','name_f','position','goal','assist'],
                sourceHeader: false
            },
            {
                transform: {//过滤器1，前锋
                    type: 'filter',
                    config: {dimension: 3, '=': "C"},
                    print: false //是否打印用于debug
                }
            },
            {
                transform: {//过滤器2，中场
                    type: 'filter',
                    config: {dimension: 3, '=': "M"},
                    print: false //是否打印用于debug
                }
            },
            {
                transform: {//过滤器3，后卫
                    type: 'filter',
                    config: {dimension: 3, '=': "D"},
                    print: false //是否打印用于debug
                }
            }
        ],
    });
    option && scatterChart.setOption(option);
});
