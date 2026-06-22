
## Comandos basicos y sus casos de uso

 ## 1. git add
 - Mueve los cambios del directorio de trabajo al área del entorno de ensayo. Así puedes preparar una instantánea antes de confirmar en el historial oficial.
> Caso de uso
 - git add <archivo>: Añade un archivo específico al índice.
git add .: Añade todos los archivos nuevos y modificados dentro del directorio actual y sus subdirectorios, pero no elimina los archivos borrados.

 ## 2. rama de git
 - Este comando es tu herramienta de administración de ramas de uso general. Permite crear entornos de desarrollo aislados en un solo repositorio.
> Caso de uso
 - Desarrollo de nuevas funcionalidades (Features): Se crea una rama dedicada para implementar una nueva característica, permitiendo pruebas y desarrollo sin riesgo de romper el código en producción.
   
 - Corrección de errores críticos (Hotfixes): Permite detener el trabajo actual y crear una rama inmediata para solucionar un bug urgente en la rama principal (como main o master), integrando la solución rápidamente sin mezclar cambios pendientes. 
 
 - Flujo de trabajo colaborativo (Git Flow): Facilita la gestión de ciclos de vida del software mediante ramas de develop para integración, release para preparación de versiones y feature para el desarrollo individual, asegurando una integración ordenada. 
 
 - Experimentación segura: Permite probar ideas o refactorizaciones riesgosas en un entorno aislado; si el resultado es negativo, la rama se descarta sin impacto en el historial principal.

 ## 3.Git Checkout
 - Además de extraer las confirmaciones y las revisiones de archivos antiguas, git checkout también sirve para navegar por las ramas existentes.
Combinado con los comandos básicos de Git, es una forma de trabajar en una línea de desarrollo concreta.
> Caso de uso
 

 ## 4. git clean
 - Elimina los archivos sin seguimiento de tu directorio de trabajo. Es la contraparte lógica de git reset, que normalmente solo funciona en archivos con seguimiento.
> Caso de uso
 - Limpieza de archivos generados: Eliminar artefactos de compilación, logs o archivos temporales que no deben estar en el repositorio. 
 
 - Restablecer el estado del directorio: Borrar archivos nuevos creados por herramientas externas o scripts de despliegue para volver a un estado limpio sin hacer commit. 
 
 - Eliminación de archivos ignorados: Usar la bandera -x para limpiar archivos que están en .gitignore pero que deseas remover físicamente del disco. 
 
 - Prueba de seguridad: Ejecutar con la bandera -n (dry run) para verificar qué archivos serían eliminados antes de realizar la acción destructiva con -f (force). 

 ## 5. git clone
 - Crea una copia de un repositorio de Git existente. La clonación es la forma más habitual de que los desarrolladores obtengan una copia de trabajo de un repositorio central.
> Caso de uso


 ## 6. git commit
 - Confirma la instantánea preparada en el historial del proyecto. En combinación con git add, define el flujo de trabajo básico de todos los usuarios de Git.
> Caso de uso


 ## 7. git commit --amend
 - Pasar la marca --amend a git commit permite modificar la confirmación más reciente. Es muy práctico si olvidas preparar un archivo u omites información importante en el mensaje de confirmación.
> Caso de uso


 ## 8. git config
 - Este comando va bien para establecer las opciones de configuración para instalar Git. Normalmente, solo es necesario usarlo inmediatamente después de instalar Git en un nuevo equipo de desarrollo.
> Caso de uso


 ## 9. git fetch
 - Con este comando, se descarga una rama de otro repositorio junto con todas sus confirmaciones y archivos asociados. Sin embargo, no intenta integrar nada en el repositorio local.
 - Esto te permite inspeccionar los cambios antes de fusionarlos en tu proyecto.
> Caso de uso


 ## 10. git init
 - Inicializa un nuevo repositorio de Git. Si quieres poner un proyecto bajo un control de revisiones, este es el primer comando que debes aprender.
> Caso de uso


 ## 11. git log
 - Permite explorar las revisiones anteriores de un proyecto. Proporciona varias opciones de formato para mostrar las instantáneas confirmadas.
> Caso de uso


## 12. Git merge
 - Es una forma eficaz de integrar los cambios de ramas divergentes. Después de bifurcar el historial del proyecto con git branch, git merge permite unirlo de nuevo.
> Caso de uso


 ## 13. git pull
 - Este comando es la versión automatizada de git fetch. Descarga una rama de un repositorio remoto e inmediatamente la fusiona en la rama actual. Este es el equivalente en Git de svn update.
> Caso de uso


 ## 14. git push
 - Enviar (push) es lo opuesto a recuperar (fetch), con algunas salvedades. Permite mover una o varias ramas a otro repositorio, lo que es una buena forma de publicar contribuciones.
 - Es como svn commit, pero envía una serie de confirmaciones en lugar de un solo conjunto de cambios.
> Caso de uso


 ## 15. git rebase
 - Un cambio de base con git rebase permite mover las ramas, lo que ayuda a evitar confirmaciones de fusión innecesarias. El historial lineal resultante suele ser mucho más fácil de entender y explorar.
> Caso de uso


 ## 16. git rebase -i
 - La marca -i se usa para iniciar una sesión de cambio de base interactivo.
 - Esto ofrece todas las ventajas de un cambio de base normal, pero te da la oportunidad de añadir, editar o eliminar confirmaciones sobre la marcha.
> Caso de uso


 ## 17. git reflog
 - Git realiza el seguimiento de las actualizaciones en el extremo de las ramas mediante un mecanismo llamado registro de referencia o reflog.
 - Esto permite volver a los conjuntos de cambios aunque no se haga referencia a ellos en ninguna rama o etiqueta.
> Caso de uso


 ## 18. git remote
 - Es un comando útil para administrar conexiones remotas. En lugar de pasar la URL completa a los comandos fetch, pull y push, permite usar un atajo más significativo.
> Caso de uso


 ## 19. git reset
 - Deshace los cambios en los archivos del directorio de trabajo. El restablecimiento permite limpiar o eliminar por completo los cambios que no se han enviado a un repositorio público.
> Caso de uso


 ## 20. git revert
 - Permite deshacer una instantánea confirmada. Si descubres una confirmación errónea, revertirla es una forma fácil y segura de eliminarla por completo del código base.
> Caso de uso


 ## 21. git status
 - Muestra el estado del directorio en el que estás trabajando y la instantánea preparada. 
 - Lo mejor es que lo ejecutes junto con git add y git commit para ver exactamente qué se va a incluir en la próxima instantánea.
> Caso de uso




