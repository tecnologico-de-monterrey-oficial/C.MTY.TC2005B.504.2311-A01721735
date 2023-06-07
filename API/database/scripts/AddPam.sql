DELIMITER //

CREATE PROCEDURE sp_add_pam (
    IN p_name VARCHAR(100),
    IN p_last_name VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_birth_date DATETIME
)
BEGIN
    INSERT INTO PAM 
    (name, last_name, email, birth_date)
    VALUES (p_name, p_last_name, p_email, p_birth_date);
END// 

DELIMITER ;