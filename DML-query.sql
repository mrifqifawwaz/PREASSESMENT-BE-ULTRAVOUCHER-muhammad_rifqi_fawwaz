--assuming i had table that create with this query
CREATE TABLE parent_name_list (
    id INT PRIMARY KEY,
    name VARCHAR(100),
);

CREATE TABLE name_list (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    parent_id INT,
    FOREIGN KEY (parent_id) REFERENCES your_table_name(id)
);

-- this is the answer for query that resulting data with rows id, name, and parent_name
SELECT 
    nl.id,
    nl.name,
    parent.name AS parent_name
FROM
    name_list AS nl
LEFT JOIN 
    parent_name_list AS parent ON nl.parent_id = parent.id
