function getValue(id) {
    return Number(document.getElementById(id).value) || 0;
}

function calculateExpenses() {

    // Get income
    const income = getValue("income");

    // Get expenses
    const food = getValue("food");
    const transport = getValue("transport");
    const housing = getValue("housing");
    const education = getValue("education");
    const entertainment = getValue("entertainment");
    const other = getValue("other");

    // Calculate total expenses
    const totalExpenses =
        food +
        transport +
        housing +
        education +
        entertainment +
        other;

    // Calculate savings
    const savings = income - totalExpenses;

    // Calculate savings percentage
    let savingsPercentage = 0;

    if (income > 0) {
        savingsPercentage = (savings / income) * 100;
    }

    // Display main results
    document.getElementById("displayIncome").textContent =
        "₹" + income.toFixed(2);

    document.getElementById("displayExpenses").textContent =
        "₹" + totalExpenses.toFixed(2);

    document.getElementById("displaySavings").textContent =
        "₹" + savings.toFixed(2);

    document.getElementById("displayPercentage").textContent =
        savingsPercentage.toFixed(2) + "%";

    // Expense categories
    const expenses = [
        {
            name: "Food",
            amount: food
        },
        {
            name: "Transport",
            amount: transport
        },
        {
            name: "Housing",
            amount: housing
        },
        {
            name: "Education",
            amount: education
        },
        {
            name: "Entertainment",
            amount: entertainment
        },
        {
            name: "Other",
            amount: other
        }
    ];

    // Display expense breakdown
    const breakdown = document.getElementById("expenseBreakdown");

    breakdown.innerHTML = "";

    expenses.forEach(function(expense) {

        let percentage = 0;

        if (totalExpenses > 0) {
            percentage = (expense.amount / totalExpenses) * 100;
        }

        breakdown.innerHTML += `
            <p>
                <span>${expense.name}</span>
                <span>
                    ₹${expense.amount.toFixed(2)}
                    (${percentage.toFixed(1)}%)
                </span>
            </p>
        `;
    });

    // Display financial status
    const status = document.getElementById("status");

    status.className = "";

    if (savings > 0) {
        status.textContent = "You are saving money. Good job!";
        status.classList.add("success");

    } else if (savings === 0) {
        status.textContent =
            "Your income and expenses are equal.";
        status.classList.add("warning");

    } else {
        status.textContent =
            "You are spending more than your income.";
        status.classList.add("danger");
    }
}
