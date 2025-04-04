var index = [];
var name_c = [];
var name_f = [];
var GA_per90 = [];
var SOT_per = [];
var G_per_SOT = [];
var SCA_per90 = [];

var data_path;//文件路径
var bar_title;//表格标题
var option;
var barChart;
var x_index;//13人index轮换，用于动态图表
var bar_legend = [];
var position;//pos选择框决定
var target;//target选择框决定
var target_data;//所需要的数据，初始化声明在GA_per90 SOT_per G_per_SOT SCA_per90四选一
const x_size = 8;
var data1;//数据
var categories;//x轴内容


function init(){//初始化板块
  console.log("init begin");
  x_index = 8;
  data_path = "source/top12_CF.json";
  bar_title = "C罗与中锋们";
  position = 'CF';
  target = "GA_per90";
  read_data(data_path);
  // console.log(GA_per90);
  target_data = cloneArr(GA_per90,GA_per90.length);
  // console.log(target_data);
  make_data();
  // console.log(data1);
  bar_legend.push(target);
  bar_reset();
  console.log("init finish");
}

init();//调用初始化板块函数

function data_clear(){//清空数据
  index = [];
  name_c = [];
  name_f = [];
  GA_per90 = [];
  SOT_per = [];
  G_per_SOT = [];
  SCA_per90 = [];
}

function read_data(data_path){//从json文件中读取数据
  $.ajaxSettings.async=false;
  $.getJSON(data_path, function (data) {
    data_clear();
    $.each(data, function (i, value) {
      index.push(value.index); //index
      name_c.push(value.name_c); //chinese name
      name_f.push(value.name_f); //name
      GA_per90.push(value.GA_per90); //每90分钟进球数+助攻数
      SOT_per.push(value.SOT_per); //射正率
      G_per_SOT.push(value.G_per_SOT); //射正转化进球率
      SCA_per90.push(value.SCA_per90); //每90分钟创造进球机会数
      // console.log(value);
    });
  });
}

function make_data(){//填充数据以导入图表option
  data1 = cloneArr(target_data,x_size);
  categories = cloneArr(name_c,x_size);
  console.log(categories.length);
}

function show_pos(obj){//pos_change选择框函数
  let index = obj.selectedIndex;
  let val = obj.options[index].value;
  x_index = 8;
  // console.log(index);
  // console.log(val);
  //每次点击成功，相当于初始化
  if (val != position){
    if(val === 'CF'){
      data_path = "source/top12_CF.json";
      bar_title = "C罗与中锋们";
      position = 'CF';
    }else{
      data_path = "source/top12_WF.json";
      bar_title = "C罗与边锋们";
      position = 'WF';
    }
    read_data(data_path);
    make_data();
    bar_reset();
  }
}

function show_tar(obj){//tar_change选择框函数
  let index = obj.selectedIndex;
  let val = obj.options[index].value;
  x_index = 8;
  // console.log(index);
  // console.log(val);
    //每次点击成功，相当于初始化
  if(val != target){
    if(val === 'GA_per90' ){
      target = "GA_per90";
      target_data = GA_per90;
    }else if(val === 'SOT_per'){
      target = "SOT_per";
      target_data = SOT_per;
    }else if(val === 'G_per_SOT'){
      target = "G_per_SOT";
      target_data = G_per_SOT;
    }else{//SCAper90
      target = "SCA_per90";
      target_data = SCA_per90;
    }
    make_data();
    bar_reset();
  }
}

function bar_reset(){//表格刷新
  barChart = echarts.init(document.getElementById("bar_diagram"));
  window.addEventListener("resize", function () {
  barChart.resize();
  });

  option = {
    title: {
      text: bar_title,
      left: '15%',
      textStyle: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 24,
      },
    },
    tooltip: {
      trigger: 'item',
      showDelay: 50,
      hideDelay: 50,
      hideDelay: 50,
      enterable: true,
      confine: true,
      showContent: true,
      axisPointer: {
        type: "none",
      },
    },
    legend: {
      data: bar_legend,
      left: 'center',
      textStyle: {
        color: "rgba(235, 235, 235, 1)"
      },
    },
    xAxis: [
      {
        type: "category",
        name: "姓名",
        nameTextStyle: {
          color: "rgba(245, 245, 245, 1)",
          fontSize: 16,
        },        
        boundaryGap: ['20%', '20%'],
        data: categories,
      }
    ],
    yAxis: [
      {
        type: "value",
        scale: true,
        name: target,
        nameTextStyle: {
          color: "rgba(245, 245, 245, 1)",
          fontSize: 16,
        },        
        min: 0,
        boundaryGap: [0.2, 0.2],
      }
    ],
    series: [
      {
        name: target,
        type: "bar",
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: data1,
      }
    ],
  };
  option && barChart.setOption(option);
}

function cloneArr(obj, len) {
  let objClone = [];
  let i;
    for (i = 0; i < len; i++) {
      objClone.push(obj[i]);
    }
  return objClone;
}

setInterval(function () {//动态部分
  data1.shift();
  data1.push(target_data[x_index]);
  categories.shift();
  categories.push(name_c[x_index]);
  x_index++;
  if(x_index == 12){
    x_index = 0;
  }
  barChart.setOption({
    xAxis: [
      {
        data: categories,
      }
    ],
    series: [
      {
        data: data1,
      }
    ],
  });

}, 3000);

option && barChart.setOption(option);
