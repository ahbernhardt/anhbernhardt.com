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
    profile: {
        title: 'Profile | Anh Nguyen',
        description: 'I’m currently completing my Master Degree in Software Engineering at University of St. Thomas building things for the web and applications. I graduated from Bemidji State University with B.S in Design. \n' +
            '\n' +
            'As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. I focus primarily on building, prototyping and implementing user interfaces that are usable and scalable for any web-based platform. I enjoy experimenting, building and trying out new tools. \n' +
            '\n' +
            'When I’m not in front of a computer screen, I’m probably camping, researching new local restaurants,building LEGO, or crossing off another item on my bucket list and share photos on Instagram.'
    },
    works: {
        title: 'Works | Anh Nguyen',
        description: 'A selection of the work which Websites, Web applications, coordinated images and more.'
    }
}
