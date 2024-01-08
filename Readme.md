# Projeto de Botão Tema 
![Tela exemplo](/img/Body-HTML.png)
    Um projeto de um botão de tema facil com HTML, CSS e JavaScript!

## Indice
- <a href="#-funcionalidades">Funcionalidades do Projeto</a>
- <a href="#-layout">Layout</a>
- <a href="#-demostracao">Demostração</a>
- <a href="#-rodar">Como rodar este projeto?</a>
- <a href="#-tecnologias-utilizadas">Tecnologias Utilizadas</a>
- <a href="#-pessoas-Autorais">Pessoas Autorais</a>

## Funcionalidaes do Projeto
- [x] Lampada

- [x] Temas

- [x] Interação

## Layout
### Botão antes de acionar
![Tela apagada](/img/Tela.png)
### Tela após acionamento do botão
![Tela ligada](/img/Tela-Acessa.png)

## Demostrações
[Demostração Online](https://659b7bd75fbe690be878c156--fluffy-taiyaki-7d27fb.netlify.app/)

## Como rodar o Projeto

### HTML
```html

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="shortcut icon" href="/assets/img/favicon/lampada-de-ideia.png" type="image/x-icon">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Tema Escuro</title>
</head>
<body>
    <main class="main tema">
        <label for="luz" class="botao tema">
            <input type="checkbox" name="luz" id="luz" class="check-luz">
            <i class='bx bxs-bulb lampada'></i>
        </label>
    </main>
    <script src="/assets/js/thema.js"></script>
</body>
</html>

```
### CSS

```CSS
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: black;
}

.acender{
    background-color: white;
    transition: all 0.7s;
}

.botao{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 70px;
    height: 60px;
    width: 60px;
    background-color: white;
    cursor: pointer;
}

.botao.acender{
    background-color: black;
}

.botao.acender .lampada{
    color: rgb(255, 217, 5);
}
.lampada{
    font-size: 35px;
}

.check-luz{
    display: none;
}

```

### JavaScript
```js
document.querySelector('.check-luz').addEventListener('change',()=>{
    document.querySelectorAll('.tema').forEach(ele=>{
        ele.classList.toggle('acender')
    })
});

```

## Tecnologias Utilizadas
1. [HTML](https://html.com/)
2. [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
3. [JavaScript](https://www.javascript.com/)

## Pessoas Autorais
<img style="width: 150px; border-radius: 40px;" src="https://lh3.googleusercontent.com/pw/ABLVV86bX9OSqpe3zt0Euw8qA-xNa6QFrgBFakFD6RKtmGemLlH2ZOa4EzYSQKVPg3a3pvJb1IooaNfdKosRCoAY8aRcqDSSPIpGIL9BaQ_K1ValurJoFgWdv-EPXO9A02Gp_-8XwUuS3YToVlE1FN-Oqh_cni0bvhnHcW__QAnsO45jnlrScPF7qcirb-N63MAzs2Tc6R501W-NQgFon9yf_xv7L2cOlk5K2bKsaYuMP6wpTrayXrDpvpO6ztbZxw4MnSiUfNn-YIJLyzLi1KaZ72wLzEq5tJuPWXqYr8wfvQ2SacqgzioSRSdowQ5RHBbLfx6DdbtT9msZK7_iqECKP62P5DMdQciRQMmTyLWd-6UjvBVJJ9ZKYPELI6LpvBDisW7iJAaRPMaAlfLxeB6UD-jx1AEZVFgZKMfCeiZBpfN7hwPYkwO51_p2YD5LoGjO4XvvkdkAdX6-kCFimSKfv30BT9a0Xp0TezmDKQ1g40XqQUWZKOOVO_l4wI49WT5u5VnR8Y49J1Hfq0PLMmerJ-AhrInas5wdzUS__DWWFo3hLiBj7lFcGO49FLm4SH6U-O6uggq7TToFqdoivTSqYsP5GqH5yfYhjTKFsV7p0zGWLoprqZSc8Aaxky-wrkyDpwEAT2gXKGPlo1ZGpkFhY4yKcQhEo5uLJTHvFZNlIfAYfJquWu6SJ_ZTY7wWrXQHgjgsbMvlJkvWMhPeX1864nv5Ij6KLfghiSZZ9l_NcDsnjtyZ2w6l30wPFJqJggUv14gRZOCtrUznWgai949qE6uixE6FVJz10PnwLaThGd-l42FxVDnm5nGaQH-61HWQQulgwZrGv__YMaS8G_mIUTknXxuF6ujX_duGDJMyrXbk1EXgTD79RkPYVhhIKDcvWFzcxLE=w548-h602-no?authuser=0" alt="Cristiano" >
<br>

[Linkedin](https://www.linkedin.com/in/cristiano-prado-a2980b19a/)
