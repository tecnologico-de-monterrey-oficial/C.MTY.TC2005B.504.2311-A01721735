DELIMITER //

CREATE PROCEDURE sp_add_page (
    IN p_book_id int,
	IN p_page_no int,
    IN p_page VARCHAR(255)
)
BEGIN
    INSERT INTO page 
    (book_id, page_no, page)
    VALUES (p_book_id, p_page_no, p_page);
END// 

DELIMITER ;