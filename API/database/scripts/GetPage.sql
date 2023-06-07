DELIMITER //

CREATE PROCEDURE sp_get_page(
	in p_page_id int
)
BEGIN
    SELECT * FROM page where page_id = p_page_id;
END// 

DELIMITER ;