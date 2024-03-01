const express = require('express')
const SingerPlaylist = express.Router()

SingerPlaylist.get('/', (req, res) => {
    res.send('I am Main SingerPlaylist')
})


// --------Arjit Singh----------

SingerPlaylist.get('/singerplaylist/arjitsinghinfo', (req, res) => {
    const Data = [
        {
            Name: 'Arjit Singh',
            para1: `
            Arijit Singh is an Indian musician, singer, composer, music producer, recordist and a music programmer. At the age of 3, he started training under Hazari brothers, and at the age of 9, he got a scholarship from the government for training in vocals in Indian classical music.
            `,
            para2: `
            He predominantly sings in Hindi and Bengali, but has also lent his voice to various other Indian languages. Singh is regarded as one of the most versatile and successful singers in the History of Indian Music and Hindi Cinema. At the start of his singing career, he received nominations for the Upcoming Male Vocalist of the ID award at the 2013 Mirchi Music Awards for renditions of "Phir Le Aya Dil" and "Duaa", winning the award for the latter. Singh received widespread recognition with the release of "Tum Hi Ho" and "Chahun Main Ya Naa" in 2013.
            `
        }
    ]
    res.send(Data)
    res.end()
})

SingerPlaylist.get('/singerplaylist/arjitsingh', (req, res) => {
    const Data = [
        {
            id: 1,
            Name: 'Heeriye',
            Singer: 'Jasleen Royal, Arijit Singh, Dulquer Salmaan',
            Album: 'Heeriye',
            ID: 'RLzC55ai0eo'
        },
        {
            id: 2,
            Name: 'Chaleya',
            Singer: 'Anirudh Ravichander, Arijit Singh, Shilpa Rao',
            Album: 'Jawan',
            ID: 'VAdGW7QDJiU'
        },
        {
            id: 3,
            Name: 'Apna Bana Le',
            Singer: 'Arijit Singh, Sachin-Jigar',
            Album: 'Bhediya',
            ID: 'ElZfdU54Cp8'
        },
        {
            id: 4,
            Name: 'Dil Jhoom',
            Singer: 'Mithoon, Arijit Singh',
            Album: 'Gadar 2',
            ID: 'BsqrmY91nUQ'
        },
        {
            id: 5,
            Name: 'Phir Aur Kya Chahiye',
            Singer: 'Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya',
            Album: 'Zara Hatke Zara Bachke',
            ID: '8sLS2knUa6Y'
        },
        {
            id: 6,
            Name: 'What Jhumka',
            Singer: 'Pritam, Arijit Singh',
            Album: 'Rocky Aur Rani Kii Prem Kahaani',
            ID: '87JIOAX3njM'
        },
        {
            id: 7,
            Name: 'Tum Kya Mile',
            Singer: 'Pritam, Arijit Singh, Shreya Ghoshal',
            Album: 'Rocky Aur Rani Kii Prem Kahaani',
            ID: 'taRBVfDRukY'
        },
        {
            id: 8,
            Name: 'O Bedardeya',
            Singer: 'Pritam, Arijit Singh, Amitabh Bhattacharya',
            Album: 'Tu Jhoothi Main Makkaar',
            ID: 'npwn6KVMtFI'
        },
        {
            id: 9,
            Name: 'Tere Hawaale',
            Singer: 'Arijit Singh, Shilpa Rao',
            Album: 'Laal Singh Chaddha',
            ID: 'KUpwupYj_tY'
        },
        {
            id: 10,
            Name: 'Oonchi Oonchi Deewarein',
            Singer: 'Manan Bhardwaj, Arijit Singh',
            Album: 'Yaariyan 2',
            ID: 'us9ZeVn6pM0'
        },
        {
            id: 11,
            Name: 'Kesariya',
            Singer: 'Pritam, Arijit Singh, Amitabh Bhattacharya',
            Album: 'Brahmastra',
            ID: 'BddP6PYo2gs'
        },
        {
            id: 12,
            Name: 'Satranga',
            Singer: 'Arijit Singh, Shreyas Puranik',
            Album: 'Animal',
            ID: 'HrnrqYxYrbk'
        },
        {
            id: 13,
            Name: 'Jhoome Jo Pathaan',
            Singer: 'Arijit Singh, Vishal Dadlani',
            Album: 'Pathaan',
            ID: 'YxWlaYCA8MU'
        },
        {
            id: 14,
            Name: 'Ve Kamleya',
            Singer: 'Pritam, Arijit Singh, Shreya Ghoshal',
            Album: 'Rocky Aur Rani Kii Prem Kahaani',
            ID: 'QXJyMpxd210'
        },
        {
            id: 15,
            Name: 'Leke Prabhu Ka Naam',
            Singer: 'Pritam, Arijit Singh, Nikhita Gandhi',
            Album: 'Tiger 3',
            ID: '6GxXehkPyBs'
        },
        {
            id: 16,
            Name: 'Deva Deva',
            Singer: 'Pritam, Arijit Singh, Amitabh Bhattacharya',
            Album: 'Brahmastra',
            ID: 'WjAPDofGg28'
        },
        {
            id: 17,
            Name: 'Tum Hi Ho',
            Singer: 'Arijit Singh',
            Album: 'Aashiqui 2',
            ID: 'Umqb9KENgmk'
        },
        {
            id: 18,
            Name: 'Tumhe Kitna Pyaar Karte',
            Singer: 'Mithoon, Arijit Singh, Manoj Muntashir',
            Album: 'Bawaal',
            ID: 'EpdsVO9pt9g'
        },
        {
            id: 19,
            Name: 'Pal Pal Dil Ke Paas',
            Singer: 'Arijit Singh, Parampara Thakur',
            Album: 'Pal Pal Dil Ke Paas',
            ID: 'lgTHGZF3BQw'
        },
        {
            id: 20,
            Name: 'Ruaan',
            Singer: 'Pritam, Arijit Singh, Irshad Kamil',
            Album: 'Tiger 3',
            ID: 'OPazrdwYAm0'
        },
        {
            id: 21,
            Name: 'Ae Dil Hai Mushkil Title Track',
            Singer: 'Pritam, Arijit Singh',
            Album: 'Ae Dil Hai Mushkil',
            ID: '6FURuLYrR_Q'
        },
        {
            id: 22,
            Name: 'Dhokha',
            Singer: 'Arijit Singh',
            Album: 'Dhokha',
            ID: '2JBYnvUlAEc'
        },
        {
            id: 23,
            Name: 'Dance Ka Bhoot',
            Singer: 'Pritam, Arijit Singh, Amitabh Bhattacharya',
            Album: 'Brahmastra',
            ID: 'xfMN4SpIxIA'
        },
        {
            id: 24,
            Name: 'Hamari Adhuri Kahani',
            Singer: 'Jeet Gannguli, Arijit Singh',
            Album: 'Hamari Adhuri Kahani',
            ID: 'f3FFOBrMmdg'
        },
        {
            id: 25,
            Name: 'Jaan Nisaar',
            Singer: 'Arijit Singh',
            Album: 'Kedarnath',
            ID: 'za4Q_7gYyS4'
        },

    ]
    res.send(Data)
    res.end()
})

// --------Jubin Nautiya----------

SingerPlaylist.get('/singerplaylist/jubinnautiyalinfo', (req, res) => {
    const Data = [
        {
            Name: 'Jubin Nautiyal',
            para1: `
            Jubin Nautiyal, is an Indian playback singer. Jubin was awarded with Upcoming Male Vocalist of the ID at 8th Mirchi Music Awards, 2016 for his song "Zindagi Kuch Toh Bata (reprise)" from Bajrangi Bhaijaan and his other achievement is the Rising Musical Star Award (2015) received at Zee Business Awards. 
            `,
            para2: `
            Early in his career, he has sung several hit songs for Hindi films. He has also recorded songs for film in various Indian languages. Jubin showed interest in music at the age of four. As a child he loved to sing and try his hand at different musical instruments. By the age of 18, Jubin was well known as a singer in his hometown of Dehradun. He performed live at many events and gave his support to several charities. Jubin made his debut in the Indian Music Industry with the song "Ek Mulakaat" from the film Sonali Cable (2014), which was a hit. Jubin has since given several hit songs.
            `
        }
    ]
    res.send(Data)
})

SingerPlaylist.get('/singerplaylist/jubinnautiyal', (req, res) => {
    const Data = [
        {
            id: 1,
            Name: 'Bewafa Se Pyaar Kiya',
            Singer: 'Jubin Nautiyal, Payal Dev, Manoj Muntashir',
            Album: 'Bewafa Se Pyaar Kiya',
            ID: 'GeYp0IZozYQ'
        },
        {
            id: 2,
            Name: 'Raataan Lambiyan',
            Singer: 'Asees Kaur, Tanishk Bagchi, Jubin Nautiyal',
            Album: 'Shershaah',
            ID: 'gvyUuxdRdR4'
        },
        {
            id: 3,
            Name: 'Meri Maa Ke Barabar Koi Nahi',
            Singer: 'Jubin Nautiyal',
            Album: 'Meri Maa Ke Barabar Koi Nahi',
            ID: 'fCdS-UShx4c'
        },
        {
            id: 4,
            Name: 'Dil Ka Telephone 2.0',
            Singer: 'Meet Bros, Jonita Gandhi, Jubin Nautiyal',
            Album: 'Dream Girl 2',
            ID: 'ATWWmFU-xLk'
        },
        {
            id: 5,
            Name: 'Mere Ghar Ram Aaye Hain',
            Singer: 'Jubin Nautiyal, Payal Dev, Manoj Muntashir',
            Album: 'Mere Ghar Ram Aaye Hain',
            ID: 'vBJ5HSs-N9o'
        },
        {
            id: 6,
            Name: 'Teri Galliyon Se',
            Singer: 'Jubin Nautiyal',
            Album: 'Teri Galliyon Se',
            ID: 'Is3lBP4PW90'
        },
        {
            id: 7,
            Name: 'Rabba Janda',
            Singer: 'Jubin Nautiyal',
            Album: 'Mission Majnu',
            ID: 'GjfxDRRLXAQ'
        },
        {
            id: 8,
            Name: 'Udd Jaa Kaale Kaava ',
            Singer: 'Mithoon, Udit Narayan, Jubin Nautiyal',
            Album: 'Gadar 2',
            ID: '7VppHj0Rue0'
        },
        {
            id: 9,
            Name: 'Pehli Baarish Mein',
            Singer: 'Jubin Nautiyal, Rochak Kohli, Gurpreet Saini',
            Album: 'Pehli Baarish Mein',
            ID: 'ngjUEDEY18E'
        },
        {
            id: 10,
            Name: 'Tum Hi Aana',
            Singer: 'Payal Dev, Jubin Nautiyal',
            Album: 'Marjaavaan',
            ID: 'RemShT6JAHw'
        },
        {
            id: 11,
            Name: 'Khushi Jab Bhi Teri ',
            Singer: 'Jubin Nautiyal',
            Album: 'Khushi Jab Bhi Teri Song',
            ID: 'c7mWC6CN7kY'
        },
        {
            id: 12,
            Name: 'Kali Kali Zulfon Ke',
            Singer: 'Nusrat Fateh Ali Khan, Jubin Nautiyal, ',
            Album: 'Kali Kali Zulfon Ke',
            ID: '224EFEddxMk'
        },
        {
            id: 13,
            Name: 'Lut Gaye',
            Singer: 'Jubin Nautiyal',
            Album: 'Lut Gaye (Feat. Emraan Hashmi)',
            ID: 'sCbbMZ-q4-I'
        },
        {
            id: 14,
            Name: 'Meri Zindagi Hai Tu ',
            Singer: 'Neeti Mohan, Jubin Nautiyal',
            Album: 'Satyameva Jayate 2',
            ID: 'VYslt8bc-4Q'
        },
        {
            id: 15,
            Name: 'Shri Krishna Govind Hare Murari',
            Singer: 'Jubin Nautiyal',
            Album: 'Shri Krishna Govind Hare Murari',
            ID: '1qmPNot9NJs'
        },
        {
            id: 16,
            Name: 'Taaron Ke Shehar',
            Singer: 'Neha Kakkar, Jubin Nautiyal',
            Album: 'Taaron Ke Shehar',
            ID: 'VAZxSoKb65o'
        },
        {
            id: 17,
            Name: 'Manike ',
            Singer: 'Yohani, Jubin Nautiyal',
            Album: 'Thank God',
            ID: 'zqHUMF9syFA'
        },
        {
            id: 18,
            Name: 'Dil Galti Kar Baitha Hai',
            Singer: 'Jubin Nautiyal',
            Album: 'Dil Galti Kar Baitha Hai',
            ID: '1--qqQrimMA'
        },
        {
            id: 19,
            Name: 'Bewafa Tera Masoom Chehra',
            Singer: 'Jubin Nautiyal',
            Album: 'Bewafa Tera Masoom Chehra',
            ID: 'sMoM0fYO-Qg'
        },
        {
            id: 20,
            Name: 'Main Jis Din Bhulaa Du ',
            Singer: 'Jubin Nautiyal, Tulsi Kumar',
            Album: 'Main Jis Din Bhulaa Du',
            ID: 'yxXxt7P4jes'
        },
        {
            id: 21,
            Name: 'Bana Sharabi',
            Singer: 'Tanishk Bagchi, Jubin Nautiyal',
            Album: 'Govinda Naam Mera',
            ID: 'G0ehTJhrxLQ'
        },
        {
            id: 22,
            Name: 'Siya Ram',
            Singer: 'Jubin Nautiyal, Jaya Kishori Ji',
            Album: 'Siya Ram',
            ID: 'iuSNi7ChFww'
        },
        {
            id: 23,
            Name: 'Raabta',
            Singer: 'Jubin Nautiyal, Chirantan Bhatt, Junaid Wasi',
            Album: 'Raabta',
            ID: 'Jx310JG_lK4'
        },
        {
            id: 24,
            Name: 'Aradhya ',
            Singer: 'Jubin Nautiyal, Palak Muchhal',
            Album: 'Kushi',
            ID: 'DjAW8PX3xKs'
        },
        {
            id: 25,
            Name: 'Jaadui',
            Singer: 'Pritam, Amitabh Bhattacharya, Jubin Nautiyal',
            Album: 'Tu Jhoothi Main Makkaar',
            ID: 'qNSv9I0Flac'
        },

    ]
    res.send(Data)
})

// --------Justin Bieber----------

SingerPlaylist.get('/singerplaylist/justinbieberinfo', (req, res) => {
    const Data = [
        {
            Name: 'Justin Bieber',
            para1: `
            Justin Bieber is a global pop icon that started out as a YouTube sensation. He became the first artist to have seven songs from a debut record chart on the Billboard Hot 100. His U.S. album and singles sales total 44.7 million. 
            `,
            para2: `
            He has sold an estimated 140 million records, making him one of the world’s best-selling music artists of all time. From 'Boyfriend' to 'Sorry', the Canadian singer has successfully transformed from a teenage pop star to a superstar the likes of which the world has never seen.
            `
        }
    ]
    res.send(Data)
})

SingerPlaylist.get('/singerplaylist/justinbieber', (req, res) => {
    const Data = [
        {
            id: 1,
            Name: 'Let Me Love You',
            Singer: 'DJ Snake, Justin Bieber',
            Album: 'Encore',
            ID: 'SMs0GnYze34'
        },
        {
            id: 2,
            Name: 'Baby',
            Singer: 'Justin Bieber, Ludacris',
            Album: 'My World 2.0',
            ID: 'khOFw2f4bQY'
        },
        {
            id: 3,
            Name: 'Stay',
            Singer: 'The Kid Laroi, Justin Bieber',
            Album: 'Stay',
            ID: 'mQT0lnB44K8'
        },
        {
            id: 4,
            Name: 'Intentions',
            Singer: 'Justin Bieber, Quavo',
            Album: 'Intentions',
            ID: 'yrYxt1FZYgA'
        },
        {
            id: 5,
            Name: 'Peaches',
            Singer: 'Justin Bieber, Daniel Caesar, Giveon',
            Album: 'Justice',
            ID: 'kGcoKuK08-c'
        },
        {
            id: 6,
            Name: 'Ghost',
            Singer: 'Justin Bieber',
            Album: 'Justice Triple Chucks Deluxe',
            ID: 'p6U7zIY6zkA'
        },
        {
            id: 7,
            Name: 'Stuck with U',
            Singer: 'Ariana Grande, Justin Bieber',
            Album: 'Stuck with U',
            ID: 'fz78HOxOgEY'
        },
        {
            id: 8,
            Name: 'Yummy',
            Singer: 'Justin Bieber',
            Album: 'Yummy',
            ID: '0pAkIrJfwao'
        },
        {
            id: 9,
            Name: 'Sorry',
            Singer: 'Justin Bieber',
            Album: 'Purpose',
            ID: 'xEIKGJd68Jo'
        },
        {
            id: 10,
            Name: 'Love Yourself',
            Singer: 'Justin Bieber',
            Album: 'Purpose',
            ID: 'TMSIR210mRg'
        },
        {
            id: 11,
            Name: 'Company',
            Singer: 'Justin Bieber',
            Album: 'Purpose Deluxe',
            ID: 'UPDDSxVThgQ'
        },
        {
            id: 12,
            Name: 'Eenie Meenie',
            Singer: 'Sean Kingston, Justin Bieber',
            Album: 'Eenie Meenie',
            ID: 'M1_g19ojPbc'
        },
        {
            id: 13,
            Name: 'Love Me',
            Singer: 'Justin Bieber',
            Album: 'My Worlds (International Version)',
            ID: 'yVZPF0zxhTM'
        },
        {
            id: 14,
            Name: 'What Do You Mean?',
            Singer: 'Justin Bieber',
            Album: 'Purpose',
            ID: 'LJjSyVe9LAs'
        },
        {
            id: 15,
            Name: "I Don't Care",
            Singer: 'Ed Sheeran, Justin Bieber',
            Album: "I Don't Care",
            ID: 'CCSGelSCPGE'
        },


    ]
    res.send(Data)
})

// --------Kim Taehyung----------

SingerPlaylist.get('/singerplaylist/kimtaehyunginfo', (req, res) => {
    const Data = [
        {
            Name: 'Kim Tae-hyung',
            para1: `
            In the era of the internet, ingress the peaceful world by listening to songs from your favorite artist whom you love to listen to every day. You can now connect with the new artists, albums, and songs of your choice effortlessly. Are you someone who loves listening to kim taehyung?
            `,
            para2: `
            With Wynk, you can now access to all kim taehyung’s songs, biography, and albums. Tune into kim taehyung album and enjoy all the latest songs harmoniously. Listen to kim taehyung MP3 songs online from the playlist available on Wynk Music or download them to play offline. Discover new favorite songs every day from the ever-growing list of kim taehyung’s songs.
            `
        }
    ]
    res.send(Data)
})

SingerPlaylist.get('/singerplaylist/kimtaehyung', (req, res) => {
    const Data = [
        {
            id: 1,
            Name: 'Sweet Night',
            Singer: 'Kim Taehyung, Melanie Joy Fontana',
            Album: 'Blast Thru Hits vol 4',
            ID: 'Wq-ezXSLPOU'
        },
        {
            id: 2,
            Name: 'Dream Glow',
            Singer: 'Kim Taehyung',
            Album: 'Lullaby Versions of BTS',
            ID: '8Ljgy3pLmmo'
        },
        {
            id: 3,
            Name: 'Blue & Grey',
            Singer: 'Kim Taehyung',
            Album: 'K-POP',
            ID: 'amnspvOH-EE'
        },
        {
            id: 4,
            Name: 'Slow Dancing',
            Singer: 'Kim Taehyung',
            Album: "V 'Slow Dancing' Official MV",
            ID: 'eI0iTRS0Ha8'
        },
        {
            id: 5,
            Name: 'Love Me Again',
            Singer: 'Kim Taehyung',
            Album: "V 'Love Me Again' Official MV",
            ID: 'HYzyRHAHJl8'
        },
        {
            id: 6,
            Name: 'Christmas Tree',
            Singer: 'Kim Taehyung',
            Album: 'V - Christmas Tree',
            ID: 'CMbxzOQc0GI'
        },
        {
            id: 7,
            Name: 'Rainy Days',
            Singer: 'Kim Taehyung',
            Album: "V 'Rainy Days' Official MV",
            ID: 'yTsINmrAK4I'
        },
        {
            id: 8,
            Name: 'Snow Flower',
            Singer: 'Kim Taehyung',
            Album: 'Peakboy',
            ID: 'geQOmJDvuRE'
        },
        {
            id: 9,
            Name: 'For Us',
            Singer: 'Kim Taehyung',
            Album: "V 'For Us' Official MV",
            ID: 'LHtzWOLBdPc'
        },
        {
            id: 10,
            Name: "It's Definitely You",
            Singer: 'Kim Taehyung',
            Album: 'Hwarang',
            ID: 'uLfLbtulKZc'
        },
    ]
    res.send(Data)
})

// --------Sonu Nigam----------

SingerPlaylist.get('/singerplaylist/sonunigaminfo', (req, res) => {
    const Data = [
        {
            Name: 'Sonu Nigam',
            para1: `
            Sonu Nigam is an Indian musician, singer, composer, music producer, recordist, music programmer, live performer and actor. Nigam began his singing career at the age of four, when he joined his father Agam Kumar Nigam on stage to sing Mohammed Rafi's song "Kya hua tera wada".
            `,
            para2: `
            He sings in Hindi and Kannada language films. He has also sung in Bengali, Gujarati, Tamil, Telugu, Marathi, Tulu, Assamese, Odia, Nepali, Maithili and various Indian languages. He has also released Indian pop albums and acted in a number of films. He has been one of the highest paid Indian singers.
            `
        }
    ]
    res.send(Data)
})

SingerPlaylist.get('/singerplaylist/sonunigam', (req, res) => {
    const Data = [
        {
            "id": 1,
            "Name": "Sandese Aate Hain",
            "Singer": "Sonu Nigam",
            "Album": "Border",
            "ID": "STfIzJV2BwE"
        },
        {
            "id": 2,
            "Name": "Yeh Dil Deewana",
            "Singer": "Sonu Nigam",
            "Album": "Pardes",
            "ID": "T4wr-y_bqB8"
        },
        {
            "id": 3,
            "Name": "Abhi Na Jao Chhodkar",
            "Singer": "Sonu Nigam",
            "Album": "Hum Dil De Chuke Sanam",
            "ID": "xgXSIQ6Ljwk"
        },
        {
            "id": 4,
            "Name": "Suraj Hua Maddham",
            "Singer": "Sonu Nigam",
            "Album": "Kabhi Khushi Kabhie Gham",
            "ID": "D0V8S0elRyA"
        },
        {
            "id": 5,
            "Name": "Kal Ho Naa Ho",
            "Singer": "Sonu Nigam",
            "Album": "Kal Ho Naa Ho",
            "ID": "g0eO74UmRBs"
        },
        {
            "id": 6,
            "Name": "Kabhi Tumhe",
            "Singer": "Sonu Nigam",
            "Album": "Silsila",
            "ID": "ByIZIKFmHOA"
        },
        {
            "id": 7,
            "Name": "Saathiya",
            "Singer": "Sonu Nigam",
            "Album": "Saathiya",
            "ID": "eMA6GHTQ4WA"
        },
        {
            "id": 8,
            "Name": "Main Agar Kahoon",
            "Singer": "Sonu Nigam",
            "Album": "Om Shanti Om",
            "ID": "DAYszemgPxc"
        },
        {
            "id": 9,
            "Name": "Har Ghadi Badal Rahi Hai",
            "Singer": "Sonu Nigam",
            "Album": "Kal Ho Naa Ho",
            "ID": "g0eO74UmRBs"
        },
        {
            "id": 10,
            "Name": "Do Pal Ki Zindagi",
            "Singer": "Sonu Nigam",
            "Album": "Kisna",
            "ID": "HPsxxBhv9kc"
        },
        {
            "id": 11,
            "Name": "Mera Yaar Mila De",
            "Singer": "Sonu Nigam",
            "Album": "Yaar Mila De",
            "ID": "dj64cIE9c2E"
        },
        {
            "id": 12,
            "Name": "Jaane Nahin Denge Tujhe",
            "Singer": "Sonu Nigam",
            "Album": "3 Idiots",
            "ID": "sAHbwzkrlmg"
        },
        {
            "id": 13,
            "Name": "Gerua",
            "Singer": "Sonu Nigam",
            "Album": "Dilwale",
            "ID": "AEIVhBS6baE"
        }

    ]
    res.send(Data)
})

// --------Kumar Sanu----------

SingerPlaylist.get('/singerplaylist/kumarsanuinfo', (req, res) => {
    const Data = [
        {
            Name: 'Kumar Sanu',
            para1: `
            Kedarnath Bhattacharya, better known as Kumar Sanu, is a leading Indian playback singer of Bengali background, popular for rendering his voice in Bollywood movies of the 1990s and early 2000s. He holds the Guinness Book world record for recording the most songs in a day, 28, in 1993. 
            `,
            para2: `
            He was awarded the Filmfare Best Male Playback Singer Award for five consecutive IDs. In 2009, the Government of India awarded him the Padma Shri, India's fourth-highest civilian honour, in recognition of his achievements. For the 1990 film Aashiqui, music directors Nadeem-Shravan got Sanu to sing all but one of the songs. He won the first of his record five consecutive Filmfare Awards as Best Male Playback Singer. His next Filmfare Awards came for songs in the movies Saajan (1991), Deewana (1992), Baazigar (1993), and 1942: A Love Story (1994).
            `
        }
    ]
    res.send(Data)
})

SingerPlaylist.get('/singerplaylist/kumarsanu', (req, res) => {
    const Data = [
        {
            "id": 1,
            "Name": "Mera Dil Bhi Kitna Pagal Hai",
            "Singer": "Kumar Sanu, Alka Yagnik",
            "Album": "Saajan",
            "ID": "aZrU8-AHSQw"
        },
        {
            "id": 2,
            "Name": "Pehli Pehli Baar Mohabbat Ki Hai",
            "Singer": "Alka Yagnik, Kumar Sanu",
            "Album": "Jo Jeeta Wohi Sikandar",
            "ID": "bYBIGpNM-Bs"
        },
        {
            "id": 3,
            "Name": "Tujhe Dekha To",
            "Singer": "Kumar Sanu, Lata Mangeshkar",
            "Album": "Dilwale Dulhania Le Jayenge",
            "ID": "cNV5hLSa9H8"
        },
        {
            "id": 4,
            "Name": "Dil Ne Yeh Kaha Hain Dil Se",
            "Singer": "Udit Narayan, Alka Yagnik, Kumar Sanu",
            "Album": "Dhadkan",
            "ID": "maYjGVZGrGo"
        },
        {
            "id": 5,
            "Name": "Dheere Dhheere Se Meri Zindagi Mein Aana",
            "Singer": "Kumar Sanu, Anuradha Paudwal",
            "Album": "Aashiqui",
            "ID": "Mcs2xEZ6K8o"
        },
        {
            "id": 6,
            "Name": "Baahon Mein Chale Aao",
            "Singer": "Kumar Sanu",
            "Album": "Dilwale Dulhania Le Jayenge",
            "ID": "BU6xeangJOc"
        },
        {
            "id": 7,
            "Name": "Yeh Dil Deewana",
            "Singer": "Kumar Sanu",
            "Album": "Pardes",
            "ID": "u8Ste5nBVfs"
        },
        {
            "id": 8,
            "Name": "Tu Mere Sapno Ki Rani",
            "Singer": "Kumar Sanu",
            "Album": "Hum Aapke Hain Koun..!",
            "ID": "WLCLPfkGJHk"
        },
        {
            "id": 9,
            "Name": "Tere Ishq Mein Naachenge",
            "Singer": "Kumar Sanu, Alisha Chinai & Sapna Mukharji",
            "Album": "Raja Hindustani",
            "ID": "Y6eCpN3jZ_0"
        },
        {
            "id": 10,
            "Name": "Mohabbat Dil Ka Sakoon Hai Aitbaar",
            "Singer": "Alka Yagnik, Kumar Sanu & Udit Narayan",
            "Album": "Dil Hai Tumhaara",
            "ID": "x6LsUu9uaL0"
        },
        {
            "id": 11,
            "Name": "Barsaat Ke Mausam Mein",
            "Singer": "Kumar Sanu, Roop Kumar Rathod",
            "Album": "Naajayaz",
            "ID": "rrzSZ0NMID4"
        },
        {
            "id": 12,
            "Name": "Teri Chunnariya",
            "Singer": "Kumar Sanu, Alka Yagnik",
            "Album": "Hello Brother",
            "ID": "07KoprnKr_Y"
        },
        {
            "id": 13,
            "Name": "Meri Mehbooba",
            "Singer": "Kumar Sanu & Alka Yagnik",
            "Album": "Pardes",
            "ID": "k2CuG5E4OAo"
        },
        {
            "id": 14,
            "Name": "Jeeta Tha Jiske Liye",
            "Singer": "Kumar Sanu, Alka Yagnik",
            "Album": "Dilwale (1994)",
            "ID": "fa5Yzxdh8e4"
        },
        {
            "id": 15,
            "Name": "Us Ladki Pe Dil Aaya",
            "Singer": "Anuradha paudwal, Kumar Sanu",
            "Album": "Naam Gum Jaayega",
            "ID": "HpyX-a4r2EI"
        }

    ]
    res.send(Data)
})

// --------Atif Aslam----------

SingerPlaylist.get('/singerplaylist/atifaslaminfo', (req, res) => {
    const Data = [
        {
            Name: 'Atif Aslam',
            para1: `
            Atif Aslam is a famous Pakistani singer-songwriter and actor. Spurred on by his friends, he began to sing in public during his days at PICS, where he met guitarist and talented young composer, Goher Mumtaz. After performing at their college and at various restaurants, they eventually formed a band named 'Jal' – an Urdu/Hindi word which means 'water'. 
            `,
            para2: `
            Working together, the pair recorded the song "Aadat" with the help of Salman Albert, amongst other established and accomplished Pakistani musicians, and the music video for "Aadat" was shot in a warehouse in Karachi. Within a matter of weeks, "Aadat" became popular on a host of promotional Pakistani music websites and went viral online, making Aslam a household name. His movie debut was the 2011 social drama Bol. He has recorded numerous chart-topping songs and is known for his vocal belting technique. He predominantly sings in Hindi, Urdu and Punjabi, but has also sung in other languages such as Bengali. He is a recipient of numerous Lux Style Awards, he also received Tamgha-e-Imtiaz in 2008, the fourth-highest decoration given to any civilian in Pakistan based on their achievements.
            `
        }
    ]
    res.send(Data)
})

SingerPlaylist.get('/singerplaylist/atifaslam', (req, res) => {
    const Data = [
        {
            id: 1,
            Name: "Dil Diyan Gallan",
            Singer: "Atif Aslam",
            Album: "Tiger Zinda Hai",
            ID: "SAcpESN_Fk4"
        },
        {
            id: 2,
            Name: "Tera Hone Laga Hoon",
            Singer: "Atif Aslam, Alisha Chinai",
            Album: "Ajab Prem Ki Ghazab Kahani",
            ID: "rLR37BR88T0"
        },
        {
            id: 3,
            Name: "Jeena Jeena",
            Singer: "Atif Aslam",
            Album: "Badlapur",
            ID: "muVyzARrZbs"
        },
        {
            id: 4,
            Name: "O Saathi",
            Singer: "Atif Aslam & Payal Dev",
            Album: "Baaghi 2",
            ID: "YuXLN23ZGQo"
        },
        {
            id: 5,
            Name: "Pehli Dafa Song",
            Singer: "Atif Aslam",
            Album: "Pehli Dafa Song",
            ID: "SxTYjptEzZs"
        },
        {
            id: 6,
            Name: "Tu Jaane Na",
            Singer: "Atif Aslam",
            Album: "Ajab Prem Ki Ghazab Kahani",
            ID: "FA_J8XwpCaQ"
        },
        {
            id: 7,
            Name: " Paniyon Sa",
            Singer: "Atif Aslam, Tulsi Kumar",
            Album: "Satyameva Jayate",
            ID: "GcwkeRKxcKY"
        },
        {
            id: 8,
            Name: "Pehli Nazar Mein",
            Singer: "Atif Aslam",
            Album: "Pehli Nazar Mein Kaise Jaado Kar Diya",
            ID: "BadBAMnPX0I"
        },
        {
            id: 9,
            Name: "Woh Lamhe Woh Baatein",
            Singer: "Atif Aslam",
            Album: "Zeher",
            ID: "KtHRBvNHRyo"
        },
        {
            id: 10,
            Name: "Piya O Re Piya",
            Singer: "Atif Aslam & Shreya Ghoshal & Sachin-Jigar",
            Album: "Tere Naal Love Ho Gaya",
            ID: "TLEPzT8jrUU"
        },
        {
            id: 11,
            Name: "Ik Naya Khuwab",
            Singer: "Atif Aslam",
            Album: "Ik Naya Khuwab",
            ID: "Fo37KzY6SzI"
        },
        {
            id: 12,
            Name: "Tera Hua",
            Singer: "Atif Aslam",
            Album: "Loveyatri",
            ID: "-4JV4hur1PM"
        },
        {
            id: 13,
            Name: "Tera Naam Doon",
            Singer: "Atif Aslam, Shalmali Kholgade",
            Album: "Its Entertainment",
            ID: "32X3y2REoIc"
        },
        {
            id: 14,
            Name: "Mar Jaayen",
            Singer: "Atif Aslam",
            Album: "Loveshhuda",
            ID: "fVZuAgPJuW4"
        },
        {
            id: 15,
            Name: "Moonrise",
            Singer: "Atif Aslam",
            Album: "Moonrise",
            ID: "BUBKwRAlbfE"
        },

    ]
    res.send(Data)
})

// --------Ed Sheeran----------

SingerPlaylist.get('/singerplaylist/edsheeraninfo', (req, res) => {
    const Data = [
        {
            Name: 'Ed Sheeran',
            para1: `
            Ed Sheeran is an English singer, songwriter, guitarist, and record producer. His 2011 debut album, + It topped the UK and Australian charts, reached number five in the US, and has since been certified seven-times platinum in the UK. The album contains the single "The A Team", which earned him the Ivor Novello Award for Best Song Musically and Lyrically.
            `,
            para2: `
            His second studio album, x peaked at number one in the UK and the US. In 2015, x won the Brit Award for Album of the ID, and he received the Ivor Novello Award for Songwriter of the ID from the British Academy of Songwriters, Composers and Authors. His single from x, "Thinking Out Loud", earned him two Grammy Awards at the 2016 ceremony: Song of the ID and Best Pop Solo Performance. In May 2016, x was named the second best selling album worldwide in 2015. Sheeran's third album, ÷ (read as "divide"), was released in March 2017.
            `
        }
    ]
    res.send(Data)
})

SingerPlaylist.get('/singerplaylist/edsheeran', (req, res) => {
    const Data = [
        {
            id: 1,
            Name: "Perfect",
            Singer: "Ed Sheeran",
            Album: "Ed Sheeran, Perfect",
            ID: "cNGjD0VG4R8"
        },
        {
            id: 2,
            Name: "Shape of You",
            Singer: "Ed sheeran",
            Album: "Ed Sheeran, Shape of You",
            ID: "JGwWNGJdvx8"
        },
        {
            id: 3,
            Name: "Photograph",
            Singer: "Ed Sheeran",
            Album: "Ed Sheeran, Photograph",
            ID: "nSDgHBxUbVQ"
        },
        {
            id: 4,
            Name: "Merry Christmas",
            Singer: "Ed Sheeran & Elton John",
            Album: "Ed Sheeran & Elton John, Merry Christmas",
            ID: "Q_yuO8UNGmY"
        },
        {
            id: 5,
            Name: "Shivers",
            Singer: "Ed Sheeran",
            Album: "Ed Sheeran, Shivers",
            ID: "Il0S8BoucSA"
        },
        {
            id: 6,
            Name: "The Day I Was Born",
            Singer: "Ed Sheeran",
            Album: "Ed Sheeran, The Day I Was Born",
            ID: "oSxqkER3N6Y"
        },
        {
            id: 7,
            Name: "Passenger - Let Her Go",
            Singer: "ED Sheeran",
            Album: "Passenger, Let Her Go | Ed Sheeran",
            ID: "HTcL9WkB_wg"
        },
        {
            id: 8,
            Name: "Punchline",
            Singer: "Ed Sheeran",
            Album: "Ed Sheeran, Punchline",
            ID: "4h4S32hb9Qk"
        },
        {
            id: 9,
            Name: "Happier",
            Singer: "Ed Sheeran",
            Album: "Happier, Ed Sheeran",
            ID: "iWZmdoY1aTE"
        },
        {
            id: 10,
            Name: "Castle On The Hill",
            Singer: "Ed Sheeran",
            Album: "Ed Sheeran, castle On The Hill",
            ID: "K0ibBPhiaG0"
        },
        {
            id: 11,
            Name: "All Of The Stars",
            Singer: "Ed Sheeran",
            Album: "All Of The Stars",
            ID: "Fo37KzY6SzI"
        },
        {
            id: 12,
            Name: "Spark",
            Singer: "Ed Sheeran",
            Album: "Ed Sheeran, Spark",
            ID: "4IHh8d5RhOM"
        },
        {
            id: 13,
            Name: "2step",
            Singer: "Ed Sheeran",
            Album: "2step (feat. Lil Baby)",
            ID: "Z_MvkyuOJgk"
        },
        {
            id: 14,
            Name: "Put It All On Me",
            Singer: "Ed Sheeran",
            Album: "Put It All On Me (feat. Ella Mai)",
            ID: "ryJgDL9jzKk"
        },
        {
            id: 15,
            Name: "Perfect Symphony",
            Singer: "Ed Sheeran",
            Album: "Perfect Symphony",
            ID: "eiDiKwbGfIY"
        },

    ]
    res.send(Data)
})

// --------Dua Lipa----------

SingerPlaylist.get('/singerplaylist/dualipainfo', (req, res) => {
    const Data = [
        {
            Name: 'Dua Lipa',
            para1: `
            Dua Lipa is an English singer, songwriter, and model. Her musical career began at age 14, when she began covering songs by other artists on YouTube. In 2015, she was signed with Warner Music Group and released her first single soon after. In December 2016, a documentary about Lipa was commissioned by The Fader magazine, titled See in Blue. 
            `,
            para2: `
            In January 2017, Lipa won the EBBA Public Choice Award. Her self-titled debut studio album was released on 2 June 2017. The album spawned seven singles, including two UK top-10 singles "Be the One" and "IDGAF" and the UK number-one single "New Rules", which also reached number six in the US. In 2018, Lipa won two Brit Awards for British Female Solo Artist and British Breakthrough Act.
            `
        }
    ]
    res.send(Data)
})

SingerPlaylist.get('/singerplaylist/dualipa', (req, res) => {
    const Data = [
        {
            id: 1,
            Name: "Houdini",
            Singer: "Dua Lipa",
            Album: "Dua Lipa, Houdini",
            ID: "suAR1PYFNYA"
        },
        {
            id: 2,
            Name: "New Rules",
            Singer: "Dua Lipa",
            Album: "Dua Lipa, New Rules",
            ID: "k2qgadSvNyU"
        },
        {
            id: 3,
            Name: "One Kiss",
            Singer: "Calvin Harris, Dua Lipa",
            Album: "Calvin Harris",
            ID: "YaOlxgJHif0"
        },
        {
            id: 4,
            Name: "No Lie",
            Singer: "Sean Paul & Dua Lipa",
            Album: "Sean Paul, No Lie ft. Dua Lipa",
            ID: "166tsC3RUcc"
        },
        {
            id: 5,
            Name: "Don't Start Now",
            Singer: "Dua Lipa",
            Album: "Dua Lipa, Don't Start Now",
            ID: "oygrmJFKYZY"
        },
        {
            id: 6,
            Name: "Break My Heart",
            Singer: "Dua Lipa",
            Album: "Dua Lipa, Break My Heart",
            ID: "Nj2U6rhnucI"
        },
        {
            id: 7,
            Name: "IDGAF",
            Singer: "Dua Lipa",
            Album: "Dua Lipa, IDGAF",
            ID: "Mgfe5tIwOj0"
        },
        {
            id: 8,
            Name: "Love Again ",
            Singer: "Dua Lipa",
            Album: "Dua Lipa, Love Again",
            ID: "BC19kwABFwc"
        },
        {
            id: 9,
            Name: "Blow Your Mind)",
            Singer: "Dua Lipa",
            Album: "Blow Your Mind (Mwah)",
            ID: "1nydxbGhgv8"
        },
        {
            id: 10,
            Name: "Be The One",
            Singer: "Dua Lipa",
            Album: "Dua Lipa, Be The One",
            ID: "-rey3m8SWQI"
        },
        {
            id: 11,
            Name: "Last Dance",
            Singer: "Dua Lipa",
            Album: "Dua Lipa, Last Dance",
            ID: "lwZqbQL4H4Q"
        },
        {
            id: 12,
            Name: "Hotter Than Hell",
            Singer: "Dua Lipa",
            Album: "Dua Lipa, Hotter Than Hell",
            ID: "fEOyePhElr4"
        },
        {
            id: 13,
            Name: "Lost In Your Light feat. Miguel",
            Singer: "Dua Lipa & Miguel",
            Album: "Dua Lipa, Lost In Your Light feat. Miguel",
            ID: "r-AuLm7S3XE"
        },
        {
            id: 14,
            Name: "Physical",
            Singer: "Dua Lipa",
            Album: "Dua Lipa, Physical",
            ID: "9HDEHj2yzew"
        },
        {
            id: 15,
            Name: "We're Good",
            Singer: "Dua Lipa",
            Album: "Dua Lipa, We're Good",
            ID: "jr47YisIsz8"
        },

    ]
    res.send(Data)
})

// --------Taylor Swift----------

SingerPlaylist.get('/singerplaylist/taylorswiftinfo', (req, res) => {
    const Data = [
        {
            Name: 'Taylor Swift',
            para1: `
            Pop icon Taylor Swift has broken multiple sales records and inspired millions of fans. As an aspiring country singer her self-titled debut album in 2006 peaked at number five on Billboard 200. Swift's second album, Fearless, was released in 2008. Buoyed by the success of pop crossover singles "Love Story" and "You Belong with Me", Fearless won four Grammy Awards, with Swift becoming the youngest Album of the ID winner. 
            `,
            para2: `
            Her 2010 album, Speak Now and its hit single "Mean", won two Grammy Awards. Her fourth album, Red (2012), yielded the successful singles "We Are Never Ever Getting Back Together" and "I Knew You Were Trouble". With her fifth album, the pop-focused 1989 (2014), was a true game changer. Its singles "Shake It Off", "Blank Space", and "Bad Blood" reached number one on Billboard. 1989 received three Grammy Awards with Swift becoming the first woman to win Album of the ID award twice. Swift's sixth album, Reputation (2017) and its lead single "Look What You Made Me Do" topped the UK and US charts. A true musical icon Taylor Swift has been the recipient of 10 Grammy Awards and holds five Guinness World Records.
            `
        }
    ]
    res.send(Data)
})

SingerPlaylist.get('/singerplaylist/taylorswift', (req, res) => {
    const Data = [
        {
            id: 1,
            Name: "You're Losing Me",
            Singer: "Taylor Swift",
            Album: "You're Losing Me",
            ID: "-UCW2aZ6m7"
        },
        {
            id: 2,
            Name: "I Don’t Wanna Live Forever",
            Singer: "ZAYN, Taylor Swift",
            Album: "ZAYN, I Don’t Wanna Live Forever",
            ID: "0oigFUOOs1Y"
        },
        {
            id: 3,
            Name: "Delicate",
            Singer: "Taylor Swift",
            Album: "Delicate",
            ID: "0i1o9lSUuI8"
        },
        {
            id: 4,
            Name: "Style",
            Singer: "Taylor Swift",
            Album: "Style",
            ID: "XAVLUYDtCCw"
        },
        {
            id: 5,
            Name: "Wildest Dreams",
            Singer: "Taylor Swift",
            Album: "Taylor Swift, Wildest Dreams",
            ID: "vtW_4j7SsZk"
        },
        {
            id: 6,
            Name: "All Too Well",
            Singer: "Taylor Swift",
            Album: "All Too Well, Taylor Swift",
            ID: "BboqzlaskIc"
        },
        {
            id: 7,
            Name: "Lover",
            Singer: "Taylor Swift & Shawn Mendes",
            Album: "Shawn Mendes, Lover",
            ID: "99NyTTA-q-4"
        },
        {
            id: 8,
            Name: "Cruel Summer",
            Singer: "Taylor Swift",
            Album: "Taylor Swift, Cruel Summer",
            ID: "GrKQvyXpNgc"
        },
        {
            id: 9,
            Name: "Shake It Off",
            Singer: "Taylor Swift",
            Album: "Taylor Swift, Shake It Off",
            ID: "mvVBuG4IOW4"
        },
        {
            id: 10,
            Name: "Love Story",
            Singer: "Taylor Swift",
            Album: "Taylor Swift, Love Story",
            ID: "KrsqPE9SMxo"
        },
        {
            id: 11,
            Name: "You Belong With Me",
            Singer: "Taylor Swift",
            Album: "You Belong With Me",
            ID: "nwK5Cq-RSsQ"
        },
        {
            id: 12,
            Name: "Back To December",
            Singer: "Taylor Swift",
            Album: "Taylor Swift, Back To December",
            ID: "zU3N-SUgHvE"
        },
        {
            id: 13,
            Name: "Style",
            Singer: "Taylor Swift",
            Album: "Taylor Swift, Style",
            ID: "2JgvVfOfoWI"
        },
        {
            id: 14,
            Name: "Look What You Made Me Do",
            Singer: "Taylor Swift",
            Album: "Look What You Made Me Do",
            ID: "qii2cisW4zo"
        },
        {
            id: 15,
            Name: "Bad Blood",
            Singer: "Taylor Swift & Kendrick Lamar",
            Album: "Bad Blood ft. Kendrick Lamar",
            ID: "CXKEdnasDto"
        },

    ]
    res.send(Data)
})

// --------Shreya Ghoshal----------

SingerPlaylist.get('/singerplaylist/shreyaghoshalinfo', (req, res) => {
    const Data = [
        {
            Name: 'Shreya Ghoshal',
            para1: `
            Shreya Ghoshal is an Indian playback singer. She has received five National Film Awards, six Filmfare Awards including five for Best Female Playback Singer, nine Filmfare Awards South, three Kerala State Film Awards, two Tamil Nadu State Film Awards and many other awards. 
            `,
            para2: `
            She has recorded songs for film music and albums in various Indian languages and has established herself as a leading playback singer of Indian cinema. Ghoshal aspired to become a playback singer from an early age. At the age of four, she started learning music. At the age of six, she started her formal training in classical music.`
        }
    ]
    res.send(Data)
})

SingerPlaylist.get('/singerplaylist/shreyaghoshal', (req, res) => {
    const Data = [
        {
            "id": "1",
            "Name": "Barso Re",
            "Singer": "Shreya Ghoshal, A.R. Rahman",
            "Album": "Jodhaa Akbar",
            "ID": "asw-wTDzGUQ"
        },
        {
            "id": "2",
            "Name": "Teri Ore",
            "Singer": " Rahat Fateh Ali Khan & Shreya Ghoshal",
            "Album": "Singh Is King",
            "ID": "CWfCp96-yck"
        },
        {
            "id": "3",
            "Name": "Chikni Chameli",
            "Singer": "Shreya Ghoshal, Alisha Chinoy",
            "Album": "Agneepath",
            "ID": "MQM7CNoAsBI"
        },
        {
            "id": "4",
            "Name": "Zihaal e Miskin",
            "Singer": "Vishal Mishra & Shreya Ghoshal",
            "Album": "Zihaal e Miskin",
            "ID": "11OWuPcElJw"
        },
        {
            "id": "5",
            "Name": "Guli Mata",
            "Singer": "Saad Lamjarred, Shreya Ghoshal, Rajat Nagpal",
            "Album": "Guli Mata",
            "ID": "Gp1RNYBckBs"
        },
        {
            "id": "6",
            "Name": "Tum Kya Mile",
            "Singer": "Pritam, Arijit Singh, Shreya Ghoshal",
            "Album": "Rocky Aur Rani Kii Prem Kahaani",
            "ID": "taRBVfDRukY"
        },
        {
            "id": "7",
            "Name": "Ve Kamleya",
            "Singer": "Pritam, Arijit Singh, Shreya Ghoshal",
            "Album": "Rocky Aur Rani Kii Prem Kahaani",
            "ID": "QXJyMpxd210"
        },
        {
            "id": "8",
            "Name": "Tere Hawale (Arijit - Shreya Duet)",
            "Singer": "Arijit Singh, Shreya Ghoshal",
            "Album": "Laal Singh Chaddha",
            "ID": "-vzZ50Rijm8"
        },
        {
            "id": "9",
            "Name": "Dhaagon Se Baandhaa",
            "Singer": "Arijit Singh, Shreya Ghoshal",
            "Album": "Raksha Bandhan",
            "ID": "xSRMwwm9vlQ"
        },
        {
            "id": "10",
            "Name": "Baarish Ke Aane Se",
            "Singer": "Tony Kakkar, Shreya Ghoshal",
            "Album": "Baarish Ke Aane Se",
            "ID": "2TYIa09PXyo"
        },
        {
            "id": "11",
            "Name": "Barsaat Aa Gayi",
            "Singer": "Javed-mohsin, Shreya Ghoshal",
            "Album": "Barsaat Aa Gayi",
            "ID": "61SJuITd3Xo"
        },
        {
            "id": "12",
            "Name": "Pyaar Karte Ho Na",
            "Singer": "Javed-mohsin, Stebin Ben, Shreya Ghoshal",
            "Album": "Pyaar Karte Ho Na",
            "ID": "G_cPeALjy0s"
        },
        {
            "id": "13",
            "Name": "Rasiya",
            "Singer": "Pritam, Shreya Ghoshal, Tushar Joshi",
            "Album": "Brahmastra",
            "ID": "F_oNAi5DcEU"
        },
        {
            "id": "14",
            "Name": "Baarish Aayi Hai",
            "Singer": "Javed-mohsin, Stebin Ben, Shreya Ghoshal ",
            "Album": "Baarish Aayi Hai",
            "ID":"cJX0MEmiWLo"
        },
        {
            "id": "15",
            "Name": "Bolo Na",
            "Singer": "Shantanu Moitra, Shaan, Shreya Ghoshal",
            "Album": "12th Fail",
            "ID": "zD6PyaGjqtE"
        },

    ]
    res.send(Data)
})

module.exports = SingerPlaylist