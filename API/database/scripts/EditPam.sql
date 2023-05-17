DELIMITER //

CREATE PROCEDURE sp_edit_pam (
	IN p_pam_id int,    
	IN p_name VARCHAR(100),
    IN p_last_name VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_birth_date DATETIME
)
BEGIN
    UPDATE PAM 
    SET 
    name = p_name, 
    last_name = p_last_name, 
    email = p_email, 
    birth_date = p_birth_date
    WHERE pam_id = p_pam_id; 
END// 

DELIMITER ;