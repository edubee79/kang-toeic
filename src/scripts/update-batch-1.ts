const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');

const mapping = {
    "00f9Fr0i1UGCTKZ9d4CN": "av1",
    "016XUrDDzmzcr1v7h82f": "g1",
    "02K3WPzk5DY4H70RR0NE": "v6",
    "02uf0gtUGjBUzGV0hMQ2": "p6g",
    "050mWU0URhi4tYJfjqY6": "av1",
    "073BzE4mcQXcgxT2hb5Z": "v2",
    "08t07pcCxRKLX0FmLLSr": "c1",
    "0948YTya1Piww4hHKHYP": "v2",
    "09sW6I749EH6skSg9vRT": "av3",
    "0AytziN6d7Napu80nxGH": "a4",
    "0D3Ddopu7BmdMlKpm7ty": "v5",
    "0DDSNbpsKKLWruWRxUPe": "av2",
    "0DuI7wwSyjQ9wKfvQOFC": "n1",
    "0F1lGYPkzcU6ujvaiXPv": "pa2",
    "0HSLg9caM8ndMDNhGCnA": "g4",
    "0Hvuf6yQDaYqMfWY7IDU": "c1",
    "0J5TFau7AcBsiL2LPhjL": "a1",
    "0KdLcci97DEJQ1OGg7AI": "v2",
    "0Pv5Q4Ey17CCEzY6Jx1M": "pa4",
    "0QpYi13binIm1HH9oWzT": "v6",
    "0V8J0VDnz2uVdzzhSet4": "com1",
    "0Vcmyd61qD60CPqmgPII": "g1",
    "0VlvTT7FeosgkCazWJwD": "v5",
    "0WOzzM4U53aPczBcMrWx": "n1",
    "0ZiYRuXXeJwCBsOWGkg9": "a5",
    "0bR8MUFOIwMejtpEOgZO": "voc1",
    "0br3HrMjFV3t7rLsNTwp": "pr1",
    "0demQA6A2mxlVmbzoicb": "v6",
    "0f2PVphUN6XSWj5Z8mDP": "voc4",
    "0gaSkktJWvlxD8ezrzxj": "n1",
    "0gjzjqAx3WpHYq5QcNhe": "nc1",
    "0gpZQ4PjDkH2mh6Dz04b": "p2",
    "0h3z9NtUiWPEQpECzzAX": "n1",
    "0kKXoxurItDR9izZaMOt": "v5",
    "0knomfo3AGhKE2ANMMHX": "n3",
    "0nfyeKlFnXpBIAPOhLxZ": "pr5",
    "0oQJJ6RxflIf5g2HJ24l": "av1",
    "0paWBJUn7xz93qfvKMyP": "a2",
    "0xaebVrGm2VMSEvLxU1k": "n1",
    "0z2ZJVs8jZotHcsBIb7i": "n1",
    "106gyLd3JRKo0dkSnlJB": "voc4",
    "11KMKVhbY9ZRakGZjfcE": "a1",
    "12El6tV0ICc5uvr4S1Y0": "v4",
    "131KiKT5Bq9UqWXaIpk8": "av1",
    "14eYY12Ff99LTOCEdzWQ": "av1",
    "164JUv5H58vZW8WrSRQk": "v1",
    "17Yb9ZRkuBGj0hYTjMYQ": "c2",
    "17nol4mild8gYIy3GSEJ": "voc1",
    "17xSnqsme3W1O8AjqcGL": "pa2",
    "18NUOUzyQhLaONzSUMTi": "g5",
    "1927v7K5FWNLnAPqXEG3": "c3",
    "1BLh3Aw03IKTPdrfZelY": "pr2",
    "1BgpnFPXJxP3n8rx0J7P": "voc1",
    "1D0dmzmih2I4Jn4iOBg3": "voc4",
    "1KOnsOvhyFJIZj3uS3VN": "p6s",
    "1LmdXrlu7My7scn6UDgC": "c1",
    "1Uq8q7VzqedTvJuv01e5": "pr1",
    "1WKLrmWjlLjWrbOgn2R1": "av1",
    "1WXq7qeYFsP9TzT9pYUB": "n1",
    "1WsXWIqH3pDen9VjXgAM": "pa4",
    "1ZdrxPLb0K7KzxBc4k8D": "pr1",
    "1a1a2VwWEzMXydLqVpYb": "pa4",
    "1dcmx8tUQPemoeokXnH7": "pa2",
    "1hcNlo7TeubzcbdkPwZn": "p5",
    "1i9kMB6oFGqW4wYDqE3r": "voc1",
    "1ivpCPMtktCGudXqgXLu": "a2",
    "1lUgoHR54ChjKaHUdzge": "pr1",
    "1qk0u3Nc96VNPD2NwMMz": "c1",
    "1rQVxuWRGmBLWGa87V7X": "pr2",
    "1sHr822T2khBVuuGxoos": "c2",
    "1sjy29c4Kv0AgF4NWcL9": "com2",
    "1xYBzrdq2JHAaswDNNwd": "p4",
    "1xcS2IcUwpp2INy8V1Ej": "v4",
    "21cFCyUoO8HGKv9dzlMC": "n1",
    "21t0eTEHAqznrovqGhEc": "v4",
    "220wOqSU5XIghjeWUBTh": "p4",
    "234ZnPYdPscprdaTFTe8": "a2",
    "24B0qvP3x83jEeFNqeVB": "v4",
    "24fuV8XfWFlmKJP8uhk3": "v8",
    "26KtE7YkgJDhsSTb0Olk": "a1",
    "26iR523a5Uh3rEZoXNm9": "pa4",
    "29OVvZdUCzuJ6tYroISY": "com4",
    "2AfIhTV475cTkTXVPxe3": "inv2",
    "2CVnRq92Nbrd0bulnPxu": "a4",
    "2EcrDyDYulJ8VwxPw8F7": "pr1",
    "2FImYEr6Uqm1qGxdNdiJ": "pr5",
    "2GxHkdXZmOgP2uABBGfZ": "nc2",
    "2Ir1QJEWRIKghRSvJ78a": "a1",
    "2LW8wx04IsQo3Y8SvBGc": "c1",
    "2MnUmtusqb9kvZO4YYpj": "v4",
    "2NBY5RzF8rOK6OaI7PUL": "pr2",
    "2QS2yD6k16jt0iERq80O": "a1",
    "2QfKGda5pgioImZXeUlF": "v6",
    "2RWLe5xGgnPYkx3nM7qh": "v4",
    "2UuHhOqlnPct4LYSlGUW": "c1",
    "2Z2SCvGEenlRDjX9NVMa": "p4",
    "2ZebuM8d00DJeVJQHJ4Q": "n2",
    "2av3zAVRFQHZimTwjVfD": "av1",
    "2eXZhnLjN2xoLloJaZGq": "v4",
    "2fNJnuwUtWIIHNw3PEKi": "voc1"
};

async function updateBatch1() {
    const db = admin.firestore();
    console.log(`🚀 Updating ${Object.keys(mapping).length} items...`);

    let batch = db.batch();
    let count = 0;

    for (const [id, newClass] of Object.entries(mapping)) {
        const docRef = db.collection('ai_weakness_questions').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) continue;

        const data = doc.data();
        batch.update(docRef, {
            classification: newClass,
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
            'metadata.standardizedAt': new Date().toISOString(),
            'metadata.migratedFrom': data.classification || (data.tags ? data.tags[0] : 'none')
        });

        count++;
        if (count % 50 === 0) {
            await batch.commit();
            batch = db.batch();
        }
    }

    if (count % 50 !== 0) {
        await batch.commit();
    }

    console.log(`✅ Success: ${count} items updated.`);
}

updateBatch1().catch(console.error);
