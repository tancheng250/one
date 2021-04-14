function check() {
    var username1 = username1();
    var password = password();
    var username2 = username2();
    var bar1 = bar();
    var email1 = email();
    var iDcard = IDcard();
    var phone1 = phone();
    var index1 = index();
    return username1 && password && username2 && bar1 && email1 && iDcard && phone1 && index1;

}

//用户名
function username1() {
    var user = document.getElementById('username');
    var classname = document.getElementById('classname');
    classname.style.color = 'red';
    var prtter = /^[a-zA-Z][a-zA-Z0-9_]{3,16}$/;
    if (user.value == '') {
        classname.innerHTML = '请输入账号';
        return false;
    }
    if (!prtter.test(user.value)) {
        classname.innerHTML = "*（字母数字下划线 不少于四位）";
        return false;
    } else {
        classname.innerHTML = '正确';
        classname.style.color = 'green';
        return true;
    }
}

//密码
function password() {
    var user = document.getElementById('password1');
    var classname = document.getElementById('errpassword');
    classname.style.color = 'red';
    var prtter = /^[a-zA-Z0-9_]\w{5,17}$/;
    if (user.value == '') {
        classname.innerHTML = '请输入密码';
        return false;
    }
    if (!prtter.test(user.value)) {
        classname.innerHTML = "*（6-18非空字符 区分大小写）";
        return  false;
    } else {
        classname.innerHTML = '正确';
        classname.style.color = 'green';
        return true;
    }
}

//姓名
function username2() {
    var user = document.getElementById('name1');
    var classname = document.getElementById('errname');
    classname.style.color = 'red';
    var prtter = /^[\u4e00-\u9fa5]{2,10}$/;
    if (user.value == '') {
        classname.innerHTML = '请输入姓名';
        return false;
    }
    if (!prtter.test(user.value)) {
        classname.innerHTML = "*（汉字 2-10位）";
    return false;
    } else {
        classname.innerHTML = '正确';
        classname.style.color = 'green';
    return true;
    }
}

//工号
function bar() {
    var user = document.getElementById('bari');
    var classname = document.getElementById('errbari');
    classname.style.color = 'red';
    var prtter = /^[0-9]{5,10}/;
    if (user.value == '') {
        classname.innerHTML = '请输入出生日期';
        return false;
    }
    if (!prtter.test(user.value)) {
        classname.innerHTML = "*（必选）";
    return false;
    } else {
        classname.innerHTML = '正确';
        classname.style.color = 'green';
        return true;
    }
}

// //电子邮箱
function email() {
    var user = document.getElementById('email1');
    var classname = document.getElementById('erremail');
    classname.style.color = 'red';
    var prtter = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (user.value == '') {
        classname.innerHTML = '请输入邮箱';
        return false;
    }
    if (!prtter.test(user.value)) {
        classname.innerHTML = "*（符合邮箱格式）";
        return  false;
    } else {
        classname.innerHTML = '正确';
        classname.style.color = 'green';
        return true;
    }
}

// //身份证
function IDcard() {
    var user = document.getElementById('IDcard1');
    var classname = document.getElementById('errIDcard');
    classname.style.color = 'red';
    var prtter = /^([0-9]){7,18}(x|X)?$/;
    if (user.value == '') {
        classname.innerHTML = '请输入身份证';
        return false;
    }
    if (!prtter.test(user.value)) {
        classname.innerHTML = "*（请输入18位或17位并且以X结尾的）";
        return  false;
    } else {
        classname.innerHTML = '正确';
        classname.style.color = 'green';
        return true;
    }
}

// //手机号码
function phone() {
    var user = document.getElementById('phone1');
    var classname = document.getElementById('errphone');
    classname.style.color = 'red';
    var prtter = /^[1][0-9]{10}$/;
    if (user.value == '') {
        classname.innerHTML = '请输入手机号';
        return  false;
    }
    if (!prtter.test(user.value)) {
        classname.innerHTML = "*（11位数字）";
        return  false;
    } else {
        classname.innerHTML = '正确';
        classname.style.color = 'green';
        return true;
    }
}

// //个人主页
function index() {
    var user = document.getElementById('index1');
    var classname = document.getElementById('errindex');
    classname.style.color = 'red';
    const prtter = /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/
    if (user.value == '') {
        classname.innerHTML = '请输入网址';
        return  false;
    }
    if (!prtter.test(user.value)) {
        classname.innerHTML = "*（符合地址格式）";
        return  false;
    } else {
        classname.innerHTML = '正确';
        classname.style.color = 'green';
        return  true;
    }
}