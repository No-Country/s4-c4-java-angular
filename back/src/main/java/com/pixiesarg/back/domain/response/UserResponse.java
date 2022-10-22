package com.pixiesarg.back.domain.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {

    private String firstName;

    private String lastName;

    private String email;

    private String token;

    private Long id;
}
