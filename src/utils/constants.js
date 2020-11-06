// export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
    common: {
        image: '/images/me.jpg',
    },
    index: {
        title: 'Anh Nguyen | Software Engineer & Designer',
        description: 'Anh Nguyen, software engineer graduate student based in Minneapolis, MN. I focus primarily on building (and occasionally designing) usable, exceptional, and scalable websites, applications, and everything in between.'
    },
    oops: {
        title: 'Oops | Page not found',
        description: 'Oh dear, this link isn’t working.'
    },
    profile: {
        title: 'Profile | Anh Nguyen',
        description: 'Little bit about my background.'
    },
    works: {
        title: 'Works | Anh Nguyen',
        description: 'A selection of the work which Websites, Web applications, coordinated design and more.'
    }
}
