package com.db.grad.javaapi.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.db.grad.javaapi.model.SecurityBookTrades;
import com.db.grad.javaapi.repository.SecurityBookTradesRepository;

@Service
public class SecurityBookTradesService {
    @Autowired
    private SecurityBookTradesRepository securityBookTradesRepository;

    public List<SecurityBookTrades> getAll(String user) {
        SecurityBookTrades userObject = new SecurityBookTrades();
        userObject.setName(user);
        return securityBookTradesRepository.findAll(userObject);
    }
}
