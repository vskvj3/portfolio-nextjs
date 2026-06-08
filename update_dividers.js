const fs = require('fs');
const glob = require('glob');

const topReplacement = `        <div className="cyber-divider mb-2">
          <span>┌</span><div className="cyber-divider-line"></div><span>┐</span>
        </div>`;

const bottomReplacement = `        <div className="cyber-divider mt-2">
          <span>└</span><div className="cyber-divider-line"></div><span>┘</span>
        </div>`;

const bottomContactReplacement = `        <div className="cyber-divider mt-4">
          <span>└</span><div className="cyber-divider-line"></div><span>┘</span>
        </div>`;

const footerReplacement = `        <div className="cyber-divider mb-4">
          <span>├</span><div className="cyber-divider-line" style={{ borderTop: "3px double var(--text-tertiary)" }}></div><span>┤</span>
        </div>`;

const files = [
  'src/components/cyberpunk/CyberpunkBlogPreview.js',
  'src/components/cyberpunk/CyberpunkContact.js',
  'src/components/cyberpunk/CyberpunkProjects.js',
  'src/components/cyberpunk/CyberpunkSkills.js'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace top divider
    content = content.replace(/<div className="cyber-divider mb-2">\s*┌[─]+┐\s*<\/div>/g, topReplacement);
    
    // Replace bottom divider (mb-2/mt-2)
    content = content.replace(/<div className="cyber-divider mt-2">\s*└[─]+┘\s*<\/div>/g, bottomReplacement);
    
    // Replace bottom for contact (mt-4)
    content = content.replace(/<div className="cyber-divider mt-4">\s*└[─]+┘\s*<\/div>/g, bottomContactReplacement);

    fs.writeFileSync(file, content);
  }
});

// Footer
if (fs.existsSync('src/components/layout/CyberpunkFooter.js')) {
  let footerContent = fs.readFileSync('src/components/layout/CyberpunkFooter.js', 'utf8');
  footerContent = footerContent.replace(/<div className="cyber-divider mb-4">\s*═[═]+\s*<\/div>/g, footerReplacement);
  fs.writeFileSync('src/components/layout/CyberpunkFooter.js', footerContent);
}

console.log("Done replacing dividers in JS files.");
