DELIMITER //

CREATE PROCEDURE sp_delete_book (
    IN p_book_id int
)
BEGIN
    DELETE FROM book 
    WHERE book_id = p_book_id;
END// 

DELIMITER ;