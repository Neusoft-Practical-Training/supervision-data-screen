$(window).load(function () {
    $(".loading").fadeOut()
})
$(function () {
    echarts_1();
    echarts_4()
    echarts_31()

    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        var data = [{
            title: '全国'
        },
            ['本周'],
            [{
                name: '未完成',
                max: 258
            }, {
                name: '已完成',
                max: 258
            }, {
                name: '接受跨域',
                max: 258
            }, {
                name: '拒绝跨域',
                max: 258
            }, {
                name: '完成跨域',
                max: 258
            }],
            [43, 150, 28, 3, 34],
        ]
        option = {

            color: ['#9DD060', '#35C96E', '#4DCEF8'],

            tooltip: {},

            radar: {
                center: ['50%', '50%'],
                radius: ["25%", "70%"],

                name: {
                    textStyle: {
                        color: '#72ACD1'
                    }
                },

                splitLine: {

                    lineStyle: {

                        color: 'rgba(255,255,255,.0',

                        width: 2

                    }

                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)',
                        width: 1,
                        type: 'dotted'

                    },

                },
                splitArea: {
                    areaStyle: {
                        color: ['rgba(255,255,255,.1)', 'rgba(255,255,255,0)']
                    }
                },
                indicator: data[2]
            },
            series: [{
                name: '',
                type: 'radar',
                data: [{
                    areaStyle: {
                        normal: {
                            opacity: 0.3,
                        }
                    },
                    value: data[3],
                    name: data[1][0]
                },
                    {
                        areaStyle: {
                            normal: {
                                opacity: 0.3,
                            }
                        },
                        value: data[4],
                        name: data[1][1]
                    },
                    {
                        areaStyle: {
                            normal: {
                                opacity: 0.3,
                            }
                        },
                        value: data[5],
                        name: data[1][2]
                    }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        var myChart2 = echarts.init(document.getElementById('echart3'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['SO₂浓度 (µg/m³)', 'SPM浓度 (µg/m³)'],

                top: '2%',
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: '12',

                },
                itemWidth: 12,
                itemHeight: 12,
                itemGap: 35
            },
            grid: {
                left: '0%',
                top: '40px',
                right: '0%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['11号', '12号', '13号', '14号', '15号', '16号', '17号'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '14',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '14',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [{
                name: 'SO₂浓度 (µg/m³)',
                type: 'bar',
                data: [20, 50, 70, 40, 30, 60, 30],
                barWidth: '20%', //柱子宽度
                // barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        color: '#2f89cf',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }, {
                name: 'SPM浓度 (µg/m³)',
                type: 'bar',
                data: [23, 44, 51, 34, 42, 55, 18],
                barWidth: '20%',
                // barGap: 1,
                itemStyle: {
                    normal: {
                        color: '#62c98d',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            },
            ]
        };
        option2 = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['本地指派', '异地指派'],
                top: '5%',
                textStyle: {
                    color: "#fff",
                    fontSize: '12',

                },

                itemGap: 35
            },
            grid: {
                left: '0%',
                top: '40px',
                right: '0%',
                bottom: '0',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 5,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [{
                name: '本地指派',
                type: 'line',
                smooth: true,
                data: [2, 6, 3, 8, 5, 8],

                itemStyle: {
                    normal: {
                        color: '#2f89cf',
                        opacity: 1,

                        barBorderRadius: 5,
                    }
                }
            }, {
                name: '异地指派',
                type: 'line',
                smooth: true,
                data: [5, 2, 6, 4, 5, 12],
                barWidth: '15',
                // barGap: 1,
                itemStyle: {
                    normal: {
                        color: '#62c98d',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            },
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option2);
        myChart2.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb01'));
        var myChart2 = echarts.init(document.getElementById('fb02'));
        var myChart3 = echarts.init(document.getElementById('fb03'));
        var myChart4 = echarts.init(document.getElementById('fb04'));
        var myChart5 = echarts.init(document.getElementById('myd1'));

        var myChart7 = echarts.init(document.getElementById('sysx'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                orient: 'vertical',
                top: '25%',
                right: 0,
                itemWidth: 10,
                itemHeight: 10,
                data: ['20-29岁', '30-39岁', '40-49岁', '50岁以上'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '年龄分布',
                    type: 'pie',
                    center: ['35%', '50%'],
                    radius: ['40%', '50%'],
                    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                    label: {show: false},
                    labelLine: {show: false},
                    data: [

                        {value: 30, name: '20-29岁'},
                        {value: 48, name: '30-39岁'},
                        {value: 30, name: '40-49岁'},
                        {value: 20, name: '50岁以上'},
                    ]
                }
            ]
        };
        option2 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                orient: 'vertical',
                top: '25%',
                right: '8%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['网格员', '监督员', '管理员'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '人员构成',
                    type: 'pie',
                    center: ['40%', '50%'],
                    radius: ['40%', '50%'],
                    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                    label: {show: false},
                    labelLine: {show: false},
                    data: [
                        {value: 50, name: '网格员'},
                        {value: 70, name: '监督员'},
                        {value: 8, name: '管理员'},

                    ]
                }
            ]
        };
        option3 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                orient: 'vertical',
                top: 'center',
                right: 0,
                itemWidth: 10,
                itemHeight: 10,
                data: ['休假申请中', '休假中', '即将休假'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '数据',
                    type: 'pie',
                    center: ['35%', '50%'],
                    radius: ['40%', '50%'],
                    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                    label: {show: false},
                    labelLine: {show: false},
                    data: [

                        {value: 4, name: '休假申请中'},
                        {value: 5, name: '休假中'},
                        {value: 3, name: '即将休假'},
                    ]
                }
            ]
        };
        option4 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                orient: 'vertical',
                top: 'center',
                right: '8%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['空闲', '工作', '临时抽调', '休假', '等待审核', '其它'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '业务分类',
                    type: 'pie',
                    center: ['40%', '50%'],
                    radius: ['40%', '50%'],
                    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                    label: {show: false},
                    labelLine: {show: false},
                    data: [
                        {value: 5, name: '空闲'},
                        {value: 20, name: '工作'},
                        {value: 5, name: '临时抽调'},
                        {value: 5, name: '休假'},
                        {value: 10, name: '等待审核'},
                        {value: 5, name: '其它'},
                    ]
                }
            ]
        };
        option5 = {
            grid: {
                left: '0',
                right: '0',
                top: '10%',
                bottom: '24%',
                //containLabel: true
            },
            legend: {
                data: ['未指派', '已完成', '已指派'],
                bottom: 0,
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: "#fff",
                    fontSize: '10',

                },

                itemGap: 5
            },
            tooltip: {
                show: "true",
                trigger: 'item'
            },
            yAxis: {
                type: 'value',
                show: false,
            },
            xAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83',
                    }
                },
                axisLabel: {
                    show: false,
                    //   inside: true,
                    textStyle: {
                        color: "rgba(255,255,255,1)",
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    // formatter:function(val){
                    //     return val.split("").join("\n")
                    // },
                },
                data: ['反馈办量统计']
            }

            ],
            series: [
                {
                    name: '未指派',
                    type: 'bar',
                    barWidth: '20',

                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#20aa92',
                            barBorderRadius: 50,
                            borderWidth: 0,
                        }
                    },
                    zlevel: 2,
                    barGap: '100%',
                    data: [20],
                    label: {
                        formatter: "{c}份",
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 12,
                            color: 'rgba(255,255,255,.6)',
                        }
                    },
                },
                {
                    name: '已完成',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#f4664e',
                            barBorderRadius: 50,
                            borderWidth: 0,
                        }
                    },
                    zlevel: 2,
                    barWidth: '20',
                    data: [40],
                    label: {
                        formatter: "{c}份",
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 12,
                            color: 'rgba(255,255,255,.6)',
                        }
                    },
                },
                {
                    name: '已指派',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#0c93dc',
                            barBorderRadius: 50,
                            borderWidth: 0,
                        }
                    },
                    zlevel: 2,
                    barWidth: '20',
                    data: [127],
                    label: {
                        formatter: "{c}份",
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 12,
                            color: 'rgba(255,255,255,.6)',
                        }
                    },
                },

            ]
        };

        option7 = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '0',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 5,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [{
                name: '2024年',
                type: 'line',
                //smooth: true,
                data: [8, 12, 28, 36, 44, 56],

                itemStyle: {
                    normal: {
                        color: '#2f89cf',
                        opacity: 1,

                        barBorderRadius: 5,
                    }
                }
            }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart2.setOption(option2);
        myChart3.setOption(option3);
        myChart4.setOption(option4);
        myChart5.setOption(option5);

        myChart7.setOption(option7);
        window.addEventListener("resize", function () {
            myChart.resize();
            myChart7.resize();
            myChart2.resize();
            myChart3.resize();
            myChart4.resize();
            myChart5.resize();

        });
    }
})



		
		
		


		









