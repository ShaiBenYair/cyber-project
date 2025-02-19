CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    api-shelf-k VARCHAR(50),
);
