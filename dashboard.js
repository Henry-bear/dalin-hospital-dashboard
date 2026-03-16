document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.querySelector(".sidebar");
    const navLinks = document.querySelectorAll(".nav-link");

    // 建立遮罩
    const overlay = document.createElement("div");
    overlay.className = "sidebar-overlay";
    document.body.appendChild(overlay);

    // 漢堡選單切換
    function toggleMobileMenu() {
        menuToggle.classList.toggle("active");
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    }

    menuToggle.addEventListener("click", toggleMobileMenu);
    overlay.addEventListener("click", toggleMobileMenu);

    // 左側摺疊選單
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const currentItem = this.parentElement;
            const isOpen = currentItem.classList.contains("open");

            document.querySelectorAll(".nav-item").forEach(item => {
                item.classList.remove("open");
            });

            if (!isOpen) {
                currentItem.classList.add("open");
            }
        });
    });

    // 桌機與手機切換時，重置側邊欄狀態
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove("active");
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        }
    });
});