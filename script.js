function gerarSenha(){
    let num = 0;
    let senha = ''
    let caracteres = 
    [
        0,'a','b','c','d','k','A',
        1,'O','P','Q','R','l','B',
        2,'Y','Z','!','@','m','C',
        3,'E','F','G','H','n','D',
        4,'*','_','i','j','o','u',
        5,'I','J','W','X','p','v',
        6,'e','f','g','h','q','w',
        7,'S','T','U','V','r','x',
        8,'#','$','%','&','s','y',
        9,'K','L','M','N','t','z',
    ]
    for (let i = 0; i<10; i++){
        num = Math.floor(Math.random()*70)
        senha += caracteres[num]
    }
    document.querySelector('.senha').setAttribute('value', senha)
}