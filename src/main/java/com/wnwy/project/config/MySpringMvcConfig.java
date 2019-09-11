package com.wnwy.project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author wang
 * @version 1.0
 * @
 */
@Configuration
public class MySpringMvcConfig {

    //配置默认访问的欢迎页
    @Bean
    public WebMvcConfigurer webMvcConfigurer(){
        return new WebMvcConfigurer() {
            //添加视图控制
            @Override
            public void addViewControllers(ViewControllerRegistry registry) {
                registry.addViewController("/").setViewName("home-page");
                registry.addViewController("/index.html").setViewName("home-page");
            }
        };
    }

}
