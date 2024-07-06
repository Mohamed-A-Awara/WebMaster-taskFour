let element = document.querySelector("#servicesElement");
let services = [
    {
        id: 1,
        title: "Web Design",
        content: "Beautiful and responsive web designs tailored to your needs.",
    },
    {
        id: 2,
        title: "Development",
        content: "Full-stack web development solutions using modern technologies.",
    },
    {
        id: 3,
        title: "SEO Optimization",
        content: "Boost your online presence with our SEO strategies..",
    },
];

function drawElements() {
    let ele = services.map((item) => {
        return `
                <div class="service">
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                </div>
            `;
    });
    ele = ele.join('')
    // console.log(ele);
    element.innerHTML = ele
}
drawElements()
