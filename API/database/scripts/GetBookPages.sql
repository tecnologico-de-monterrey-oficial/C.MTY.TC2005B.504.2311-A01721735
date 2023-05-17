DELIMITER //

CREATE PROCEDURE sp_get_book_pages(
	in p_book_id int
)
BEGIN
    SELECT *  
    FROM page where book_id = p_book_id;
END// 

DELIMITER ;