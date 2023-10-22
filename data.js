const profileData = {
    profilePicUrl: 'https://www.cc.puv.fi/~e2202945/profile/profilepic.jpg',
    title: 'Aleksanteri Koivisto',
    subtitle: 'Bachelor of Engineering student in Information Technology',
    profile_title: 'PROFILE',
    details_title: 'DETAILS',
    profile_text: 'Systematic second-year Information Technology student with hands-on experience in customer service roles and a strong foundation in tech gained through IT Service desk work',
    street_address: "Vöyrinkatu 44 A17",
    city: "Vaasa",
    postal: "65100",
    phone: "0442530151",
    email: "juho.koivisto00@outlook.com",
    nationality_title: "NATIONALITY",
    nationality: "Finnish",
    driving_title: "DRIVING LICENSE",
    drivinglicense: "BECE",
    birth_title: "DATE / PLACE OF BIRTH",
    birthdate: "23/03/2000",
    birthplace: "Helsinki",

    work_experience_title: "WORK EXPERIENCE",
    work_history: [
        {
            company: "Tietoevry Tech Services Finland Oy",
            location: "Vaasa",
            start_date: "May 2023",
            end_date: "August 2023",
            title: "Service Desk Specialist Summer Trainee"
        },
        {
            company: "Hertz/First Rent a Car Finland Oy",
            location: "Vantaa",
            start_date: "May 2022",
            end_date: "August 2022",
            title: "Customer Service Representative"
        },
        {
            company: "Goparking Oy",
            location: "Vantaa",
            start_date: "November 2021",
            end_date: "May 2022",
            title: "Customer Service Agent"
        },
        {
            company: "addCar Nordic/Carentor Oy",
            location: "Vantaa",
            start_date: "March 2021",
            end_date: "May 2022",
            title: "Car Rental Agent"
        },
        {
            company: "Workpower Oy",
            location: "Helsinki",
            start_date: "2018",
            end_date: "August 2019",
            title: "Construction Assistant"
        },
        {
            company: "R&T-Invest Oy",
            location: "Kirkkonummi",
            start_date: "July 2016",
            end_date: "July 2016",
            title: "Summer Helper at a Horse Stable"
        }
    ],

    education_title: 'EDUCATION',
    education: [
        {
            institution: 'Vaasa University of Applied Sciences',
            degree: 'Information Technology, Bachelor of Engineering',
            location: 'Vaasa',
            date: 'August 2022 - Present',
        },
        {
            institution: 'Finnish Air Force',
            degree: 'Conscription',
            location: 'Jyväskylä and Kuopio',
            date: 'January 2020 - December 2020',
        },
        {
            institution: 'Helsingin medialukio',
            degree: 'High School Diploma',
            location: 'Helsinki',
            date: 'August 2016 - May 2019',
        },
    ],

    languages_title: "LANGUAGES",
    languages: [
        { language: 'Finnish', proficiency: 'Native' },
        { language: 'English', proficiency: 'Fluent' },
        { language: 'Swedish', proficiency: 'Basic' },
      ],

    skills_card_title: "SKILLS",
    skills: [
        'Active Directory',
        'Linux',
        'C/C++',
        'OOP',
        'Basics of Java',
        'Node.js environment',
        'React',
        'Agile project methods',
        'Office 365',
        'Good verbal and written communication',
      ],

    hobbies_title: "Hobbies",
    hobbies: "Active gym-goer and self-taught guitar player",
};

console.log(profileData.work_experience_title);
console.log(profileData.work_history);
export default profileData;