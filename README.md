### Link
Este es el link del script optimizado vía "JS Delivr": [https://cdn.jsdelivr.net/gh/Fologan/AdivinaNumeros@main/adivinaNumeros-mini.js](https://cdn.jsdelivr.net/gh/Fologan/AdivinaNumeros@main/adivinaNumeros-mini.js)

### Demo

Puedes verlo en vivo en mi website [https://www.fologan.com/p/adivina-el-numero.html](https://www.fologan.com/p/adivina-el-numero.html)

### Implementación
Esta es su correcta implementación, no hacer caso omiso a los "id" ya que el script los busca para su funcionamiento.

```
<div class="canvas">
        <div id="container">
            <span>
                <h1>Adivina el número</h1>
                <p>Tenemos un número entre 1 y 100. ¿Puedes adivinarlo en 7 intentos?</p>
                <input type="number" id="guessInput" placeholder="Ingresa tu suposición">
                <button id="adivinar" onclick="guessNumber()">Adivinar</button>
                <button id="restartButton" style="display:none;">Reiniciar</button>
                <p id="result"></p>
                <div id="grafica" class="grafica"></div>
            </span>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/Fologan/AdivinaNumeros@main/adivinaNumeros-mini.js"> </script>
```


### Lista de más Mini Juegos

Visita mi página para conocer la lista [https://www.fologan.com/p/mini-juegos.html](https://www.fologan.com/p/mini-juegos.html)
