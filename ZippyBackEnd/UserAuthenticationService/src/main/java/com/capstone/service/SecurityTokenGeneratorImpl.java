package com.capstone.service;

import com.capstone.entity.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityTokenGeneratorImpl implements SecurityTokenGenerator{

    @Override
    //    generateToken method will have Map return type which takes String and String
//    and based on the user we are creating token
    public Map<String, String> generateToken(User user){
        Date date = new Date();
        date.setMinutes(date.getMinutes()+60);

        System.out.println("\n\nExisting claims: "+ Jwts.claims().values());

        String jwttoken= Jwts.builder()
                .setSubject(user.getFullName())
                .setIssuedAt(new Date())
                .setExpiration(date)

//                foodieAppKey is the key that has to be shared everyime you do
                .signWith(SignatureAlgorithm.HS256,"foodieAppKey").compact();
        Map<String,String>map=new HashMap<>();
        map.put("token",jwttoken);
        map.put("message","User successfully logged In");
        return map;
    }
}