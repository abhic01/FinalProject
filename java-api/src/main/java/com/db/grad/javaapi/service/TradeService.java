package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Trades;
import com.db.grad.javaapi.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TradeService {
    private TradeRepository tradeRepository;

    @Autowired
    public TradeService (TradeRepository tradeRepository){
        this.tradeRepository = tradeRepository;
    }

    public List<Trades> getAllTrades() {
        return this.tradeRepository.findAllTrades();
    }
}