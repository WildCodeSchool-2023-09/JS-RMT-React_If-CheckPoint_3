CREATE TABLE tile (
  id INT AUTO_INCREMENT NOT NULL,
  type VARCHAR(255) NOT NULL,
  coord_x INT NOT NULL,
  coord_y INT NOT NULL,
  has_treasure BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY(id)
);


CREATE TABLE boat (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  coord_x INT NOT NULL,
  coord_y INT NOT NULL,
  title_id INT NOT NULL,
  CONSTRAINT fk_boat_title
  FOREIGN KEY (title_id)
  REFERENCES tile(id)
  PRIMARY KEY(id)
);


