"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var c=t[a];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}return function(t,a,c){return a&&e(t.prototype,a),c&&e(t,c),t}}(),RMy_credit=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));return e.state={data:{},rate:""},e}return _inherits(t,e),_createClass(t,[{key:"user_info",value:function(){var e=this;$.ajax({type:"post",url:"/pc/computer/user_info",data:"",dataType:"json",success:function(t){1013==t.result&&(window.location.href="login.html"),console.log(t),e.setState({data:t.data,rate:t.data.remainMoney/t.data.realloanMoney})}})}},{key:"componentDidMount",value:function(){this.user_info()}},{key:"render",value:function(){console.log(this.state.rate);var e=100*this.state.rate+"%";console.log(e);var t=1,a=2,c=t/a*100+"%";return console.log(c),React.createElement("div",{style:{float:"left"}},React.createElement("div",{className:"wrap-content"},React.createElement("div",{className:"wrap-content-right"},React.createElement("div",null,React.createElement("div",{className:"top"},React.createElement("ul",{className:"_a"},React.createElement("li",null,"可用额度(元)"),React.createElement("li",{style:{textAlign:"right"}},"总信用额度(元)")),React.createElement("ul",{className:"_money"},React.createElement("li",null,"￥",this.state.data.remainMoney),React.createElement("li",null,"￥",this.state.data.realloanMoney)),React.createElement("ul",null,React.createElement("div",{className:"progress",style:{backgroundColor:"#ff8c9d",width:"90%"}},React.createElement("div",{className:"progress-bar progress-bar-success",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:e,backgroundColor:"#fd657a"}},React.createElement("span",{className:"sr-only"},e," 完成（成功）"))))),React.createElement("div",{className:"pseudo"},React.createElement("ul",null,React.createElement("li",null,React.createElement("div",{className:"left"},React.createElement("div",null,React.createElement("img",{src:"../static/images/credit/credit_p.png",alt:""}))),React.createElement("div",{className:"right"},React.createElement("div",null,React.createElement("img",{src:"../static/images/credit/credit_t.png",alt:""})),React.createElement("div",{className:"two-dimension"},React.createElement("div",{style:{paddingTop:0}},React.createElement("img",{src:"../static/images/credit/gong.jpg",alt:""})),React.createElement("div",null,React.createElement("img",{src:"../static/images/credit/app.jpg",alt:""}))),React.createElement("div",{className:"two_btn"},React.createElement("img",{src:"../static/images/credit/credit_g.png",alt:""}),React.createElement("img",{src:"../static/images/credit/app.png",alt:""})))),React.createElement("li",{style:{marginTop:"50px",marginLeft:"40px"}},React.createElement("img",{src:"../static/images/credit/credit_step.png",alt:""}))))))))}}]),t}(React.Component);