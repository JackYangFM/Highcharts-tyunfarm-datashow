// JavaScript Document

//盐分 dynamic effect
$('#container_s').highcharts({
    chart: {
        type: 'column',
        backgroundColor:'rgba(5, 14, 29, 0)'
    },
    credits:{
        enabled:false
    },
    exporting: {
        enabled:false
    },
    title: {
        text: '重庆市江津区石蟆镇-蟆城供销社基地-土壤盐分监测',
        style:{color:'#fff'}
    },
    colors: ['#64E572', '#FFF263', '#FF9655', '#6AF9C4'],
    subtitle: {
        text: '数据来源: 透明云农场基地大数据平台',
        style:{color:'#a6a6a6'}
    },
    xAxis: {
        labels:{
            style:{
                color:'#d9d9d9'
            }
        },
        categories: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
        ],
        crosshair: true
    },
    yAxis: {
        labels:{
            style:{
                color:'#d9d9d9'
            }
        },
        min: 0,
        title: {
            text: '土壤盐分 (uS/cm)',
            style:{color:'#d9d9d9'}
        }
    },
    legend: {
        itemStyle:{
            color:'#d9d9d9'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} uS/cm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '水稻',
        data: [219.9, 171.5, 206.4, 129.2, 144.0, 176.0, 335.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    },{
        name: '荔枝',
        data: [248.9, 138.8, 139.3, 141.4, 147.0, 148.3, 159.0, 159.6, 152.4, 65.2, 159.3, 251.2]
    }]
});


//重庆市江津区石蟆镇空气温湿度
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'line',
            backgroundColor:'rgba(5, 14, 29, 0)'//去背景
        },
        title: {
            text: '重庆市江津区石蟆镇-蟆城供销社基地-空气温湿度',
            style:{color:'#fff'}
        },
        colors: ['#64E572', '#FF9655', '#FFF263', '#6AF9C4'],//曲线颜色
        credits:{
            enabled:false
        },//去掉右下角版权
        exporting: {
            enabled:false
        },//去掉右上角选项
        xAxis: {
            labels:{
                style:{
                    color:'#a9a9a9'
                }
            },//x轴数值颜色
            categories: ['0点','2点','4点','6点','8点','10点', '12点','14点', '16点','18点','20点','22点']
        },
        yAxis: {
            title: {
                text: '温度 (°C)，湿度 (°C)',
                style:{color:'#bbb'}
            },
            labels:{
                style:{
                    color:'#a9a9a9'
                }
            }//y轴数值颜色
        },
        legend: {
            itemStyle:{
                color:'#bbb'
            }
        },//x轴选项字体颜色
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                    color: '#fff',//坐标上的文字颜色
                    connectorColor:'#fff',//坐标上的文字颜色
                },
                enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
            }
        },
        series: [{
            name: '湿度',
            data: [86.08857143,86.01764706, 88.44, 88.65294118, 86.80571429, 84.3, 76.36285714, 78.13428571, 70.59714286, 77.51428571, 88.22285714, 87.5]
        }, {
            name: '温度',
            data: [21.05428571, 20.69428571, 21.54571429, 21.39714286, 22.94857143, 23.48857143, 22.77647059, 25.44, 25.44857143, 20.86285714, 20.46571429, 21.05428571]
        }]
    });
});


//PM2.5
Highcharts.setOptions({
    global: {
        useUTC: false
    }
});
function activeLastPointToolip(chart) {
    var points = chart.series[0].points;
    chart.tooltip.refresh(points[points.length -1]);
}
$('#container2').highcharts({
    chart: {
        backgroundColor:'rgba(5, 14, 29, 0)',
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {
                // set up the updating of the chart each second
                var series = this.series[0],
                    chart = this;
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                    activeLastPointToolip(chart)
                }, 1000);
            }
        }
    },
    title: {
        text: '重庆市江津区石蟆镇-蟆城供销社基地-PM2.5',
        style:{color:'#fff'}
    },
    colors: [ '#ff5900'],
    credits:{
        enabled:false
    },
    xAxis: {
        labels:{
            style:{
                color:'#a9a9a9'
            }
        },
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        labels:{
            style:{
                color:'#a9a9a9'
            }
        },
        title: {
            text: '单位：μg/m3',
            style:{color:'#bbb'}
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2)+'(μg/m3)';
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'PM2.5',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;
            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
}, function(c) {
    activeLastPointToolip(c)
});

//光照强度、二氧化碳
$(function () {
    $('#container1').highcharts({
        chart: {
            zoomType: 'xy',
            backgroundColor:'rgba(5, 14, 29, 0)',
        },
        title: {
            text: '重庆市江津区石蟆镇-蟆城供销社基地-光照强度、二氧化碳',
            style:{color:'#fff'}
        },
        colors: ['#f7a35c', '#f45b5b'],//曲线颜色
        credits:{
            enabled:false
        },//去掉右下角版权
        exporting: {
            enabled:false
        },//去掉右上角选项
        xAxis: [{
            labels:{
                style:{
                    color:'#a9a9a9'
                }
            },//x轴数值颜色
            categories: ['0点','2点','4点','6点','8点','10点','12点','14点','16点','18点','20点', '22点'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}lux',
                style: {
                    color: Highcharts.getOptions().colors[8]
                }
            },
            title: {
                text: '光照强度：lux',
                style: {
                    color: Highcharts.getOptions().colors[8]
                }
            },
            opposite: true//y轴两边各显示一条数值
        }, { // Secondary yAxis

        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: '二氧化碳：ppm',
                style: {
                    color: Highcharts.getOptions().colors[3]
                }
            },
            labels: {
                format: '{value} ppm',
                style: {
                    color: Highcharts.getOptions().colors[3]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 60,
            verticalAlign: 'top',
            y: 49,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#fff',
        },
        series: [{
            name: '二氧化碳',
            type: 'spline',
            yAxis: 2,
            data: [636.2068966, 599.4666667, 599.1333333, 892.6896552, 568.1016949, 544.6034483, 572.362069, 566.9333333,934.4333333, 601.15, 549.5, 564.8644068],
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' ppm'
            }
        }, {
            name: '光照强度',
            type: 'spline',
            data: [0, 0, 0,257.0588235, 7324.457143, 17972.48571, 20000, 20000, 20000, 7664.828571, 17.14285714, 0],
            tooltip: {
                valueSuffix: ' lux'
            }
        }]
    });
});


//荔枝土壤温湿度
$(function () {
    $('#container3').highcharts({
        chart: {
            zoomType: 'xy',
            backgroundColor:'rgba(5, 14, 29, 0)'
        },
        title: {
            text: '重庆市江津区石蟆镇-蟆城供销社基地-荔枝土壤温湿度',
            style:{color:'#fff'}
        },
        colors: ['#fff425', '#f45b5b'], //曲线颜色
        credits:{
            enabled:false
        },//去掉右下角版权
        exporting: {
            enabled:false
        },//去掉右上角选项
        xAxis: [{
            labels:{
                style:{
                    color:'#a9a9a9'
                }
            },//x轴数值颜色
            categories: ['0点', '1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点', '9点', '10点', '11点','12点','13点', '14点', '15点', '16点', '17点', '18点', '19点', '20点', '21点', '22点', '23点'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[5]
                }
            },
            title: {
                text: '土壤温度',
                style: {
                    color: Highcharts.getOptions().colors[5]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '土壤湿度',
                style: {
                    color: Highcharts.getOptions().colors[3]
                }
            },
            labels: {
                format: '{value} H%',
                style: {
                    color: Highcharts.getOptions().colors[3]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 100,
            verticalAlign: 'top',
            y: 50,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#fff'
        },
        series: [{
            name: '土壤湿度',
            type: 'column',
            yAxis: 1,
            data: [73.23823529, 73.4, 73.4, 73.61428571, 73.9, 73.97142857, 74.06176471, 74.05714286, 74.02857143, 74.52857143, 74.88571429, 75.27142857,74.75714286, 73.78571429, 70.97428571, 70.1,70.3, 70.34411765, 70.78571429, 70.8, 70.8, 70.84411765, 71.41764706, 71.3],
            tooltip: {
                valueSuffix: 'H%'
            }
        }, {
            name: '土壤温度',
            type: 'spline',
            data: [24.84705882, 24.97142857, 25.12, 25.35428571, 25.55, 25.71714286, 25.78823529, 25.54571429, 25.29142857, 25.06857143, 25, 24.9,24.70571429, 24.52, 24.43714286, 24.39714286,24.41142857, 24.50294118, 24.64285714, 24.82285714, 25.04285714, 25.19411765, 25.24705882, 25.4],
            tooltip: {
                valueSuffix: '°C'
            }
        }]
    });
});



