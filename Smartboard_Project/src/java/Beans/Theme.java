/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Beans;

import java.io.Serializable;
import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.SessionScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

/**
 *
 * @author Brandon Blank
 */
@ManagedBean
@ApplicationScoped
public class Theme implements Serializable {

    private static String defaultTheme = "Normal";
    private static String currentTheme = "Normal";
    private static String temp;

    public String getCurrentTheme() {
        return currentTheme;
    }

    public static void setCurrentTheme() {
        
        if (temp.equalsIgnoreCase("Alternate Theme"))
        {
            Theme.currentTheme = "Alternate";        
        }
        else
        {
            Theme.currentTheme = "Normal"; 
        }
    }
    
    public String getTheme()
    {
        if (this.getCurrentTheme().equalsIgnoreCase("normal"))
        {
            temp = "Alternate Theme";
          return temp;           
        }
        else
        {
            temp = "Normal Theme";
            return temp;
        }
    }
    
    
//    private String ThemeType = "Normal";
//    private String currentTheme = defaultTheme;
//
//    public String getCurrentTheme() {
//        return currentTheme;
//    }
//    
//    
//    public String getThemeType() {
//        if (currentTheme.equalsIgnoreCase("Normal")) {
//                        return "Alternate Theme";
//        } else if (currentTheme.equalsIgnoreCase("Alternate")) {          
//            return "Normal Theme";
//        } else {
//            return "error";
//        }
//    }
//
//    public void setCurrentTheme() 
//    {
//        String str = getThemeType();
//        
//        if (str.equalsIgnoreCase("Alternate Theme"))
//        {     
//            this.currentTheme = "Alternate";
//        }
//        else if (str.equalsIgnoreCase("Normal Theme"))
//        {        
//            this.currentTheme = "Normal";
//        }
//        else
//        {
//            this.currentTheme = "Normal";
//        }
//    }
//    

    public  String getDefaultTheme() {
        return defaultTheme;
    }

    public static void setDefaultTheme(String defaultTheme) {
        Theme.defaultTheme = defaultTheme;
    }
}
