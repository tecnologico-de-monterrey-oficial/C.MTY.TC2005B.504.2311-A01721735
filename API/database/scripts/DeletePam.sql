DELIMITER //

CREATE PROCEDURE sp_delete_pam (
    IN p_pam_id int
)
BEGIN
    DELETE FROM PAM 
    WHERE pam_id = p_pam_id;
END// 

DELIMITER ;