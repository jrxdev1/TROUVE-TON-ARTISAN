-- Afficher toutes les catégories
SELECT * FROM categories;

-- Afichier les spécialités avec leurs catégories
SELECT s.nom_specialites, c.nom_categories
FROM specialites s
JOIN categories c ON s.id_categories = c.id_categories;

-- Afficher les artisans
SELECT 
  a.nom_artisans,
  s.nom_specialites,
  c.nom_categories,
  a.ville_artisans,
  a.note_artisans
FROM artisans a
JOIN specialites s ON a.id_specialites = s.id_specialites
JOIN categories c ON s.id_categories = c.id_categories;
