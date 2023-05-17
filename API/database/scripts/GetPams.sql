DELIMITER //

CREATE PROCEDURE sp_get_pams()
BEGIN
    SELECT pam_id, name, last_name, email, DATE_FORMAT(birth_date, '%Y/%m/%d') as birth_date FROM pam;
END// 

DELIMITER ;