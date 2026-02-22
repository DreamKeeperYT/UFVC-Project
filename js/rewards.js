// Example starting balance
let userBalance = 10;

const rewards = [
    { name: "Parking Pass", cost: 2, icon: "fa-car" },
    { name: "Cafeteria Voucher", cost: 5, icon: "fa-burger" },
    { name: "Bookstore Discount", cost: 3, icon: "fa-book" },
    { name: "Raffle Ticket", cost: 4, icon: "fa-gift" },
    { name: "Campus Event Pass", cost: 6, icon: "fa-calendar-star" }
];

const rewardsList = document.getElementById("rewardsList");
const balanceEl = document.getElementById("balance");

function displayRewards() {
    rewardsList.innerHTML = "";
    rewards.forEach(reward => {
        const card = document.createElement("div");
        card.classList.add("reward-card");

        const canClaim = userBalance >= reward.cost;

        card.innerHTML = `
            <div class="reward-info">
                <i class="fa-solid ${reward.icon}"></i>
                <span>${reward.name}</span>
                <span class="reward-cost">${reward.cost} UFVCoin</span>
            </div>
            <button ${!canClaim ? "disabled" : ""}>
                ${canClaim ? "Claim" : "Insufficient Coins"}
            </button>
        `;

        if (canClaim) {
            card.querySelector("button").addEventListener("click", () => {
                userBalance -= reward.cost;
                alert(`You claimed ${reward.name}!`);
                updateBalance();
                displayRewards();
            });
        }

        rewardsList.appendChild(card);
    });
}

function updateBalance() {
    balanceEl.innerHTML = `You have <strong>${userBalance} UFVCoin</strong>`;
}

// Initialize
displayRewards();
updateBalance();