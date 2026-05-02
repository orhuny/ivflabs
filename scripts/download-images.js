const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Görselleri indirmek için URL'ler ve hedef dosya yolları
const imagesToDownload = [
  {
    url: 'https://www.cyprusivflabs.com/images/treatments/egg-donation.jpg',
    dest: 'public/images/treatments/egg-donation.jpg'
  },
  // Diğer görselleri buraya ekleyebilirsiniz
];

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    
    // Klasör yoksa oluştur
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ İndirildi: ${dest}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Redirect takibi
        file.close();
        fs.unlinkSync(dest);
        downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`HTTP ${response.statusCode}: ${url}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) {
        fs.unlinkSync(dest);
      }
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Görseller indiriliyor...\n');
  
  for (const image of imagesToDownload) {
    try {
      await downloadImage(image.url, image.dest);
    } catch (error) {
      console.error(`✗ Hata: ${image.url} - ${error.message}`);
    }
  }
  
  console.log('\nİndirme tamamlandı!');
}

downloadAllImages();
