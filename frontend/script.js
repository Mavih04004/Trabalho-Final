document.addEventListener('DOMContentLoaded', function () {
    const profileButton = document.querySelector('.profile-menu-button');
    const profileMenu = document.getElementById('profile-menu');

    profileButton.addEventListener('click', function () {
        const expanded = profileButton.getAttribute('aria-expanded') === 'true';
        profileButton.setAttribute('aria-expanded', !expanded);
        profileMenu.style.display = expanded ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        if (!profileButton.contains(event.target) && !profileMenu.contains(event.target)) {
            profileButton.setAttribute('aria-expanded', 'false');
            profileMenu.style.display = 'none';
        }
    });
});
