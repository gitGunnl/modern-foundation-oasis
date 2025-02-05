import fs from 'fs';

const filePaths = [
  'src/pages/blog/index.tsx',
  'src/pages/blog/[id].tsx',
    'src/data/blogPosts.json',
    'scripts/add-blog.js',
    'blog-template.txt'
];

let outputContent = '';

filePaths.forEach(filePath => {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        outputContent += `### ${filePath}\n\`\`\`\n${content}\n\`\`\`\n\n`;
    } catch (err) {
        console.error(`Error reading file ${filePath}:`, err);
    }
});

try {
    fs.writeFileSync('codeCollection.txt', outputContent);
    console.log('Code collection complete! Check codeCollection.txt');
} catch (err) {
    console.error('Error writing output file:', err);
}