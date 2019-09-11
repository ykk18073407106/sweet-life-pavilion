package com.wnwy.project.result;

/**
 * @author wang
 * @version 1.0
 * @
 * 返回结果
 */

public class Result<T> {
    private Integer code;
    private String msg;
    private T data;

    /**
     * 成功时候调用
     * @param data
     * @param <T>
     * @return
     */
    public static <T> Result<T> success(T data){
        return new Result<T>(data);
    }

    public static <T> Result<T> error(CodeMsg cm){
        return new Result<T>(cm);
    }

    private Result(T data){//成功时候
        this.code = 0;
        this.msg = "success";
        this.data = data;
    }
    private Result(CodeMsg cm){//错误时候
        if (cm == null){
            return;
        }
        this.code = cm.getCode();
        this.msg = cm.getMsg();
        this.data = null;
    }

    //只封装了get方法
    public void setCode(Integer code) {
        this.code = code;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Integer getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

    public T getData() {
        return data;
    }
}
