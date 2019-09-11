package com.wnwy.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author wang
 * @version 1.0
 * @ 用于搭建项目测试
 */
@Controller
@RequestMapping("/view")
public class ViewController {

    @RequestMapping("{view}.html")
    public String view(@PathVariable("view")String view){
        return "view";
    }

    
    @RequestMapping("/home-page")
    public String home_page(){
        return "home-page";
    }

}
