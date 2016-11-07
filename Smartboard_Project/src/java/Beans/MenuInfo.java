/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Beans;

import java.awt.event.ActionEvent;
import java.io.Serializable;
import javax.ejb.Stateless;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

/**
 *
 * @author Brandon Blank
 */
@ManagedBean
@ViewScoped
@Stateless
public class MenuInfo implements Serializable {

    public boolean visibility = false;
    private static String projectStatus = "Current Project"; 
    private static boolean status = false;

    public static boolean isStatus() {
        return status;
    }

    public static void setStatus() {
        if(MenuInfo.status == true)
        {
            MenuInfo.status = false;
        }
        else
        {
            MenuInfo.status = true;
        }
    }

    public static String getProjectStatus() {
        return projectStatus;
    }

    public static void setProjectStatus() {
        if (MenuInfo.status == true)
        {
             MenuInfo.projectStatus = "Current Project";
        }
        else
        {
         MenuInfo.projectStatus = "Create Project";
        }
    }

    public void setVisibility(boolean visibility) {
        this.visibility = visibility;
    }

    public boolean isVisibility() {
        return visibility;
    } 
    
    public void renderOption(ActionEvent action)
    {
        visibility = !visibility;
    }
}
