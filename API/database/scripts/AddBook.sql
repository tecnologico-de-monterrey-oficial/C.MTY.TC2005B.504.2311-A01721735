DELIMITER //

CREATE PROCEDURE sp_add_book (
    IN p_name VARCHAR(100),
    IN p_author VARCHAR(100),
    IN p_cover VARCHAR(100)
)
BEGIN
    INSERT INTO book 
    (name, author, cover)
    VALUES (p_name, p_author, p_cover);
END// 

DELIMITER ;