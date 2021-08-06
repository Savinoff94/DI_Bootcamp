CREATE TABLE houses (
  house_id SERIAL,
  rooms integer,
  area integer,
  PRIMARY KEY (house_id)
);

ALTER TABLE houses
ADD fk_builder_id INTEGER
REFERENCES builders(builder_id) ON DELETE CASCADE

CREATE TABLE owners (
  owner_id INTEGER NOT NULL,
  family_name VARCHAR(50),
  fk_owner_id integer,
  PRIMARY KEY (owner_id),
  CONSTRAINT fk_owner_id FOREIGN KEY (fk_owner_id) REFERENCES houses (house_id)
);

CREATE TABLE builders (
  builder_id SERIAL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (builder_id)
);

CREATE TABLE houses_builders(
	builder_id INTEGER NOT NULL REFERENCES builders(builder_id) ON UPDATE CASCADE,
	house_id INTEGER NOT NULL REFERENCES houses(house_id) ON UPDATE CASCADE
)
