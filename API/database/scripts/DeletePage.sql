DELIMITER //

CREATE PROCEDURE sp_delete_page (
    IN p_page_id int
)
BEGIN
    DELETE FROM page 
    WHERE page_id = p_page_id;
END// 

DELIMITER ;