// Initial health values
let health1 = 100;
let health2 = 100;
let currentPlayer = 1;
let attackCount1 = 0;
let attackCount2 = 0;

// random attack value between 2 and 5
function generateAttackValue() {
  return Math.floor(Math.random() * 4) + 2;
}

// Function to handle turns
function takeTurn(fighter) {
  if (currentPlayer !== fighter) {
    alert(`It's not your turn, Fighter ${fighter}!`);
    return;
  }

  // Determine the target fighter
  let targetHealth,
    healthBar,
    attackBtn,
    specialAttackBtn,
    healBtn,
    attackCount;

  if (fighter === 1) {
    targetHealth = health2;
    healthBar = document.getElementById("healthBar2");
    attackBtn = document.getElementById("attackBtn1");
    specialAttackBtn = document.getElementById("specialAttackBtn1");
    healBtn = document.getElementById("healBtn1");
    attackCount = attackCount1;
  } else {
    targetHealth = health1;
    healthBar = document.getElementById("healthBar1");
    attackBtn = document.getElementById("attackBtn2");
    specialAttackBtn = document.getElementById("specialAttackBtn2");
    healBtn = document.getElementById("healBtn2");
    attackCount = attackCount2;
  }

  // Generate a random attack value
  const damage = generateAttackValue();

  // Reduce health by the attack value
  targetHealth -= damage;

  // Ensure health doesn't go below 0
  targetHealth = Math.max(0, targetHealth);

  // Update the health bar
  healthBar.style.width = `${targetHealth}%`;
  healthBar.textContent = `${targetHealth}%`;

  // Check if the game is over
  if (targetHealth === 0) {
    alert(`Fighter ${fighter} is defeated!`);
    resetGame();
  }

  // Increment attack count
  attackCount++;

  // Check if it's time to enable the special attack button
  if (attackCount === 5) {
    specialAttackBtn.disabled = false;
  }

  // Check if it's time to enable the heal button
  if (targetHealth < 35) {
    healBtn.disabled = false;
  }

  // Disable the attack button for the current player
  attackBtn.disabled = true;

  // Switch turns after a brief delay (you can adjust the delay as needed)
  setTimeout(() => {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    // Enable the attack button for the new current player
    if (currentPlayer === 1) {
      document.getElementById("attackBtn1").disabled = false;
    } else {
      document.getElementById("attackBtn2").disabled = false;
    }
  }, 1000);
}

// Function to handle special attacks
function specialAttack(fighter) {
  // Determine the target fighter
  let targetHealth, healthBar, specialAttackBtn;

  if (fighter === 1) {
    targetHealth = health2;
    healthBar = document.getElementById("healthBar2");
    specialAttackBtn = document.getElementById("specialAttackBtn1");
  } else {
    targetHealth = health1;
    healthBar = document.getElementById("healthBar1");
    specialAttackBtn = document.getElementById("specialAttackBtn2");
  }

  // Generate a random special attack value between 5 and 15
  const specialDamage = 0 - Math.floor(Math.random() * 11) + 5;

  // Reduce health by the special attack value
  targetHealth -= specialDamage;

  // Ensure health doesn't go below 0
  targetHealth = Math.max(0, targetHealth);

  // Update the health bar
  healthBar.style.width = `${targetHealth}%`;
  healthBar.textContent = `${targetHealth}%`;

  // Disable the special attack button after use
  specialAttackBtn.disabled = true;

  // Check if the game is over
  if (targetHealth === 0) {
    alert(`Fighter ${fighter} is defeated!`);
    resetGame();
  }

  // Switch turns after a brief delay (you can adjust the delay as needed)
  setTimeout(() => {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    // Enable the attack button for the new current player
    if (currentPlayer === 1) {
      document.getElementById("attackBtn1").disabled = false;
    } else {
      document.getElementById("attackBtn2").disabled = false;
    }
  }, 1000);
}

// Function to handle healing
function heal(fighter) {
  // Determine the target fighter
  let targetHealth, healthBar, healBtn;

  if (fighter === 1) {
    targetHealth = health1;
    healthBar = document.getElementById("healthBar1");
    healBtn = document.getElementById("healBtn1");
  } else {
    targetHealth = health2;
    healthBar = document.getElementById("healthBar2");
    healBtn = document.getElementById("healBtn2");
  }

  // Increment health by a random value between 5 and 15
  const healAmount = Math.floor(Math.random() * 11) + 5;
  targetHealth += healAmount;

  // Ensure health doesn't go above 100
  targetHealth = Math.min(100, targetHealth);

  // Update the health bar
  healthBar.style.width = `${targetHealth}%`;
  healthBar.textContent = `${targetHealth}%`;

  // Disable the heal button after use
  healBtn.disabled = true;

  // Switch turns after a brief delay (you can adjust the delay as needed)
  setTimeout(() => {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    // Enable the attack button for the new current player
    if (currentPlayer === 1) {
      document.getElementById("attackBtn1").disabled = false;
    } else {
      document.getElementById("attackBtn2").disabled = false;
    }
  }, 1000);
}

// Function to reset the game
function resetGame() {
  health1 = 100;
  health2 = 100;
  currentPlayer = 1;
  attackCount1 = 0;
  attackCount2 = 0;

  document.getElementById("healthBar1").style.width = "100%";
  document.getElementById("healthBar1").textContent = "100%";
  document.getElementById("attackBtn1").disabled = false;
  document.getElementById("specialAttackBtn1").disabled = true;
  document.getElementById("healBtn1").disabled = true;

  document.getElementById("healthBar2").style.width = "100%";
  document.getElementById("healthBar2").textContent = "100%";
  document.getElementById("attackBtn2").disabled = false;
  document.getElementById("specialAttackBtn2").disabled = true;
  document.getElementById("healBtn2").disabled = true;
}
