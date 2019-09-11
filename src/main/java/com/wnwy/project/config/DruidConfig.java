package com.wnwy.project.config;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.servlet.Filter;
import javax.sql.DataSource;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * @author wang
 * @version 1.0
 * @ 只是实现了将DataSource对象变成了 DruidDataSource 对象
 */
@Configuration
public class DruidConfig {

    /**
     * 绑定数据源配置
     * @return
     */
    @ConfigurationProperties(prefix = "spring.datasource")
    @Bean
    public DataSource druidDataSource(){
        return new DruidDataSource();
    }

    /**
     * 配置druid 监控
     * @return
     */
    @Bean
    public ServletRegistrationBean statViewServlet(){
        //ServletRegistrationBean 是一个配置管理后台的servlet
        ServletRegistrationBean<StatViewServlet> bean = new
                ServletRegistrationBean<>(new StatViewServlet(),"/druid/*");
        //配置初始化参数
        Map<String,String> initParam = new HashMap<>();
        //访问的用户名密码
        initParam.put(StatViewServlet.PARAM_NAME_USERNAME,"admin");
        initParam.put(StatViewServlet.PARAM_NAME_PASSWORD,"123456");
        //允许访问的ip,默认所有IP可访问
        initParam.put(StatViewServlet.PARAM_NAME_ALLOW,"");
        initParam.put(StatViewServlet.PARAM_NAME_DENY,"192.167.10.2");
        //设置初始化参数
        bean.setInitParameters(initParam);
        return bean;
    }

    /**
     * 配置一个监听的 Filter
     * @return
     */
    @Bean
    public FilterRegistrationBean filterRegistrationBean(){
        FilterRegistrationBean<Filter> bean = new FilterRegistrationBean<>();
        bean.setFilter(new WebStatFilter());
        //配置初始化参数
        Map<String,String> initParam = new HashMap<>();
        //排除请求
        initParam.put(WebStatFilter.PARAM_NAME_EXCLUSIONS,"*.js,*.css,/druid/*");
        //拦截所有请求
        bean.setUrlPatterns(Arrays.asList("/*"));
        return bean;
    }






}
