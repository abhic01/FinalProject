package com.db.grad.javaapi.controller;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class SecurityController {
    private SecurityService SecurityService;

    @Autowired
    public SecurityController(SecurityService SecurityService) {
        this.SecurityService = SecurityService;
    }

    // Display all the bonds in the system
    @GetMapping("/bonds")
    public List<Security> getAllSecurities() {
        return SecurityService.getAllSecurities();
    }

    // Display all the bonds whose maturity date is within the next/last 5 days
    @GetMapping("/expiring/bonds")
    public List<Security> getExpiringSecurities() {
        return SecurityService.getExpiringSecurities();
    }

    // Display all the bonds that Pass maturity but not redeemed
    @GetMapping("/expired/bonds")
    public List<Security>getExpiredSecurities () {
        return SecurityService.getExpiredSecurities();
    }

    @GetMapping("/redeemed/bonds")
    public List<Security>getRedeemingSecurities () {
        return SecurityService.getRedeemingSecurities();
    }

    @GetMapping("/due_today/bonds")
    public List<Security>getSecuritiesDueToday () {
        return SecurityService.getSecuritiesDueToday();
    }

    @GetMapping("/recent/bonds")
    public List<Security>getRecenSecurities () {
        return SecurityService.getRecenSecurities();
    }


    



}