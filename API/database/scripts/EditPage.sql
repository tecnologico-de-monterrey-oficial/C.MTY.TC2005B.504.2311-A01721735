DELIMITER //

CREATE PROCEDURE sp_edit_page (
	IN p_page_id int,
	IN p_book_id int,
	IN p_page_no int,
    IN p_page VARCHAR(255)
)
BEGIN
    UPDATE page 
    SET 
    book_id = p_book_id, 
    page_no = p_page_no, 
    page = p_page
    WHERE page_id = p_page_id; 
END// 

DELIMITER ;