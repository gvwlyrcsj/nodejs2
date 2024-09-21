const Controller = {
    first: (req, res) => {
        res.render('index', { message: 'Welcome to the First Page' });
    },
    second: (req, res) => {
        res.render('index', { message: 'This is the Second Page' });
    },
    third: (req, res) => {
        res.render('index', { message: 'This is the Third Page' });
    },
    fourth: (req, res) => {
        res.render('index', { message: 'This is the Fourth Page' });
    },
    fifth: (req, res) => {
        res.render('index', { message: 'This is the Last Page' });
    }
};

module.exports = Controller;
