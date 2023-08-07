package com.db.grad.javaapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.SecurityBookTrades;

import com.db.grad.javaapi.service.SecurityBookTradesService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class SecurityBookTradesController {
    private SecurityBookTradesService securityBookTradesService;

    @Autowired
    public SecurityBookTradesController(SecurityBookTradesService sbts) {
        this.securityBookTradesService = sbts;
    }

    @GetMapping("/bonds/{name}")
    public ResponseEntity<List<SecurityBookTrades>> getUserSecurities(@PathVariable(value = "name") String name) throws ResourceNotFoundException {
        List<SecurityBookTrades> securities = securityBookTradesService.getAll(name);
        return ResponseEntity.ok().body(securities);
    }
}
