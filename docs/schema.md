# Schema Information

## users
| column name     | data type | details                                |
|-----------------|-----------|----------------------------------------|
| id              | integer   | primary key                            |
| fname           | string    | null: false                            |
| lname           | string    | null: false                            |
| username        | string    | null: false                            |
| image_url       | string    | default: "/assets/default_avatar.png"  |
| description     | text      | null: false
| password_digest | string    | null: false                            |
| session_token   | string    | null: false, index: true, unique: true |

## pins
| column name | data type | details     |
|-------------|-----------|-------------|
| id          | integer   | primary key |
| url         | string    | null: fals  |
| image_url   | string    | null: false |

## boards
| column name | data type | details                                                  |
|-------------|-----------|----------------------------------------------------------|
| id          | integer   | primary key                                              |
| title       | string    | null: false                                              |
| description | string    | null: false                                              |
| user_id     | integer   | null: false, index: true, foreign key (references users) |

## boardpins
| column name | data type | details                                                   |
|-------------|-----------|-----------------------------------------------------------|
| id          | integer   | primary key                                               |
| board_id    | integer   | null: false, index: true, foreign key (references boards) |
| pin_id      | integer   | null: false, index: true, foreign key (references pins)   |
| description | string    | null: false                                               |

## follows
|column name | data type | details                                                |
|------------|-----------|--------------------------------------------------------|
|id          | integer   | primary key                                            |
|board_id    | integer   | not null, index: true, foreign key (references boards) |
|user_id     | integer   | not null, index: true, foreign key (references users)  |

## hearts
|column name | data type | details                                               |
|------------|-----------|-------------------------------------------------------|
|id          | integer   | primary key                                           |
|pin_id      | integer   | not null, index: true, foreign key (references pins)  |
|user_id     | integer   | not null, index: true, foreign key (references users) |

### Bonuses

## user_friendships
| column name | data type | details                         |
|-------------|-----------|---------------------------------|
| id          | integer   | primary key                     |
| user_id     | integer   | null: false, index: true        |
| friend_id   | integer   | null: false, index: true        |
| state       | string    | default: "pending", index: true |

## user_messages
| column name | data type | details                   |
|-------------|-----------|---------------------------|
| id          | integer   | primary key               |
| message     | text      | null: false               |
| sender_id   | integer   | null:, false, index: true |
| receiver_id | integer   | null: false, index: true  |

## locations
| column name | data type | details     |
|-------------|-----------|-------------|
| id          | integer   | primary key |
| address     | string    | null: false |
| latitude    | float     |             |
| longitude   | float     |             |



