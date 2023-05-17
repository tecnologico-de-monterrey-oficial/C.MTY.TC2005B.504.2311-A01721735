DELIMITER //

CREATE PROCEDURE sp_get_pam(
	IN p_pam_id int    
	)

BEGIN
    SELECT pam_id, name, last_name, email, DATE_FORMAT(birth_date, '%Y/%m/%d') as birth_date FROM pam
   	where pam_id = p_pam_id;
END// 

DELIMITER ;