package com.wnwy.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author wang
 * @version 1.0
 * @
 */
@Controller
@RequestMapping("/user")
public class UserController {

    //去登陆页
    @RequestMapping("/toLogin")
    public String goToLogin(){
        return "pages/login";
    }

    //去注册页
    @RequestMapping("/toRegister")
    public String goToRegister(){
        return "pages/register";
    }

}
