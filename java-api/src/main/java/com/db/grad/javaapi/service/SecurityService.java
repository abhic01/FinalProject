package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SecurityService {
    private SecurityRepository securityRepository;

    @Autowired
    public SecurityService (SecurityRepository securityRepository){
        this.securityRepository = securityRepository;
    }

    public List<Security> getAllSecurities() {
        return this.securityRepository.findAllSecurity();
    }

    public List<Security> getExpiringSecurities() {
        return this.securityRepository.getExpiringSecurities();
    }


    public List<Security> getExpiredSecurities() {
        return this.securityRepository.getExpiredSecurities();
    }
    
}