class animal{
    constructor({name,weight,color,food})//解构赋值：无序的参数
    {
     this.name=name;
     this.weight=weight;
     this.color=color;
     this.food=food;
    }

    eat(){ 
    console.log(`${this.name} want to eat ${this.food} `);//字符串模板
    }
    getWeight(){
        return this.weight;
    }
}

class cat extends animal{
    constructor({name,weight,color,food,skill}){
      super({name,weight,color,food});//继承构造方法
      this.skill=skill;
  }
    getFood(){
      let food=new Promise((res,rej)=>{//2秒后回应为res成功状态
      setTimeout(()=>{
        res(true)
      },2000)
      });
      return food;
  }
}

let configMImi={
    name:'Mimi',
    weight:10,
    color:'yellow',
    food:'fish',
    skill:'ClimbTree'
}
let configMiaomiao={
    name:'Miaomiao',
    weight:12,
    color:'black',
    food:'meat',
    skill:'Run'
}
let configDudu={
    name:'Dudu',
    weight:9,
    color:'white',
    food:'rice',
    skill:'swimming'
}
//实例化
let Mimi=new cat(configMImi);
Mimi.eat();
let Miaomiao=new cat(configMiaomiao);
let Dudu=new cat(configDudu);

//计算总体重和平均体重
let getTotalWeight=(...catList)=>{  //rest将所有参数放入catList数组中
    let total=0;
    catList.forEach(cat=>{ //回调函数算总和
      total+=cat.weight
    });
    let ave=total/catList.length;
    return{total,ave};
}

let {total,ave}=getTotalWeight(Mimi,Miaomiao,Dudu)
console.log({total,ave});

//promise实现
Mimi.getFood().then(res=>{
    if(res){
        console.log(`Mimi will to find food`);    
    }
    else{
        console.log('not hungry!');
    }
}).catch(err=>{
    console.log(err);
})

//find特长是Run的猫
let FindSkill=(...catList)=>{
let cat=catList.find(
    function(value){
      if(value.skill=='Run'){
          return value;
      }
    }
);
console.log(`the best runner is ${cat.name}`);
}
FindSkill(Mimi,Miaomiao,Dudu);


let FindCat=(...catList)=>{
let cat=catList.find(
    function(value){
      if(value.name.includes('Dudu')){//用includes方法查找有无叫Dudu的猫
          return value;
      }
    }
);
    if(cat){
    console.log(`有叫Dudu的猫`);
    }
    else{
    console.log(`没有叫Dudu的猫`);
    }
}
FindCat(Mimi,Miaomiao,Dudu);
//获取下标
let weightIndex=[Mimi.getWeight(),Miaomiao.getWeight(),Dudu.getWeight()].findIndex((n)=>n<10);
console.log(`体重小于10的猫的在数组中的下标是${weightIndex}`);




