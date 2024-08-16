const change = {
    uz:{
        header:{
            home: 'O\'qituvchilar',
            about: 'Biz haqimizda',
            contact: 'Manzil',
            course: 'Kurslar',
            work: 'Ish bo\'yicha',
            gallary: 'Galereya'
        },
        hero:{
            title: 'Biz bilan Xitoy tili oson!',
            content: '',
            btn: 'Ro\'yxatdan o\'tish'
        },
        input:{
            btn: "Ro'yxatdan o'tish",
            phone: 'Sizning ismingiz',
            info: 'Birinchi darsingizga yoziling!',
            content: 'So\'rov qoldiring va menejerlarimiz siz bilan bog\'lanadi.'
        }
    },
    ru:{
        header:{
            home: 'Дом',
            about: 'Информация',
            contact: 'Контакт',
            course: '',
            work: 'Ish bo\'yicha',
            gallary: 'Galereya'
        },
        hero:{
            title: 'Biz bilan Xitoy tili oson!',
            content: '',
            btn: 'Ro\'yxatdan o\'tish'
        },
        input:{
            btn: "Ro'yxatdan o'tish",
            phone: 'Ваше имя',
            info: 'Записаться на первый урок',
            content: 'Оставьте заявку и наши менеджеры свяжутся с вами.'
        }
    },
    en:{
        header:{
            home: 'Home',
            about: 'About',
            contact: 'Contact',
            course: '',
            work: 'Ish bo\'yicha',
            gallary: 'Galereya'
        },
        hero:{
            title: 'Biz bilan Xitoy tili oson!',
            content: '',
            btn: 'Ro\'yxatdan o\'tish'
        },
        input:{
            btn: "Register",
            phone: 'Your name',
            info: 'Sign up for your first lesson',
            content: 'Leave a request and our managers will contact you.'
        }
    },
    ja:{
        header:{
            home: '家',
            about: '关于',
            contact: '接触',
            course: '',
            work: 'Ish bo\'yicha',
            gallary: 'Galereya'
        },
        hero:{
            title: 'Biz bilan Xitoy tili oson!',
            content: '',
            btn: 'Ro\'yxatdan o\'tish'
        },
        input:{
            btn: "Ro'yxatdan o'tish",
            phone: '你的名字',
            info: '报名参加您的第一堂课',
            content: '留下请求，我们的经理将与您联系。'
        }
    }
}

export const changeLang = (lang) => {
    if (change.hasOwnProperty(lang)) {
        return change[lang];
    } else {
        return change.ru;
    }
}