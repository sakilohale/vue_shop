(function(e){function t(t){for(var a,i,o=t[0],l=t[1],u=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var l=r[o];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},s={app:0},n=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"245a":function(e,t,r){"use strict";r("abd1")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],i={name:"app",components:{}},o=i,l=r("2877"),u=Object(l["a"])(o,s,n,!1,null,null,null),c=u.exports,d=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login_container"},[r("div",{staticClass:"login_box"},[e._m(0),r("el-form",{ref:"loginFormRef",staticClass:"login_form",attrs:{model:e.loginform,rules:e.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user-solid"},model:{value:e.loginform.username,callback:function(t){e.$set(e.loginform,"username",t)},expression:"loginform.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-scissors",type:"password"},model:{value:e.loginform.password,callback:function(t){e.$set(e.loginform,"password",t)},expression:"loginform.password"}})],1),r("el-form-item",{staticClass:"btns"},[r("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),r("el-button",{attrs:{type:"info"},on:{click:e.resetloginForm}},[e._v("重置")])],1)],1)],1)])},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"avatat_box"},[a("img",{attrs:{src:r("cf05")}})])}],f=(r("96cf"),r("1da1")),g={name:"login",data:function(){return{loginform:{username:"admin",password:"123456"},rules:{username:[{required:!0,message:"请填写用户名",trigger:"blur"},{min:3,max:10,message:"请输入正确格式的用户名",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{min:3,max:10,message:"请输入正确格式的密码",trigger:"blur"}]}}},methods:{resetloginForm:function(){this.$refs.loginFormRef.resetFields(),this.loginform={username:"",password:""}},login:function(){var e=this;this.$refs.loginFormRef.validate(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(r){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.$http.post("login",e.loginform);case 6:if(a=t.sent,s=a.data,console.log(s),200===s.meta.status){t.next=13;break}return t.abrupt("return",e.$message.error("登录失败"));case 13:e.$message.success("登录成功"),window.sessionStorage.setItem("token",s.data.token),e.$router.push("/home");case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},b=g,h=(r("245a"),Object(l["a"])(b,m,p,!1,null,"ab456b76",null)),v=h.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-container"},[a("el-container",{staticClass:"home-container"},[a("el-header",[a("div",[a("img",{attrs:{src:r("cf05")}}),a("span",[e._v("后台管理系统")])]),a("el-button",{attrs:{type:"info"},on:{click:e.logout}},[e._v("退出")])],1),a("el-container",[a("el-aside",{attrs:{width:e.isCollpase?"64px":"200px"}},[a("div",{staticClass:"toggleButton",on:{click:e.toggleCollpase}},[e._v("||| ")]),a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.activepath,"background-color":"#333744","text-color":"#fff","active-text-color":"#409EFF","unique-opened":!0,collapse:e.isCollpase,"collapse-transition":!1,router:!0}},e._l(e.menuList,(function(t){return a("el-submenu",{key:t.id,attrs:{index:t.id+""}},[a("template",{slot:"title"},[a("i",{class:e.iconobj[t.id],staticStyle:{"padding-right":"10px"}}),a("span",[e._v(e._s(t.authName))])]),e._l(t.children,(function(t){return a("el-menu-item",{key:t.id,attrs:{index:t.path},on:{click:function(r){return e.saveNavState(t.path)}}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-menu"}),a("span",[e._v(e._s(t.authName))])])],2)}))],2)})),1)],1),a("el-main",[a("router-view")],1)],1)],1)],1)},x=[],R={name:"home",data:function(){return{menuList:[],iconobj:{125:"el-icon-s-custom",103:"el-icon-key",101:"el-icon-shopping-cart-1",102:"el-icon-notebook-2",145:"el-icon-s-opportunity"},isCollpase:!1,activepath:""}},created:function(){this.getmenulist(),this.activepath=window.sessionStorage.getItem("activepath")},methods:{logout:function(){window.sessionStorage.clear(),this.$router.push("/login")},getmenulist:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("menus");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("菜单获取错误"));case 6:e.menuList=a.data,console.log(e.menuList);case 8:case"end":return t.stop()}}),t)})))()},toggleCollpase:function(){this.isCollpase=!this.isCollpase},saveNavState:function(e){window.sessionStorage.setItem("activepath",e),this.activepath=e}}},k=R,y=(r("a9a9"),Object(l["a"])(k,w,x,!1,null,"694829a4",null)),$=y.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e._v("welcome")])},D=[],F={name:"welcome"},C=F,j=Object(l["a"])(C,_,D,!1,null,"67bf9b4c",null),L=j.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:40}},[r("el-col",{attrs:{span:10}},[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getUsersList},model:{value:e.queryinfo.query,callback:function(t){e.$set(e.queryinfo,"query",t)},expression:"queryinfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUsersList},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加用户")])],1)],1),r("el-table",{attrs:{data:e.userlist,border:"",stripe:""}},[r("el-table-column",{attrs:{label:"#",type:"index"}}),r("el-table-column",{attrs:{label:"姓名",prop:"username"}}),r("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),r("el-table-column",{attrs:{label:"电话",prop:"mobile"}}),r("el-table-column",{attrs:{label:"角色",prop:"role_name"}}),r("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(r){return e.ueserStateChange(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改用户信息",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:"",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row.id)}}})],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除该用户",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:function(r){return e.removeUserById(t.row.id)}}})],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"info",icon:"el-icon-star-off",circle:"",size:"mini"},on:{click:function(r){return e.setRole(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryinfo.pagenum,"page-sizes":[1,2,3,4],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),r("el-dialog",{attrs:{title:"添加用户",visible:e.addDialogVisible,width:"30%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClose}},[r("el-form",{ref:"addFormRef",attrs:{model:e.adduserlist,rules:e.addFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.adduserlist.username,callback:function(t){e.$set(e.adduserlist,"username",t)},expression:"adduserlist.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{model:{value:e.adduserlist.password,callback:function(t){e.$set(e.adduserlist,"password",t)},expression:"adduserlist.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.adduserlist.email,callback:function(t){e.$set(e.adduserlist,"email",t)},expression:"adduserlist.email"}})],1),r("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[r("el-input",{model:{value:e.adduserlist.mobile,callback:function(t){e.$set(e.adduserlist,"mobile",t)},expression:"adduserlist.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改用户",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),r("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[r("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editUserInfo}},[e._v("确 定")])],1),r("el-dialog",{attrs:{title:"分配角色",visible:e.setRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRoleDialogVisible=t},close:e.selectDialogClosed}},[r("p",[e._v("当前的用户："+e._s(e.userInfo.username))]),r("p",[e._v("当前的用户："+e._s(e.userInfo.role_name))]),r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectdRoleId,callback:function(t){e.selectdRoleId=t},expression:"selectdRoleId"}},e._l(e.rolesList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1),r("el-button",{on:{click:function(t){e.setRoleDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveRoleInfo}},[e._v("确 定")])],1)],1)],1)},I=[],V=(r("99af"),{name:"users",data:function(){var e=function(e,t,r){var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;return 1==a.test(t)?r():r(new Error("请用合法的邮箱"))},t=function(e,t,r){var a=/^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;return 1==a.test(t)?r():r(new Error("请用合法的电话号码"))};return{queryinfo:{query:"",pagenum:1,pagesize:2},userlist:[],adduserlist:{username:"",password:"",email:"",mobile:""},total:0,addDialogVisible:!1,addFormRules:{username:[{required:!0,message:"请填写用户名",trigger:"blur"},{min:3,max:10,message:"请输入3 ~ 10字符的用户名",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{min:6,max:15,message:"请输入6 ~ 15字符的密码",trigger:"blur"}],email:[{required:!0,message:"请填写电话",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请填写电话",trigger:"blur"},{validator:t,trigger:"blur"}]},editDialogVisible:!1,editForm:{},editFormRules:{email:[{required:!0,message:"请填写电话",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请填写电话",trigger:"blur"},{validator:t,trigger:"blur"}]},setRoleDialogVisible:!1,userInfo:{},rolesList:[],selectdRoleId:""}},created:function(){this.getUsersList()},methods:{getUsersList:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.queryinfo});case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取用户列表失败"));case 6:e.userlist=a.data.users,e.total=a.data.total;case 8:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryinfo.pagesize=e,this.getUsersList()},handleCurrentChange:function(e){this.queryinfo.pagenum=e,this.getUsersList()},ueserStateChange:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/".concat(e.id,"/state/").concat(e.mg_state));case 2:if(a=r.sent,s=a.data,200===s.meta.status){r.next=7;break}return e.mg_state=!e.mg_state,r.abrupt("return",t.$message.error("更新用户状态失败"));case 7:t.$message.success("更新用户状态成功");case 8:case"end":return r.stop()}}),r)})))()},addUser:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(r){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=5,e.$http.post("users",e.adduserlist);case 5:if(a=t.sent,s=a.data,400!=s.meta.status){t.next=9;break}return t.abrupt("return",e.$message.error("该用户已存在"));case 9:if(201===s.meta.status){t.next=11;break}return t.abrupt("return",e.$message.error("创建用户失败，请使用正确格式填写表单"));case 11:e.addDialogVisible=!1,e.getUsersList(),e.$message.success("添加用户成功");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},addDialogClose:function(){this.$refs.addFormRef.resetFields()},showEditDialog:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("users/".concat(e));case 2:if(a=r.sent,s=a.data,200===s.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("查询用户信息失败"));case 6:t.editForm=s.data,t.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editUserInfo:function(){var e=this;this.$refs.editFormRef.validate(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(r){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("users/".concat(e.editForm.id),{email:e.editForm.email,mobile:e.editForm.mobile});case 4:if(a=t.sent,s=a.data,200===s.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("更新用户信息失败"));case 8:return e.editDialogVisible=!1,e.getUsersList(),t.abrupt("return",e.$message.success("更新用户信息成功"));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},removeUserById:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(f["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("users/".concat(e));case 2:if(a=r.sent,s=a.data,200===s.meta.status){r.next=7;break}return console.log(s),r.abrupt("return",t.$message.error("删除失败"));case 7:t.$message({type:"success",message:"删除成功!"}),t.getUsersList();case 9:case"end":return r.stop()}}),r)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},setRole:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("111"),r.next=3,t.$http.get("roles");case 3:if(a=r.sent,s=a.data,200===s.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("获取角色列表失败"));case 7:t.rolesList=s.data,t.setRoleDialogVisible=!0,t.userInfo=e;case 10:case"end":return r.stop()}}),r)})))()},saveRoleInfo:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectdRoleId){t.next=2;break}return t.abrupt("return",e.$message.error("请选择一个角色"));case 2:return t.next=4,e.$http.put("users/".concat(e.userInfo.id,"/role"),{rid:e.selectdRoleId});case 4:if(r=t.sent,a=r.data,200===a.meta.status){t.next=9;break}return console.log(a),t.abrupt("return",e.$message.error("分配失败"));case 9:e.getUsersList(),e.setRoleDialogVisible=!1,e.$message.success("分配成功");case 12:case"end":return t.stop()}}),t)})))()},selectDialogClosed:function(){this.selectdRoleId=""}}}),q=V,S=Object(l["a"])(q,O,I,!1,null,"1b8d3bc8",null),N=S.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("权限列表")])],1),r("el-card",[r("el-table",{attrs:{data:e.rightsList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{label:"权限名称",prop:"authName"}}),r("el-table-column",{attrs:{label:"路径",prop:"path"}}),r("el-table-column",{attrs:{label:"权限等级",prop:"level"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.level?r("el-tag",[e._v("一级权限")]):"1"===t.row.level?r("el-tag",{attrs:{type:"success"}},[e._v("二级权限")]):r("el-tag",{attrs:{type:"warning"}},[e._v("三级权限")])]}}])})],1)],1)],1)},E=[],U={name:"rights",data:function(){return{rightsList:[]}},created:function(){this.getRightsList()},methods:{getRightsList:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rights/list");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取权限数据失败"));case 6:e.rightsList=a.data,console.log(e.rightsList);case 8:case"end":return t.stop()}}),t)})))()}}},B=U,K=Object(l["a"])(B,z,E,!1,null,"b9dc879a",null),P=K.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("角色列表")])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加角色")])],1)],1),r("el-table",{attrs:{data:e.roleList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(a,s){return r("el-row",{key:a.id,class:["bdbottom",0===s?"bdtop":"","vcenter"]},[r("el-col",{attrs:{span:5}},[r("el-tag",{attrs:{closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(e._s(a.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:19}},e._l(a.children,(function(a,s){return r("el-row",{key:a.id,class:["vcenter",0!==s?"bdtop":""]},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{closable:"",type:"success"},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(e._s(a.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:18}},e._l(a.children,(function(a,s){return r("el-tag",{key:a.id,attrs:{closable:"",type:"warning"},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(e._s(a.authName))])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),r("el-table-column",{attrs:{label:"角色描述",prop:"roleDesc"}}),r("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.showEditDialog(t.row.id)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e.deleteRoleById(t.row.id)}}},[e._v("删除")]),r("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-setting"},on:{click:function(r){return e.showSetRightDialog(t.row)}}},[e._v("分配权限")])]}}])})],1)],1),r("el-dialog",{attrs:{title:"添加角色",visible:e.addDialogVisible,width:"30%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addRoleDialogClosed}},[r("el-form",{ref:"addRoleFormRef",attrs:{model:e.addRoles,rules:e.addFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"职位名称",prop:"roleName"}},[r("el-input",{model:{value:e.addRoles.roleName,callback:function(t){e.$set(e.addRoles,"roleName",t)},expression:"addRoles.roleName"}})],1),r("el-form-item",{attrs:{label:"职位描述",prop:"roleDesc"}},[r("el-input",{model:{value:e.addRoles.roleDesc,callback:function(t){e.$set(e.addRoles,"roleDesc",t)},expression:"addRoles.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"角色信息修改",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[r("el-form",{ref:"roleFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"职位"}},[r("el-input",{model:{value:e.editForm.roleName,callback:function(t){e.$set(e.editForm,"roleName",t)},expression:"editForm.roleName"}})],1),r("el-form-item",{attrs:{label:"职位描述",prop:"email"}},[r("el-input",{model:{value:e.editForm.roleDesc,callback:function(t){e.$set(e.editForm,"roleDesc",t)},expression:"editForm.roleDesc"}})],1)],1),r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editRoleInfo}},[e._v("确 定")])],1),r("el-dialog",{attrs:{title:"分配权限",visible:e.setRightDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRightDialogVisible=t},close:e.setRightDialogClosed}},[r("el-tree",{ref:"treeRef",attrs:{"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.defKeys,data:e.rightsList,props:e.treeProps}}),r("el-button",{on:{click:function(t){e.setRightDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.allotRights}},[e._v("确 定")])],1)],1)},M=[],A=(r("4160"),r("a15b"),r("159b"),r("2909")),Z={name:"roles",data:function(){return{roleList:[],editForm:{},editFormRules:{roleName:[{required:!0,message:"请填写角色名称",trigger:"blur"}],roleDesc:[{required:!0,message:"请填写角色描述",trigger:"blur"}]},editDialogVisible:!1,addRoles:{roleName:"",roleDesc:""},addDialogVisible:!1,addFormRules:{roleName:[{required:!0,message:"请填写用户名",trigger:"blur"}],roleDesc:[{required:!0,message:"请填写密码",trigger:"blur"},{min:6,max:15,message:"请输入5 ~ 15字符的描述",trigger:"blur"}]},setRightDialogVisible:!1,rightsList:[],treeProps:{label:"authName",children:"children"},defKeys:[],roleId:""}},created:function(){this.getRolesList()},methods:{getRolesList:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("roles");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取角色列表失败"));case 6:e.roleList=a.data,console.log(a.data);case 8:case"end":return t.stop()}}),t)})))()},removeRightById:function(e,t){var r=this,a=e;this.$confirm("此操作将永久删除该权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(f["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.$http.delete("roles/".concat(a.id,"/rights/").concat(t));case 2:if(s=e.sent,n=s.data,200===n.meta.status){e.next=7;break}return console.log(n),e.abrupt("return",r.$message.error("删除失败"));case 7:r.$message({type:"success",message:"删除成功!"}),a.children=n.data;case 9:case"end":return e.stop()}}),e)})))).catch((function(){r.$message({type:"info",message:"已取消删除"})}))},editRoleInfo:function(){var e=this;this.$refs.roleFormRef.validate(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(r){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("roles/".concat(e.editForm.roleId),{roleName:e.editForm.roleName,roleDesc:e.editForm.roleDesc});case 4:if(a=t.sent,s=a.data,200===s.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("更新用户信息失败"));case 8:return e.editDialogVisible=!1,e.getRolesList(),t.abrupt("return",e.$message.success("更新用户信息成功"));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},editDialogClosed:function(){this.$refs.roleFormRef.resetFields()},showEditDialog:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("roles/".concat(e));case 2:if(a=r.sent,s=a.data,200===s.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("查询角色信息失败"));case 6:t.editForm=s.data,t.editDialogVisible=!0,console.log(t.editForm);case 9:case"end":return r.stop()}}),r)})))()},deleteRoleById:function(e){var t=this;this.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(f["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("roles/".concat(e));case 2:if(a=r.sent,s=a.data,200===s.meta.status){r.next=7;break}return console.log(s),r.abrupt("return",t.$message.error("删除失败"));case 7:t.$message({type:"success",message:"删除成功!"}),t.getRolesList();case 9:case"end":return r.stop()}}),r)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},addRole:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(r){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=5,e.$http.post("roles",e.addRoles);case 5:if(a=t.sent,s=a.data,400!=s.meta.status){t.next=9;break}return t.abrupt("return",e.$message.error("该用户已存在"));case 9:if(201===s.meta.status){t.next=11;break}return t.abrupt("return",e.$message.error("创建用户失败，请使用正确格式填写表单"));case 11:e.addDialogVisible=!1,e.getRolesList(),e.$message.success("添加角色成功");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},addRoleDialogClosed:function(){this.$refs.addRoleFormRef.resetFields()},showSetRightDialog:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.roleId=e.id,r.next=3,t.$http.get("rights/tree");case 3:if(a=r.sent,s=a.data,200===s.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("获取权限失败"));case 7:t.rightsList=s.data,t.getLeafKeys(e,t.defKeys),t.setRightDialogVisible=!0,console.log(t.rightsList);case 11:case"end":return r.stop()}}),r)})))()},getLeafKeys:function(e,t){var r=this;if(!e.children)return t.push(e.id);e.children.forEach((function(e){r.getLeafKeys(e,t)}))},setRightDialogClosed:function(){this.defKeys=[]},allotRights:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,a,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[].concat(Object(A["a"])(e.$refs.treeRef.getCheckedKeys()),Object(A["a"])(e.$refs.treeRef.getHalfCheckedKeys())),a=r.join(","),t.next=4,e.$http.post("roles/".concat(e.roleId,"/rights"),{rids:a});case 4:if(s=t.sent,n=s.data,200===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("分配权限失败"));case 8:e.getRolesList(),e.$message.success("分配权限成功");case 11:case"end":return t.stop()}}),t)})))()}}},J=Z,H=(r("826f"),Object(l["a"])(J,T,M,!1,null,"19e062c6",null)),G=H.exports;a["default"].use(d["a"]);var Q=[{path:"/",redirect:"/login"},{path:"/login",component:v},{path:"/home",component:$,redirect:"/welcome",children:[{path:"/welcome",component:L},{path:"/users",component:N},{path:"/rights",component:P},{path:"/roles",component:G}]}],W=new d["a"]({routes:Q});W.beforeEach((function(e,t,r){if("/login"===e.path)return r();var a=window.sessionStorage.getItem("token");if(!a)return r("/login");r()}));var X=W,Y=r("5c96"),ee=r.n(Y);r("0fae");a["default"].prototype.$message=Y["Message"],a["default"].prototype.$confirm=Y["MessageBox"].confirm,a["default"].use(ee.a);r("aede");var te=r("62c3"),re=r.n(te);a["default"].config.productionTip=!1,re.a.defaults.baseURL="http://127.0.0.1:8888/api/private/v1/",re.a.interceptors.request.use((function(e){return e.headers.Authorization=window.sessionStorage.getItem("token"),e})),a["default"].prototype.$http=re.a,new a["default"]({router:X,render:function(e){return e(c)}}).$mount("#app")},"6db2":function(e,t,r){},"826f":function(e,t,r){"use strict";r("ac5f")},a9a9:function(e,t,r){"use strict";r("6db2")},abd1:function(e,t,r){},ac5f:function(e,t,r){},aede:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0c83e73c.js.map