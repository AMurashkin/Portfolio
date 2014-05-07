function kernel()
{
    var result =
    {
        "id": "kernel", 
        "title": "ZX Kernel: Real-Time Operating System",
        "years": "2013",
        "category": "Operating System",
        "authors": "Alexandr Murashkin, Priyaa Varshinee", 
        "description": [
                "Our Real-Time Programming course project. Includes the kernel itself and the project built on top of it." 
            ],
        "contribution": [
                "Workload is very balanced between both of our team members. We developed the system from scratch, implementing everything: from scheduling and interrupt handling to IO processing and the project application"
            ],
        "recognition": [
            "In the project we built on top of the kernel, two trains moved around the track with successful collision avoidance",
            "The system could self-restore after hardware controller’s faults or reboot"
        ],
        "commercial": false,
        "technologies": "C, ARM Assembly",
        "url": "[Kernel report](binary/projects/kernel/zx_kernel_report.pdf)",
        "images": [
            "img/projects/kernel/kernel1.png",
            "img/projects/kernel/kernel2.png"
        ]
    };

    return result;
}