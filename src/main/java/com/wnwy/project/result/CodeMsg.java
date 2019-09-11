package com.wnwy.project.result;

/**
 * @author wang
 * @version 1.0
 * code 表示编码
 * msg 表示信息
 */
public class CodeMsg {
    private Integer code;
    private String msg;

    //各个状态返回的信息及编码定义在下面

    //通用异常
    public static CodeMsg SUCCESS = new CodeMsg(0,"success");
    public static CodeMsg SERVER_ERROR = new CodeMsg(500100,"服务端异常");

    //登录模块异常 5002xx

    //商品管理异常 5003xx

    //public CodeMsg(){}

    private CodeMsg(Integer code,String msg) {
        this.code = code;
        this.msg = msg;
    }


    //封装
    public Integer getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }


}
