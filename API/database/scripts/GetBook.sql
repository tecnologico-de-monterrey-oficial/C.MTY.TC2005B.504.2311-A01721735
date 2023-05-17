DELIMITER //

CREATE PROCEDURE sp_get_book(
	in p_book_id int
)
BEGIN
    SELECT * FROM book where book_id = p_book_id;
END// 

DELIMITER ;