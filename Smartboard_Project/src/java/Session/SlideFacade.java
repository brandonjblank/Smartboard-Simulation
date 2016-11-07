/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Session;

import Tables.Slide;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author brandon
 */
@Stateless
public class SlideFacade extends AbstractFacade<Slide> {

    @PersistenceContext(unitName = "3916ProjectPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public SlideFacade() {
        super(Slide.class);
    }
    
}
