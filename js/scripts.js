// 可以添加一些交互效果，比如点击文章标题时的提示
document.querySelectorAll('.post h3 a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('即将跳转到文章页面');
        window.location.href = e.target.href;
    });
});