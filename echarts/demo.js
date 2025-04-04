// import * as d3 from 'echarts';
var seasons = [];
var goals = [];
var assts = [];
var soT = [];
var soTPer90 = [];
var GPerSoT = [];
var goalsNational = [];
var asstsNational = [];
var seasonNational = [];


let csv = d3.dsv(",", "2.csv", "4.csv");
let csv1 = d3.dsv(",", "4.csv");
csv("1national.csv", function (csvNational) {
    csv("4.csv", function (csvdata1) {
        console.log(csvdata1)
        csv("2.csv", function (error, csvdata) {
            if (error) {
                console.log(error);
            } else {
                console.log(csvdata);
                console.log(csvdata1);
                for (var i = 0; i < csvdata.length; i++) {
                    seasons.push(csvdata[i]['Season']);
                    goals.push(parseInt(csvdata[i]['Gls1']));           //对象转数组
                    assts.push(parseFloat(csvdata[i]['Ast']));
                    soT.push(parseInt(csvdata1[i]['SoT']));
                    soTPer90.push(parseFloat(csvdata1[i]['SoT/90']));
                    GPerSoT.push(parseFloat(csvdata1[i]['G/SoT']));
                    goalsNational.push(parseInt(csvNational[i]['Gls']));
                    asstsNational.push(parseInt(csvNational[i]['Ast']));
                    seasonNational.push(csvNational[i]['Season'] + " " + csvNational[i]['Comp']);
                    console.log(asstsNational)

                    var Linechart = document.getElementById('line_chart');
                    var myLineChart = echarts.init(Linechart);
                    window.addEventListener("resize",function() {
                        myLineChart.resize();
                    });
                    var option0;


// prettier-ignore
                    let timeData = [
                        '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015',
                        '2016', '2017', '2018', '2019', '2020', '2021'
                    ];
                    option0 = {
                        title: {
                            text: 'Club VS National Team',
                            left: 800,
                            top: '48%',
                            color: '#FF0000'
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                animation: false
                            }
                        },

                        toolbox: {
                            feature: {
                                dataZoom: {
                                    yAxisIndex: 'none'
                                },
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                        axisPointer: {
                            link: [
                                {
                                    xAxisIndex: 'all'
                                }
                            ]
                        },
                        dataZoom: [
                            {
                                show: true,
                                realtime: true,
                                start: 0,
                                end: 100,
                                xAxisIndex: [0, 1]
                            },
                            {
                                type: 'inside',
                                realtime: true,
                                start: 0,
                                end: 100,
                                xAxisIndex: [0, 1]
                            }
                        ],
                        grid: [
                            {
                                left: 60,
                                right: 50,
                                height: '35%'
                            },
                            {
                                left: 60,
                                right: 50,
                                top: '55%',
                                height: '35%'
                            }
                        ],
                        legend: [{
                            data: ['club goal', 'club assist', 'national team goal', 'national team assist',
                                'Shots on Target', 'Shots on Target Per 90 Minutes', 'Goal Per Shots on Target', 'Goal Per Shots on Target'],
                            left: 10,
                            textStyle: {
                                color: 'white'
                            }
                        },
                            {
                                data: ['national team goal', 'national team assist'],
                                left: 10,
                                top: '92%',
                            },


                        ],

                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                axisLine: {onZero: true},
                                data: seasons
                            },
                            {
                                gridIndex: 1,
                                type: 'category',
                                boundaryGap: false,
                                axisLine: {onZero: true},
                                data: seasonNational,
                                position: 'top'
                            }
                        ],
                        yAxis: [
                            {
                                name: 'numbers',
                                type: 'value',
                                max: 120
                            },
                            {
                                gridIndex: 1,
                                name: 'numbers',
                                type: 'value',
                                inverse: true
                            }
                        ],
                        series: [
                            {
                                name: 'club goal',
                                type: 'line',
                                symbolSize: 8,
                                // prettier-ignore
                                data: goals
                            },
                            {
                                name: 'club assist',
                                type: 'line',
                                symbolSize: 8,
                                // prettier-ignore
                                data: assts
                            },
                            {
                                name: 'Shots on Target',
                                type: 'line',
                                symbolSize: 8,
                                // prettier-ignore
                                data: soT
                            },
                            {
                                name: 'Shots on Target Per 90 Minutes',
                                type: 'line',
                                symbolSize: 8,
                                // prettier-ignore
                                data: soTPer90
                            },
                            {
                                name: 'Goal Per Shots on Target',
                                type: 'line',
                                symbolSize: 8,
                                // prettier-ignore
                                data: GPerSoT
                            },
                            {
                                name: 'national team goal',
                                type: 'line',
                                xAxisIndex: 1,
                                yAxisIndex: 1,
                                symbolSize: 8,
                                // prettier-ignore
                                data: goalsNational
                            },
                            {
                                name: 'national team assist',
                                type: 'line',
                                xAxisIndex: 1,
                                yAxisIndex: 1,
                                symbolSize: 8,
                                // prettier-ignore
                                data: asstsNational
                            }
                        ]
                    };

                    option0 && myLineChart.setOption(option0);
                    // console.log(seasons);
                    // console.log(goals);
                }

            }
        });
    })
})



function showGif(name) {
    var gif = document.getElementById(name)
    gif.style.visibility = "visible"
};

function showGif1(name, gifname) {
    var gif = document.getElementById(name);
    gif.src = gifname;
    gif.style.visibility = "visible"
}

function clear1() {
    var c = document.getElementById("myCanvas");
    var cxt = c.getContext("2d");
    cxt.clearRect(0, 0, c.width, c.height);
    var gif1 = document.getElementById("gif1");
    var gif2 = document.getElementById("gif2");
    var gif3 = document.getElementById("gif3");
    gif1.style.visibility = "hidden";
    gif2.style.visibility = "hidden";
    gif3.style.visibility = "hidden";
    console.log("clear")
};

function show(obj) {
    var index = obj.selectedIndex
    var val = obj.options[index].value
    let drawArray = []
    console.log(obj)
    if (val === '2018') {
        var text = '2018年世界杯，葡萄牙同摩洛哥，伊朗与西班牙同分在B组，而其中西班牙无疑是最强的对手，在同西班牙队的比赛当中，葡萄牙的控球率和场面都处于被动，但足球可不是控球游戏，凭借着C罗的出色表现，葡萄牙先进一球，但由于整体实力落后，最后时刻还是处于2：3落后。但最终，C罗成为了那个英雄，他用翩若惊鸿，宛若游龙的定位球攻破德赫亚把手的大门，最终凭借着他的帽子戏法，葡萄牙3：3与西班牙握手言和。'
        document.getElementById("TEXT").innerText=text
        var c = document.getElementById("myCanvas");
        var cxt = c.getContext("2d");
        cxt.moveTo(899, 165);
// cxt.lineTo(150,50);
        cxt.lineTo(1000, 170);
        cxt.stroke();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(899, 165, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#98f805";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();
        drawArray.push(ctx1);

        var shoot2 = c.getContext("2d");
        shoot2.moveTo(940, 172);
// cxt.lineTo(150,50);
        shoot2.lineTo(1000, 178);
        shoot2.stroke();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.beginPath();
        ctx2.arc(940, 172, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#98f805";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();
        drawArray.push(ctx2);

        var shoot3 = c.getContext("2d");
        shoot3.moveTo(870, 188);
// cxt.lineTo(150,50);
        shoot3.lineTo(1000, 178);
        shoot3.stroke();
        // shoot3.onclick = showGif('gif1')

        var ctx3 = c.getContext("2d");
        ctx3.beginPath();
        ctx3.arc(870, 188, 5, 0, 2 * Math.PI);
        ctx3.fillStyle = "#98f805";
        ctx3.fill();
        ctx3.stroke();
        // ctx3.closePath();
        drawArray.push(ctx3);

        var shoot4 = c.getContext("2d");
        shoot4.moveTo(860, 250);
// cxt.lineTo(150,50);
        shoot4.lineTo(910, 223);
        shoot4.stroke();

        var ctx4 = c.getContext("2d");
        ctx4.beginPath();
        ctx4.arc(860, 250, 5, 0, 2 * Math.PI);
        ctx4.fillStyle = "#FF0000";
        ctx4.fill();
        ctx4.stroke();

        // drawArray.forEach(it => {
        //     it()
        // })

        c.onclick = function (e) {
            var x = e.offsetX;
            var y = e.offsetY;
            if (x > 865 && x < 875 && y > 183 && y < 193) {
                showGif1("gif3", "hattrick3.gif")
            }
            if (x > 935 && x < 945 && y > 167 && y < 177) {
                showGif1("gif1", "hattrick1.gif")
            }
            if (x > 894 && x < 904 && y > 161 && y < 171) {
                showGif1("gif2", "hattrick2.gif")
            }
        }

        // c.addEventListener('click', function (e) {
        //     const  canvasInfo = ctx1.getBoundingClientRect()
        //     console.log(e.clientX,e.clientY)
        //     showGif('gif1')
        // })

    }
    if (val === '2016') {
        var text = '2015-2016赛季欧冠八分之一决赛，C罗和他的皇马迎来狼堡--沃尔夫斯堡的挑战，在赛前主流的媒体和预测都表示皇马会轻松过关，然而首回合狼堡以2：0的比分让所有人大跌眼镜。正当人们以为一个爆冷就此产生的时候，C罗站了出来，又是一个帽子戏法，C罗几乎凭借着他一己之力带领皇家马德里成功晋级，并且在当年捧起大耳朵杯。'
        document.getElementById("TEXT").innerText=text
        var c = document.getElementById("myCanvas");
        var cxt = c.getContext("2d");
        cxt.moveTo(933, 133);
// cxt.lineTo(150,50);
        cxt.lineTo(940, 140);
        cxt.stroke();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(933, 133, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#FF0000";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();
        drawArray.push(ctx1);

        var shoot2 = c.getContext("2d");
        shoot2.moveTo(960, 150);
// cxt.lineTo(150,50);
        shoot2.lineTo(1000, 188);
        shoot2.stroke();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.beginPath();
        ctx2.arc(960, 150, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#98f805";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();
        drawArray.push(ctx2);

        var shoot5 = c.getContext("2d");
        shoot5.moveTo(963, 170);
// cxt.lineTo(150,50);
        shoot5.lineTo(1000, 175);
        shoot5.stroke();

        var ctx5 = c.getContext("2d");
        ctx5.beginPath();
        ctx5.beginPath();
        ctx5.arc(963, 170, 5, 0, 2 * Math.PI);
        ctx5.fillStyle = "#98f805";
        ctx5.fill();
        ctx5.stroke();
        ctx5.closePath();
        drawArray.push(ctx5);


        var shoot3 = c.getContext("2d");
        shoot3.moveTo(843, 178);
// cxt.lineTo(150,50);
        shoot3.lineTo(1000, 188);
        shoot3.stroke();
        // shoot3.onclick = showGif('gif1')

        var ctx3 = c.getContext("2d");
        ctx3.beginPath();
        ctx3.arc(843, 178, 5, 0, 2 * Math.PI);
        ctx3.fillStyle = "#98f805";
        ctx3.fill();
        ctx3.stroke();
        // ctx3.closePath();
        drawArray.push(ctx3);

        var shoot4 = c.getContext("2d");
        shoot4.moveTo(830, 140);
// cxt.lineTo(150,50);
        shoot4.lineTo(910, 155);
        shoot4.stroke();

        var ctx4 = c.getContext("2d");
        ctx4.beginPath();
        ctx4.arc(830, 140, 5, 0, 2 * Math.PI);
        ctx4.fillStyle = "#FF0000";
        ctx4.fill();
        ctx4.stroke();

        // drawArray.forEach(it => {
        //     it()
        // })

        c.onclick = function (e) {
            var x = e.offsetX;
            var y = e.offsetY;
            if (x > 955 && x < 965 && y > 145 && y < 155) {
                showGif1("gif3", "2016_1.gif")
            }
            if (x > 958 && x < 968 && y > 165 && y < 175) {
                showGif1("gif1", "2016_2.gif")
            }
            if (x > 838 && x < 848 && y > 173 && y < 183) {
                showGif1("gif2", "2016_3.gif")
            }
        }

        // c.addEventListener('click', function (e) {
        //     const  canvasInfo = ctx1.getBoundingClientRect()
        //     console.log(e.clientX,e.clientY)
        //     showGif('gif1')
        // })

    }
    if (val === '2013') {
        var text = '2013年，两位传奇巨星在世界杯预选赛碰面，“王不见王”的两位必须决出一个巴西世界杯名额，C罗与伊布拉西莫维奇，葡萄牙与瑞典，只有一人/一支队伍能出现在巴西世界杯的赛场。而这场比赛也成功变成了两位巨星的决斗场，C罗先进一球，伊布随后两球回应，关键时刻，又是C罗在比赛结束前连扳两球，又是以C罗的帽子戏法，最终率领葡萄牙队挺近巴西世界杯。'
        document.getElementById("TEXT").innerText=text
        var c = document.getElementById("myCanvas");
        var cxt = c.getContext("2d");
        cxt.moveTo(40, 80);
// cxt.lineTo(150,50);
        cxt.lineTo(0, 170);
        cxt.stroke();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(40, 80, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#FF0000";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();
        drawArray.push(ctx1);

        var shoot2 = c.getContext("2d");
        shoot2.moveTo(40, 130);
// cxt.lineTo(150,50);
        shoot2.lineTo(0, 173);
        shoot2.stroke();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.beginPath();
        ctx2.arc(40, 130, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#98f805";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();
        drawArray.push(ctx2);

        var shoot5 = c.getContext("2d");
        shoot5.moveTo(43, 177);
// cxt.lineTo(150,50);
        shoot5.lineTo(0, 207);
        shoot5.stroke();

        var ctx5 = c.getContext("2d");
        ctx5.beginPath();
        ctx5.beginPath();
        ctx5.arc(43, 177, 5, 0, 2 * Math.PI);
        ctx5.fillStyle = "#FF0000";
        ctx5.fill();
        ctx5.stroke();
        ctx5.closePath();
        drawArray.push(ctx5);

        var shoot11 = c.getContext("2d");
        shoot11.moveTo(57, 178);
// cxt.lineTo(150,50);
        shoot11.lineTo(0, 170);
        shoot11.stroke();

        var ctx11 = c.getContext("2d");
        ctx11.beginPath();
        ctx11.arc(57, 178, 5, 0, 2 * Math.PI);
        ctx11.fillStyle = "#FF0000";
        ctx11.fill();
        ctx11.stroke();
        // ctx11.closePath();


        var shoot3 = c.getContext("2d");
        shoot3.moveTo(55, 145);
// cxt.lineTo(150,50);
        shoot3.lineTo(0, 140);
        shoot3.stroke();
        // shoot3.onclick = showGif('gif1')

        var ctx3 = c.getContext("2d");
        ctx3.beginPath();
        ctx3.arc(55, 145, 5, 0, 2 * Math.PI);
        ctx3.fillStyle = "#FF0000";
        ctx3.fill();
        ctx3.stroke();
        // ctx3.closePath();
        drawArray.push(ctx3);

        var shoot4 = c.getContext("2d");
        shoot4.moveTo(115, 100);
// cxt.lineTo(150,50);
        shoot4.lineTo(0, 205);
        shoot4.stroke();

        var ctx4 = c.getContext("2d");
        ctx4.beginPath();
        ctx4.arc(115, 100, 5, 0, 2 * Math.PI);
        ctx4.fillStyle = "#FF0000";
        ctx4.fill();
        ctx4.stroke();

        var shoot5 = c.getContext("2d");
        shoot5.moveTo(140, 105);
// cxt.lineTo(150,50);
        shoot5.lineTo(0, 145);
        shoot5.stroke();

        var ctx5 = c.getContext("2d");
        ctx5.beginPath();
        ctx5.arc(140, 105, 5, 0, 2 * Math.PI);
        ctx5.fillStyle = "#FF0000";
        ctx5.fill();
        ctx5.stroke();

        var shoot6 = c.getContext("2d");
        shoot6.moveTo(160, 145);
// cxt.lineTo(150,50);
        shoot6.lineTo(0, 140);
        shoot6.stroke();

        var ctx6 = c.getContext("2d");
        ctx6.beginPath();
        ctx6.arc(160, 145, 5, 0, 2 * Math.PI);
        ctx6.fillStyle = "#FF0000";
        ctx6.fill();
        ctx6.stroke();

        var shoot7 = c.getContext("2d");
        shoot7.moveTo(140, 160);
// cxt.lineTo(150,50);
        shoot7.lineTo(0, 163);
        shoot7.stroke();

        var ctx7 = c.getContext("2d");
        ctx7.beginPath();
        ctx7.arc(140, 160, 5, 0, 2 * Math.PI);
        ctx7.fillStyle = "#FF0000";
        ctx7.fill();
        ctx7.stroke();

        var shoot8 = c.getContext("2d");
        shoot8.moveTo(95, 173);
// cxt.lineTo(150,50);
        shoot8.lineTo(0, 163);
        shoot8.stroke();

        var ctx8 = c.getContext("2d");
        ctx8.beginPath();
        ctx8.arc(95, 173, 5, 0, 2 * Math.PI);
        ctx8.fillStyle = "#FF0000";
        ctx8.fill();
        ctx8.stroke();

        var shoot9 = c.getContext("2d");
        shoot9.moveTo(75, 197);
// cxt.lineTo(150,50);
        shoot9.lineTo(0, 173);
        shoot9.stroke();

        var ctx9 = c.getContext("2d");
        ctx9.beginPath();
        ctx9.arc(75, 197, 5, 0, 2 * Math.PI);
        ctx9.fillStyle = "#98f805";
        ctx9.fill();
        ctx9.stroke();

        var shoot10 = c.getContext("2d");
        shoot10.moveTo(62, 227);
// cxt.lineTo(150,50);
        shoot10.lineTo(0, 173);
        shoot10.stroke();

        var ctx10 = c.getContext("2d");
        ctx10.beginPath();
        ctx10.arc(62, 227, 5, 0, 2 * Math.PI);
        ctx10.fillStyle = "#98f805";
        ctx10.fill();
        ctx10.stroke();

        // drawArray.forEach(it => {
        //     it()
        // })

        c.onclick = function (e) {
            var x = e.offsetX;
            var y = e.offsetY;
            if (x > 70 && x < 80 && y > 192 && y < 202) {
                showGif1("gif1", "2013_1.gif")
            }
            if (x > 57 && x < 67 && y > 222 && y < 232) {
                showGif1("gif2", "2013_2.gif")
            }
            if (x > 35 && x < 45 && y > 125 && y < 135) {
                showGif1("gif3", "2013_3.gif")
            }
        }

        // c.addEventListener('click', function (e) {
        //     const  canvasInfo = ctx1.getBoundingClientRect()
        //     console.log(e.clientX,e.clientY)
        //     showGif('gif1')
        // })

    }
    if (val === '2017') {
        var text = '2017年欧冠淘汰赛，皇马与拜仁狭路相逢，两只实力强劲的队伍在首回合就奉献了一场精彩的比赛，皇马虽然以2：1的比分战胜拜仁，来到次回合的比赛，皇马要想晋级，也必须赢，比赛的常规阶段，C罗用一粒头球和一粒单刀攻破诺伊尔把手的球门，也将比赛拖入加时赛，加时赛中依靠马塞洛精彩的突破助攻C罗打入杀死比赛的一球，最终皇马成功晋级下一轮。'
        document.getElementById("TEXT").innerText=text
        var c = document.getElementById("myCanvas");
        var cxt = c.getContext("2d");
        cxt.moveTo(927, 133);
// cxt.lineTo(150,50);
        cxt.lineTo(1000, 145);
        cxt.stroke();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(927, 133, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#FF0000";
        ctx1.fill();
        ctx1.stroke();
        // ctx1.closePath();
        // drawArray.push(ctx1);
        var shoot5 = c.getContext("2d");
        shoot5.moveTo(920, 160);
// cxt.lineTo(150,50);
        shoot5.lineTo(930, 163);
        shoot5.stroke();

        var ctx5 = c.getContext("2d");
        ctx5.beginPath();
        ctx5.arc(920, 160, 5, 0, 2 * Math.PI);
        ctx5.fillStyle = "#FF0000";
        ctx5.fill();
        ctx5.stroke();

        var shoot2 = c.getContext("2d");
        shoot2.moveTo(947, 160);
// cxt.lineTo(150,50);
        shoot2.lineTo(1000, 188);
        shoot2.stroke();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.beginPath();
        ctx2.arc(947, 160, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#98f805";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();
        // drawArray.push(ctx2);

        var shoot5 = c.getContext("2d");
        shoot5.moveTo(934, 190);
// cxt.lineTo(150,50);
        shoot5.lineTo(1000, 170);
        shoot5.stroke();

        var ctx5 = c.getContext("2d");
        ctx5.beginPath();
        ctx5.beginPath();
        ctx5.arc(934, 190, 5, 0, 2 * Math.PI);
        ctx5.fillStyle = "#98f805";
        ctx5.fill();
        ctx5.stroke();
        ctx5.closePath();
        // drawArray.push(ctx5);


        var shoot3 = c.getContext("2d");
        shoot3.moveTo(957, 187);
// cxt.lineTo(150,50);
        shoot3.lineTo(1000, 177);
        shoot3.stroke();
        // shoot3.onclick = showGif('gif1')

        var ctx3 = c.getContext("2d");
        ctx3.beginPath();
        ctx3.arc(957, 187, 5, 0, 2 * Math.PI);
        ctx3.fillStyle = "#98f805";
        ctx3.fill();
        ctx3.stroke();
        // ctx3.closePath();
        // drawArray.push(ctx3);

        var shoot4 = c.getContext("2d");
        shoot4.moveTo(830, 166);
// cxt.lineTo(150,50);
        shoot4.lineTo(1000, 176);
        shoot4.stroke();

        var ctx4 = c.getContext("2d");
        ctx4.beginPath();
        ctx4.arc(830, 166, 5, 0, 2 * Math.PI);
        ctx4.fillStyle = "#FF0000";
        ctx4.fill();
        ctx4.stroke();

        // drawArray.forEach(it => {
        //     it()
        // })

        c.onclick = function (e) {
            var x = e.offsetX;
            var y = e.offsetY;
            if (x > 942 && x < 952 && y > 155 && y < 165) {
                showGif1("gif1", "2017_1.gif")
            }
            if (x > 929 && x < 939 && y > 185 && y < 195) {
                showGif1("gif2", "2017_2.gif")
            }
            if (x > 952 && x < 962 && y > 182 && y < 192) {
                showGif1("gif3", "2017_3.gif")
            }
        }

        // c.addEventListener('click', function (e) {
        //     const  canvasInfo = ctx1.getBoundingClientRect()
        //     console.log(e.clientX,e.clientY)
        //     showGif('gif1')
        // })

    }
}

function CH() {
    var this_ = document.getElementById("select")
    var index = document.getElementById("select").selectedIndex
    console.log(index)
    var val = this_.options[index].value
    console.log(val)


    if (val === '2018') {
        var c = document.getElementById("myCanvas");

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(130, 100, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();


        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.beginPath();
        ctx2.arc(450, 30, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();


        var ctx3 = c.getContext("2d");
        ctx3.beginPath();
        ctx3.arc(500, 173, 5, 0, 2 * Math.PI);
        ctx3.fillStyle = "#566dee";
        ctx3.fill();
        ctx3.stroke();
        // ctx3.closePath();

        var ctx4 = c.getContext("2d");
        ctx4.beginPath();
        ctx4.arc(500, 175, 5, 0, 2 * Math.PI);
        ctx4.fillStyle = "#566dee";
        ctx4.fill();
        ctx4.stroke();

        var ctx5 = c.getContext("2d");
        ctx5.beginPath();
        ctx5.arc(480,185, 5, 0, 2 * Math.PI);
        ctx5.fillStyle = "#566dee";
        ctx5.fill();
        ctx5.stroke();

        var ctx6 = c.getContext("2d");
        ctx6.beginPath();
        ctx6.arc(483,203, 5, 0, 2 * Math.PI);
        ctx6.fillStyle = "#566dee";
        ctx6.fill();
        ctx6.stroke();

        var ctx7 = c.getContext("2d");
        ctx7.beginPath();
        ctx7.arc(520,185, 5, 0, 2 * Math.PI);
        ctx7.fillStyle = "#566dee";
        ctx7.fill();
        ctx7.stroke();

        var ctx8 = c.getContext("2d");
        ctx8.beginPath();
        ctx8.arc(520,155, 5, 0, 2 * Math.PI);
        ctx8.fillStyle = "#566dee";
        ctx8.fill();
        ctx8.stroke();

        var ctx9 = c.getContext("2d");
        ctx9.beginPath();
        ctx9.arc(516,155, 5, 0, 2 * Math.PI);
        ctx9.fillStyle = "#566dee";
        ctx9.fill();
        ctx9.stroke();

        var ctx10 = c.getContext("2d");
        ctx10.beginPath();
        ctx10.arc(513,150, 5, 0, 2 * Math.PI);
        ctx10.fillStyle = "#566dee";
        ctx10.fill();
        ctx10.stroke();

        var ctx11 = c.getContext("2d");
        ctx11.beginPath();
        ctx11.arc(510,24, 5, 0, 2 * Math.PI);
        ctx11.fillStyle = "#566dee";
        ctx11.fill();
        ctx11.stroke();

        var ctx12 = c.getContext("2d");
        ctx12.beginPath();
        ctx12.arc(550,20, 5, 0, 2 * Math.PI);
        ctx12.fillStyle = "#566dee";
        ctx12.fill();
        ctx12.stroke();

        var ctx12 = c.getContext("2d");
        ctx12.beginPath();
        ctx12.arc(550,20, 5, 0, 2 * Math.PI);
        ctx12.fillStyle = "#566dee";
        ctx12.fill();
        ctx12.stroke();

        var ctx13 = c.getContext("2d");
        ctx13.beginPath();
        ctx13.arc(570,30, 5, 0, 2 * Math.PI);
        ctx13.fillStyle = "#566dee";
        ctx13.fill();
        ctx13.stroke();

        var ctx14 = c.getContext("2d");
        ctx14.beginPath();
        ctx14.arc(530,60, 5, 0, 2 * Math.PI);
        ctx14.fillStyle = "#566dee";
        ctx14.fill();
        ctx14.stroke();

        var ctx14 = c.getContext("2d");
        ctx14.beginPath();
        ctx14.arc(535,64, 5, 0, 2 * Math.PI);
        ctx14.fillStyle = "#566dee";
        ctx14.fill();
        ctx14.stroke();

        var ctx15 = c.getContext("2d");
        ctx15.beginPath();
        ctx15.arc(544,60, 5, 0, 2 * Math.PI);
        ctx15.fillStyle = "#566dee";
        ctx15.fill();
        ctx15.stroke();

        var ctx16 = c.getContext("2d");
        ctx16.beginPath();
        ctx16.arc(536,84, 5, 0, 2 * Math.PI);
        ctx16.fillStyle = "#566dee";
        ctx16.fill();
        ctx16.stroke();

        var ctx17 = c.getContext("2d");
        ctx17.beginPath();
        ctx17.arc(560,80, 5, 0, 2 * Math.PI);
        ctx17.fillStyle = "#566dee";
        ctx17.fill();
        ctx17.stroke();

        var ctx18 = c.getContext("2d");
        ctx18.beginPath();
        ctx18.arc(563,85, 5, 0, 2 * Math.PI);
        ctx18.fillStyle = "#566dee";
        ctx18.fill();
        ctx18.stroke();

        var ctx19 = c.getContext("2d");
        ctx19.beginPath();
        ctx19.arc(583,80, 5, 0, 2 * Math.PI);
        ctx19.fillStyle = "#566dee";
        ctx19.fill();
        ctx19.stroke();

        var ctx20 = c.getContext("2d");
        ctx20.beginPath();
        ctx20.arc(574,120, 5, 0, 2 * Math.PI);
        ctx20.fillStyle = "#566dee";
        ctx20.fill();
        ctx20.stroke();

        var ctx21 = c.getContext("2d");
        ctx21.beginPath();
        ctx21.arc(545,208, 5, 0, 2 * Math.PI);
        ctx21.fillStyle = "#566dee";
        ctx21.fill();
        ctx21.stroke();

        var ctx22 = c.getContext("2d");
        ctx22.beginPath();
        ctx22.arc(690,30, 5, 0, 2 * Math.PI);
        ctx22.fillStyle = "#566dee";
        ctx22.fill();
        ctx22.stroke();

        var ctx23 = c.getContext("2d");
        ctx23.beginPath();
        ctx23.arc(674,50, 5, 0, 2 * Math.PI);
        ctx23.fillStyle = "#566dee";
        ctx23.fill();
        ctx23.stroke();

        var ctx24 = c.getContext("2d");
        ctx24.beginPath();
        ctx24.arc(683,80, 5, 0, 2 * Math.PI);
        ctx24.fillStyle = "#566dee";
        ctx24.fill();
        ctx24.stroke();

        var ctx25 = c.getContext("2d");
        ctx25.beginPath();
        ctx25.arc(699,40, 5, 0, 2 * Math.PI);
        ctx25.fillStyle = "#566dee";
        ctx25.fill();
        ctx25.stroke();

        var ctx26 = c.getContext("2d");
        ctx26.beginPath();
        ctx26.arc(692,77, 5, 0, 2 * Math.PI);
        ctx26.fillStyle = "#566dee";
        ctx26.fill();
        ctx26.stroke();

        var ctx27 = c.getContext("2d");
        ctx27.beginPath();
        ctx27.arc(696,84, 5, 0, 2 * Math.PI);
        ctx27.fillStyle = "#566dee";
        ctx27.fill();
        ctx27.stroke();

        var ctx28 = c.getContext("2d");
        ctx28.beginPath();
        ctx28.arc(707,250, 5, 0, 2 * Math.PI);
        ctx28.fillStyle = "#566dee";
        ctx28.fill();
        ctx28.stroke();


        var ctx29 = c.getContext("2d");
        ctx29.beginPath();
        ctx29.arc(650,300, 5, 0, 2 * Math.PI);
        ctx29.fillStyle = "#566dee";
        ctx29.fill();
        ctx29.stroke();

        var ctx30 = c.getContext("2d");
        ctx30.beginPath();
        ctx30.arc(730,0, 5, 0, 2 * Math.PI);
        ctx30.fillStyle = "#566dee";
        ctx30.fill();
        ctx30.stroke();

        var ctx31 = c.getContext("2d");
        ctx31.beginPath();
        ctx31.arc(900,120, 5, 0, 2 * Math.PI);
        ctx31.fillStyle = "#566dee";
        ctx31.fill();
        ctx31.stroke();

        var ctx33 = c.getContext("2d");
        ctx33.beginPath();
        ctx33.arc(930,320, 5, 0, 2 * Math.PI);
        ctx33.fillStyle = "#566dee";
        ctx33.fill();
        ctx33.stroke();

        var ctx32 = c.getContext("2d");
        ctx32.beginPath();
        ctx32.arc(990,190, 5, 0, 2 * Math.PI);
        ctx32.fillStyle = "#566dee";
        ctx32.fill();
        ctx32.stroke();


        // drawArray.forEach(it => {
        //     it()
        // })
        // c.addEventListener('click', function (e) {
        //     const  canvasInfo = ctx1.getBoundingClientRect()
        //     console.log(e.clientX,e.clientY)
        //     showGif('gif1')
        // })

    }

    if (val === '2016') {
        var c = document.getElementById("myCanvas");

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(300, 140, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();


        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.beginPath();
        ctx2.arc(470, 30, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();


        var ctx3 = c.getContext("2d");
        ctx3.beginPath();
        ctx3.arc(480, 280, 5, 0, 2 * Math.PI);
        ctx3.fillStyle = "#566dee";
        ctx3.fill();
        ctx3.stroke();
        // ctx3.closePath();

        // var ctx4 = c.getContext("2d");
        // ctx4.beginPath();
        // ctx4.arc(500, 175, 5, 0, 2 * Math.PI);
        // ctx4.fillStyle = "#566dee";
        // ctx4.fill();
        // ctx4.stroke();

        // var ctx5 = c.getContext("2d");
        // ctx5.beginPath();
        // ctx5.arc(480,185, 5, 0, 2 * Math.PI);
        // ctx5.fillStyle = "#566dee";
        // ctx5.fill();
        // ctx5.stroke();

        var ctx6 = c.getContext("2d");
        ctx6.beginPath();
        ctx6.arc(483,203, 5, 0, 2 * Math.PI);
        ctx6.fillStyle = "#566dee";
        ctx6.fill();
        ctx6.stroke();

        // var ctx7 = c.getContext("2d");
        // ctx7.beginPath();
        // ctx7.arc(520,185, 5, 0, 2 * Math.PI);
        // ctx7.fillStyle = "#566dee";
        // ctx7.fill();
        // ctx7.stroke();

        // var ctx8 = c.getContext("2d");
        // ctx8.beginPath();
        // ctx8.arc(520,155, 5, 0, 2 * Math.PI);
        // ctx8.fillStyle = "#566dee";
        // ctx8.fill();
        // ctx8.stroke();

        // var ctx9 = c.getContext("2d");
        // ctx9.beginPath();
        // ctx9.arc(516,155, 5, 0, 2 * Math.PI);
        // ctx9.fillStyle = "#566dee";
        // ctx9.fill();
        // ctx9.stroke();

        // var ctx10 = c.getContext("2d");
        // ctx10.beginPath();
        // ctx10.arc(513,150, 5, 0, 2 * Math.PI);
        // ctx10.fillStyle = "#566dee";
        // ctx10.fill();
        // ctx10.stroke();

        var ctx11 = c.getContext("2d");
        ctx11.beginPath();
        ctx11.arc(510,0, 5, 0, 2 * Math.PI);
        ctx11.fillStyle = "#566dee";
        ctx11.fill();
        ctx11.stroke();

        var ctx12 = c.getContext("2d");
        ctx12.beginPath();
        ctx12.arc(550,20, 5, 0, 2 * Math.PI);
        ctx12.fillStyle = "#566dee";
        ctx12.fill();
        ctx12.stroke();

        // var ctx12 = c.getContext("2d");
        // ctx12.beginPath();
        // ctx12.arc(550,20, 5, 0, 2 * Math.PI);
        // ctx12.fillStyle = "#566dee";
        // ctx12.fill();
        // ctx12.stroke();

        var ctx13 = c.getContext("2d");
        ctx13.beginPath();
        ctx13.arc(570,30, 5, 0, 2 * Math.PI);
        ctx13.fillStyle = "#566dee";
        ctx13.fill();
        ctx13.stroke();

        var ctx14 = c.getContext("2d");
        ctx14.beginPath();
        ctx14.arc(530,60, 5, 0, 2 * Math.PI);
        ctx14.fillStyle = "#566dee";
        ctx14.fill();
        ctx14.stroke();

        var ctx14 = c.getContext("2d");
        ctx14.beginPath();
        ctx14.arc(533,66, 5, 0, 2 * Math.PI);
        ctx14.fillStyle = "#566dee";
        ctx14.fill();
        ctx14.stroke();

        var ctx15 = c.getContext("2d");
        ctx15.beginPath();
        ctx15.arc(539,72, 5, 0, 2 * Math.PI);
        ctx15.fillStyle = "#566dee";
        ctx15.fill();
        ctx15.stroke();

        var ctx16 = c.getContext("2d");
        ctx16.beginPath();
        ctx16.arc(536,84, 5, 0, 2 * Math.PI);
        ctx16.fillStyle = "#566dee";
        ctx16.fill();
        ctx16.stroke();

        var ctx17 = c.getContext("2d");
        ctx17.beginPath();
        ctx17.arc(560,80, 5, 0, 2 * Math.PI);
        ctx17.fillStyle = "#566dee";
        ctx17.fill();
        ctx17.stroke();

        var ctx18 = c.getContext("2d");
        ctx18.beginPath();
        ctx18.arc(563,85, 5, 0, 2 * Math.PI);
        ctx18.fillStyle = "#566dee";
        ctx18.fill();
        ctx18.stroke();

        var ctx19 = c.getContext("2d");
        ctx19.beginPath();
        ctx19.arc(583,80, 5, 0, 2 * Math.PI);
        ctx19.fillStyle = "#566dee";
        ctx19.fill();
        ctx19.stroke();

        var ctx20 = c.getContext("2d");
        ctx20.beginPath();
        ctx20.arc(590,120, 5, 0, 2 * Math.PI);
        ctx20.fillStyle = "#566dee";
        ctx20.fill();
        ctx20.stroke();

        var ctx21 = c.getContext("2d");
        ctx21.beginPath();
        ctx21.arc(580,208, 5, 0, 2 * Math.PI);
        ctx21.fillStyle = "#566dee";
        ctx21.fill();
        ctx21.stroke();

        var ctx22 = c.getContext("2d");
        ctx22.beginPath();
        ctx22.arc(690,200, 5, 0, 2 * Math.PI);
        ctx22.fillStyle = "#566dee";
        ctx22.fill();
        ctx22.stroke();

        var ctx23 = c.getContext("2d");
        ctx23.beginPath();
        ctx23.arc(674,190, 5, 0, 2 * Math.PI);
        ctx23.fillStyle = "#566dee";
        ctx23.fill();
        ctx23.stroke();

        // var ctx24 = c.getContext("2d");
        // ctx24.beginPath();
        // ctx24.arc(683,80, 5, 0, 2 * Math.PI);
        // ctx24.fillStyle = "#566dee";
        // ctx24.fill();
        // ctx24.stroke();
        //
        // var ctx25 = c.getContext("2d");
        // ctx25.beginPath();
        // ctx25.arc(699,40, 5, 0, 2 * Math.PI);
        // ctx25.fillStyle = "#566dee";
        // ctx25.fill();
        // ctx25.stroke();

        var ctx26 = c.getContext("2d");
        ctx26.beginPath();
        ctx26.arc(692,77, 5, 0, 2 * Math.PI);
        ctx26.fillStyle = "#566dee";
        ctx26.fill();
        ctx26.stroke();

        var ctx27 = c.getContext("2d");
        ctx27.beginPath();
        ctx27.arc(696,84, 5, 0, 2 * Math.PI);
        ctx27.fillStyle = "#566dee";
        ctx27.fill();
        ctx27.stroke();

        // var ctx28 = c.getContext("2d");
        // ctx28.beginPath();
        // ctx28.arc(707,250, 5, 0, 2 * Math.PI);
        // ctx28.fillStyle = "#566dee";
        // ctx28.fill();
        // ctx28.stroke();


        var ctx29 = c.getContext("2d");
        ctx29.beginPath();
        ctx29.arc(650,300, 5, 0, 2 * Math.PI);
        ctx29.fillStyle = "#566dee";
        ctx29.fill();
        ctx29.stroke();

        var ctx30 = c.getContext("2d");
        ctx30.beginPath();
        ctx30.arc(730,0, 5, 0, 2 * Math.PI);
        ctx30.fillStyle = "#566dee";
        ctx30.fill();
        ctx30.stroke();

        var ctx31 = c.getContext("2d");
        ctx31.beginPath();
        ctx31.arc(920,120, 5, 0, 2 * Math.PI);
        ctx31.fillStyle = "#566dee";
        ctx31.fill();
        ctx31.stroke();

        var ctx31 = c.getContext("2d");
        ctx31.beginPath();
        ctx31.arc(950,250, 5, 0, 2 * Math.PI);
        ctx31.fillStyle = "#566dee";
        ctx31.fill();
        ctx31.stroke();

        var ctx31a = c.getContext("2d");
        ctx31a.beginPath();
        ctx31a.arc(937,300, 5, 0, 2 * Math.PI);
        ctx31a.fillStyle = "#566dee";
        ctx31a.fill();
        ctx31a.stroke();

        var ctx32 = c.getContext("2d");
        ctx32.beginPath();
        ctx32.arc(990,80, 5, 0, 2 * Math.PI);
        ctx32.fillStyle = "#566dee";
        ctx32.fill();
        ctx32.stroke();

        var ctx33 = c.getContext("2d");
        ctx33.beginPath();
        ctx33.arc(558,180, 5, 0, 2 * Math.PI);
        ctx33.fillStyle = "#566dee";
        ctx33.fill();
        ctx33.stroke();

        // var ctx34 = c.getContext("2d");
        // ctx34.beginPath();
        // ctx34.arc(540,170, 5, 0, 2 * Math.PI);
        // ctx34.fillStyle = "#566dee";
        // ctx34.fill();
        // ctx34.stroke();

        var ctx35 = c.getContext("2d");
        ctx35.beginPath();
        ctx35.arc(550,170, 5, 0, 2 * Math.PI);
        ctx35.fillStyle = "#566dee";
        ctx35.fill();
        ctx35.stroke();

        var ctx36 = c.getContext("2d");
        ctx36.beginPath();
        ctx36.arc(570,202, 5, 0, 2 * Math.PI);
        ctx36.fillStyle = "#566dee";
        ctx36.fill();
        ctx36.stroke();

    }

    if (val==='2013') {
        var c = document.getElementById("myCanvas");

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(40, 120, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(110, 110, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(400, 40, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(430, 130, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(350, 160, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(347, 163, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(340, 193, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(130, 340, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(130, 220, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(430, 280, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(420, 300, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(450, 310, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(467, 313, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(500, 173, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(497, 171, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(520, 220, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(580, 16, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(591, 39, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();

        var ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(600, 130, 5, 0, 2 * Math.PI);
        ctx2.fillStyle = "#566dee";
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();
    }

    if (val === '2017') {
        var c = document.getElementById("myCanvas");

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(300, 120, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(450, 80, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(430, 190 ,5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(500, 173, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(485, 300, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(460, 303, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(520, 30, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(540, 16, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(525, 100, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(540, 90, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(560, 95, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(585, 120, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(878, 130, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(910, 60, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(630, 102, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(890, 88, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(920, 80, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(560, 300, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(590, 250, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(605, 262, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(611, 276, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(600, 330, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(626, 260, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(617, 308, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(640, 287, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(940, 90, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();

        var ctx1 = c.getContext("2d");
        ctx1.beginPath();
        ctx1.arc(930, 120, 5, 0, 2 * Math.PI);
        ctx1.fillStyle = "#566dee";
        ctx1.fill();
        ctx1.stroke();
        ctx1.closePath();
    }


};

function showHead(){
    document.getElementById("head1").classList.remove('hidden');
    document.getElementById("head").classList.add('rim');
}

function hideHead(){
    document.getElementById("head1").classList.add('hidden');
    document.getElementById("head").classList.remove('rim');
}

function showLshouder(){
    document.getElementById("lshouder1").classList.remove('hidden');
    document.getElementById("lshouder").classList.add('rim');
}

function hideLshouder(){
    document.getElementById("lshouder1").classList.add('hidden');
    document.getElementById("lshouder").classList.remove('rim');
}

function showRshouder(){
    document.getElementById("rshouder1").classList.remove('hidden');
    document.getElementById("rshouder").classList.add('rim');
}

function hideRshouder(){
    document.getElementById("rshouder1").classList.add('hidden');
    document.getElementById("rshouder").classList.remove('rim');
}

function showMiddle(){
    document.getElementById("middle1").classList.remove('hidden');
    document.getElementById("middle").classList.add('rim');
}

function hideMiddle(){
    document.getElementById("middle1").classList.add('hidden');
    document.getElementById("middle").classList.remove('rim');
}

function showLleg(){
    document.getElementById("lleg1").classList.remove('hidden');
    document.getElementById("lleg").classList.add('rim');
}

function hideLleg(){
    document.getElementById("lleg1").classList.add('hidden');
    document.getElementById("lleg").classList.remove('rim');
}

function showRleg(){
    document.getElementById("rleg1").classList.remove('hidden');
    document.getElementById("rleg").classList.add('rim');
}

function hideRleg(){
    document.getElementById("rleg1").classList.add('hidden');
    document.getElementById("rleg").classList.remove('rim');
}

function amplify(inputobj){
    inputobj.classList.add("bigger");

}

function reverse(inputobj){
    inputobj.classList.remove("bigger");
}