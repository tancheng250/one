<%@ page import="java.util.Map" %>
<%@ page import="java.util.HashMap" %><%--
  Created by IntelliJ IDEA.
  User: TANCHENG
  Date: 2021/4/14
  Time: 11:38
  To change this template use File | Settings | File Templates.
--%>
<%--language 属性 表示 jsp 翻译后是什么语言文件。暂时只支持 java。 --%>
<%--contentType 属性 表示 jsp 返回的数据类型是什么。也是源码中 response.setContentType()参数值 --%>
<%--pageEncoding 属性 表示当前 jsp 页面文件本身的字符集。--%>
<%--import 属性 跟 java 源代码中一样。用于导包，导类。--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>


<%--autoFlush 属性 设置当 out 输出流缓冲区满了之后，是否自动刷新冲级区。默认值是 true。--%>
<%--buffer 属性 设置 out 缓冲区的大小。默认是 8kb--%>
<%@ page autoFlush="true" buffer="8kb" %>


<%--errorPage 属性 设置当 jsp 页面运行时出错，自动跳转去的错误页面路径 发生错误跳转--%>
<%@ page errorPage="errorPage.jsp" %>
<%--isErrorPage 属性 设置当前 jsp 页面是否是错误信息页面。默认是 false。如果是 true 可以 获取异常信息。--%>
<%@ page isErrorPage="false" %>
<%--&lt;%&ndash;session 属性 设置访问当前 jsp 页面，是否会创建 HttpSession 对象。默认是 true  --%>
<%--extends 属性 设置 jsp 翻译出来的 java 类默认继承谁。--%>

<%--<%@ page session="true"  extends="com.sun.accessibility" %>--%>



<%--声明脚本 <%! 声明 /%> 少少用  会写到代码用进行声明 不会显示--%>
<%--声明脚本练习： --%>
<%--1、声明类属性--%>
<%!
     private int a = 1;
    private double b = 1.23;
    private char c ='a';
    private String str = "hello world";
    private static Map<String ,Object> map;

%>
<%-- 2、声明 static 静态代码块--%>
<%!
    static {
    map = new HashMap<String, Object>();
    map.put("key1","string1");
    map.put("key2","string2");
    map.put("key3","string3");
    }
%>
<%-- 3、声明类方法--%>
<%!
    public static  Integer sum(){
    return 12;
}%>
<%-- 4、声明内部类--%>
<%!
    public class A{
        private Integer i = null;
        private String str1 = "内部类";
    }
%>



<%--表达式脚本（输出）--%>
<%--
    格式
    <%= 输出的值 %>
 --%>
<%--练习： --%>
<%--1. 输出整型 --%>
<%-- 调用刚刚声明的属性值 --%>
<%= a %>
<%--2. 输出浮点型--%>
<%-- 调用刚刚声明的属性值 --%>
<%= b %>
<%--3. 输出字符串--%>
<%-- 调用刚刚声明的属性值 --%>
<%= c %>
<%--4. 输出对象--%>
<%-- 调用实现 --%>

<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>

  </body>
</html>
