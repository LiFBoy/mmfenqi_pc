'usr strict';

import React, {Component, PropTypes} from 'react';

import ReactDOM, {render} from 'react-dom';

import Popup  from './common/popup'

import  '../jmessage-sdk-web-1.2.0/js/jmessage-sdk-web.min'


import {Router, Route, IndexRoute, hashHistory, browserHistory, Link} from 'react-router';


import {HttpService, Toast, Md5}  from'../Http';
import {R_header_fixed} from './common/index';

import tianjia from '../../src/img/guardian/tianjia.png'

import guanliyuan from '../../src/img/guardian/guanliyuan.png'
import moren from '../../src/img/guardian/moren.png'
import wo from '../../src/img/guardian/wo.png'


export default class Guardian extends Component {

    constructor(props) {
        super(props);
        this.state = {
            familyList: [],
            school: [],
            member: [],
            allList: [],
            hasJ: false,

            hasDelete: false,

            guardianid: '',

            classleft1: {
                width: '100%',
            },
            classright1: {
                width: '0',
            },
            syncGuardian:{

            },
        };

        this.startx = '';
        this.starty = '';
        this.contentwidth = '';

        this.config = {
            isSure: false,
            isCancel: false,
            yes_cb: ()=> {

                this.syncGuardian();

                this.context.router.goBack()

            },
            no_cb:()=>{
                this.context.router.goBack()
            }
        };



    }

    componentWillMount() {

        this.getGuardianList();









            // JIM.register('15925647870', '000000', {
            //     "appkey": "beccc651f7d0cdb713228d17",
            //     "random_str": "022cd9fd995849b58b3ef0e943421ed9",
            //     "signature": signature,
            //     "timestamp": "1470042476"
            // }, function (data) {
            //     console.log(data)
            // });


        //




    }


     randomWord(randomFlag, min, max){
        var str = "",
            range = min,
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        // 随机产生
        if(randomFlag){
            range = Math.round(Math.random() * (max-min)) + min;
        }
        for(var i=0; i<range; i++){
           var pos = Math.round(Math.random() * (arr.length-1));
            str += arr[pos];
        }
        return str;
    }


    syncGuardian() {
        HttpService.query({
            url: '/app/object/syncGuardian',
            data: {
                token: localStorage.appToken,
                babyid: this.props.params.babyid
            },
            success: (res=> {
                console.log(res);

                if(res.code=='10098'){


                    var strtime = '2016-07-22 16:59:00';
                    var timestamp2 = Date.parse(new Date(strtime));

                    console.log(timestamp2)

                    var mat=this.randomWord(false,36);







                    const a="90a9ec96518bead293bb46d7";
                    const b="34c6b8e8b2768e75d040ea71";

                    const c=timestamp2;

                    const d=mat;


                     // const  signature =JIM.md5(appkey=a & timestamp=c & random_str=d & key=b);
                    //
                     const signature = Md5.MD5('appkey='+a+'&timestamp='+c+'&random_str='+d+'&key='+b);




                    console.log('code:'+encodeURI(signature));




                    JIM.init({debug:true});


                    // JIM.register('13868113229', '12345678', {
                    //     "appkey": a,
                    //     "random_str": d,
                    //     "signature": signature,
                    //     "timestamp": c
                    // }, function(data) {
                    //     // 注册结果返回处理
                    //     console.log(data)
                    // }, function(ack) {
                    //     // 请求送达JMessage服务器事件处理
                    // }, function(timeout) {
                    //     // 请求发送超时事件处理
                    // });


                    JIM.login('13868113229', '12345678', {
                        "appkey": a,
                        "random_str": d,
                        "signature": signature,
                        "timestamp": c
                    },function(data){

                        console.log(data)





                        JIM.getUserInfo('13868113229', function(data) {
                            // 返回处理
                        }, function(ack) {
                            // 请求送达JMessage服务器事件处理
                        }, function(timeout) {
                            // 请求发送超时事件处理
                        });



                        JIM.getConversations(function(data) {

                            console.log(data)
                            // 返回处理
                        }, function(ack) {
                            // 请求送达JMessage服务器事件处理

                            console.log(ack)
                        }, function(timeout) {
                            // 请求发送超时事件处理

                            consoel.log(timeout)
                        });

                    },function (ack) {

                        console.log(ack)

                    },function (timeout) {

                        console.log(timeout)

                    });








                    this.setState({
                        syncGuardian:{
                            flag:true,
                            _flag:true,
                        }
                    });
                    Toast.toast(res.msg,3000)
                }

                //JIM.getConversations(this.ack, this.timeout);
            })
        })
    }


    getGuardianList() {

        var self = this;


        HttpService.query({
            url: "/app/object/getGuardians",
            data: {
                token: localStorage.appToken,
                babyid: this.props.params.babyid
            },
            success: (res)=> {
                console.log(res);

                if (res.code == 10068) {

                    var familyList = [], school = [], member = [], allList = [];


                    allList = res.data;

                    var temp3 = {
                        familystatus: '家庭',
                        guardianid: '',
                        telephone: ''

                    };

                    var temp2 = {
                        familystatus: '妈妈',
                        guardianid: '',
                        telephone: ''

                    };


                    var temp = {
                        familystatus: '爸爸',
                        guardianid: '',
                        telephone: ''

                    };

                    var temp4 = {
                        familystatus: '班主任',
                        guardianid: '',
                        telephone: ''

                    };


                    if (!allList.some(d=>d.familystatus === temp.familystatus)) {
                        allList.push(temp)
                    }
                    if (!allList.some(s=>s.familystatus === temp2.familystatus)) {
                        allList.push(temp2)
                    }
                    if (!allList.some(a=>a.familystatus === temp3.familystatus)) {
                        allList.push(temp3)
                    }
                    if (!allList.some(b=>b.familystatus === temp4.familystatus)) {
                        allList.push(temp4)
                    }


                    allList.forEach((item, index)=> {


                        if (item.familystatus == '爸爸' || item.familystatus == '妈妈' || item.familystatus == '家庭') {


                            if (localStorage.userid == item.guardianid) {

                                item.Me = true;


                                if (item.guardianid == item.userid) {
                                    item.isadmin = true;
                                    familyList.push({item})
                                } else {
                                    item.isadmin = false;
                                    familyList.push({item})
                                }

                            } else {
                                item.Me = false;
                                if (item.guardianid == item.userid) {
                                    item.isadmin = true;
                                    familyList.push({item})
                                } else {
                                    item.isadmin = false;
                                    familyList.push({item})
                                }
                            }


                            if (familyList.length == 3) {


                                console.log(familyList);


                                if (familyList[1].item.familystatus == '爸爸' && familyList[0].item.familystatus == '家庭') {
                                    var temp = [];

                                    var temp2 = [];

                                    temp = familyList[1];

                                    temp2 = familyList[0];

                                    familyList[1] = familyList[2];


                                    familyList[0] = temp;


                                    familyList[2] = temp2;


                                    this.setState({
                                        familyList: familyList
                                    });


                                } else if (familyList[1].item.familystatus == '家庭' && familyList[0].item.familystatus == '妈妈') {
                                    var temp = [];

                                    var temp2 = [];


                                    temp = familyList[0];

                                    temp2 = familyList[2];

                                    familyList[0] = temp2;

                                    familyList[2] = familyList[1];

                                    familyList[1] = temp;


                                    this.setState({
                                        familyList: familyList
                                    });


                                }
                                else if (familyList[0].item.familystatus != '爸爸' && familyList[2].item.familystatus == '家庭') {

                                    console.log('来了');
                                    var temp = [];
                                    temp = familyList[0];

                                    familyList[0] = familyList[1];
                                    familyList[1] = temp;


                                    this.setState({
                                        familyList: familyList
                                    });


                                } else if (familyList[0].item.familystatus != '爸爸' && familyList[1].item.familystatus == '妈妈') {

                                    var temp = [];
                                    temp = familyList[0];

                                    familyList[0] = familyList[2];
                                    familyList[2] = temp;


                                    this.setState({
                                        familyList: familyList
                                    });


                                } else if (familyList[1].item.familystatus != '家庭' && familyList[0].item.familystatus == '爸爸') {
                                    this.setState({
                                        familyList: familyList
                                    });

                                } else {

                                    var temp = [];

                                    temp = familyList[1];
                                    familyList[1] = familyList[2];
                                    familyList[2] = temp;


                                    this.setState({
                                        familyList: familyList
                                    });
                                }

                            }


                            if (item.Me == true && item.isadmin == true) {
                                this.setState({
                                    hasJ: true,
                                    guardianid: item.guardianid
                                })
                            }


                            // console.log(localStorage.familyList)
                        } else if (item.familystatus == '班主任') {


                            if (localStorage.userid == item.guardianid) {

                                item.Me = true;

                                if (item.guardianid == item.userid) {
                                    item.isadmin = true;
                                    school.push({item})
                                } else {
                                    item.isadmin = false;
                                    school.push({item})
                                }


                            } else {
                                item.Me = false;

                                if (item.guardianid == item.userid) {
                                    item.isadmin = true;
                                    school.push({item})
                                } else {
                                    item.isadmin = false;
                                    school.push({item})
                                }

                            }


                            this.setState({
                                school: school
                            });

                            if (item.Me == true && item.isadmin == true) {
                                this.setState({
                                    hasJ: true,
                                    guardianid: item.guardianid
                                })
                            }


                        } else {


                            if (localStorage.userid == item.guardianid) {

                                item.Me = true;

                                if (item.guardianid == item.userid) {
                                    item.isadmin = true;
                                    member.push({item})
                                } else {
                                    item.isadmin = false;
                                    member.push({item})
                                }


                            } else {
                                item.Me = false;

                                if (item.guardianid == item.userid) {
                                    item.isadmin = true;
                                    member.push({item})
                                } else {
                                    item.isadmin = false;
                                    member.push({item})
                                }

                            }


                            this.setState({
                                member: member
                            });


                            if (item.Me == true && item.isadmin == true) {
                                this.setState({
                                    hasJ: true,
                                    guardianid: item.guardianid

                                })
                            }

                        }
                    });

                }
            }
        })
    }


    TouchStart(index, param1, param2, step, tel, admin, wo, e) {


        if (!this.state.hasJ || tel == '' || (!!admin && !!wo)) {

            return;
        }

        var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)

        this.startx = parseInt(touchobj.clientX); // get x position of touch point relative to left edge of browser

        this.starty = parseInt(touchobj.clientY);
        this.contentwidth = document.getElementById(step).offsetWidth - 1;

    }

    TouchMoves(index, param1, param2, step, tel, admin, wo, e) {


        if (!this.state.hasJ || tel == '' || (!!admin && !!wo)) {

            return;
        }

        const contentwidth = this.contentwidth;


        var self = this;

        var touchobj = e.changedTouches[0]; // reference first touch point for this event

        const itemstyle = document.getElementById(param1 + index).style;
        const deletestyle = document.getElementById(param2 + index).style;

        var dist = parseInt(touchobj.clientX) - this.startx;


        var numRange = 5;
        if (this.starty - touchobj.clientY > numRange || this.starty - touchobj.clientY == numRange) {
            console.log('上')

        } else if (this.starty - touchobj.clientY < -numRange) {
            console.log('下')

        } else {

            e.preventDefault();
        }


    }

    TouchEnd(index, param1, param2, step, tel, admin, wo, e) {


        if (!this.state.hasJ || tel == '' || (!!admin && !!wo)) {

            return;
        }


        const contentwidth = this.contentwidth;


        var self = this;

        var touchobj = e.changedTouches[0]; // reference first touch point for this event

        const itemstyle = document.getElementById(param1 + index).style;
        const deletestyle = document.getElementById(param2 + index).style;

        var numRange = 5;
        if (this.starty - touchobj.clientY > numRange || this.starty - touchobj.clientY == numRange) {
            console.log('上')

        } else if (this.starty - touchobj.clientY < -numRange) {
            console.log('下')

        } else {


            if (this.startx == touchobj.clientX) {

                self.setState({
                    classleft1: {
                        width: contentwidth,
                        transition: 'all 0.1s  ease-out',

                    },
                    classright1: {
                        width: '0',
                        transition: 'all 0.1s ease-out',


                    }
                });


                self.setState({
                    hasDelete: false
                });


                itemstyle.width = contentwidth + 'px';

                itemstyle.transition = self.state.classleft1.transition;


                deletestyle.width = 0 + 'px';
                deletestyle.transition = self.state.classright1.transition;


            } else if (this.startx - touchobj.clientX > 1) {


                if (!!self.state.hasDelete) {
                    return
                }


                self.setState({
                    classleft1: {
                        width: contentwidth - parseInt(contentwidth / 4),
                        transition: 'all 0.1s ease-in',

                    },
                    classright1: {
                        width: parseInt(contentwidth / 4),
                        transition: 'all 0.1s ease-in',

                    }
                });

                self.setState({
                    hasDelete: true
                });

                itemstyle.width = contentwidth - parseInt(contentwidth / 4) + 'px';


                itemstyle.transition = self.state.classleft1.transition;


                deletestyle.width = parseInt(contentwidth / 4) + 'px';
                deletestyle.transition = self.state.classright1.transition;

            }
        }


    }

    delete(index, id, item) {
        HttpService.query({
            url: '/app/object/cancelBaby2',
            data: {
                token: localStorage.appToken,
                babyid: this.props.params.babyid,
                guardianid: id
            },
            success: (res=> {
                if (res.code == '10112') {

                    console.log(res);

                    this.setState({
                        hasDelete: false,
                    });


                    if (item == 'delete') {
                        var node = document.getElementById(item + index);


                        node.parentNode.remove();
                    } else if (item == '_delete'||item=='__delete') {

                        console.log(item)
                        var node = document.getElementById(item + index);

                        var previousSibling = node.previousSibling;


                        node.style.width = '0';

                        previousSibling.style.width = '100%'
                    }
                    this.getGuardianList()
                } else {
                    Toast.toast(res.msg, 3000)
                }
            })
        })
    }

    goto(hasJ, tel, familystatus) {


        if (hasJ && tel == '') {
            window.location.href = '/#/AddGuardian/' + this.props.params.babyid + '/' + this.state.guardianid + '/' + familystatus;
        } else {

        }
    }


    onChildChanged(newState){
        this.setState({
            syncGuardian: {
                flag:newState
            }
        });
    }

    render() {

        const {familyList, school, member, guardianid,syncGuardian} =this.state;
        return (
            <div className="guardian" style={{background: '#eee', minHeight: '100%', paddingTop: '4rem'}}>


                <Popup config={this.config} blockOrNone={syncGuardian.flag} _flag={syncGuardian._flag}/>
                <R_header_fixed title="监护成员" left="1" syncGuardian={syncGuardian.flag}   callbackParent={this.onChildChanged.bind(this)}/>
                <div className="container" style={{padding: 0}}>
                    <div className="row" style={{margin: '0'}}>
                        <div className="col-xs-12 text-left title">家庭成员</div>
                    </div>
                    {
                        !!familyList ?
                            familyList.map((json, index)=> {
                                return (
                                    <div key={index} style={{height: '4rem', overflow: 'hidden'}} id="one">


                                        <div className="row app-white-inline class1" id={'__item' + index}


                                             onTouchStart={this.TouchStart.bind(this, index, '__item', '__delete', 'one', json.item.telephone, json.item.isadmin, json.item.Me)}

                                             onTouchMove={this.TouchMoves.bind(this, index, '__item', '__delete', 'one', json.item.telephone, json.item.isadmin, json.item.Me)}

                                             onTouchEnd={this.TouchEnd.bind(this, index, '__item', '__delete', 'one', json.item.telephone, json.item.isadmin, json.item.Me)}


                                             onClick={this.goto.bind(this, this.state.hasJ, json.item.telephone, json.item.familystatus)}

                                        >
                                            <div className="col-xs-6 text-left setp1">
                                                {
                                                    !!json.item.headimg ?
                                                        <img src={"/media" + json.item.headimg} style={{
                                                            width: '2.5rem',
                                                            height: '2.5rem',
                                                            borderRadius: '50%'
                                                        }}/> :
                                                        <img src={moren} style={{
                                                            width: '2.5rem',
                                                            height: '2.5rem',
                                                            borderRadius: '50%'
                                                        }}/>
                                                }
                                                &nbsp;{json.item.familystatus}&nbsp;
                                                {
                                                    json.item.isadmin == true ?
                                                        <img src={guanliyuan}
                                                             style={{width: '1.2rem', height: '1.5rem'}}/> :
                                                        ''

                                                }
                                                &nbsp;

                                                {
                                                    json.item.Me == true ?
                                                        <img src={wo} style={{width: '1.2rem', height: '1.2rem'}}/> :
                                                        ''
                                                }&nbsp;
                                            </div>
                                            {
                                                <div className="col-xs-6 text-right setp2">
                                                    {
                                                        !!json.item.telephone ?
                                                            <span>{json.item.telephone}</span> :
                                                            '空'

                                                    }
                                                    &nbsp;

                                                    {
                                                        !!this.state.hasJ && json.item.telephone == '' ?
                                                            '>' :
                                                            ''

                                                    }

                                                </div>
                                            }
                                        </div>

                                        <div id={'__delete' + index} className="row class2">
                                            <div className=" text-center"
                                                 onClick={this.delete.bind(this, index, json.item.guardianid, '__delete')}>
                                                解除绑定

                                            </div>
                                        </div>

                                    </div>



                                )
                            }) : ''
                    }


                </div>


                <div className="container" style={{padding: 0}}>
                    <div className="row" style={{margin: '0'}}>
                        <div className="col-xs-12 text-left title">学校监管</div>
                    </div>
                    {
                        !!school ?
                            school.map((json, index)=> {
                                return (
                                    <div key={index} style={{height: '4rem', overflow: 'hidden'}} id="two">


                                        <div className="row app-white-inline class1" id={'_item' + index}


                                             onTouchStart={this.TouchStart.bind(this, index, '_item', '_delete', 'two', json.item.telephone, json.item.isadmin, json.item.Me)}

                                             onTouchMove={this.TouchMoves.bind(this, index, '_item', '_delete', 'two', json.item.telephone, json.item.isadmin, json.item.Me)}

                                             onTouchEnd={this.TouchEnd.bind(this, index, '_item', '_delete', 'two', json.item.telephone, json.item.isadmin, json.item.Me)}

                                             onClick={this.goto.bind(this, this.state.hasJ, json.item.telephone, json.item.familystatus, json.item.isadmin, json.item.Me)}

                                        >

                                            <div className="col-xs-6 text-left setp1">

                                                {
                                                    !!json.item.headimg ?
                                                        <img src={"/media" + json.item.headimg} style={{
                                                            width: '2.5rem',
                                                            height: '2.5rem',
                                                            borderRadius: '50%'
                                                        }}/> :
                                                        <img src={moren} style={{
                                                            width: '2.5rem',
                                                            height: '2.5rem',
                                                            borderRadius: '50%'
                                                        }}/>
                                                }
                                                &nbsp;{json.item.familystatus}&nbsp;
                                                {
                                                    json.item.isadmin == true ?
                                                        <img src={guanliyuan}
                                                             style={{width: '1.2rem', height: '1.5rem'}}/> :
                                                        ''
                                                }

                                                &nbsp;
                                                {
                                                    json.item.Me == true ?
                                                        <img src={wo} style={{width: '1.2rem', height: '1.2rem'}}/> :
                                                        ''
                                                }
                                            </div>
                                            <div className="col-xs-6 text-right setp2">
                                                {
                                                    !!json.item.telephone ?
                                                        <span>{json.item.telephone}</span> :

                                                        '空'

                                                }


                                                &nbsp;

                                                {
                                                    !!this.state.hasJ && json.item.telephone == '' ?
                                                        '>' :
                                                        ''
                                                }
                                            </div>
                                        </div>

                                        <div id={'_delete' + index} className="row class2">
                                            <div className=" text-center"
                                                 onClick={this.delete.bind(this, index, json.item.guardianid, '_delete')}>
                                                解除绑定

                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ''
                    }
                </div>

                <div className="container" style={{padding: 0}}>
                    <div className="row" style={{margin: '0'}}>
                        <div className="col-xs-12 text-left title">家庭成员</div>
                    </div>
                    {
                        !!member ?
                            member.map((json, index)=> {
                                return (
                                    <div key={index} style={{height: '4rem', overflow: 'hidden'}} id="three">
                                        <div className="row app-white-inline class1" id={'item' + index}


                                             onTouchStart={this.TouchStart.bind(this, index, 'item', 'delete', 'three', json.item.telephone, json.item.isadmin, json.item.Me)}

                                             onTouchMove={this.TouchMoves.bind(this, index, 'item', 'delete', 'three', json.item.telephone, json.item.isadmin, json.item.Me)}

                                             onTouchEnd={this.TouchEnd.bind(this, index, 'item', 'delete', 'three', json.item.telephone, json.item.isadmin, json.item.Me)}

                                        >
                                            <div className="col-xs-6 text-left setp1">
                                                {
                                                    !!json.item.headimg ?
                                                        <img src={"/media" + json.item.headimg} style={{
                                                            width: '2.5rem',
                                                            height: '2.5rem',
                                                            borderRadius: '50%'
                                                        }}/> :
                                                        <img src={moren} style={{
                                                            width: '2.5rem',
                                                            height: '2.5rem',
                                                            borderRadius: '50%'
                                                        }}/>
                                                }

                                                &nbsp;{json.item.familystatus}&nbsp;
                                                {
                                                    json.item.isadmin == true ?
                                                        <img src={guanliyuan}
                                                             style={{width: '1.2rem', height: '1.5rem'}}/> :
                                                        ''
                                                }
                                                &nbsp;
                                                {
                                                    json.item.Me == true ?
                                                        <img src={wo} style={{width: '1.2rem', height: '1.2rem'}}/> :
                                                        ''
                                                }
                                            </div>
                                            <div className="col-xs-6 text-right setp2">

                                                {
                                                    !!json.item.telephone ?
                                                        <span>{json.item.telephone}</span> :

                                                        '空'

                                                }


                                                &nbsp;


                                                {
                                                    !!this.state.hasJ && json.item.telephone == '' ?
                                                        '>' :
                                                        ''
                                                }
                                            </div>
                                        </div>

                                        <div id={'delete' + index} className="row class2">
                                            <div className=" text-center"
                                                 onClick={this.delete.bind(this, index, json.item.guardianid, 'delete')}>
                                                解除绑定

                                            </div>
                                        </div>

                                    </div>



                                )
                            }) : ''
                    }

                    {
                        !!this.state.hasJ ?
                            <Link to={'/AddGuardian/' + this.props.params.babyid + '/' + guardianid + '/' + 'null'}>
                                <div className="row app-white-inline" style={{margin: '0'}}>
                                    <div className="col-xs-10 text-left setp1"><img src={tianjia} style={{
                                        width: '2.2rem',
                                        height: '2.2rem'
                                    }}/>&nbsp;<span >添加监护成员 <span style={{color: '#999'}}>(最多6人)</span></span></div>
                                </div>
                            </Link> :
                            ''
                    }

                </div>

                <div onClick={this.syncGuardian.bind(this)}
                     style={{position: 'fixed', bottom: '1rem', width: '100%', padding: '0 1rem'}}>
                    <div className="app-pink-radius-button text-center">向设备同步监护成员信息</div>
                </div>

            </div>
        )
    }
}


Guardian.contextTypes = {
    router: React.PropTypes.object.isRequired
};