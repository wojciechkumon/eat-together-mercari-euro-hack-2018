package com.blackheronteam.EatTogether.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Cousine {

    @Id
    @GeneratedValue
    Long id;
    String cousineName;
}
