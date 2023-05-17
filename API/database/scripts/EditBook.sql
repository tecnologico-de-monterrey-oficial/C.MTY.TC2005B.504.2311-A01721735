DELIMITER //

CREATE PROCEDURE sp_edit_book (
	IN p_book_id int,    
	IN p_name VARCHAR(100),
    IN p_author VARCHAR(100),
    IN p_cover VARCHAR(100)
)
BEGIN
    UPDATE book 
    SET 
    name = p_name, 
    author = p_author, 
    cover = p_cover
    WHERE book_id = p_book_id; 
END// 

DELIMITER ;