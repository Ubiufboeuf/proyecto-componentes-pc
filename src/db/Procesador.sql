CREATE TABLE Procesadores(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  procesador_id TEXT UNIQUE,
  marca TEXT,
  fullName TEXT UNIQUE,
  especificaciones TEXT
);

