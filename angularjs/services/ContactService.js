app.factory('ContactService', ContactService);

function ContactService() {
    let contactList = [
        {
            id: 1,
            img: 'https://www.cheatsheet.com/wp-content/uploads/2019/10/taylor-swift-1024x681.jpg',
            user: 'Taylor Swift',
            text: 'Hi! :)',
            count: 20,
            time: 'now'
        },
        {
            id: 2,
            img: 'http://www.newdesignfile.com/postpic/2015/02/facebook-no-profile-picture-icon_68018.png',
            user: 'Miley Cyrus',
            text: 'Good night.',
            count: 0,
            time: '5 min. ago'
        },
        {
            id: 3,
            img: 'http://www.newdesignfile.com/postpic/2015/02/facebook-no-profile-picture-icon_68018.png',
            user: 'Furry',
            text: 'Ok, lets go.',
            count: 4,
            time: '1 day ago'
        },
        {
            id: 4,
            img: 'https://www.cheatsheet.com/wp-content/uploads/2019/10/taylor-swift-1024x681.jpg',
            user: 'Taylor Swift',
            text: 'Hi! :)',
            count: 20,
            time: 'now'
        },
        {
            id: 5,
            img: 'http://www.newdesignfile.com/postpic/2015/02/facebook-no-profile-picture-icon_68018.png',
            user: 'Miley Cyrus',
            text: 'Good night.',
            count: 0,
            time: '5 min. ago'
        },
        {
            id: 6,
            img: 'http://www.newdesignfile.com/postpic/2015/02/facebook-no-profile-picture-icon_68018.png',
            user: 'Furry',
            text: 'Ok, lets go.',
            count: 4,
            time: '1 day ago'
        },
        {
            id: 7,
            img: 'https://www.cheatsheet.com/wp-content/uploads/2019/10/taylor-swift-1024x681.jpg',
            user: 'Taylor Swift',
            text: 'Hi! :)',
            count: 20,
            time: 'now'
        },
        {
            id: 8,
            img: 'http://www.newdesignfile.com/postpic/2015/02/facebook-no-profile-picture-icon_68018.png',
            user: 'Miley Cyrus',
            text: 'Good night.',
            count: 0,
            time: '5 min. ago'
        },
        {
            id: 9,
            img: 'http://www.newdesignfile.com/postpic/2015/02/facebook-no-profile-picture-icon_68018.png',
            user: 'Furry',
            text: 'Ok, lets go.',
            count: 4,
            time: '1 day ago'
        },
        {
            id: 10,
            img: 'https://www.cheatsheet.com/wp-content/uploads/2019/10/taylor-swift-1024x681.jpg',
            user: 'Taylor Swift',
            text: 'Hi! :)',
            count: 20,
            time: 'now'
        },
        {
            id: 11,
            img: 'http://www.newdesignfile.com/postpic/2015/02/facebook-no-profile-picture-icon_68018.png',
            user: 'Miley Cyrus',
            text: 'Good night.',
            count: 0,
            time: '5 min. ago'
        },
        {
            id: 12,
            img: 'http://www.newdesignfile.com/postpic/2015/02/facebook-no-profile-picture-icon_68018.png',
            user: 'Furry',
            text: 'Ok, lets go.',
            count: 4,
            time: '1 day ago'
        },
        {
            id: 13,
            img: 'https://www.cheatsheet.com/wp-content/uploads/2019/10/taylor-swift-1024x681.jpg',
            user: 'Taylor Swift',
            text: 'Hi! :)',
            count: 20,
            time: 'now'
        },
        {
            id: 14,
            img: 'http://www.newdesignfile.com/postpic/2015/02/facebook-no-profile-picture-icon_68018.png',
            user: 'Miley Cyrus',
            text: 'Good night.',
            count: 0,
            time: '5 min. ago'
        },
        {
            id: 15,
            img: 'http://www.newdesignfile.com/postpic/2015/02/facebook-no-profile-picture-icon_68018.png',
            user: 'Furry',
            text: 'Ok, lets go.',
            count: 4,
            time: '1 day ago'
        }
    ];
    let activeID = 0;

    // var addProduct = function (newObj) {
    //     productList.push(newObj);
    // };

    const getContacts = function () {
        return contactList;
    };

    return {
        getContacts: getContacts
    };

}