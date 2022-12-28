package com.web.wasd.document;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "user")
@ToString
public class UserCollections {

    private String userId;
    private String password;

    public UserCollections() {

    }

    @Builder
    public UserCollections(String userId, String password) {
        this.userId = userId;
        this.password = password;
    }

}
