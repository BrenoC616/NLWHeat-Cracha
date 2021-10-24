const userSocialMedia = {
  github: "BrenoC616",
  facebook: "brenoc616",
  instagram: "brenoc616",
  youtube: "",
  twitter: "",
};

function ChangeUserSocialMedia() {
  for (let li of userSocialMediaLinks.children) {
    const socialName = li.getAttribute("class");
    let newLink = `https://${socialName}.com/${userSocialMedia[socialName]}`;
    let a = li.firstElementChild;
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

function SetSocialMedias() {
  userSocialMedia.github = prompt("Your GitHub User");
  userSocialMedia.facebook = prompt("Your Facebook User Name");
  userSocialMedia.instagram = prompt("Your Instagram User. Without @");
  userSocialMedia.youtube = prompt("Your YouTube User or Identifier");
  userSocialMedia.twitter = prompt("Your Twitter User. Without @");

  ChangeUserSocialMedia();
  GetGitHubProfileInfo();
}

ChangeUserSocialMedia();
GetGitHubProfileInfo();
