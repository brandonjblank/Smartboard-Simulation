/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Beans;

import java.io.Serializable;
import java.util.ArrayList;
import javax.ejb.Stateless;
import javax.faces.bean.ManagedBean;
import javax.swing.JOptionPane;

/**
 *
 * @author brandon
 */
@ManagedBean
@Stateless
public class ImageData implements Serializable{
     private static ArrayList<String> str = new ArrayList<String>();
     String img;

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img.toString();
        this.str.add(this.img);
    }

   

    public ArrayList<String> getStr() {
        return str;
    }

    public void setStr(Object var) {
        
        this.str.add(var.toString()); 
    }    

}
