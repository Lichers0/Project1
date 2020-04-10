let money = prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате yyyy-mm-dd");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};
let listSpend = prompt("Введите обязательную статью расходов в этом месяце");
let listSpendCost = prompt("Во сколько обойдется?");

appData.expenses = {[listSpend]: listSpendCost};

alert(appData.expenses[listSpend] / 30);
