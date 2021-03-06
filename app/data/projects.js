function Projects()
{
    var result = [];
    result.push("archangel");
    result.push("claferwebtools");
    result.push("flexy");
    result.push("isekz");
    result.push("kbtucore");
    result.push("rrrpg");
    result.push("rx4");
    result.push("testograph");
    result.push("tste");
    result.push("kernel");

    return result;
}

function ProjectDetails(projectId)
{
    var projects = Projects();
    for (var i in projects)
    {
        if (projects[i] == projectId)
        {
            var fn = window[projectId];
            return fn();
        }
    }
    return null;
}

function ProjectList()
{
    var result = [
    {
        "weight": 4, 
        "id": "isekz", 
        "imageUrl": "img/projects/isekz/ise1.png", 
        "name": "ISE.KZ", 
        "snippet": "Website for the International School of Economics and Social Science"
    }, 
    {
        "weight": 5, 
        "id": "rrrpg", 
        "imageUrl": "img/projects/rrrpg/rrrpg.png", 
        "name": "Rock'n Roll Racing Password Generator", 
        "snippet": "A tool for generating passwords for Rock'n Roll Racing - a famous SEGA console game"
    }, 
    {
        "weight": 5, 
        "id": "tste", 
        "imageUrl": "img/projects/tste/tste1.jpg", 
        "name": "Turbo String Table Editor", 
        "snippet": "An editor of CSF files - string tables used by the games Command and Conquer: Generals, Red Alert 2 and BFME"
    },
    {
        "weight": 0,
        "id": "claferwebtools",
        "imageUrl": "img/projects/claferwebtools/visualizer1.png",
        "name": "Clafer Web Tools",
        "snippet": "Web Tools for domain modeling, configuration, visualization and exploration of optimal variants"
    },
    {
        "weight": 1,
        "id": "kernel",
        "imageUrl": "img/projects/kernel/kernel2.png",
        "name": "ZX Kernel",
        "snippet": "Real-time operating system with a project built on top of it"
    },
    {
        "weight": 2,
        "id": "archangel",
        "imageUrl": "img/projects/archangel/archangel1.jpg",
        "name": "Archangel - Emergency Management and Monitoring System",
        "snippet": "Our Microsoft Imagine Cup 2012 project: an emergency monitoring system with integrated network of unmanned aerial vehicles"
    },
    {
        "weight": 5,
        "id": "testograph",
        "imageUrl": "img/projects/testograph/testograph.jpg",
        "name": "Testograph",
        "snippet": "A software for designing paper-based tests"
    },
    {
        "weight": 3,
        "id": "rx4",
        "imageUrl": "img/projects/rx4/rx4_1.png", 
        "name": "Rock'n Roll Racing R - Rx4 Game Engine", 
        "snippet": "A game engine for a remake of Rock'n Roll Racing - a famous SEGA console game"
    },
    {
        "weight": 5,
        "id": "kbtucore",
        "imageUrl": "img/projects/kbtucore/kbtucore1.png", 
        "name": "KBTU Core - Publications Management System", 
        "snippet": "A website for managing university faculty's publications"
    },
    {
        "weight": 4,
        "id": "flexy",
        "imageUrl": "img/projects/flexy/flexy1.png", 
        "name": "FLEXY - FiLe EXchange SYstem", 
        "snippet": "A web-based system for internal file exchange"
    }                    
    ];

    return result;
}