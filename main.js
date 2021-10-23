const userSocialMedia = {
  github: "maykbrito",
  facebook: "breno.cesar.104418",
  instagram: "brenoc616",
  youtube: "channel/UC3m2E2Onjnq-zF7eXbvEk-Q",
  twitter: "maykbrito",
};

function ChangeUserSocialMedia() {
  for (let li of userSocialMediaLinks.children) {
    const socialName = li.getAttribute("class");
    let newLink = `https://${socialName}.com/${userSocialMedia[socialName]}`;
    let a = li.children[0];
    a.href = newLink;
  }
}

function GetGitHubProfileInfo() {
  const url = `https://api.github.com/users/${userSocialMedia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userImage.src = data.avatar_url;
      userName.textContent = data.name;
      userGitHub.textContent = data.login;
      userGitHubLink.href = data.html_url;
      userBio.textContent = data.bio;
    });
}

ChangeUserSocialMedia();
GetGitHubProfileInfo();
