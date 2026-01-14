INSERT INTO categories (nom_categories) VALUES
('Bâtiment'),
('Services'),
('Fabrication'),
('Alimentation');


INSERT INTO  specialites (nom_specialites, id_categories) VALUES
('Boucher', (SELECT id_categories FROM categories WHERE nom_categories ='Alimentation')),
('Boulanger', (SELECT id_categories FROM categories WHERE nom_categories ='Alimentation')),
('Chocolatier', (SELECT id_categories FROM categories WHERE nom_categories ='Alimentation')),
('Traiteur', (SELECT id_categories FROM categories WHERE nom_categories ='Alimentation')),
('Chauffagiste', (SELECT id_categories FROM categories WHERE nom_categories ='Bâtiment')),
('Electricien', (SELECT id_categories FROM categories WHERE nom_categories ='Bâtiment')),
('Menuisier', (SELECT id_categories FROM categories WHERE nom_categories ='Bâtiment')),
('Plombier', (SELECT id_categories FROM categories WHERE nom_categories ='Bâtiment')),
('Bijoutier', (SELECT id_categories FROM categories WHERE nom_categories ='Fabrication')),
('Couturier', (SELECT id_categories FROM categories WHERE nom_categories ='Fabrication')),
('Ferronier', (SELECT id_categories FROM categories WHERE nom_categories ='Fabrication')),
('Coiffeur', (SELECT id_categories FROM categories WHERE nom_categories ='Services')),
('Fleuriste', (SELECT id_categories FROM categories WHERE nom_categories ='Services')),
('Toiletteur', (SELECT id_categories FROM categories WHERE nom_categories ='Services')),
('Webdesign', (SELECT id_categories FROM categories WHERE nom_categories ='Services'));


INSERT INTO  artisans (nom_artisans, note_artisans, ville_artisans, a_propos_artisans, email_artisans, site_web_artisans, top_artisans, id_specialites) VALUES
('Boucherie Dumont',
4.5,
'Lyon',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'boucherie.dumond@gmail.com',
NULL,
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Boucher')
),

('Au pain chaud',
4.8,
'Montélimar',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'aupainchaud@hotmail.com',
NULL,
TRUE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Boulanger')
),

('Chocolaterie Labbé',
4.9,
'Lyon',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'chocolaterie-labbe@gmail.com',
'https://chocolaterie-labbe.fr',
TRUE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Chocolatier')
),

('Traiteur Truchon',
4.1,
'Lyon',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'contact@truchon-traiteur.fr',
'https://truchon-traiteur.fr',
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Traiteur')
),

('Orville Salmons',
5.0,
'Evian',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'o-salmons@live.com',
NULL,
TRUE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Chauffagiste')
),


('Mont Blanc Eléctricité',
4.5,
'Chamonix',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'contact@mont-blanc-electricite.com',
'https://mont-blanc-electricite.com',
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Electricien')
),


('Boutot & fils',
4.7,
'Bourg-en-Bresse',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'boutot-menuiserie@gmail.com',
'https://boutot-menuiserie.com',
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Menuisier')
),


('Vallis Bellemare',
4.0,
'Vienne',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'v.bellemare@gmail.com',
'https://plomberie-bellemare.com',
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Plombier')
),


('Claude Quinn',
4.2,
'Aix-les-bains',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'claude.quinn@gmail.com',
NULL,
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Bijoutier')
),


('Amitee Lécuyer',
4.5,
'Annecy',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'a.amitee@hotmail.com',
'https://lecuyer-couture.com',
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Couturier')
),


('Ernest Carignan',
5.0,
'Le Puy-en-Velay',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'e-carigan@hotmail.com',
NULL,
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Ferronier')
),


('Royden Charbonneau',
3.8,
'Saint-Priest',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'r.charbonneau@gmail.com',
NULL,
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Coiffeur')
),


('Leala Dennis',
3.8,
'Chambéry',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'l.dennos@hotmail.fr',
'https://coiffure-leala-chambery.fr',
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Coiffeur')
),


('C''est sup''hair',
4.1,
'Romans-sur-Isère',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'sup-hair@gmail.com',
'https://sup-hair.fr',
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Coiffeur')
),


('Le monde des fleurs',
4.6,
'Annonay',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'contact@le-monde-des-fleurs-annonay.fr',
'https://le-monde-des-fleurs-annonay.fr',
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Fleuriste')
),


('Valérie Laderoute',
4.5,
'Valence',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'v-laredoute@gmail.com',
NULL,
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Toiletteur')
),


('CM Graphisme',
4.4,
'Valence',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'contact@cm-graphisme.com',
'https://cm-graphisme.com',
FALSE,
(SELECT id_specialites FROM specialites WHERE nom_specialites = 'Webdesign')
);

