//header id's
const prod = document.getElementById('prod'),
    cantidad = document.getElementById('cantidad'),
    add = document.getElementById('add'),
    clear = document.getElementById('clear');
//section__body DOM
const adding = document.querySelector('.adding'),
    total = document.getElementById('total');

clear.addEventListener('click', () => {
    prod.value = "";
    cantidad.value = "";
});

const totalAcum = [];

add.addEventListener('click', () => {
    if ((!prod.value) || (!cantidad.value)) {
        return
    } else {

        const uL = document.createElement('ul');

        const li = document.createElement('li');
        li.textContent = prod.value.toUpperCase();

        const li2 = document.createElement('li');
        li2.textContent = cantidad.value;

        const li3 = document.createElement('li');
        const inputPrecio = document.createElement('input');
        inputPrecio.type = "number";
        inputPrecio.placeholder = "Precio";
        li3.appendChild(inputPrecio);

        //Botón de quitar
        const li4 = document.createElement('li');
        const btn1 = document.createElement('button');
        btn1.className = "btn less";
        btn1.type = "button";
        btn1.textContent = "-";

        btn1.addEventListener('click', () => {
            const indexToRemove = totalAcum.length - 1;
            totalAcum.splice(indexToRemove, 1);

            // Actualizar el total
            updateTotal();

            // Eliminar el elemento de la lista
            uL.remove();
        })
        
        li4.appendChild(btn1);

        const li6 = document.createElement('li');
        const inputCheckbox = document.createElement('input');
        inputCheckbox.type = "checkbox";
        inputCheckbox.name = "check";
        inputCheckbox.id = "check";

        let checkBoxClicked = false;

        inputCheckbox.addEventListener('click', (e) => {
            if (!inputPrecio.value || checkBoxClicked) {
                return
            } else {

                checkBoxClicked = true;

                const precioValue = parseFloat(inputPrecio.value) || 0;
                totalAcum.push(precioValue);

                const subTotal = totalAcum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

                total.value = subTotal * parseInt(li2.textContent);
            }
        })

        li6.appendChild(inputCheckbox);

        uL.appendChild(li);
        uL.appendChild(li2);
        uL.appendChild(li3);
        uL.appendChild(li4);
        uL.appendChild(li6);

        adding.appendChild(uL);

    }
    prod.value = "";
    cantidad.value = "";
})

function updateTotal() {
    const subTotal = totalAcum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    total.value = subTotal;
}
