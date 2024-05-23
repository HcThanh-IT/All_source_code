document.addEventListener("DOMContentLoaded", function() {
    const sources = [
        { name: "Tính tuổi~", url: "source_code/age-calculator-main/index.html" },
        { name: "Source Code 2", url: "source_code/scroll-parallax-main/index.html" },
        { name: "Source Code 3", url: "source_code/shoppie-master/index.html" },
        { name: "Nike", url: "source_code/nike-master/index.html" },
        // Thêm các source code khác vào đây
    ];

    const sourceList = document.getElementById('source-list');

    sources.forEach(source => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = source.url;
        link.textContent = source.name;
        listItem.appendChild(link);
        sourceList.appendChild(listItem);
    });
});
