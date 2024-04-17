package com.unac.crudProgramacionJAVA.dao;

import com.unac.crudProgramacionJAVA.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<UserEntity,Integer> {

}
