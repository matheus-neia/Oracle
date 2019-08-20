# Lab 1 - Desarrollo de la integración entre Oracle OCI
## Objetivos
- Paso 1: Crear un conector REST
- Paso 2: Crear un conector para Oracle Sales Cloud
- Paso 3: Crear una integración entre el conector REST y Oracle Sales Cloud
- Paso 4: Hacer prueba para crear una oportunidad

## Requisitos previos
- Tener acceso a la OIC
- Ter acceso a lo Oracle Sales Cloud
- Links de los servicios Oracle Sale Cloud - [Vea cómo conseguir los links](https://docs.oracle.com/en/cloud/paas/integration-cloud/sales-adapter/prerequisites-creating-connection.html#GUID-8AF6BDD4-A711-480E-B71F-FAD062024A57)
- Lea el material: [Developing Integrations with Oracle Integration Cloud Service](https://docs.oracle.com/en/cloud/paas/integration-cloud-service/icsug/mapping-data-and-creating-lookups.html) 
- Ver el material: [Como usar mapeo](https://www.youtube.com/watch?v=6xNUpB7z9mA "Mapping Data in Oracle Integration Cloud Service") 

### Paso 1
**1.1** Por favor, ingrese a su cuenta en la nube de Oracle. Link será entregado por el instructor.

![image001.png](images/1/image001.png "image001.png")


**1.2** Ir al enlace de **Integration**.

![image002.png](images/1/image002.png "image002.png")

**1.3** Vaya al link **Connections** y luego **Create**.

![image003.png](images/1/image003.png "image003.png")


**1.4** Búsqueda por *REST* y elija el conector.

![image004.png](images/1/image004.png "image004.png")

**1.5** Introduzca el nombre `RestAdapterWorkshop_XX`, donde XX será el número entregado por el instructor. En **Role** seleccione **Trigger** y luego haga clic en **Create**.

![image005.png](images/1/image005.png "image005.png")


**1.6** Clic en **Save** y entonces en **Close**

![image006.png](images/1/image006.png "image006.png")



### Paso 2
**2.0** Repetir los pasos 1.3, 1.4 y 1.5. Pero ahora el nombre del conector es *Oracle Sales Cloud*. En el campo Nombre de conexión, escriba `SalesCloudWorkshop_XX` (xx donde será entregado por el instructor). En **Role** selección **Invoke** y después ir en **Create**.

**2.1** En la página de configuración del conector en la sección **Connection Properties**, haga clic en **Configure Connectivity**. Configurar la conexión utilizando la dirección URL de la *OSC - Oracle Sales Cloud*. Para los ajustes necesarios, consulte el [link](https://docs.oracle.com/en/cloud/paas/integration-cloud/sales-adapter/prerequisites-creating-connection.html#GUID-8AF6BDD4-A711-480E-B71F-FAD062024A57).

![image007.png](images/1/image007.png "image007.png")

**2.1.1** Llenado de Servicios **OSC Services Catalog WSDL URL**  con la información que recogió el elemento de enlace de los servicios en la nube de ventas o utilizar esto: `https://testingapplication.com/fscmService/ServiceCatalogService?WSDL` y reemplazar testingapplication.com para su dominio entorno Oracle Sales Cloud - OSC.

**2.1.2** Rellenar **Interface Catalog URL (optional)** con la información que recogió el elemento de enlace de los servicios en la nube de ventas o utilizar esto: https://testingapplication.com/helpPortalApi/otherResources/latest/interfaceCatalogs y reemplazar el testingapplication.com dominio de su entorno Oracle Sales Cloud - OSC.

![image008.png](images/1/image008.png)

**2.1.3** En la sección **Security**, haga clic en **Configure Security** y rellenar el nombre de usuario y contraseña de un usuario OSC. Haga clic en OK

![image009.png](images/1/image009.png "image009.png")

**2.2** Ahora haga clic en **Test**y esperar hasta que la  *Oracle Integration Cloud* realizar la prueba y validar la conexión a el OSC. Después de terminar la prueba, tenga en cuenta el porcentaje de etiqueta, debe aparecer 100% como se muestra a continuación:

![image010.png](images/1/image010.png "image010.png")

**2.3** Con el porcentaje de etiqueta 100% Haga clic en **Save** y **Close**.


### Paso 3
**3.1** En la esquina izquierda de la pantalla y luego clic **Integrations** en la esquina derecha de la pantalla **Create**. Elija la opción de **Basic Routing**.

![image011.png](images/1/image011.png "image011.png")

**3.2** Rellene el nombre de la integración como `CreateOppOSC_XX` donde XX es el número dado por el instructor. A continuación, haga clic en **Create**.

![image012.png](images/1/image012.png "image012.png")

**3.3** En la siguiente pantalla, busque en el jardín derecho (1) en la conexión `RestAdapterWorkshop_XX` (2), arrástrelo a la de *Drag and Drop a Trigger* (3).

![image013.png](images/1/image013.png "image013.png")

**3.4** Ajuste del adaptador REST

**3.4.1** Complete los campos como imágenes a continuación:

![image013\_1.png](images/1/image013_1.png)

**3.4.2** Clic **Next >**

Ahora el campo **Select the request payload format** seleccionar **JSON Sample** la opción de la muestra y haga clic en línea **<<< inline >>>**

![image014.png](images/1/image014.png)

**3.4.2.1** En el campo **Enter Sample JSON** introduzca el código de abajo, a continuación, haga clic en OK:

```json
{
	"opportunityName" : "Opportunity Name",
	"loginOwner" : "amanda.bell",
	"winProbability" : 10
}
```

![image015.png](images/1/image015.png)


**3.4.3** Selección de **JSON** como tipo de carga útil que el punto final recibirá y luego haga clic en **Next >**

![image015\_1.png](images/1/image015_1.png)

**3.4.4** Ahora el campo **Select the response payload format** seleccionar **JSON Sample** y despues haga clic en línea **<<< inline >>>**

![image016.png](images/1/image016.png)

**3.4.4.1** En el campo **Enter Sample JSON** introduzca el código de abajo, a continuación, haga clic en OK:

```json
{ "opportunityId" : "123095" }
```

![image017.png](images/1/image017.png)

**3.4.5** Selección de **JSON** como tipo de carga útil que el punto final responderá y haga clic en **Next >**

![image017_1.png](images/1/image017_1.png)

En la pantalla *Summary*, compruebe que los ajustes están correstas en**Endpoint Summary**, y luego haga clic en **Done**

![image018.png](images/1/image018.png)

**3.5** En la pantalla principal, busque en el jardín derecho (1), la conexión `SalesCloudWorkshop_XX` (2), arrástrelo a la *Drag and Drop a Invoke* (3).

![image019.png](images/1/image019.png "image019.png")

**3.6** Configuración del adaptador SalesCloud

**3.6.1** Rellene los campos como imágenes a continuación y haga clic en **Next >**.

![image020.png](images/1/image020.png)


**3.6.2** Configurar los campos como se indica a continuación:

| Passo  | Campo  | Valor  |
| ------------ | ------------ | ------------ |
| 1 | Browse By  | Business Objects  |
| 2 | Select a Business Object  | Opportunity : OpportunityService  |
| 3 | Select the Operation to Perform on the Business Object | createOpportunity |

e despues clic en **Next >**.

![image021.png](images/1/image021.png)

**3.6.3** Clic en **Done**

![image022.png](images/1/image022.png)

**3.7** Configuración de una llamada para recuperar el ID de *Owner* de la oportunidad:

**3.7.1** La pantalla de la derecha buscar de nuevo mediante la conexión `SalesCloudWorkshop_XX` y arrastre a la de la izquierda **+**, como se muestra en la figura siguiente:

![image023.png](images/1/image023.png)

**3.7.2** Después de abrir la pantalla de configuración de esta integración puso el nombre de la integración como `GetUserByUsername` y luego haga clic en **Next >**

![image023_1.png](images/1/image023_1.png)

**3.7.3** Seleccionar los campos como la información a continuación:

| Campo  | Valor  |
| ------------ | ------------ |
| Browse By  | Services  |
| Select a Service | ResourceService  |
| Select the Operation to Perform on the Business Service | findResource  |


Haga clic en **Next >**

![image024.png](images/1/image024.png)

**3.8** Mapeo de la llamada para recuperar el ID de la Oportuniade.

*Si tiene alguna pregunta sobre cómo hacer el mapeo ver el enlace que se encuentra en la sección Requisitos previos: El uso de la asignación. [[1]][mapeamento]*

**3.8.1** Haga clic en el mapeo de más a la izquierda de la pantalla y luego +, como se muestra a continuación:

![image025.png](images/1/image025.png)

**3.8.2** Salir a navegar en el lado derecho de la pantalla, abriendo el campo para obtener el campo de **attribute** como la imagen de abajo. Haga clic en el campo **attribute** para abrir la pantalla de asignación de atributos.

![image026.png](images/1/image026.png)

**3.8.3** En el lugar indicado en rojo poner el valor `Username`, haga clic en **Save** y después **Close**:

![image027.png](images/1/image027.png)

**3.8.4** Repita los pasos 3.8.1 y 3.8.2 para el campo **operator**. El valor será `=`

**3.8.5** Finalmente arrastre usando el ratón, campo  `loginOwner` para el campo de **value**. Su pantalla de mapeo debe parecerse a la siguiente pantalla:

![image028.png](images/1/image028.png)

**3.8.6** Haga clic en **Validate** después  **Close**

**3.9** Mapeo de la llamada a la conexión Sales Cloud:

*Si tiene alguna pregunta sobre cómo hacer el mapeo ver el enlace que se encuentra en la sección Requisitos previos: El uso de la asignación.[[1]][mapeamento]*

**3.9.1** Haga clic en el mapa más al centro y por encima de la pantalla y luego **+**, como se muestra a continuación:

![image029.png](images/1/image029.png)

**3.9.2** Hacer el mapeo arrastrando los campos de izquierda a derecha como se muestra a continuación:

    CurrencyCode = USD (campo fijo)
    opportunityName ===> Name
    winProbability ===> WinProb
    PartyID ===> OwnerResourcePartyId

![image030.png](images/1/image030.png)

**3.9.3** Haga clic en **Validate** después **Close**

**3.10** Retorno Mapeo de la llamada de Sales Cloud

**3.10.1** Haga clic en el mapa más al centro y debajo de la pantalla, luego **+**, como se muestra a continuación:

![image031.png](images/1/image031.png)

**3.10.2** Hacer mapeo arrastrando los campos de izquierda a derecha como se muestra a continuación:

    OptyId ===> opportunityId

![image032.png](images/1/image032.png)

**3.10.3**Haga clic en **Validate** después **Close**

**3.11** Seguimiento de llamadas

**3.11.1** Clic en **Tracking**, como se muestra a continuación:

![image033.png](images/1/image033.png)

**3.11.2** Arrastre las variables de la izquierda para los campos de la derecha, como se muestra a continuación:

![image034.png](images/1/image034.png)

**3.11**Después de esto, asegúrese de que el campo de la actividad porcentaje es igual al 100%, si hace clic en **Save** y **Close**

![image035.png](images/1/image035.png)


### Paso 4

**4.1**Activar la integración y permitir el seguimiento de la siguiente manera:

![image036.png](images/1/image036.png)

Habilitar las opciones como a continuación:

![image037.png](images/1/image037.png)

**4.2** Tras la activación, recuperar el *endpoint* a través del icono de engranaje, mantener esta enpoint porque va a utilizar en los próximos pasos.

![image038.png](images/1/image038.png)

Además de la marcha, después de activar un mensaje aparece con el punto final.

![image039.png](images/1/image039.png)

**4.3** Abrir el software de post, se puede descargar [aquí](https://www.getpostman.com/ "Postman"). Llene la información de la siguiente manera:

El método que se debe poner **POST** y **URL** debe ser la URL recuperó en 4.2.

![image040.png](images/1/image040.png)

**4.4** Haga clic en la ficha **Authorization** y rellenar los campos: **Type** debe ser **Basic Auth** y el **Username** y **Password** deben utilizarse para que utilizó para iniciar sesión en el Oracle Integration Cloud - OIC. 

![image041.png](images/1/image041.png)

**4.5** Haga clic **Body** y seleccione la opción **raw** y colocar el JSON prueba prima: 
```json
{
	"opportunityName" : "Opportunity name",
	"loginOwner" : "amanda.bell",
	"winProbability" : 10
}
```

![image042.png](images/1/image042.png)

**4.5** Haga clic en **Send** y esperar la respuesta. Debe contener una respuesta JSON, como la siguiente imagen:

![image043.png](images/1/image043.png)

**4.6** Retorno a la nube de integración de Oracle - OCI y haga clic en **<**. 

![image044.png](images/1/image044.png)

**4.7** Haga clic en **Monitoring** -> **Tracking**. Tenga en cuenta que el mensaje aparece en verde. Haga clic en el mensaje y tomar nota de los progresos realizados por 

![image046.png](images/1/image046.png)

![image047.png](images/1/image047.png)

Detalles de las llamadas realizadas, tenga en cuenta que el camino que hizo el mensaje es de color verde. Explorar las opciones para comprobar los parámetros que fueron objeto de trata. 

![image048.png](images/1/image048.png)


Ahora ya está listo para ir a la [**Lab2 Desarrollo de un proceso de negocio utilizando Proceso Cloud Service - OCI y la integración con Oracle Sales Cloud. Cloud**](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab2-es.md).

[mapeamento]: https://github.com/matheuzum/Oracle/blob/master/paas4saas/lab1.md#pr%C3%A9-requisitos "Uso de lo mapeo"