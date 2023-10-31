{
    var persons = [
        {
            name: 'Иван Петров',
            age: 27,
            group: 'SEO-специалист',
        },
        {
            name: 'Марат Aляуддинов',
            age: 20,
            group: 'Музыкант',
        },
        {
            name: 'Анастасия Махнева',
            age: 32,
            group: 'Супруга',
        },
        {
            name: 'Елизавета Махнева',
            age: 12,
            group: 'Дочь',
        }
    ];
    var logPerson = function (user) {
        console.log("".concat(user.name, ", ").concat(user.age));
    };
    console.log('Users:');
    persons.forEach(logPerson);
}
