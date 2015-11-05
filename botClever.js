var singleWord = function(word) {
	return new RegExp('(^|\\s)' + word +'[!?\. ]*?$', 'i');
}

module.exports = [
	{
		reg: singleWord('нет'),
		answers: ['Говна пакет', 'Пидора ответ']
	},
	{
		reg: singleWord('(ytn)|(lf)'),
		answers: ['Ebat ti loh!']
	},
	{
		reg: singleWord('да'),
		answers: ['Пизда']
	},
	{
		reg: singleWord('смешно'),
		answers: ['Смешной, как гной ушной']
	},
	{
		reg: singleWord('бот'),
		answers: ['А хуй тебе в рот!']
	},
	{
		reg: singleWord('сука'),
		answers: ['Сука - не мат']
	},
	{
		reg: singleWord('300'),
		answers: ['Пососи у тракториста']
	},
	{
		reg: singleWord('нравить?ся'),
		answers: ['Нравится, не нравится, спи моя красавица']
	},
	{
		reg: singleWord('точно'),
		answers: ['Соси прочно']
	},
	{
		reg:  singleWord('свист?ни'),
		answers: ['Свистни в хуй, в нем тоже дырка']
	},
	{
		reg: singleWord('как'),
		answers: ['Каком кверху 💩']
	},
	{
		reg: singleWord('ч(е|ё|о)'),
		answers: ['Хуй через плечо']
	},
	{
		reg: singleWord('хочу чаю'),
		answers: ['Хочу чаю, аж кончаю']
	}
];