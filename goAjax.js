function goAjax(ajaxData){
    var url = ajaxData.url;
    var headers = ajaxData.headers;
    if(is_null(headers)){
        headers = {}
    }
    var values = {};
    if(no_null(ajaxData.data)){
        values = ajaxData.data;
    }
    if(no_null(ajaxData.values)){
        values = ajaxData.values;
    }
    var ajaxJson = {
        url: url,//（可选项）请求标识，可以传递此字段给 cancelAjax 方法来取消请求
        tag: ajaxDate.tag || 'apiAjax',//（可选项）请求标识，可以传递此字段给 cancelAjax 方法来取消请求
        method: ajaxDate.method || 'post',//（可选项）异步请求方法类型（详见异步请求方法类型常量）
        cache: ajaxDate.cache || true,//（可选项）是否缓存，若缓存，下次没网络时请求则会使用缓存
        timeout: ajaxDate.timeout || 0,//（可选项）超时时间，单位毫秒
        dataType: 'json',//（可选项）返回数据类型（详见异步请求返回数据类型常量）
        charset: ajaxDate.charset,//（可选项）当响应头里面没有返回字符集编码时，使用此编码来解析数据
        headers: headers,//（可选项）请求头
        report: ajaxDate.report,//（可选项）是否实时返回上传文件进度
        returnAll: ajaxDate.returnAll,//可选项）是否需要返回所有 response 信息，为 true 时，返回的头信息获取方法(ret.headers)，消息体信息获取方法(ret.body)，状态码获取方法(ret.statusCode)
        async: true,
        data: values,
        success: function (ret) {
            if((ret != '')&&(ret != null)){
                console.log(ret);
            }
            if(ret.status == 0){
                if(typeof ajaxData.callback == 'function'){
                    ajaxData.callback(ret);
                }
            }else{
                console.log(ret.message);
                if(typeof ajaxData.err_callback == 'function'){
                    ajaxData.err_callback(ret);
                }
               
            }
        },
        error: function (err) {
            console.log(err);
            if (typeof ajaxDate.error_callback == "function") {
                ajaxDate.error_callback(err);
            }
        }
    };
    $.ajax(ajaxJson);
}


function xxx(){
    goAjax({
        url: '',
        values: {
            phone: phone,
            password: pwd,
        },
        callback: function (ret) {
            //数据返回成功的处理
        },
        err_callback: function (err){
            //数据返回失败的处理 
        }
    });
}
