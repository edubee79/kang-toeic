const https = require('https');
const fs = require('fs');

const envFile = fs.readFileSync('.env.local', 'utf8');
const match = envFile.match(/GEMINI_API_KEY=(.*)/);
if (!match) {
    console.error('API key not found');
    process.exit(1);
}
const apiKey = match[1].trim();

const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models?key=${apiKey}`,
    method: 'GET',
};

const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const json = JSON.parse(data);
        if (json.models) {
            console.log('Available Models:');
            json.models.filter(m => m.supportedGenerationMethods.includes('generateContent')).forEach(m => {
                console.log(`- ${m.name}`);
            });
        } else {
            console.log(data);
        }
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.end();
