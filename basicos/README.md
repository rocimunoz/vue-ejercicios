
# Binding datos
## {{}}
Reemplaza el valor que tenga el objeto en data. Interpreta los datos como texto plano
Se actualizará cada vez que cambie la propiedad en el objeto de datos
No se pueden utilizar en elementos html --> v-bind

## v-text
Mismo concepto que las llaves pero reemplazando todo el contenido
## v-once
Reemplaza el valorq ue tenga la propiedad en el objeto de datos. 
Interpreta los datos como texto plano
No se actualizará si cambia la propiedad

## v-html
Reemplaza el valor que tenga la propiedad en el objeto de datos. 
Interpreta los datos como html simple, ignorando los enlaces


## v-bind
Las llaves no se pueden utilizar dentro de elementos html. Por eso usamos v-bind