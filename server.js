const express = require('express')
const app = express()
const cors = require('cors')
//const { resourceUsage } = require('process')
const PORT = 8001

app.use(cors())

const femaleMcs = {
    'foxy brown': {
        'stageName': 'Foxy Brown',
        'birthName': 'Inga DeCarlo Fung Marchand',
        'birthDate': 'September 6, 1978',
        'homeCity': 'Brooklyn, NY',
        'debutAlbum': 'Ill Na Na',
        'releaseYear': 'November 19, 1996', 
        'image': 'https://en.wikipedia.org/wiki/Ill_Na_Na#/media/File:Foxybrownillnana.jpg',
        'playlist':'https://open.spotify.com/playlist/37i9dQZF1DZ06evO0QoaW5',
        'Label': 'Def Jam Violator'
    },
    'mc lyte': {
        'stageName': 'Mc Lyte',
        'birthName': 'Lana Michele Moorer',
        'birthDate': 'October 11, 1970',
        'homeCity': 'Brooklyn, NY',
        'debutAlbum': 'Lyte as a Rock',
        'releaseYear': 'May 1988', 
        'image': 'https://m.media-amazon.com/images/I/51DYO-kunHL.jpg',
        'playlist':'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1IXfUJ?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        'Label': 'First Priority Music/Atlantic Records'
    },
    'sampa the great': {
        'stageName': 'Sampa The Great',
        'birthName': 'Sampa Tembo',
        'birthDate': 'August 9, 1993',
        'homeCity': 'Ndola,Zambia',
        'debutAlbum': 'The Return',
        'releaseYear': 'September 13 2019', 
        'image': 'https://upload.wikimedia.org/wikipedia/en/7/77/The_Return_by_Sampa_the_Great.png',
        'playlist':'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3Dr4kUiswmZ1A2MYggyE2i?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        'Label': 'Wondercore Island / Big Dada/ NinjaTune'
    },
    'little simz': {
        'stageName': 'Little Simz',
        'birthName': ' Simbiatu "Simbi" Abisola Abiola Ajikawo',
        'birthDate': '23 February 1994',
        'homeCity': 'Islington, London, England, United Kingdom',
        'debutAlbum': 'A Curious Tale of Trials + Persons',
        'releaseYear': '18 September 2015', 
        'image': 'https://en.wikipedia.org/wiki/Ill_Na_Na#/media/File:Foxybrownillnana.jpg',
        'playlist':'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3GmPLr?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        'Label': 'Age 101 Music - AWAL'
    },
    'queen latifah': {
        'stageName': 'Queen Latifah',
        'birthName': 'Dana Elaine Owens',
        'birthDate': 'March 18, 1970',
        'homeCity': 'Newark, NJ',
        'debutAlbum': 'All Hail the Queen',
        'releaseYear': 'November 28, 1989', 
        'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/QueenLatifahAllHailtheQueen.jpg/220px-QueenLatifahAllHailtheQueen.jpg',
        'playlist':'https://open.spotify.com/playlist/37i9dQZF1DZ06evO39mt0c?si=6807b97d43464a3d',
        'Label': 'Tommy Boy'
    }, 
       'unknown': {
        'stageName': 'unknown',
        'birthName': 'unknown',
        'birthDate': 'unknown',
        'homeCity': 'unknown',
        'debutAlbum': 'unknown',
        'releaseYear': 'unknown', 
        'image': 'unknown',
        'playlist':'unknown',
        'Label': 'unknown',

}
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html' )
})

app.get('/api/:mcName', (request, response) => {
    const femaleMcName = request.params.mcName.toLowerCase()
    if(femaleMcs[femaleMcName]){
        response.json(femaleMcs[femaleMcName])
    } else{
        response.json(femaleMcs['unknown'])
    }
    })



app.listen(process.env.PORT || PORT, () => {
    console.log('Mic check 1 2 1 2.')
})

