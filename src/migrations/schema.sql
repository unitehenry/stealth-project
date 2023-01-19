CREATE TABLE IF NOT EXISTS tickets (
  id UUID,
  number VARCHAR,
  name VARCHAR,
  email VARCHAR,
  description VARCHAR,
  status VARCHAR,
  created TIMESTAMP,
  modified TIMESTAMP
);
