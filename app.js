const suggestions = [
  {
    name: "Leo Qraf",
    tag: "@leo_art",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=60",
    hobbies: "Rəsm, rəqəmsal dizayn"
  },
  {
    name: "Mira Kod",
    tag: "@mira_code",
    avatar:
      "https://images.unsplash.com/photo-1544723795-241c5f941d0b?auto=format&fit=crop&w=100&q=60",
    hobbies: "Robotexnika, kodlama"
  },
  {
    name: "Tunar Oyuncu",
    tag: "@game_tunar",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=60",
    hobbies: "Video oyunlar, podkast"
  },
  {
    name: "Leyla Kitab",
    tag: "@book_leyla",
    avatar:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=100&q=60",
    hobbies: "Kitab klubu rəhbəri"
  }
];

let postData = [
  {
    id: 1,
    title: "Şən rənglər yarışması",
    content:
      "Bu gün məktəbdə rəsm yarışması oldu! Dostlarım ilə birlikdə göyqurşağı mövzusunda əsərlər çəkdik. Sizin sevimli rənginiz hansıdır?",
    author: "Aysu Məmmədova",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=60",
    time: "1 saat əvvəl",
    likes: 87,
    comments: 12,
    tags: ["#rəsm", "#yarışma", "#göyqurşağı"]
  },
  {
    id: 2,
    title: "STEM klubunda yeni robot",
    content:
      "Mira ilə birlikdə LEGO robotumuzu təkmilləşdirdik. İndi maneələrdən qaça bilir. Kimin maraqlı layihəsi var, paylaşın!",
    author: "Tunar Oyuncu",
    avatar:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=80&q=60",
    time: "3 saat əvvəl",
    likes: 102,
    comments: 19,
    tags: ["#robot", "#STEM", "#inovasiya"]
  },
  {
    id: 3,
    title: "Gecə oxu marafonu",
    content:
      "Leyla ilə onlayn oxu marafonu keçirdik. 30 dəqiqədə hər kəs sevdiyi kitabdan hissələr oxudu. Növbəti dəfə hansı mövzu olsun?",
    author: "Leo Qraf",
    avatar:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=80&q=60",
    time: "Dünən",
    likes: 76,
    comments: 9,
    tags: ["#kitab", "#marafon", "#dostluq"]
  }
];

const quizzes = [
  {
    id: "science",
    title: "Elmi kəşflər",
    description: "Sənin elm macəranı sınayan 5 sual!",
    questions: [
      {
        text: "Hansı planet Günəşə ən yaxındır?",
        options: ["Venera", "Merkuri", "Mars", "Yupiter"],
        answer: 1
      },
      {
        text: "Su hansı dərəcədə donur?",
        options: ["0°C", "100°C", "-5°C", "10°C"],
        answer: 0
      },
      {
        text: "Bitkilər hansı proseslə oksigen yaradır?",
        options: ["Fotosintez", "Nəfəsalma", "Mayalanma", "Kristallaşma"],
        answer: 0
      }
    ]
  },
  {
    id: "story",
    title: "Nağıl bilicisi",
    description: "Ən sevimli nağılları necə tanıyırsan?",
    questions: [
      {
        text: "Hansının dostu Balaca Şahzadə idi?",
        options: ["Qoltuqcan", "Tülkü", "Günəş", "Gül"],
        answer: 1
      },
      {
        text: "Cırtdan nağılında devin zəif tərəfi nə idi?",
        options: ["Ayaqları", "Şəfəqi", "Sehirli daşı", "Yuxusu"],
        answer: 3
      }
    ]
  },
  {
    id: "math",
    title: "Rəqəm sehrbazı",
    description: "İki dəqiqəyə toplama və çıxma macərası",
    questions: [
      {
        text: "12 + 15 = ?",
        options: ["28", "27", "26", "25"],
        answer: 1
      },
      {
        text: "40 - 17 = ?",
        options: ["33", "23", "27", "13"],
        answer: 1
      },
      {
        text: "5 × 4 = ?",
        options: ["25", "20", "30", "15"],
        answer: 1
      }
    ]
  }
];

const chatFriends = [
  { name: "Mira Kod", mood: "😊 kod yazır" },
  { name: "Leo Qraf", mood: "🎨 rəsm çəkir" },
  { name: "Tunar Oyuncu", mood: "🎮 oyun oynayır" },
  { name: "Leyla Kitab", mood: "📚 oxu klubundadır" }
];

const chatReplies = [
  "Super! Mən də az sonra qoşulacam.",
  "Bunu dostlar klubunda paylaşaq!",
  "Vay! Dəstək üçün şəkil göndərə bilərsən?",
  "Səncə bunu yeni layihəmizə əlavə edə bilərik?",
  "Sənə 3 yeni dost təklifi göndərdim!"
];

let filteredPosts = [...postData];

const STORAGE_USERS_KEY = "frendliUsers";
const STORAGE_CURRENT_KEY = "frendliCurrentUser";
const FALLBACK_AVATAR =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60";

const appState = {
  currentUser: null
};

const appContainer = document.getElementById("app");
const authOverlay = document.getElementById("auth-overlay");
const authTabs = document.querySelectorAll(".auth-tab");
const authForms = document.querySelectorAll(".auth-form");
const loginForm = document.getElementById("login-form");
const loginUsernameInput = document.getElementById("login-username");
const loginPasswordInput = document.getElementById("login-password");
const registerForm = document.getElementById("register-form");
const registerFullnameInput = document.getElementById("register-fullname");
const registerUsernameInput = document.getElementById("register-username");
const registerPasswordInput = document.getElementById("register-password");
const authMessage = document.getElementById("auth-message");
const authActionButton = document.getElementById("auth-action");
const profileNameEl = document.getElementById("profile-name");
const profileHandleEl = document.getElementById("profile-handle");
const profileAvatarEl = document.getElementById("profile-avatar");
const profileFriendsEl = document.getElementById("profile-friends");
const profilePostsEl = document.getElementById("profile-posts");
const profileTestsEl = document.getElementById("profile-tests");
const followList = document.getElementById("follow-list");
const postList = document.getElementById("post-list");
const createPostForm = document.getElementById("create-post");
const postTitleInput = document.getElementById("post-title");
const postContentInput = document.getElementById("post-content");
const filterLatest = document.getElementById("filter-latest");
const filterPopular = document.getElementById("filter-popular");
const quizList = document.getElementById("quiz-list");
const quizPanel = document.getElementById("quiz-panel");
const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const onlineFriends = document.getElementById("online-friends");

let authMessageTimeout;

function showAuthMessage(text, type = "info") {
  if (!authMessage) return;
  authMessage.textContent = text;
  authMessage.className = `auth-message${text ? ` ${type}` : ""}`;

  if (authMessageTimeout) {
    clearTimeout(authMessageTimeout);
  }

  if (text) {
    authMessageTimeout = setTimeout(() => {
      authMessage.textContent = "";
      authMessage.className = "auth-message";
    }, 4000);
  }
}

function activateAuthTab(target) {
  authTabs.forEach((tab) => {
    const isActive = tab.dataset.target === target;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  authForms.forEach((form) => {
    const isActive = form.dataset.form === target;
    form.classList.toggle("active", isActive);
    form.setAttribute("aria-hidden", isActive ? "false" : "true");
  });
}

function loadUsers() {
  const stored = localStorage.getItem(STORAGE_USERS_KEY);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Frendli istifadəçilərini oxumaq mümkün olmadı", error);
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}

function normalizeUsername(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "_");
}

function generateAvatar(username) {
  const seed = encodeURIComponent(username);
  return `https://api.dicebear.com/6.x/bottts-neutral/svg?size=120&background=%23f9f7ff&seed=${seed}`;
}

function createUser(fullName, username, password) {
  return {
    fullName,
    username,
    password,
    avatar: generateAvatar(username),
    stats: {
      friends: Math.floor(Math.random() * 30) + 20,
      posts: 0,
      tests: 0
    }
  };
}

function findUser(username) {
  const normalized = username.trim().toLowerCase();
  return loadUsers().find((user) => user.username.toLowerCase() === normalized);
}

function setCurrentUser(user) {
  appState.currentUser = user;
  if (user) {
    localStorage.setItem(STORAGE_CURRENT_KEY, user.username);
  } else {
    localStorage.removeItem(STORAGE_CURRENT_KEY);
  }
  updateUIForUser(user);
}

function populateProfile(user) {
  if (!profileNameEl || !profileHandleEl || !profileAvatarEl) return;

  profileNameEl.textContent = user.fullName;
  profileHandleEl.textContent = `@${user.username}`;
  profileAvatarEl.src = user.avatar || FALLBACK_AVATAR;
  profileAvatarEl.alt = `${user.fullName} profil şəkli`;
  if (profileFriendsEl) profileFriendsEl.textContent = user.stats?.friends ?? 0;
  if (profilePostsEl) profilePostsEl.textContent = user.stats?.posts ?? 0;
  if (profileTestsEl) profileTestsEl.textContent = user.stats?.tests ?? 0;
}

function updateUIForUser(user) {
  if (!appContainer || !authOverlay) return;

  if (!user) {
    appContainer.classList.add("hidden");
    authOverlay.classList.remove("hidden");
    authOverlay.setAttribute("aria-hidden", "false");
    authActionButton.textContent = "Giriş";
    authActionButton.setAttribute("data-state", "login");
    activateAuthTab("login");
    loginForm?.reset();
    registerForm?.reset();
    if (chatMessages) {
      chatMessages.innerHTML = "";
    }
    return;
  }

  appContainer.classList.remove("hidden");
  authOverlay.classList.add("hidden");
  authOverlay.setAttribute("aria-hidden", "true");
  authActionButton.textContent = "Çıxış";
  authActionButton.setAttribute("data-state", "logout");

  populateProfile(user);

  loginForm?.reset();
  registerForm?.reset();
  showAuthMessage("");
  activateAuthTab("login");
  resetChat(user);
}

function updateCurrentUser(updater) {
  if (!appState.currentUser) return;

  const draft = {
    ...appState.currentUser,
    stats: { ...appState.currentUser.stats }
  };

  const updated = updater(draft);
  if (!updated) return;

  const users = loadUsers();
  const index = users.findIndex(
    (stored) => stored.username.toLowerCase() === appState.currentUser.username.toLowerCase()
  );

  if (index !== -1) {
    users[index] = updated;
    saveUsers(users);
  }

  appState.currentUser = updated;
  localStorage.setItem(STORAGE_CURRENT_KEY, updated.username);
  populateProfile(updated);
}

function incrementUserStat(statKey) {
  updateCurrentUser((user) => {
    if (!user.stats) {
      user.stats = {};
    }
    const currentValue = Number(user.stats[statKey] ?? 0);
    user.stats[statKey] = currentValue + 1;
    return user;
  });
}

function getInitialMessages(user) {
  const firstName = user.fullName.split(" ")[0] || user.fullName;
  const welcomeTime = new Date().toLocaleTimeString("az-AZ", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return [
    { from: "Mira", message: "Salam! Yeni robot dizaynımız hazırdır.", time: "18:04" },
    { from: "Sən", message: "Super! Post kimi paylaşım edək?", time: "18:05", me: true },
    { from: "Leo", message: "Mən də rəngli banner hazırlayım!", time: "18:06" },
    { from: "Frendli bot", message: `${firstName}, platformaya xoş gəldin!`, time: welcomeTime }
  ];
}

function resetChat(user) {
  if (!chatMessages) return;
  chatMessages.innerHTML = "";
  getInitialMessages(user).forEach(renderMessage);
}

function restoreSession() {
  const storedUsername = localStorage.getItem(STORAGE_CURRENT_KEY);
  if (!storedUsername) {
    setCurrentUser(null);
    return;
  }

  const user = findUser(storedUsername);
  if (user) {
    setCurrentUser(user);
  } else {
    setCurrentUser(null);
  }
}

function logoutUser() {
  const firstName = appState.currentUser?.fullName.split(" ")[0] || "";
  setCurrentUser(null);
  showAuthMessage(
    firstName ? `${firstName}, səni yenidən gözləyəcəyik!` : "Hesabdan çıxış edildi.",
    "info"
  );
}

function handleLogin(event) {
  event.preventDefault();
  const username = loginUsernameInput.value.trim();
  const password = loginPasswordInput.value.trim();

  if (!username || !password) {
    showAuthMessage("İstifadəçi adı və şifrə vacibdir.", "error");
    return;
  }

  const existingUser = findUser(username);
  if (!existingUser) {
    showAuthMessage("Bu istifadəçi tapılmadı. Qeydiyyatdan keç!", "error");
    return;
  }

  if (existingUser.password !== password) {
    showAuthMessage("Şifrə yanlışdır. Yenidən yoxla.", "error");
    return;
  }

  setCurrentUser(existingUser);
}

function handleRegister(event) {
  event.preventDefault();
  const fullName = registerFullnameInput.value.trim();
  const usernameInput = registerUsernameInput.value.trim();
  const password = registerPasswordInput.value.trim();

  if (fullName.length < 3) {
    showAuthMessage("Tam ad ən azı 3 simvol olmalıdır.", "error");
    return;
  }

  if (usernameInput.length < 3) {
    showAuthMessage("İstifadəçi adı ən azı 3 simvol olmalıdır.", "error");
    return;
  }

  if (password.length < 4) {
    showAuthMessage("Şifrə ən azı 4 simvol olmalıdır.", "error");
    return;
  }

  const normalizedUsername = normalizeUsername(usernameInput);
  const users = loadUsers();
  const isTaken = users.some(
    (user) => user.username.toLowerCase() === normalizedUsername.toLowerCase()
  );

  if (isTaken) {
    showAuthMessage("Bu istifadəçi adı artıq mövcuddur.", "error");
    return;
  }

  const newUser = createUser(fullName, normalizedUsername, password);
  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);
}

function createFollowItem(user) {
  const li = document.createElement("li");
  li.className = "follow-item";
  const isFollowing = Math.random() > 0.6;

  li.innerHTML = `
    <div class="info">
      <img src="${user.avatar}" alt="${user.name}" />
      <div>
        <p class="name">${user.name}</p>
        <p class="tag">${user.tag} · ${user.hobbies}</p>
      </div>
    </div>
    <button class="follow-btn ${isFollowing ? "following" : ""}">
      ${isFollowing ? "Takipdə" : "Takip et"}
    </button>
  `;

  const button = li.querySelector("button");
  button.addEventListener("click", () => {
    button.classList.toggle("following");
    button.textContent = button.classList.contains("following")
      ? "Takipdə"
      : "Takip et";
  });

  return li;
}

function renderFollowSuggestions() {
  followList.innerHTML = "";
  suggestions.forEach((user) => followList.appendChild(createFollowItem(user)));
}

function renderPosts(posts) {
  postList.innerHTML = "";

  posts.forEach((post) => {
    const article = document.createElement("article");
    article.className = "post-card";
    article.innerHTML = `
      <header>
        <img src="${post.avatar}" alt="${post.author}" />
        <div>
          <h3>${post.title}</h3>
          <p class="post-meta">${post.author} · ${post.time}</p>
        </div>
      </header>
      <p class="post-content">${post.content}</p>
      <div class="tag-list">
        ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="post-actions-row">
        <div class="reactions">
          <span>❤️ ${post.likes}</span>
          <span>💬 ${post.comments}</span>
        </div>
        <button class="btn btn-small btn-ghost share-btn">Dostlara göndər</button>
      </div>
    `;

    const shareButton = article.querySelector(".share-btn");
    shareButton.addEventListener("click", () => {
      shareButton.textContent = "Göndərildi!";
      shareButton.disabled = true;
      shareButton.classList.add("sent");
      setTimeout(() => {
        shareButton.textContent = "Dostlara göndər";
        shareButton.disabled = false;
        shareButton.classList.remove("sent");
      }, 1800);
    });

    postList.appendChild(article);
  });
}

function addNewPost(title, content) {
  const now = new Date();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const authorName = appState.currentUser?.fullName ?? "Frendli istifadəçisi";
  const authorAvatar = appState.currentUser?.avatar ?? FALLBACK_AVATAR;
  const tags = ["#frendli", "#yenipost"];
  if (appState.currentUser) {
    tags.push(`#${appState.currentUser.username}`);
  }
  const newPost = {
    id: Date.now(),
    title,
    content,
    author: authorName,
    avatar: authorAvatar,
    time: `${now.getHours()}:${minutes}`,
    likes: Math.floor(Math.random() * 30) + 20,
    comments: Math.floor(Math.random() * 5),
    tags
  };
  postData = [newPost, ...postData];
  filteredPosts = [...postData];
  renderPosts(filteredPosts);
  if (appState.currentUser) {
    incrementUserStat("posts");
  }
}

function setFilterActive(activeButton) {
  [filterLatest, filterPopular].forEach((btn) => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-ghost");
  });
  activeButton.classList.add("btn-primary");
  activeButton.classList.remove("btn-ghost");
}

createPostForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = postTitleInput.value.trim();
  const content = postContentInput.value.trim();

  if (!title || !content) return;

  addNewPost(title, content);
  createPostForm.reset();
});

filterLatest.addEventListener("click", () => {
  filteredPosts = [...postData];
  renderPosts(filteredPosts);
  setFilterActive(filterLatest);
});

filterPopular.addEventListener("click", () => {
  filteredPosts = [...postData].sort((a, b) => b.likes - a.likes);
  renderPosts(filteredPosts);
  setFilterActive(filterPopular);
});

function renderQuizList() {
  quizzes.forEach((quiz) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = "quiz-button";
    button.dataset.quizId = quiz.id;
    button.innerHTML = `<strong>${quiz.title}</strong><br /><span>${quiz.description}</span>`;
    button.addEventListener("click", () => openQuiz(quiz));
    li.appendChild(button);
    quizList.appendChild(li);
  });
}

function openQuiz(quiz) {
  Array.from(quizList.querySelectorAll(".quiz-button")).forEach((btn) =>
    btn.classList.remove("active")
  );
  const activeButton = quizList.querySelector(
    `.quiz-button[data-quiz-id="${quiz.id}"]`
  );
  activeButton?.classList.add("active");

  const state = {
    current: 0,
    score: 0,
    finished: false
  };

  renderQuestion(quiz, state);
}

function renderQuestion(quiz, state) {
  const question = quiz.questions[state.current];
  quizPanel.innerHTML = `
    <div class="quiz-header">
      <h3 class="quiz-question">${question.text}</h3>
      <p>${quiz.title} · Sual ${state.current + 1}/${quiz.questions.length}</p>
    </div>
    <ul class="quiz-options">
      ${question.options
        .map(
          (option, index) =>
            `<li class="quiz-option" data-index="${index}">${option}</li>`
        )
        .join("")}
    </ul>
    <div class="quiz-progress">
      <div class="progress-bar"><span style="width: ${
        ((state.current + 1) / quiz.questions.length) * 100
      }%"></span></div>
      <p>Bal: ${state.score}</p>
    </div>
  `;

  quizPanel.querySelectorAll(".quiz-option").forEach((optionEl) => {
    optionEl.addEventListener("click", () => {
      if (state.finished) return;

      const answerIndex = Number(optionEl.dataset.index);
      const isCorrect = answerIndex === quiz.questions[state.current].answer;

      if (isCorrect) {
        state.score += 10;
        optionEl.classList.add("correct");
      } else {
        optionEl.classList.add("incorrect");
        const correctOption = quizPanel.querySelector(
          `.quiz-option[data-index="${quiz.questions[state.current].answer}"]`
        );
        correctOption?.classList.add("correct");
      }

      state.finished = true;
      setTimeout(() => {
        state.current += 1;
        state.finished = false;

        if (state.current >= quiz.questions.length) {
          renderQuizResult(quiz, state);
        } else {
          renderQuestion(quiz, state);
        }
      }, 1000);
    });
  });
}

function renderQuizResult(quiz, state) {
  const maxScore = quiz.questions.length * 10;
  const message = state.score > maxScore * 0.7 ? "Əla nəticə!" : "Daha çox çalış!";

  if (appState.currentUser) {
    incrementUserStat("tests");
  }

  quizPanel.innerHTML = `
    <div class="quiz-result">
      <h3>${message}</h3>
      <p>${quiz.title} üzrə balın: <strong>${state.score}</strong> / ${maxScore}</p>
      <button class="btn btn-primary retry">Yenidən başla</button>
    </div>
  `;

  quizPanel.querySelector(".retry").addEventListener("click", () => openQuiz(quiz));
}

function renderChatFriends() {
  chatFriends.forEach((friend) => {
    const li = document.createElement("li");
    li.className = "chat-friend";
    li.innerHTML = `<span class="status-dot"></span><div><strong>${friend.name}</strong><br /><small>${friend.mood}</small></div>`;
    onlineFriends.appendChild(li);
  });
}

function renderMessage({ from, message, time, me }) {
  const div = document.createElement("div");
  div.className = `message ${me ? "me" : ""}`;
  div.innerHTML = `<span>${message}</span><small>${from} · ${time}</small>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!appState.currentUser) return;
  const message = chatInput.value.trim();
  if (!message) return;

  const time = new Date().toLocaleTimeString("az-AZ", {
    hour: "2-digit",
    minute: "2-digit"
  });

  renderMessage({ from: "Sən", message, time, me: true });
  chatInput.value = "";

  setTimeout(() => {
    if (!appState.currentUser) return;
    const reply = chatReplies[Math.floor(Math.random() * chatReplies.length)];
    const friend = chatFriends[Math.floor(Math.random() * chatFriends.length)];
    const replyTime = new Date().toLocaleTimeString("az-AZ", {
      hour: "2-digit",
      minute: "2-digit"
    });
    renderMessage({ from: friend.name, message: reply, time: replyTime });
  }, 1000 + Math.random() * 1000);
});

function startAmbientMessages() {
  setInterval(() => {
    if (!appState.currentUser) return;
    const friend = chatFriends[Math.floor(Math.random() * chatFriends.length)];
    const message = `${friend.name.split(" ")[0]} yeni postunu bəyəndi!`;
    const time = new Date().toLocaleTimeString("az-AZ", {
      hour: "2-digit",
      minute: "2-digit"
    });
    renderMessage({ from: "Frendli bot", message, time });
  }, 15000);
}

function bindMoodButtons() {
  const buttons = document.querySelectorAll(".mood-btn");
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      buttons.forEach((other) => other.classList.remove("active"));
      btn.classList.add("active");
    })
  );
}

activateAuthTab("login");

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;
    activateAuthTab(target);
    showAuthMessage("");
    if (target === "login") {
      loginUsernameInput?.focus();
    } else {
      registerFullnameInput?.focus();
    }
  });
});

loginForm?.addEventListener("submit", handleLogin);
registerForm?.addEventListener("submit", handleRegister);

authActionButton?.addEventListener("click", () => {
  if (appState.currentUser) {
    logoutUser();
  } else {
    authOverlay?.classList.remove("hidden");
    authOverlay?.setAttribute("aria-hidden", "false");
    appContainer?.classList.add("hidden");
    activateAuthTab("login");
    loginUsernameInput?.focus();
  }
});

restoreSession();

renderFollowSuggestions();
renderPosts(filteredPosts);
setFilterActive(filterLatest);
renderQuizList();
renderChatFriends();
bindMoodButtons();
startAmbientMessages();
