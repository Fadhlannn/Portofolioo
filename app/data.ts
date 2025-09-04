type Certificate = {
  name: string
  issuer: string
  date: string
  image: string
  id: string
}

type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  link: string
  end: string
  id: string
}


type SocialLink = {
  label: string
  link: string
}


export const CERTIFICATES: Certificate[] = [
  {
    name: "Intro to Data Analytics",
    issuer: "RevoU",
    date: "1/3/2024",
    image: "Images/fadhlan-ahmad-radistya-certificate-completion-damc (1)_page-0001.jpg",
    id: "cert1",
  },
  {
    name: "SQL and Relational Databases 101",
    issuer: "cognitiveclass.ai / IBM Developer Skills Network.",
    date: "14/5/24",
    image: "Images/IBM DB0101EN Certificate _ Cognitive Class_page-0001.jpg",
    id: "cert2",
  },
  {
    name: "Data Analysis with Python",
    issuer: "cognitiveclass.ai / IBM Developer Skills Network.",
    date: "11/5/2024",
    image: "Images/sertifikat-1.png",
    id: "cert3",
  },
    {
    name: "Activist of Publication and Marketing HIMTI BINUS 2023",
    issuer: "HIMTI BINUS Bandung.",
    date: "2023",
    image: "Images/PM-Fadhlan Ahmad Radistya-1.png",
    id: "cert4",
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'EARTHQUAKE-PREDICTION',
    description:
      'Earthquake prediction aims to provide early warning, reduce losses, and save lives. Here we conduct analysis using 4 models, namely LSTM, Random Forest, Catboost, and SVM (support vector machine).',
    link: 'https://github.com/Fadhlannn/Earthquake-Prediction',
    image:
      'Images/Galeri 3 Gambar (1).png',
    id: 'project1',
  },
  {
    name: 'Database Design',
    description: 'create a database design project with the title totopedia. This project normalizes data from unf to 5nf.',
    link: 'https://github.com/Fadhlannn/DatabaseDesign-Clotopedia',
    image:
      'Images/Galeri 3 Gambar (2).png',
    id: 'project2',
  },
  {
    name: 'IMAGE PROCESSING',
    description: 'The development of artificial intelligence technology has presented a new approach to image processing, especially through the use of neural network algorithms such as Long-Short Term Memory (LSTM), Convolutional Neural Network (CNN), and Recurrent Neural Network (RNN). The third model opens up opportunities to recognize patterns in images, allowing for more contextual and accurate descriptions.',
    link: 'https://github.com/Fadhlannn/image-processing',
    image:
      'Images/Galeri 3 Gambar (3).png',
    id: 'project3',
  },
  { 
    name: 'Stock Gudang',
    description: 'I developed a Warehouse Stock Management Application from the ground up for PT Primajasa PerdanaRaya Utama, starting with the database design and continuing through the implementation of key features such as role-based user access, real-time stock updates, and transaction management. To ensure accurate inventory tracking, I applied the FIFO (First In, First Out) algorithm so that the oldest items are prioritized for distribution, resulting in improved efficiency, accuracy, and streamlined warehouse operations.',
    link: '',
    image:
      'Images/Galeri 3 Gambar (4).png',
    id: 'project4',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'PT. Primajasa Perdana Raya Utama',
    title: 'Fullstack Developer',
    start: '1 february 2025',
    link: 'Images/image.png',
    end: '1 Augustus 2025',
    id: 'work1',
  },
  {
    company: 'Kementrian ESDM - Badan Geologi',
    title: 'Database Specialist',
    start: '1 September',
    link: 'Images/image.png',
    end: 'present',
    id: 'work2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Fadhlannn',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/fadhlan-ahmad',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/fadhlanaaarrr',
  },
]

export const EMAIL = 'fadhlan085@gmail.com'
