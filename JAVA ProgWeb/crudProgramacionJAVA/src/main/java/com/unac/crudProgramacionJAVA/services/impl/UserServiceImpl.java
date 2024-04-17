package com.unac.crudProgramacionJAVA.services.impl;

import com.unac.crudProgramacionJAVA.dao.UserDAO;
import com.unac.crudProgramacionJAVA.dto.UserDTO;
import com.unac.crudProgramacionJAVA.entity.UserEntity;
import com.unac.crudProgramacionJAVA.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDAO userDAO;
    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        UserEntity userEntity = UserEntity.builder()
                .idUser(userDTO.getIdUser())
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .birthdate(userDTO.getBirthdate())
                .build();
        return UserDAO.save(UserEntity);


    }

    @Override
    public List<UserDTO> getUsers() {
        return null;
    }
}
