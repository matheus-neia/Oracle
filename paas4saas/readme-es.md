# Visión general del *Workshop*
## Proceso de negocio

Muchas veces en aplicaciones existentes tanto como SaaS y on-Provence necesitamos agregar un proceso de negocio con reglas específicas o incluir nuevas funcionalidades. Dentro de un CRM u otra aplicación (SaaS o On-Premises), también necesitamos crear una aplicación móvil buscando información de esta aplicación u otras aplicaciones.

Para solucionar estos problemas este taller de cable generado y mostrará la creación de una oportunidad en **Oracle Sales Cloud (OSC)** utilizando el **Oracle Integration Cloud Service (OIC)** para integrar, crear un proceso de negocio y aplicaciones móviles y web para software Oracle Sales Cloud.
Vamos a crear una aplicación móvil, con la ayuda del **Oracle Mobile Cloud Service (MCS)** y **Oracle MAX**, para ejecutar este nuevo proceso de negocio creado.
Además de esta aplicación vamos a crear una aplicación web utilizando el **Oracle Visual Builder**.

Para realizar estas tareas realizaremos los laboratorios abajo.


## División del Workshop
- **Lab1:** Desarrollo de la integración entre Oracle OIC y Oracle Sales Cloud
- **Lab2:** Desarrollo de un proceso de negocio utilizando Process Cloud Service e integrando con Oracle Sales Cloud
- **Lab 3:** Desarrollo de una pantalla móvil utilizando Oracle Mobile Cloud Service - MCS
- **Lab 4:** Desarrollo de una pantalla utilizando Oracle Visual Builder

## Requisitos previos
Será necesario para realizar este Workshop:
- Instancia de Oracle Integration Cloud - OIC
- Instancia de Oracle Mobile Cloud Service - MCS
- Instancia de Oracle Sales Cloud
- Postman - [Download](https://www.getpostman.com/)
- Sugerencia en utilizar el navegador Chrome con el touchscreen borrado. [Desactivar el touchscreen en Windows 10](https://support.microsoft.com/en-us/help/4028019/windows-enable-and-disable-your-touchscreemin-windows-10)
- Utilizar el navegador en inglés. - [Cómo cambiar el idioma en Chrome](https://support.google.com/chrome/answer/173424?co=GENIE.Platform%3DDesktop&hl=en)

## Actividades

#### Lab 1 - Desarrollo de la Integración entre Oracle OIC y Oracle Sales Cloud **Documentación**: [Lab1.md](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab1.md)
##### Objetivos
- Crear un conector REST
- Crear un conector para Oracle Sales Cloud
- Crear una integración entre el conector de tecnología restante y el conector de Oracle Sales Cloud

#### Lab 2 - Desarrollo de un proceso de negocio utilizando Process Cloud Service - OIC e integrando con Oracle Sales Cloud
**Documentación**: [Lab2.md](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab2.md)
##### Objetivos
- Desarrollar un proceso de negocio que valida si el valor de la oportunidad es mayor que 5000 USD el gerente deberá aprobar su creación
- Componer el proceso de negocio con la integración creada en el Laboratorio 1.

#### Lab 3 - Desarrollo de una pantalla móvil utilizando Oracle Mobile Cloud Service - MCS
**Documentación**: [Lab3.md](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab3.md)
##### Objetivos
- Crear un conector en Oracle MCS, este conector apuntar al proceso creado en Lab2.
- Crear una API en Oracle MCS apuntando al conector creado.
- Crear una aplicación utilizando Oracle MAX, esta aplicación llamará al proceso creado en Lab2 a través de la API creada en Oracle MCS

#### Lab 4 - Desarrollo de una pantalla utilizando Oracle Visual Builder
**Documentación**: [Lab4.md](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab4.md)
##### Objetivos
- Desarrollar una aplicación web con un formulario para la creación de una oportunidad.
- Esta aplicación llamará al proceso de negocio creado en Lab2