// Animação suave na rolagem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function translatePortfolio() {
    // Tradução para inglês
    document.querySelector('header h1').innerText = "Matheus - Full-Stack Dev";
    document.querySelector('header p').innerText = "Node.js | Express | JavaScript | HTML | CSS | Python | Web Application Development";
    
    document.getElementById('apresentacao').querySelector('h2').innerText = "About Me";
    document.getElementById('apresentacao').querySelector('p').innerText = "I am a Full-Stack developer with experience in Node.js, Express, JavaScript, HTML, CSS, Python, and Web Application Development. My passion for technology has led me to create innovative solutions that help companies optimize their processes and provide an incredible user experience. I have worked in France and Portugal as a junior web developer, where I had the opportunity to improve my skills in dynamic and challenging environments. I am fluent in French and have intermediate English and Spanish, along with basic knowledge of Russian. Throughout my career, I have participated in projects that allowed me to collaborate with diverse teams and learn new technologies. I am an advocate of agile methodologies and value clear communication to achieve the best results. In this portfolio, you will find some of my most relevant projects, demonstrating my ability to create scalable and responsive applications. I am always looking to learn and stay updated in a constantly evolving field. If you are looking for a passionate and committed developer, feel free to get in touch!";

    document.getElementById('especialidades').querySelector('h2').innerText = "My Specialties";
    // Atualize as especialidades aqui se necessário

    document.getElementById('idiomas').querySelector('h2').innerText = "Languages";
    // Atualize os idiomas aqui se necessário

    document.getElementById('projetos').querySelector('h2').innerText = "My Projects";
    document.querySelector('.projeto h3').innerText = "Task Manager";
    document.querySelector('.projeto p').innerText = "Task management application using Node.js, Express, MongoDB, and EJS.";
}

function translatePortfolioPT() {
    // Retornar para português
    document.querySelector('header h1').innerText = "Matheus - Dev Full-Stack";
    document.querySelector('header p').innerText = "Node.js | Express | JavaScript | HTML | CSS | Python | Desenvolvimento de Aplicações Web";

    document.getElementById('apresentacao').querySelector('h2').innerText = "Sobre Mim";
    document.getElementById('apresentacao').querySelector('p').innerText = "Sou um desenvolvedor Full-Stack com experiência em Node.js, Express, JavaScript, HTML, CSS e Python. Minha paixão pela tecnologia me levou a criar soluções inovadoras que ajudam empresas a otimizar seus processos e proporcionar uma experiência incrível ao usuário. Já trabalhei na França e em Portugal como desenvolvedor web júnior, onde tive a oportunidade de aprimorar minhas habilidades em ambientes dinâmicos e desafiadores. Sou fluente em francês, tenho inglês e espanhol intermediários e conhecimentos básicos de russo. Ao longo da minha carreira, participei de projetos que me permitiram colaborar com equipes diversas e aprender novas tecnologias. Defendo as metodologias ágeis e valorizo a comunicação clara para alcançar os melhores resultados. Neste portfólio, você encontrará alguns dos meus projetos mais relevantes, demonstrando minha capacidade de criar aplicações escaláveis e responsivas. Estou sempre em busca de aprendizado e atualização em um campo em constante evolução. Se você está procurando um desenvolvedor apaixonado e comprometido, fique à vontade para entrar em contato!";

    document.getElementById('especialidades').querySelector('h2').innerText = "Minhas Especialidades";
    // Atualize as especialidades aqui se necessário

    document.getElementById('idiomas').querySelector('h2').innerText = "Idiomas";
    // Atualize os idiomas aqui se necessário

    document.getElementById('projetos').querySelector('h2').innerText = "Meus Projetos";
    document.querySelector('.projeto h3').innerText = "Gerenciador de Tarefas";
    document.querySelector('.projeto p').innerText = "Aplicação de gerenciamento de tarefas utilizando Node.js, Express, MongoDB e EJS.";
}