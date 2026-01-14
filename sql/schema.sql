-- Création de la base de données
DROP DATABASE IF EXISTS artisans_aura;
CREATE DATABASE artisans_aura CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE artisans_aura;

-- Création des tables :

-- Table "catégories"
CREATE TABLE categories (
    id_categories INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom_categories VARCHAR(100) NOT NULL UNIQUE
);

-- Table "spécialités"
CREATE TABLE specialites (
    id_specialites INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom_specialites VARCHAR(100) NOT NULL,
    id_categories INT NOT NULL,
    CONSTRAINT fk_specialite_categorie
    FOREIGN KEY (id_categories) REFERENCES categories(id_categories)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

-- Table "artisans"
CREATE TABLE artisans (
    id_artisans INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom_artisans VARCHAR(150) NOT NULL,
    note_artisans DECIMAL(2,1) CHECK (note_artisans BETWEEN 0 AND 5),
    ville_artisans VARCHAR(100) NOT NULL,
    a_propos_artisans TEXT,
    email_artisans VARCHAR(150) NOT NULL,
    site_web_artisans VARCHAR(255),
    top_artisans BOOLEAN DEFAULT FALSE,
    id_specialites INT NOT NULL,
    CONSTRAINT fk_artisan_specialite
    FOREIGN KEY (id_specialites) REFERENCES specialites(id_specialites)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);


