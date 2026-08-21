const fs = require('fs');
const path = require('path');

const b64Dir = path.join(__dirname, '..', 'images_b64');
const targetBannersDir = path.join(__dirname, '..', 'images', 'banners');

if (fs.existsSync(b64Dir)) {
    if (!fs.existsSync(targetBannersDir)) {
        fs.mkdirSync(targetBannersDir, { recursive: true });
    }

    const files = fs.readdirSync(b64Dir);
    files.forEach(file => {
        if (file.endsWith('.b64')) {
            const rawName = file.replace(/\.b64$/, '');
            let targetPath;
            if (rawName.startsWith('images__banners__')) {
                const imgName = rawName.replace('images__banners__', '');
                targetPath = path.join(targetBannersDir, imgName);
            } else {
                targetPath = path.join(__dirname, '..', rawName.replace(/__/g, '/'));
            }

            const b64Content = fs.readFileSync(path.join(b64Dir, file), 'utf8');
            const buffer = Buffer.from(b64Content, 'base64');
            fs.writeFileSync(targetPath, buffer);
            console.log(`Reconstructed ${targetPath} (${buffer.length} bytes)`);
        }
    });
}
