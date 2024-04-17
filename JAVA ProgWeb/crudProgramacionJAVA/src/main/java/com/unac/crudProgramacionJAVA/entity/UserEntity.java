package com.unac.crudProgramacionJAVA.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;
@Table(name= "users") //en la base de datos no se va a llamar userentity sino users
@Entity
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity implements Serializable {

    @Id
    @Column(name="id_user")
    private Integer idUser; //va a ser la llave primaria
    private String name;
    private String email;

    @Temporal(TemporalType.DATE)
    private Date birthdate;


}
