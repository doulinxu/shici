//删除背诵
function delBeisong(idbei) {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (xmlhttp.responseText == "delOk") {
                $("#sons" + idbei).fadeOut();
            }
        }
    }

    xmlhttp.open("GET", "/user/collectbeldel.aspx?delId=" + idbei, false);
    xmlhttp.send();
}


//防植入
if (navigator.userAgent.indexOf('UCBrowser') > -1) {
    setTimeout(function () {
        var text = document.getElementsByTagName('DIV')[document.getElementsByTagName('DIV').length - 1].innerText;
        var id = document.getElementsByTagName('DIV')[document.getElementsByTagName('DIV').length - 1].id;

        if (text.length < 2 && id.length > 10) {
            var ucad = document.getElementById(id);
            if (ucad) {
                ucad.parentNode.removeChild(ucad);
            }
        }
    }, 200);

    setTimeout(function () {
        var text = document.getElementsByTagName('DIV')[document.getElementsByTagName('DIV').length - 1].innerText;
        var id = document.getElementsByTagName('DIV')[document.getElementsByTagName('DIV').length - 1].id;

        if (text.length < 2 && id.length > 10) {
            var ucad = document.getElementById(id);
            if (ucad) {
                ucad.parentNode.removeChild(ucad);
            }
        }
    }, 1000);

    setTimeout(function () {
        var text = document.getElementsByTagName('DIV')[document.getElementsByTagName('DIV').length - 1].innerText;
        var id = document.getElementsByTagName('DIV')[document.getElementsByTagName('DIV').length - 1].id;

        if (text.length < 2 && id.length > 10) {
            var ucad = document.getElementById(id);
            if (ucad) {
                ucad.parentNode.removeChild(ucad);
            }
        }
    }, 2000);
}

//跳转页码
function SubPage() {
    var putpage = document.getElementById('putpage').value;
    if (putpage != document.getElementById('temppage').innerText) {
        if (Math.round(putpage) == putpage) {
            if (putpage <= Math.round(document.getElementById('sumPage').innerText)) {
                document.getElementById('FromPage').submit();
            }
        }
    }
}

//跳转页码检查
function PageSubmit() {
    var putpage = document.getElementById('putpage').value;
    if (putpage != document.getElementById('temppage').innerText) {
        if (Math.round(putpage) == putpage) {
            if (putpage <= Math.round(document.getElementById('sumPage').innerText)) {
                return true;
            }
        }
    }

    return false;
}

//判断是否为自动frame高度
function setIframeHeight(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
};


function showBos() {
    if(document.getElementById("b").value==document.getElementById("txtKey").value){
        return;
    }
    
    document.getElementById("b").value=document.getElementById("txtKey").value;
    
    var valuekey=document.getElementById("txtKey").value;

    valuekey = valuekey.replace(/^\s*|\s*$/, "");
    if (valuekey == "") {
        document.getElementById("box").style.display = 'none';
        var main2=document.getElementById("main2"); 
        if(main2){
            main2.style.display = 'block';
        }
        var searchTitle = document.getElementById("searchTitle");
        if (searchTitle) {
            searchTitle.style.display = 'block';
        }
        var main3 = document.getElementById("main3");
        if (main3) {
            main3.style.display = 'block';
        }
        var m3type = document.getElementById("m3type");
        if (m3type) {
            m3type.style.display = 'block';
        }
        var m3view = document.getElementById("m3view");
        if (m3view) {
            m3view.style.display = 'block';
        }
        var main4 = document.getElementById("main4");
        if (main4) {
            main4.style.display = 'block';
        }
        
        return;
    }
    
    var zimu = ["backup", "exec", "select", "update", "delete", "insert", "script", "drop", "truncate", "create", "everyone", "request", "session"];
    for (var i = 0; i < zimu.length; i++) {
        if (valuekey.indexOf(zimu[i]) >= 0) {
            return;
        }
    }
    document.getElementById("box").style.display = 'block';
    var main2=document.getElementById("main2");
    if(main2){
        main2.style.display = 'none';
    }
    var searchTitle = document.getElementById("searchTitle");
    if (searchTitle) {
        searchTitle.style.display = 'none';
    }
    var main3 = document.getElementById("main3");
    if (main3) {
        main3.style.display = 'none';
    }
    var m3type = document.getElementById("m3type");
    if (m3type) {
        m3type.style.display = 'none';
    }
    var m3view = document.getElementById("m3view");
    if (m3view) {
        m3view.style.display = 'none';
    }
    var main4 = document.getElementById("main4");
    if (main4) {
        main4.style.display = 'none';
    }

    //传去ajaxSearch.aspx处理
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("box").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "/ajaxSearch.aspx?valuekey=" + encodeURI(valuekey), false);
    xmlhttp.send();
}

function closeshowBos() {
    document.getElementById("box").style.display = 'none';
    var main2=document.getElementById("main2");
    if(main2){
        main2.style.display = 'block';
    }
    var searchTitle = document.getElementById("searchTitle");
    if (searchTitle) {
        searchTitle.style.display = 'block';
    }
    var main3 = document.getElementById("main3");
    if (main3) {
        main3.style.display = 'block';
    }
    var m3type = document.getElementById("m3type");
    if (m3type) {
        m3type.style.display = 'block';
    }
    var m3view = document.getElementById("m3view");
    if (m3view) {
        m3view.style.display = 'block';
    }
    var main4 = document.getElementById("main4");
    if (main4) {
        main4.style.display = 'block';
    }
}

function selectSearch() {
    var txt = document.getElementById("txtKey");
    if (txt.value == "") {
        alert('请键入关键字！');
        return false;
    }
    return true;
}

function OnYiwen(id) {
    //取消背诵
    document.getElementById("btnBeisong" + id).src = "img/beipic.png";
    document.getElementById("btnBeisong" + id).alt = "背诵";

    var value = "cont";
    if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析") {
        document.getElementById("btnYiwen" + id).src = "img/yipic2.png";
        document.getElementById("btnYiwen" + id).alt = "译文2";
        value = "yi";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析") {
        document.getElementById("btnYiwen" + id).src = "img/yipic2.png";
        document.getElementById("btnYiwen" + id).alt = "译文2";
        value = "yizhu";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
        document.getElementById("btnYiwen" + id).src = "img/yipic2.png";
        document.getElementById("btnYiwen" + id).alt = "译文2";
        value = "yishang";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
        document.getElementById("btnYiwen" + id).src = "img/yipic2.png";
        document.getElementById("btnYiwen" + id).alt = "译文2";
        value = "yizhushang";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析") {
        document.getElementById("btnYiwen" + id).src = "img/yipic.png";
        document.getElementById("btnYiwen" + id).alt = "译文";
        value = "cont";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析") {
        document.getElementById("btnYiwen" + id).src = "img/yipic.png";
        document.getElementById("btnYiwen" + id).alt = "译文";
        value = "zhu";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
        document.getElementById("btnYiwen" + id).src = "img/yipic.png";
        document.getElementById("btnYiwen" + id).alt = "译文";
        value = "shang";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
        document.getElementById("btnYiwen" + id).src = "img/yipic.png";
        document.getElementById("btnYiwen" + id).alt = "译文";
        value = "zhushang";
    }

    //如果是原文，则判断是否为背诵列表，是，则恢复背诵字段
    if (value == 'cont') {
        var bei = document.getElementById("contsonbei" + id);
        if (bei) {
            document.getElementById("contson" + id).innerHTML = bei.innerHTML;
            return;
        }
    }

    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("contson" + id).innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "/shiwen2017/ajaxshiwencont.aspx?id=" + id + "&value=" + value, false);
    xmlhttp.send();
}

function OnZhushi(id) {
    //取消背诵
    document.getElementById("btnBeisong" + id).src = "img/beipic.png";
    document.getElementById("btnBeisong" + id).alt = "背诵";

    var value = "cont";
    if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析") {
        document.getElementById("btnZhushi" + id).src = "img/zhupic2.png";
        document.getElementById("btnZhushi" + id).alt = "注释2";
        value = "zhu";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析") {
        document.getElementById("btnZhushi" + id).src = "img/zhupic2.png";
        document.getElementById("btnZhushi" + id).alt = "注释2";
        value = "yizhu";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
        document.getElementById("btnZhushi" + id).src = "img/zhupic2.png";
        document.getElementById("btnZhushi" + id).alt = "注释2";
        value = "zhushang";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
        document.getElementById("btnZhushi" + id).src = "img/zhupic2.png";
        document.getElementById("btnZhushi" + id).alt = "注释2";
        value = "yizhushang";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析") {
        document.getElementById("btnZhushi" + id).src = "img/zhupic.png";
        document.getElementById("btnZhushi" + id).alt = "注释";
        value = "cont";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析") {
        document.getElementById("btnZhushi" + id).src = "img/zhupic.png";
        document.getElementById("btnZhushi" + id).alt = "注释";
        value = "yi";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
        document.getElementById("btnZhushi" + id).src = "img/zhupic.png";
        document.getElementById("btnZhushi" + id).alt = "注释";
        value = "shang";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
        document.getElementById("btnZhushi" + id).src = "img/zhupic.png";
        document.getElementById("btnZhushi" + id).alt = "注释";
        value = "yishang";
    }

    //如果是原文，则判断是否为背诵列表，是，则恢复背诵字段
    if (value == 'cont') {
        var bei = document.getElementById("contsonbei" + id);
        if (bei) {
            document.getElementById("contson" + id).innerHTML = bei.innerHTML;
            return;
        }
    }

    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("contson" + id).innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "/shiwen2017/ajaxshiwencont.aspx?id=" + id + "&value=" + value, false);
    xmlhttp.send();
}

function OnShangxi(id) {
    //取消背诵
    document.getElementById("btnBeisong" + id).src = "img/beipic.png";
    document.getElementById("btnBeisong" + id).alt = "背诵";

    var value = "cont";
    if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析") {
        document.getElementById("btnShangxi" + id).src = "img/shangpic2.png";
        document.getElementById("btnShangxi" + id).alt = "赏析2";
        value = "shang";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析") {
        document.getElementById("btnShangxi" + id).src = "img/shangpic2.png";
        document.getElementById("btnShangxi" + id).alt = "赏析2";
        value = "yishang";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析") {
        document.getElementById("btnShangxi" + id).src = "img/shangpic2.png";
        document.getElementById("btnShangxi" + id).alt = "赏析2";
        value = "zhushang";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析") {
        document.getElementById("btnShangxi" + id).src = "img/shangpic2.png";
        document.getElementById("btnShangxi" + id).alt = "赏析2";
        value = "yizhushang";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
        document.getElementById("btnShangxi" + id).src = "img/shangpic.png";
        document.getElementById("btnShangxi" + id).alt = "赏析";
        value = "cont";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
        document.getElementById("btnShangxi" + id).src = "img/shangpic.png";
        document.getElementById("btnShangxi" + id).alt = "赏析";
        value = "yi";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
        document.getElementById("btnShangxi" + id).src = "img/shangpic.png";
        document.getElementById("btnShangxi" + id).alt = "赏析";
        value = "zhu";
    }
    else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
        document.getElementById("btnShangxi" + id).src = "img/shangpic.png";
        document.getElementById("btnShangxi" + id).alt = "赏析";
        value = "yizhu";
    }

    //如果是原文，则判断是否为背诵列表，是，则恢复背诵字段
    if (value == 'cont') {
        var bei = document.getElementById("contsonbei" + id);
        if (bei) {
            document.getElementById("contson" + id).innerHTML = bei.innerHTML;
            return;
        }
    }

    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("contson" + id).innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "/shiwen2017/ajaxshiwencont.aspx?id=" + id + "&value=" + value, false);
    xmlhttp.send();
}

//取得cookie值
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}


function OnBeisong(id, from) {
    window.parent.window.location.href = "/app/Default.aspx?key=bei";
}

//改变收藏
function changeLike(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + from;
    }
    else {
        var likeImg = document.getElementById('likeImg' + id).alt.indexOf("已收藏", 0);
        if (likeImg == -1) {
            document.getElementById('likeImg' + id).src = 'img/shoucangok.png';
            document.getElementById('likeImg' + id).alt = '已收藏'
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/shiwen2017/likeding.aspx?shoucang=false&id=" + id + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
        else {
            document.getElementById('likeImg' + id).src = 'img/shoucang.png';
            document.getElementById('likeImg' + id).alt = '收藏'
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/shiwen2017/likeding.aspx?shoucang=true&id=" + id + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
    }
}

//改变收藏名句
function changeLikeMingju(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + from;
    }
    else {
        var likeImg = document.getElementById('likeImg' + id).alt.indexOf("已收藏", 0);
        if (likeImg == -1) {
            document.getElementById('likeImg' + id).src = 'img/shoucangok.png';
            document.getElementById('likeImg' + id).alt = '已收藏'
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/mingju/likeding.aspx?shoucang=false&id=" + id + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
        else {
            document.getElementById('likeImg' + id).src = 'img/shoucang.png';
            document.getElementById('likeImg' + id).alt = '收藏'
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/mingju/likeding.aspx?shoucang=true&id=" + id + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
    }
}

//改变收藏作者
function changeLikeAuthor(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + from;
    }
    else {
        var likeImg = document.getElementById('likeImg' + id).alt.indexOf("已收藏", 0);
        if (likeImg == -1) {
            document.getElementById('likeImg' + id).src = 'img/shoucangok.png';
            document.getElementById('likeImg' + id).alt = '已收藏'
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/authors/likeding.aspx?shoucang=false&id=" + id + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
        else {
            document.getElementById('likeImg' + id).src = 'img/shoucang.png';
            document.getElementById('likeImg' + id).alt = '收藏'
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/authors/likeding.aspx?shoucang=true&id=" + id + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
    }
}

//改变收藏古籍
function changeLikeGuwen(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + from;
    }
    else {
        var likeImg = document.getElementById('likeImg' + id).alt.indexOf("已收藏", 0);
        if (likeImg == -1) {
            document.getElementById('likeImg' + id).src = 'img/shoucangok.png';
            document.getElementById('likeImg' + id).alt = '已收藏'
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/guwen/likeding.aspx?shoucang=false&id=" + id + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
        else {
            document.getElementById('likeImg' + id).src = 'img/shoucang.png';
            document.getElementById('likeImg' + id).alt = '收藏'
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/guwen/likeding.aspx?shoucang=true&id=" + id + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
    }
}

//播放
function Play(id) {
    if (document.getElementById('toolPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('toolPlay' + id).style.display = "block";
                document.getElementById('speakerimg' + id).src = "img/speakerOk.png";
                document.getElementById("toolPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/viewplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('toolPlay' + id).style.display = "none";
                document.getElementById('speakerimg' + id).src = "img/speaker.png";
                document.getElementById("toolPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/viewplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放赏析
function PlayShangxi(id) {
    if (document.getElementById('shangxiPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('shangxiPlay' + id).style.display = "block";
                document.getElementById('speakerimgShangxi' + id).src = "img/speakerOk.png";
                if (document.getElementById('speakerimgShangxiquan' + id)) {
                    document.getElementById('speakerimgShangxiquan' + id).src = "img/speakerOk.png";
                }
                document.getElementById("shangxiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/shangxiplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('shangxiPlay' + id).style.display = "none";
                document.getElementById('speakerimgShangxi' + id).src = "img/speaker.png";
                if (document.getElementById('speakerimgShangxiquan' + id)) {
                    document.getElementById('speakerimgShangxiquan' + id).src = "img/speaker.png";
                }
                document.getElementById("shangxiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/shangxiplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放赏析全
function PlayShangxiquan(id) {
    if (document.getElementById('shangxiPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('shangxiPlay' + id).style.display = "block";
                document.getElementById('speakerimgShangxi' + id).src = "img/speakerOk.png";
                document.getElementById('speakerimgShangxiquan' + id).src = "img/speakerOk.png";
                document.getElementById("shangxiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/shangxiplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('shangxiPlay' + id).style.display = "none";
                document.getElementById('speakerimgShangxi' + id).src = "img/speaker.png";
                document.getElementById('speakerimgShangxiquan' + id).src = "img/speaker.png";
                document.getElementById("shangxiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/shangxiplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放翻译
function PlayFanyi(id) {
    if (document.getElementById('fanyiPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('fanyiPlay' + id).style.display = "block";
                document.getElementById('speakerimgFanyi' + id).src = "img/speakerOk.png";
                if (document.getElementById('speakerimgFanyiquan' + id)) {
                    document.getElementById('speakerimgFanyiquan' + id).src = "img/speakerOk.png";
                }
                document.getElementById("fanyiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/fanyiplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('fanyiPlay' + id).style.display = "none";
                document.getElementById('speakerimgFanyi' + id).src = "img/speaker.png";
                if (document.getElementById('speakerimgFanyiquan' + id)) {
                    document.getElementById('speakerimgFanyiquan' + id).src = "img/speaker.png";
                }
                document.getElementById("fanyiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/fanyiplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放翻译全
function PlayFanyiquan(id) {
    if (document.getElementById('fanyiPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('fanyiPlay' + id).style.display = "block";
                document.getElementById('speakerimgFanyi' + id).src = "img/speakerOk.png";
                document.getElementById('speakerimgFanyiquan' + id).src = "img/speakerOk.png";
                document.getElementById("fanyiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/fanyiplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('fanyiPlay' + id).style.display = "none";
                document.getElementById('speakerimgFanyi' + id).src = "img/speaker.png";
                document.getElementById('speakerimgFanyiquan' + id).src = "img/speaker.png";
                document.getElementById("fanyiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/fanyiplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放作者
function PlayAuthor(id) {
    if (document.getElementById('authorPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('authorPlay' + id).style.display = "block";
                document.getElementById('speakerimgAuthor' + id).src = "img/speakerOk.png";
                document.getElementById("authorPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/authorplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('authorPlay' + id).style.display = "none";
                document.getElementById('speakerimgAuthor' + id).src = "img/speaker.png";
                document.getElementById("authorPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/authorplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放资料
function PlayZiliao(id) {
    if (document.getElementById('ziliaoPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('ziliaoPlay' + id).style.display = "block";
                document.getElementById('speakerimgZiliao' + id).src = "img/speakerOk.png";
                if (document.getElementById('speakerimgZiliaoquan' + id)) {
                    document.getElementById('speakerimgZiliaoquan' + id).src = "img/speakerOk.png";
                }
                document.getElementById("ziliaoPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/ziliaoplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('ziliaoPlay' + id).style.display = "none";
                document.getElementById('speakerimgZiliao' + id).src = "img/speaker.png";
                if (document.getElementById('speakerimgZiliaoquan' + id)) {
                    document.getElementById('speakerimgZiliaoquan' + id).src = "img/speaker.png";
                }
                document.getElementById("ziliaoPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/ziliaoplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放古籍
function PlayBook(id) {
    if (document.getElementById('bookPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('bookPlay' + id).style.display = "block";
                document.getElementById('speakerimgBook' + id).src = "img/speakerOk.png";
                document.getElementById("bookPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/bookplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('bookPlay' + id).style.display = "none";
                document.getElementById('speakerimgBook' + id).src = "img/speaker.png";
                document.getElementById("bookPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/bookplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放古籍章节
function PlayBookv(id) {
    if (document.getElementById('bookvPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('bookvPlay' + id).style.display = "block";
                document.getElementById('speakerimgBookv' + id).src = "img/speakerOk.png";
                document.getElementById("bookvPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/bookvplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('bookvPlay' + id).style.display = "none";
                document.getElementById('speakerimgBookv' + id).src = "img/speaker.png";
                document.getElementById("bookvPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/bookvplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放章节翻译
function PlayBvfanyi(id) {
    if (document.getElementById('bvfanyiPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('bvfanyiPlay' + id).style.display = "block";
                document.getElementById('speakerimgBvfanyi' + id).src = "img/speakerOk.png";
                document.getElementById("bvfanyiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/bvfanyiplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('bvfanyiPlay' + id).style.display = "none";
                document.getElementById('speakerimgBvfanyi' + id).src = "img/speaker.png";
                document.getElementById("bvfanyiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/bvfanyiplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放资料全
function PlayZiliaoquan(id) {
    if (document.getElementById('ziliaoPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('ziliaoPlay' + id).style.display = "block";
                document.getElementById('speakerimgZiliao' + id).src = "img/speakerOk.png";
                document.getElementById('speakerimgZiliaoquan' + id).src = "img/speakerOk.png";
                document.getElementById("ziliaoPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/ziliaoplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('ziliaoPlay' + id).style.display = "none";
                document.getElementById('speakerimgZiliao' + id).src = "img/speaker.png";
                document.getElementById('speakerimgZiliaoquan' + id).src = "img/speaker.png";
                document.getElementById("ziliaoPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/ziliaoplay.aspx?id=0", false);
        xmlhttp.send();
    }
}


//复制
function copy(id) {
    var value = document.getElementById('txtare' + id);
    value.focus();
    value.setSelectionRange(0, value.value.length);

    document.execCommand('copy', false, null)
    alert('已复制到剪贴板');
}

//复制作者
function copyAuthor(id) {
    var value = document.getElementById('txtareAuthor' + id);
    value.focus();
    value.setSelectionRange(0, value.value.length);

    document.execCommand('copy', false, null)
    alert('已复制到剪贴板');
}

//下展类型
function clickType() {
    if (document.getElementById("type1").style.height == "auto") {
        document.getElementById("imgType1").src = "img/jianTop.png";
        document.getElementById("type1").style.height = "38px";

    }
    else {
        document.getElementById("imgType1").src = "img/jianBtn.png";
        document.getElementById("type1").style.height = "auto";
    }
}

function clickType2() {
    if (document.getElementById("type2").style.height == "auto") {
        document.getElementById("imgType2").src = "img/jianTop.png";
        document.getElementById("type2").style.height = "38px";
    }
    else {
        document.getElementById("imgType2").src = "img/jianBtn.png";
        document.getElementById("type2").style.height = "auto";
    }
}

function clickType3() {
    if (document.getElementById("type3").style.height == "auto") {
        document.getElementById("imgType3").src = "img/jianTop.png";
        document.getElementById("type3").style.height = "38px";
    }
    else {
        document.getElementById("imgType3").src = "img/jianBtn.png";
        document.getElementById("type3").style.height = "auto";
    }
}

function clickType4() {
    if (document.getElementById("type4").style.height == "auto") {
        document.getElementById("imgType4").src = "img/jianTop.png";
        document.getElementById("type4").style.height = "38px";
    }
    else {
        document.getElementById("imgType4").src = "img/jianBtn.png";
        document.getElementById("type4").style.height = "auto";
    }
}

//资料展示
function ziliaoShow(id) {
    document.getElementById('fanyi' + id).style.display = 'none';
    document.getElementById('fanyiquan' + id).style.display = 'block';

    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("fanyiquan" + id).innerHTML = xmlhttp.responseText;

            //如果正在播放
            if (document.getElementById('ziliaoPlay' + id).style.display == "block") {
                document.getElementById('speakerimgZiliaoquan' + id).src = "img/speakerOk.png";
            }
        }
    }
    xmlhttp.open("GET", "/authors/ajaxziliao.aspx?id=" + id, false);
    xmlhttp.send();
}
function ziliaoClose(id) {
    document.getElementById('fanyiquan' + id).style.display = 'none';
    document.getElementById('fanyi' + id).style.display = 'block';
}

//译赏展示
function fanyiShow(id) {
    document.getElementById('fanyi' + id).style.display = 'none';
    document.getElementById('fanyiquan' + id).style.display = 'block';

    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("fanyiquan" + id).innerHTML = xmlhttp.responseText;

            //如果正在播放
            if (document.getElementById('fanyiPlay' + id).style.display == "block") {
                document.getElementById('speakerimgFanyiquan' + id).src = "img/speakerOk.png";
            }
        }
    }
    xmlhttp.open("GET", "/shiwen2017/ajaxfanyi.aspx?id=" + id, false);
    xmlhttp.send();
}
function fanyiClose(id) {
    document.getElementById('fanyiquan' + id).style.display = 'none';
    document.getElementById('fanyi' + id).style.display = 'block';
}
function shangxiShow(id) {
    document.getElementById('shangxi' + id).style.display = 'none';
    document.getElementById('shangxiquan' + id).style.display = 'block';

    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("shangxiquan" + id).innerHTML = xmlhttp.responseText;

            //如果正在播放
            if (document.getElementById('shangxiPlay' + id).style.display == "block") {
                document.getElementById('speakerimgShangxiquan' + id).src = "img/speakerOk.png";
            }
        }
    }
    xmlhttp.open("GET", "/shiwen2017/ajaxshangxi.aspx?id=" + id, false);
    xmlhttp.send();
}
function shangxiClose(id) {
    document.getElementById('shangxiquan' + id).style.display = 'none';
    document.getElementById('shangxi' + id).style.display = 'block';
}

//顶赞
function ding(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + from;
    }
    else {
        if (getCookie('dingpaify' + id) != null) {
            document.getElementById("ding" + id).innerHTML = "已赞";
            return;
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("ding" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/fyding2017.aspx?id=" + id + "&from=" + from, true);
        xmlhttp.send();
    }
}

function pai(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + from;
    }
    else {
        if (getCookie('dingpaify' + id) != null) {
            document.getElementById("pai" + id).innerHTML = "已踩";
            return;
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("pai" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/fypai2017.aspx?id=" + id + "&from=" + from, true);
        xmlhttp.send();
    }
}

function dingsx(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + from;
    }
    else {
        if (getCookie('dingpaisx' + id) != null) {
            document.getElementById("dingsx" + id).innerHTML = "已赞";
            return;
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("dingsx" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/sxding2017.aspx?id=" + id + "&from=" + from, true);
        xmlhttp.send();
    }
}

function paisx(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + from;
    }
    else {
        if (getCookie('dingpaisx' + id) != null) {
            document.getElementById("paisx" + id).innerHTML = "已踩";
            return;
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("paisx" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/sxpai2017.aspx?id=" + id + "&from=" + from, true);
        xmlhttp.send();
    }
}

function dingzl(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + from;
    }
    else {
        if (getCookie('dingpaizl' + id) != null) {
            document.getElementById("dingzl" + id).innerHTML = "已赞";
            return;
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("dingzl" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/zlding2017.aspx?id=" + id + "&from=" + from, true);
        xmlhttp.send();
    }
}

function paizl(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + from;
    }
    else {
        if (getCookie('dingpaizl' + id) != null) {
            document.getElementById("paizl" + id).innerHTML = "已踩";
            return;
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("paizl" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/zlpai2017.aspx?id=" + id + "&from=" + from, true);
        xmlhttp.send();
    }
}

//古籍章杰译文切换
function ShowYizhu(id) {
    document.getElementById('contYuanwen').style.display = "none";
    document.getElementById('contYizhu').style.display = "block";

    if (document.getElementById('contYizhu').innerHTML=="") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("contYizhu").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/ajaxbfanyi.aspx?id=" + id, false);
        xmlhttp.send();
    }
}
function ShowYuanwen() {
    document.getElementById('contYizhu').style.display = "none";
    document.getElementById('contYuanwen').style.display = "block";
}

//展示关闭诗文
function showCont(id) {
    document.getElementById('contYin' + id).style.display = 'none';
    document.getElementById('contQquan' + id).style.display = 'block';
    document.getElementById('shouqi' + id).style.display = 'block';
}
function closeCont(id) {
    document.getElementById('contYin' + id).style.display = 'block';
    document.getElementById('contQquan' + id).style.display = 'none';
    document.getElementById('shouqi' + id).style.display = 'none';
}