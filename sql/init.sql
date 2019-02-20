CREATE DATABASE IF NOT EXISTS eth_ec_server CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE USER IF NOT EXISTS 'eth_ec_serveruser'@'%' IDENTIFIED BY 'eth_ec_serverpass';
GRANT ALL PRIVILEGES ON eth_ec_server.* TO 'eth_ec_serveruser'@'%';

FLUSH PRIVILEGES;
