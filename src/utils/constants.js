// export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
    common: {
        image: '/og.png',
    },
    index: {
        title: 'Anh Nguyen | Software Engineer & Designer',
        description: "I'm Anh Nguyen, software engineer graduate student based in Minneapolis, MN. " +
          "I focus primarily on building and designing usable and scalable websites and is always" +
          " looking for exciting projects."
    },
    about: {
        title: 'About | Anh Nguyen',
        description: 'Little bit about my background.'
    },
    work: {
        title: 'Projects | Anh Nguyen',
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
