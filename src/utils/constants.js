export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
    common: {
        image: '/images/og.png',
    },
    index: {
        title: 'Anh Nguyen | Software Engineer & Designer',
        description: 'I am Anh Nguyen, software engineer graduate student based in Minneapolis, MN. I focus' +
          ' primarily on building and designing usable and scalable websites and is always looking for exciting projects.'
    },
    about: {
        title: 'About | Anh Nguyen',
        description: 'Little bit about my background.'
    },
    work: {
        title: 'Works | Anh Nguyen',
        description: 'A selection of the work which Websites, Web applications, coordinated design and more.'
    },
    contact: {
        title: 'Contact | Anh Nguyen',
        description: 'Get in touch'
    },
    oops: {
        title: 'Oops | Page not found',
        description: 'Oh dear, this link isn’t working.'
    }
}
