package com.db.grad.javaapi.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.db.grad.javaapi.model.Trades;
import com.db.grad.javaapi.repository.TradeRepository;

@Service
public class TradeService {
    @Autowired
    private TradeRepository tradesRepository;

    public List<Trades> getClientPosition(String id) {
        return tradesRepository.getClientPosition(id);
    }
}