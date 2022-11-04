package com.capstone.repository;

import com.capstone.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    public  User findByEmailIdAndPassword(String emailId, String password);
}