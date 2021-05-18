function findLongestWord(string) {
  // Change code below this line
 	const arrayString = string.split(" ");
  	let longestWord = arrayString[0];
  
	for (let i = 0; i < arrayString.length; i+=1) {
		if (longestWord.length < arrayString[i].length) {
			longestWord = arrayString[i];
		}
	}
	return longestWord;  
 
  // Change code above this line
}

// console.log(findLongestWord);

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");

// console.log(findLongestWord);


// Задача: поиск самого длинного слова
// Задание
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение