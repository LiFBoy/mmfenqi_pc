"use strict";var Pagination=React.createClass({displayName:"Pagination",getInitialState:function(){return{currentPage:0}},getDefaultProps:function(){return{maxNumberOfDisplayPages:10,numberOfPages:20,onPage:function(t){console.log(t)}.bind(this)}},firstPage:-1,lastPage:-1,onPage:function(t){return function(){t>=0&&t<this.props.numberOfPages&&(this.props.cxt.changeIndex(t+1),this.setState({currentPage:t}))}.bind(this)},goto:function(){var t=parseInt(this.refs.pageInput.value-1);this.onPage(t)()},render:function(){(this.firstPage==-1||this.lastPage==-1||Math.abs(this.state.currentPage-this.firstPage)<1||Math.abs(this.state.currentPage-this.lastPage)<1||this.state.currentPage<this.firstPage||this.state.currentPage>this.lastPage)&&(this.firstPage=this.state.currentPage-parseInt(this.props.maxNumberOfDisplayPages/2),this.firstPage<0&&(this.firstPage=0),this.lastPage=this.firstPage+this.props.maxNumberOfDisplayPages,this.lastPage>this.props.numberOfPages-1&&(this.lastPage=this.props.numberOfPages-1),this.lastPage-this.firstPage+1<this.props.maxNumberOfDisplayPages&&(this.firstPage=this.lastPage-this.props.maxNumberOfDisplayPages+1,this.firstPage<0&&(this.firstPage=0)));var t=[];t.push({text:"首页",page:0}),t.push({text:"上一页",page:this.state.currentPage-1});for(var e=this.firstPage;e<=this.lastPage;e++){var i=e+1;e==this.firstPage&&this.firstPage>0&&(i="..."),e==this.lastPage&&this.lastPage<this.props.numberOfPages-1&&(i="..."),t.push({text:i,page:e})}t.push({text:"下一页",page:this.state.currentPage+1}),t.push({text:"最后一页",page:this.props.numberOfPages-1});var a=t.map(function(t,e){var i={marginRight:"4px",textAlign:"center",minWidth:"30px",cursor:"pointer",display:"inline-block",border:"1px solid #f3f3f3",backgroundColor:"rgb(248,249,250)",padding:"4px"};return t.page==this.state.currentPage&&parseInt(t.text)==t.page+1&&(i={backgroundColor:"rgb(233,113,125)",marginRight:"4px",textAlign:"center",minWidth:"30px",cursor:"pointer",display:"inline-block",color:"white",border:"1px solid #f3f3f3",padding:"4px"}),React.createElement("span",{onClick:this.onPage(t.page),key:t+" "+e,style:i},t.text)}.bind(this));return React.createElement("div",{style:{display:0==this.props.numberOfPages?"none":"block"}},a,React.createElement("span",null,"  共",this.props.numberOfPages,"页"),React.createElement("span",null,"  转到  "),React.createElement("input",{ref:"pageInput",type:"text",style:{cursor:"pointer",textAlign:"center",backgroundColor:"rgb(248,249,250)",border:"1px solid #f3f3f3",width:"45px",padding:"4px"}}),React.createElement("span",null,"  页  "),React.createElement("input",{type:"button",onClick:this.goto,value:"确定",style:{backgroundColor:"rgb(233,113,125)",color:"white",border:"0px solid transparent",padding:"12px"}}))}}),Filter=React.createClass({displayName:"Filter",getInitialState:function(){return{currentIndex:0}},componentDidMount:function(){this.props.cxt.addRemoveConditionListener(function(t,e){t==this.props.label&&this.setState({currentIndex:0})}.bind(this))},onChange:function(t){return function(){this.setState({currentIndex:t}),this.props.cxt.onFilterChange(this.props.label,this.props.items[t]),this.props.cxt.setQueryCondition(this.props.label,this.props.queryName,t)}.bind(this)},render:function(){var t=this.props.items.map(function(t,e){var i={display:"inline-block",paddingRight:"12px",paddingBottom:"12px",cursor:"pointer"};return e==this.state.currentIndex&&(i={display:"inline-block",paddingRight:"12px",paddingBottom:"12px",cursor:"pointer",color:"rgb(233,113,125)",lineHeight:"35px",paddingLeft:"2px"}),React.createElement("span",{key:t+" "+e,style:i,onClick:this.onChange(e)},t)}.bind(this));return React.createElement("div",null,React.createElement("div",{style:{width:"5%",float:"left"}},React.createElement("span",{style:{paddingRight:"12px",paddingBottom:"12px",color:"#a4a4a4",lineHeight:"35px"}},this.props.label)),React.createElement("div",{style:{width:"95%",float:"left"}},t),React.createElement("div",{style:{clear:"both"}}))}}),DoubleFilter=React.createClass({displayName:"DoubleFilter",getInitialState:function(){return{currentIndex:-1}},componentDidMount:function(){this.props.cxt.addRemoveConditionListener(function(t,e){t==this.props.typeName&&this.setState({currentIndex:-1})}.bind(this))},onChange:function(t,e,i){return function(){this.setState({currentIndex:t}),this.props.cxt.onFilterChange(this.props.typeName,e),this.props.cxt.setQueryCondition(this.props.typeName,this.props.callbackId,i)}.bind(this)},render:function(){var t=this.props.items.map(function(t,e){var i={display:"inline-block",paddingRight:"12px",paddingBottom:"12px",cursor:"pointer"};return e==this.state.currentIndex&&(i={display:"inline-block",paddingRight:"12px",paddingBottom:"12px",cursor:"pointer",color:"rgb(233,113,125)"}),React.createElement("div",{className:"filterCont",key:e},React.createElement("span",{className:"filterNow"},React.createElement("em",{style:i},t[this.props.typeName])),React.createElement("div",{className:"filterItem"},React.createElement("p",null,t[this.props.subTypeName].map(function(t,i){return React.createElement("a",{key:i,onClick:this.onChange(e,t[this.props.subItemName],t[this.props.subItemId])},React.createElement("span",null,t[this.props.subItemName]))}.bind(this)))))}.bind(this));return React.createElement("div",{className:"ft-logo"},React.createElement("div",{style:{float:"left",lineHeight:"35px",color:"#999",paddingRight:"30px"}},this.props.kindName),React.createElement("div",{className:"filterCont"},React.createElement("span",{className:"filterNow"},React.createElement("em",{style:this.state.currentIndex==-1?{display:"inline-block",paddingRight:"12px",paddingBottom:"12px",cursor:"pointer",color:"rgb(233,113,125)"}:{display:"inline-block",paddingRight:"12px",paddingBottom:"12px",cursor:"pointer"},onClick:this.onChange(-1,"不限")},"不限"))),t,React.createElement("div",{style:{clear:"both"}}))}}),Conditions=React.createClass({displayName:"Conditions",getDefaultProps:function(){return{conditions:{}}},onConditionsChange:function(t,e){return function(){this.props.cxt.onConditionsChanged(t,e),this.props.cxt.clearQueryCondition(t)}.bind(this)},render:function(){var t=[];for(var e in this.props.conditions)"不限"!=this.props.conditions[e]&&t.push({key:e,value:this.props.conditions[e]});var i=t.map(function(t,e){var i={display:"inline-block",padding:"2px",paddingLeft:"8px",paddingRight:"8px",border:"1px solid rgb(233,113,125)",color:"rgb(233,113,125)",cursor:"pointer"};return e>0&&(i={display:"inline-block",padding:"2px",paddingLeft:"8px",paddingRight:"8px",border:"1px solid rgb(233,113,125)",color:"rgb(233,113,125)",cursor:"pointer",marginLeft:"5px"}),React.createElement("span",{key:t+" "+e,style:i,onClick:this.onConditionsChange(t.key,t.value)},t.value,"     X")}.bind(this));return React.createElement("div",{style:{marginTop:"10px"}},React.createElement("div",{style:{width:"5%",float:"left"}},React.createElement("span",{style:{display:"inline-block",padding:"4px",paddingLeft:"0px",color:"#a4a4a4"}},"条件")),React.createElement("div",{style:{width:"95%",float:"left"}},i),React.createElement("div",{style:{clear:"both"}}))}}),ProjectList=React.createClass({displayName:"ProjectList",styles:{list:{width:"100%",border:"1px solid #f3f3f3",marginTop:"12px"},header:{height:"40px",backgroundColor:"rgb(249, 250, 251)",borderBottom:"1px solid #f3f3f3"},body:{width:"100%",padding:"12px"},item:{height:"118px",position:"relative",cursor:"pointer"},itemImg:{width:"181px",textAlign:"center",height:"100%",lineHeight:"118px",position:"absolute",left:"0px",top:"0px"},itemContent:{left:"181px",top:"0px",right:"0px",bottom:"0px",position:"absolute",paddingLeft:"12px"}},getInitialState:function(){return{currentIndex:2}},onTabChange:function(t){return function(){this.setState({currentIndex:t}),this.props.cxt.setQueryCondition("排序方式","sortId",t+1)}.bind(this)},goToDetail:function(t){window.location.href="goods-detail.html?goodsId="+t},render:function(){for(var t=["销量","价格","最新上架"],e=t.map(function(t,e){var i={borderRight:"1px solid #e3e3e3",display:"inline-block",height:"100%",lineHeight:"40px",paddingLeft:"12px",cursor:"pointer",paddingRight:"12px"};return this.state.currentIndex==e&&(i={borderRight:"1px solid #e3e3e3",display:"inline-block",height:"100%",lineHeight:"40px",paddingLeft:"12px",cursor:"pointer",backgroundColor:"white",paddingRight:"12px"}),React.createElement("span",{key:t+" "+e,style:i,onClick:this.onTabChange(e)},t)}.bind(this)),t=[],i=0;i<this.props.items.length;i++)t.push(this.props.items[i]),i!=this.props.items.length-1&&t.push({});var a=t.map(function(t,e){return e%2==1?React.createElement("div",{style:{backgroundColor:"#f3f3f3",height:"1px",marginTop:"12px",marginBottom:"12px"},key:e}):React.createElement("div",{style:this.styles.item,key:e},React.createElement("div",{style:this.styles.itemImg},React.createElement("a",{href:"goods-detail.html?goodsId="+t.goodsHerf,target:"_Blank"},React.createElement("img",{src:t.goodsHerPic,style:{maxWidth:"100%",maxHeight:"100%"}}))),React.createElement("div",{style:this.styles.itemContent},React.createElement("div",null,React.createElement("a",{href:"goods-detail.html?goodsId="+t.goodsHerf,target:"_Blank"},React.createElement("span",{style:{fontSize:"18px",color:"#333"}},t.hotItemName))),React.createElement("div",{style:{marginTop:"12px"}},React.createElement("a",{href:"goods-detail.html?goodsId="+t.goodsHerf,target:"_Blank"},React.createElement("span",{style:{color:"#a3a3a3"}},t.hospitalName))),React.createElement("div",{style:{position:"absolute",bottom:"0px"}},React.createElement("a",{href:"goods-detail.html?goodsId="+t.goodsHerf,target:"_Blank"},React.createElement("span",{style:{color:"rgb(233,113,125)",fontSize:"25px"}},t.presentPrice),React.createElement("span",{style:{color:"#a3a3a3"}},"    医院价格: "),React.createElement("span",{style:{color:"#a3a3a3",textDecoration:"line-through"}},t.marketPrice)))))}.bind(this));return React.createElement("div",{style:this.styles.list},React.createElement("div",{style:this.styles.header},e),React.createElement("div",{style:this.styles.body},a))}}),R_ProjectListPage=React.createClass({displayName:"R_ProjectListPage",styles:{container:{position:"relative",width:"1200px",margin:"0 auto"},row:{width:"100%"},filter:{width:"100%",border:"1px solid #f3f3f3",padding:"12px",marginTop:"12px"}},getInitialState:function(){return{conditions:{},list:{},areas:[]}},clearQueryCondition:function(t){"search"==t&&(console.log("重跳页面吧"),window.location.href=window.location.pathname),this.queryCondition[t]||(this.queryCondition[t]={}),this.queryCondition[t]={},this.queryGoodsList()},merge:function(t,e){var i={};for(var a in t)i[a]=t[a];for(var a in e)i[a]=e[a];return i},onFilterChange:function(t,e){var i={};i[t]=e,this.setState({conditions:this.merge(this.state.conditions,i)}),setTimeout(function(){console.log(this.state.conditions)}.bind(this),0)},removeConditionListers:[],addRemoveConditionListener:function(t){this.removeConditionListers.push(t)},onConditionsChanged:function(t,e){this.onFilterChange(t,"不限"),this.removeConditionListers.forEach(function(i){i(t,e)})},queryGoodsList:function(){var t=this,e={};for(var i in this.queryCondition)e[this.queryCondition[i].name]=this.queryCondition[i].value;$.ajax({type:"post",url:"/pc/computer/query_searchGoodsList_condition_pc",data:e,dataType:"json",success:function(e){0==e.result&&t.setState({list:e.data.goodsItemList,areas:e.data.provinceVOList,kinds:e.data.categoryList,index:e.data.paginator.totalPage}),console.log(e)}})},setQueryCondition:function(t,e,i){this.queryCondition[t]||(this.queryCondition[t]={}),this.queryCondition[t].name=e,this.queryCondition[t].value=i,this.queryGoodsList()},componentWillMount:function(){if(this.queryCondition={index:{name:"index",value:1}},null!=this.getUrlParam("categoryId")&&null!=this.getUrlParam("categoryName")&&(this.onFilterChange("categoryName",this.getUrlParam("categoryName")),this.setQueryCondition("categoryName","categoryId",this.getUrlParam("categoryId"))),null!=this.getUrlParam("search")){var t=this.getUrlParam("search");console.log(t),this.onFilterChange("search","搜索条件："+t),this.setQueryCondition("search","searchInfo",t)}this.queryGoodsList()},getUrlParam:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return null!=i?unescape(decodeURI(i[2])):null},changeIndex:function(t){this.setQueryCondition("index","index",t),window.location.href="#top"},render:function(){var t=this.state.list;return React.createElement("div",{style:this.styles.container},React.createElement("div",{style:this.styles.filter},React.createElement(DoubleFilter,{kindName:"地区",typeName:"proname",subTypeName:"cityList",subItemName:"cityname",cxt:this,items:this.state.areas?this.state.areas:[],subItemId:"cityid",callbackId:"cityId"}),React.createElement(DoubleFilter,{kindName:"类别",typeName:"categoryName",subTypeName:"categoryList",subItemName:"categoryName",cxt:this,items:this.state.kinds?this.state.kinds:[],subItemId:"categoryId",callbackId:"categoryId"}),React.createElement(Filter,{cxt:this,label:"价格",queryName:"priceRange",items:["不限","100-1000元","1000-3000元","3000-5000元","5000-10000元","1-2万","2万以上"]}),React.createElement("div",{style:{height:"1px",width:"100%",backgroundColor:"#f3f3f3"}}),React.createElement(Conditions,{cxt:this,conditions:this.state.conditions})),React.createElement(ProjectList,{cxt:this,items:t}),React.createElement("div",{style:{marginTop:"12px",marginBottom:"12px"}},React.createElement(Pagination,{cxt:this,numberOfPages:this.state.index})))}});