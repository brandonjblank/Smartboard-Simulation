/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Beans;

import java.io.Serializable;
import javax.enterprise.context.SessionScoped;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

/**
 *
 * @author Brandon Blank
 */
@SessionScoped
@ManagedBean
public class ProjectTracker implements Serializable{

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    
    private static int ProjectID = 0;
    private String message = "New slide added";
    private boolean flag = false;

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }

    public static String getProjectID() {
        String str = String.valueOf(ProjectID);
        return str;
    }

    public static void setProjectID(int ProjectID) {
        ProjectTracker.ProjectID = ProjectID;

    }
    
}
