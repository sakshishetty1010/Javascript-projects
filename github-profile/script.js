const APIURL = "https://api.github.com/users/";
const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

async function getUser(username) {
    const res = await fetch(APIURL + username);
    const respData = await res.json();
    createUserCard(respData);
    getRepos(username);
}

async function getRepos(username) {
    const res = await fetch(APIURL + username + '/repos');
    const respData = await res.json();
    addRepostoCard(respData);
}

getUser('jakeherp');

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
        <div>
            <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul class="info">
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>
`;

    main.innerHTML = cardHTML;

}

function addRepostoCard(repos) {
    const reposEl = document.querySelector('#repos');
    repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 10)
        .forEach(repo => {
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo');
            repoEl.href = repo.html_url;
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;
            reposEl.appendChild(repoEl);
        });

}

form.addEventListener('submit', e => {
    e.preventDefault();
    const user = search.value;
    if (user) {
        getUser(user);
        search.value = '';
    }
})
