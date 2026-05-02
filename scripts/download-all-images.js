const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Tüm görselleri indirmek için URL'ler ve hedef dosya yolları
const imagesToDownload = [
  // Blog görselleri
  {
    url: 'https://www.cyprusivflabs.com/images/treatments/egg-donation.jpg',
    dest: 'public/images/treatments/egg-donation.jpg'
  },
  // Diğer görselleri buraya ekleyebilirsiniz
  // Orijinal siteden görsellerin URL'lerini buraya ekleyin
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

    const request = protocol.get(url, (response) => {
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
        if (fs.existsSync(dest)) {
          fs.unlinkSync(dest);
        }
        downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        file.close();
        if (fs.existsSync(dest)) {
          fs.unlinkSync(dest);
        }
        reject(new Error(`HTTP ${response.statusCode}: ${url}`));
      }
    });

    request.on('error', (err) => {
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
  console.log('\nNot: Orijinal siteden (www.cyprusivflabs.com) tüm görsellerin URL\'lerini');
  console.log('bu script\'e eklemeniz gerekiyor. Şu anda sadece örnek görseller eklenmiştir.');
}

downloadAllImages();
