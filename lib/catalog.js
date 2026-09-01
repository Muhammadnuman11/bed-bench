export const categories = [
  { name: 'Beds', image: '/products-images/new-beds/Bed 1.jpg' },
  { name: 'Sofas', image: '/products-images/new-sofas-sets/DSC04464.jpg' },
  { name: 'Dining Tables', image: '/products-images/dinning-chairs/atelier-dining-chair.png' },
  { name: 'Dining Chairs', image: '/products-images/dinning-chairs/atelier-dining-chair.png' },
  { name: 'Informal Chairs', image: '/products-images/informal-chairs/luna-lounge-chair.jpeg' },
  { name: 'Center Tables', image: '/products-images/center-tables/aster-coffee-table.jpeg' },
  { name: 'Ottomans', image: '/products-images/ottomans/mira-ottoman.jpeg' },
  { name: 'Sideboards', image: '/products-images/side-boards/nara-sideboard.jpg' },
  { name: 'LCD Rack', image: '/products-images/tv-consoles/frame-tv-console.jpg' },
  { name: 'Cushions', image: '/products-images/cushions/linen-cloud-cushion.jpeg' },
];

const materials = {
  Beds: 'Upholstered fabric, solid wood frame',
  Sofas: 'Performance fabric, kiln-dried hardwood',
  'Dining Tables': 'Solid wood, polished stone or veneer top',
  'Dining Chairs': 'Textured upholstery, solid wood frame',
  'Informal Chairs': 'Tailored upholstery, hardwood frame',
  'Center Tables': 'Natural stone, solid wood and metal',
  Ottomans: 'Textured upholstery, solid wood frame',
  Sideboards: 'Hand-finished wood, soft-close hardware',
  'LCD Rack': 'Veneered wood, matte metal details',
  Cushions: 'Woven cotton and linen blend',
};

const imageSets = {
  Beds: [
    ['Solace Bed', 'Bed 1.jpg'],
    ['Haven Bed', 'Bed 2.jpg'],
    ['Arlo Bed', 'Bed 3.jpg'],
    ['Luna Bed', 'Bed 4.jpg'],
    ['Cove Bed', 'Bed 5.jpg'],
    ['Rhea Bed', 'Bed 6.jpg'],
    ['Vale Bed', 'Bed 7.jpg'],
  ],
  Sofas: [
    ['Nero Sectional', 'DSC04464.jpg'],
    ['Aster Sofa', 'DSC04477.jpg'],
    ['Marlow Sofa', 'DSC04497.jpg'],
    ['Cove Sofa', 'DSC04523.jpg'],
    ['Arden Sofa', 'DSC04528.jpg'],
    ['Sable Sofa', 'DSC04535.jpg'],
    ['Silva Sofa', 'DSC04549.jpg'],
    ['Serene Sofa', 'SHK00007.jpg'],
    ['Linden Sofa', 'SHK00035.jpg'],
    ['Noir Sofa', 'noir-sofa.jpeg'],
  ],
  'Dining Tables': [
    ['Aster Dining Table', 'atelier-dining-chair.png'],
    ['Mila Dining Table', 'marlow-dining-chair.png'],
    ['Cora Dining Table', 'tessa-dining-chair.jpeg'],
    ['Nora Dining Table', 'luma-dining-chair.jpeg'],
  ],
  'Dining Chairs': [['Atelier Dining Chair', 'atelier-dining-chair.png'], ['Marlow Dining Chair', 'marlow-dining-chair.png'], ['Tessa Dining Chair', 'tessa-dining-chair.jpeg'], ['Luma Dining Chair', 'luma-dining-chair.jpeg'], ['Cedar Dining Chair', 'cedar-dining-chair.jpeg'], ['Arden Dining Chair', 'arden-dining-chair.jpeg'], ['Briar Dining Chair', 'briar-dining-chair.jpeg'], ['Sienna Dining Chair', 'sienna-dining-chair.jpeg'], ['Elara Dining Chair', 'elara-dining-chair.jpeg']],
  'Informal Chairs': [['Luna Lounge Chair', 'luna-lounge-chair.jpeg'], ['Cleo Lounge Chair', 'cleo-lounge-chair.jpeg'], ['Nora Accent Chair', 'nora-accent-chair.jpeg'], ['Milo Accent Chair', 'milo-accent-chair.jpeg'], ['Eden Lounge Chair', 'eden-lounge-chair.jpeg'], ['Remy Lounge Chair', 'remy-lounge-chair.jpeg'], ['Iris Accent Chair', 'iris-accent-chair.jpeg'], ['Wren Lounge Chair', 'wren-lounge-chair.jpeg'], ['Mara Accent Chair', 'mara-accent-chair.jpeg'], ['Sage Lounge Chair', 'sage-lounge-chair.jpeg'], ['Owen Accent Chair', 'owen-accent-chair.jpeg']],
  'Center Tables': [['Aster Coffee Table', 'aster-coffee-table.jpeg'], ['Orbit Coffee Table', 'orbit-coffee-table.jpeg'], ['Mesa Coffee Table', 'mesa-coffee-table.jpeg'], ['Plinth Coffee Table', 'plinth-coffee-table.jpeg'], ['Halo Coffee Table', 'halo-coffee-table.jpeg'], ['Nook Coffee Table', 'nook-coffee-table.jpeg'], ['Arc Coffee Table', 'arc-coffee-table.jpeg']],
  Ottomans: [['Mira Ottoman', 'mira-ottoman.jpeg'], ['Sable Ottoman', 'sable-ottoman.jpeg'], ['Cove Ottoman', 'cove-ottoman.jpeg'], ['Dune Ottoman', 'dune-ottoman.jpeg'], ['Luma Ottoman', 'luma-ottoman.jpeg'], ['Arden Ottoman', 'arden-ottoman.jpeg'], ['Nola Ottoman', 'nola-ottoman.jpeg'], ['Twill Ottoman', 'twill-ottoman.jpeg'], ['Pebble Ottoman', 'pebble-ottoman.jpeg'], ['Moss Ottoman', 'moss-ottoman.jpeg'], ['Halo Ottoman', 'halo-ottoman.jpeg']],
  Sideboards: [['Nara Sideboard', 'nara-sideboard.jpg'], ['Marlow Sideboard', 'marlow-sideboard.jpg'], ['Cedar Sideboard', 'cedar-sideboard.jpg'], ['Linea Sideboard', 'linea-sideboard.jpg'], ['Ridge Sideboard', 'ridge-sideboard.jpg'], ['Vale Sideboard', 'vale-sideboard.jpg'], ['Arden Sideboard', 'arden-sideboard.jpg'], ['Sable Sideboard', 'sable-sideboard.jpg']],
  'LCD Rack': [['Frame TV Console', 'frame-tv-console.jpg'], ['Nara TV Console', 'nara-tv-console.jpg'], ['Linea TV Console', 'linea-tv-console.jpg'], ['Cedar TV Console', 'cedar-tv-console.jpg'], ['Marlow TV Console', 'marlow-tv-console.jpg'], ['Vale TV Console', 'vale-tv-console.jpg'], ['Ridge TV Console', 'ridge-tv-console.jpg'], ['Arden TV Console', 'arden-tv-console.jpg'], ['Sable TV Console', 'sable-tv-console.jpg'], ['Oasis TV Console', 'oasis-tv-console.jpg'], ['Milo TV Console', 'milo-tv-console.jpg'], ['Luma TV Console', 'luma-tv-console.jpg'], ['Dune TV Console', 'dune-tv-console.jpg']],
  Cushions: [['Linen Cloud Cushion', 'linen-cloud-cushion.jpeg'], ['Dune Weave Cushion', 'dune-weave-cushion.jpeg'], ['Sage Stripe Cushion', 'sage-stripe-cushion.jpeg'], ['Cove Boucle Cushion', 'cove-boucle-cushion.jpeg'], ['Clay Lumbar Cushion', 'clay-lumbar-cushion.jpeg'], ['Stone Panel Cushion', 'stone-panel-cushion.jpeg'], ['Moss Edge Cushion', 'moss-edge-cushion.jpeg'], ['Oat Tasseled Cushion', 'oat-tasseled-cushion.jpeg']],
};

const folders = {
  Beds: 'new-beds',
  Sofas: 'new-sofas-sets',
  'Dining Tables': 'dinning-chairs',
  'Dining Chairs': 'dinning-chairs',
  'Informal Chairs': 'informal-chairs',
  'Center Tables': 'center-tables',
  Sideboards: 'side-boards',
  'LCD Rack': 'tv-consoles',
};

export const products = Object.entries(imageSets).flatMap(([category, items]) => items.map(([name, file]) => ({
  name,
  category,
  material: materials[category],
  image: `/products-images/${folders[category] || category.toLowerCase().replaceAll(' ', '-')}/${file}`,
})));
