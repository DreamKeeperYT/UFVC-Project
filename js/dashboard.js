// Example user data (replace with real backend later)
let userData = {
    coins: 100,
    stakingPercent: 40,
    recentActivity: [
        "Purchased 50 UFVC",
        "Earned 10 UFVC via volunteering",
        "Used 20 UFVC for cafeteria"
    ]
};

// Function to update coin balance
function updateBalance() {
    const balanceEl = document.getElementById('balance');
    balanceEl.textContent = `Current Coins: ${userData.coins} UFVC`;
}

// Function to update recent activity list
function updateActivity() {
    const activityEl = document.getElementById('activity');
    activityEl.innerHTML = '';
    userData.recentActivity.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        activityEl.appendChild(li);
    });
}

// Function to update staking progress bar
function updateStaking() {
    const progressEl = document.querySelector('.progress');
    progressEl.style.width = `${userData.stakingPercent}%`;
    progressEl.textContent = `${userData.stakingPercent}% Staked`;
}

// Example: simulate earning coins every 5 seconds
setInterval(() => {
    userData.coins += 5;
    userData.stakingPercent = Math.min(userData.stakingPercent + 2, 100);
    userData.recentActivity.unshift(`Earned 5 UFVC via engagement`);
    if (userData.recentActivity.length > 5) userData.recentActivity.pop();
    updateBalance();
    updateActivity();
    updateStaking();
}, 5000);

// Initialize dashboard
updateBalance();
updateActivity();
updateStaking();