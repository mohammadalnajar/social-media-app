const patterns = {
    email: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name: { letters: /^[A-Za-z ]+$/i, minName: /.{2,}$/ },
    password: {
        lowercaseLetter: /(?=.*?[a-z])/,
        uppercaseLetter: /^(?=.*?[A-Z])/,
        numbers: /(?=.*?[0-9])/,
        specialCharacters: /(?=.*?[#?!@$%^&*-])/,
        minPass: /.{8,}$/,
    },
    phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
};

export default patterns;
