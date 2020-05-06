'use strict'

var money =prompt("Ваш бюджет на месяц?","") ;
var time = prompt("Введите дату в формате ГОД-МЕСЯЦ-ДЕНЬ", "" );

let appData {
    budget: money,
    expenses:{},
    optionalExpenses: {},
    income: [],
    timedata: time,
    savings: false
}

let a1 = prompt ( "Ввдеите обязательную статью расходов в этом месяце", ""), 
    a2 = prompt ( "Во сколько это обойдётся?", ""),
    a3 = prompt ( "Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt ( "Во сколько это обойдётся?", "");
    
appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert (appData.budget / 30)