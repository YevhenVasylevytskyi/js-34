const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    // Change code below this line
    	this.potions.push(potionName);
    
    // Change code above this line
  },
};

// Задача. Добавляем новое зелье
// Задание
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// Тесты
// Объявлена переменная atTheOldToad

// Значение переменной atTheOldToad это объект

// Значение свойства atTheOldToad.potions это массив ['Speed potion', 'Dragon breath', 'Stone skin']

// Значение свойства atTheOldToad.addPotion это метод объекта

// После первого вызова метода atTheOldToad.addPotion('Invisible'), в свойстве potions будет массив ['Speed potion', 'Dragon breath', 'Stone skin', 'Invisible']

// После второго вызова метода atTheOldToad.addPotion('Зелье силы'), в свойстве potions будет массив ['Speed potion', 'Dragon breath', 'Stone skin', 'Invisible', 'Power potion']