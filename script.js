```javascript
function mostrarPlaneta() {

    const planetas = [
        "Mercúrio ☿️",
        "Vênus ♀️",
        "Terra 🌍",
        "Marte ♂️",
        "Júpiter ♃",
        "Saturno ♄",
        "Urano ♅",
        "Netuno ♆"
    ];

    const numero = Math.floor(Math.random() * planetas.length);

    document.getElementById("resultado").textContent =
        "🔭 Seu planeta é: " + planetas[numero];
}
```
