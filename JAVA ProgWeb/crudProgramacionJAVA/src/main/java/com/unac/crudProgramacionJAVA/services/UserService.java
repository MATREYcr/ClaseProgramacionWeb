package com.unac.crudProgramacionJAVA.services;

import com.unac.crudProgramacionJAVA.dto.UserDTO;

import java.util.List;

public interface UserService {
    UserDTO saveUser(UserDTO userDTO ); //lo que va a devolver el metodo el lo que esta antes del nombre de la funcion (saveUser)
    List<UserDTO> getUsers();
}
