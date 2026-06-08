import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/554896818147/g, '554899468951');
content = content.replace(/9681-8147/g, '9946-8951');
fs.writeFileSync('src/App.tsx', content);
