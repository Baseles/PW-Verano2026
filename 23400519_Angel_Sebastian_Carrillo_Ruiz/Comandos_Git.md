
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

 ## 3. Git Checkout
 - Además de extraer las confirmaciones y las revisiones de archivos antiguas, git checkout también sirve para navegar por las ramas existentes.
Combinado con los comandos básicos de Git, es una forma de trabajar en una línea de desarrollo concreta.
> Caso de uso

 - Cambiar de rama: Permite alternar entre ramas existentes para trabajar en diferentes funciones o correcciones. 
 - Inspeccionar commits anteriores: Al usar el hash de un commit, permite revisar el código en un estado pasado (estado detached HEAD). 
 - Crear y activar rama: El argumento -b combina la creación de una nueva rama con el cambio inmediato a ella. 
 - Descartar cambios en archivos: Restaura archivos individuales al estado del índice, eliminando modificaciones no confirmadas en el directorio de trabajo.
 

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

 - Inicio de desarrollo: Obtener una copia local de un proyecto existente (por ejemplo, en GitHub) para empezar a editar archivos, realizar commits y colaborar. 
 - Clonación superficial (Shallow Clone): Usar la opción --depth para descargar solo los últimos commits (útil en pipelines de CI/CD o para reducir tiempos de descarga y espacio en disco). 
 - Selección de ramas o etiquetas: Utilizar --branch para clonar específicamente una rama o etiqueta en lugar de la principal. 
 - Creación de espejos (Mirrors): Emplear --mirror o --bare para crear copias exactas de todas las referencias (ramas, etiquetas) sin directorio de trabajo editable, ideal para servidores de respaldo. 
 - Clonación a directorio específico: Especificar una ruta de destino diferente al nombre predeterminado del repositorio mediante un segundo argumento. 

 ## 6. git commit
 - Confirma la instantánea preparada en el historial del proyecto. En combinación con git add, define el flujo de trabajo básico de todos los usuarios de Git.
> Caso de uso

 - Commit inicial vacío: Se utiliza git commit --allow-empty -m "Initial commit" al crear un repositorio nuevo para establecer un punto de partida claro, evitando que los diffs de Pull Requests incluyan
código boilerplate generado automáticamente. 

 - Marcadores para rebase: Se crean commits vacíos intencionalmente para actuar como separadores visibles durante un git rebase -i, facilitando la limpieza del historial sin perder contexto. 

 - Activación de pipelines CI/CD: Enviar un commit vacío es una estrategia común para forzar la ejecución de flujos de trabajo de integración continua (como GitHub Actions) cuando la plataforma no detecta cambios reales en los archivos. 

 - Corrección del último commit: El comando git commit --amend permite modificar el commit más reciente para corregir errores en el mensaje o añadir archivos olvidados en el área de preparación (staging), reemplazando el commit anterior por una nueva entidad. 
 
 - Prueba de hooks: Se usa para probar o depurar pre-commit hooks sin necesidad de modificar el contenido real del código, permitiendo verificar que las validaciones automáticas funcionan correctamente. 
Confirmación rápida de cambios rastreados: El uso de git commit -am "mensaje" combina el añadido automático de archivos ya rastreados y la confirmación en un solo paso, ahorrando el comando git add explícito.

 ## 7. git commit --amend
 - Pasar la marca --amend a git commit permite modificar la confirmación más reciente. Es muy práctico si olvidas preparar un archivo u omites información importante en el mensaje de confirmación.
> Caso de uso

 - Corregir el mensaje del commit: Permite editar el texto del último commit sin alterar los cambios en el código. Si no se proporcionan cambios nuevos, Git abre el editor para modificar solo el mensaje. 

 - Añadir archivos olvidados: Si se hizo un commit pero faltó incluir un archivo o cambio, se puede añadir ese archivo al área de preparación (git add) y ejecutar git commit --amend para integrarlo en el commit anterior como si se hubiera añadido desde el inicio. 

- Realizar pequeños ajustes posteriores: Permite combinar correcciones menores (como errores tipográficos en el código) realizadas inmediatamente después de un commit, manteniendo el historial limpio sin crear commits innecesarios. 


 ## 8. git config
 - Este comando va bien para establecer las opciones de configuración para instalar Git. Normalmente, solo es necesario usarlo inmediatamente después de instalar Git en un nuevo equipo de desarrollo.
> Caso de uso

  - Configuración inicial del usuario: Establecer el nombre y correo con git config --global user.name y git config --global user.email para que los commits queden correctamente firmados.
 
 - Configuración de editor predeterminado: Definir el editor de texto que Git abrirá para mensajes de commit, por ejemplo VS Code con git config --global core.editor "code --wait".

 - Configuración de alias: Crear atajos de comandos frecuentes, como git config --global alias.st status para escribir solo git st.

 - Configuración por repositorio: Omitir --global para aplicar configuraciones únicamente al repositorio actual, útil cuando trabajas con diferentes cuentas de trabajo y personal.

 ## 9. git fetch
 - Con este comando, se descarga una rama de otro repositorio junto con todas sus confirmaciones y archivos asociados. Sin embargo, no intenta integrar nada en el repositorio local.
 - Esto te permite inspeccionar los cambios antes de fusionarlos en tu proyecto.
> Caso de uso

 - Revisar cambios remotos antes de integrar: Descargar los commits del repositorio remoto para inspeccionarlos con git log origin/main sin modificar tu rama local.
 
 - Sincronización en equipos colaborativos: Mantener actualizado el conocimiento de las ramas remotas (origin/feature-x) sin afectar el trabajo en curso.

 - Verificar nuevas ramas remotas: Detectar si un compañero publicó una rama nueva en el remoto antes de hacer checkout de ella.

 - Actualización previa a un merge manual: Hacer fetch y luego decidir si integrar con merge o rebase, teniendo control total sobre el proceso.

 ## 10. git init
 - Inicializa un nuevo repositorio de Git. Si quieres poner un proyecto bajo un control de revisiones, este es el primer comando que debes aprender.
> Caso de uso

 - Iniciar un proyecto nuevo desde cero: Ejecutar git init dentro de una carpeta para comenzar a rastrear cambios en un proyecto que aún no tiene control de versiones.

 - Convertir un proyecto existente: Añadir Git a un proyecto que ya tiene archivos, para empezar a versionar desde ese punto en adelante.

 - Crear un repositorio bare (servidor): Usar git init --bare para crear un repositorio sin directorio de trabajo, utilizado como repositorio central en servidores propios.
 
 - Inicializar con rama específica: Con git init -b main se define el nombre de la rama principal desde el inicio, evitando el nombre por defecto master.

 ## 11. git log
 - Permite explorar las revisiones anteriores de un proyecto. Proporciona varias opciones de formato para mostrar las instantáneas confirmadas.
   
> Caso de uso

 - Revisar el historial del proyecto: Ver todos los commits realizados con su hash, autor, fecha y mensaje usando simplemente git log.
 - Historial compacto: Usar git log --oneline para ver una línea por commit, muy útil para tener una vista rápida del historial.
 - Filtrar por autor o fecha: Encontrar commits de un colaborador específico con --author="Nombre" o en un rango de fechas con --since y --until.
 - Visualizar ramas y merges: Usar git log --oneline --graph --all para ver el historial como un árbol con las bifurcaciones y fusiones de ramas.
 

## 12. Git merge
 - Es una forma eficaz de integrar los cambios de ramas divergentes. Después de bifurcar el historial del proyecto con git branch, git merge permite unirlo de nuevo.

> Caso de uso

 - Integrar una feature branch: Fusionar el trabajo de una rama de funcionalidad (feature/login) hacia develop o main una vez que fue aprobada en revisión de código.

 - Fast-forward merge: Cuando no hay commits divergentes, Git avanza el puntero de la rama sin crear un commit de fusión extra, manteniendo el historial lineal.

 - Merge con commit explícito: Usar --no-ff para forzar la creación de un commit de fusión aunque sea posible el fast-forward, conservando el registro de que existió una rama separada.

 - Resolución de conflictos: Cuando dos ramas modificaron el mismo archivo, Git detiene el merge y permite resolver manualmente los conflictos antes de completar la fusión.

 ## 13. git pull
 - Este comando es la versión automatizada de git fetch. Descarga una rama de un repositorio remoto e inmediatamente la fusiona en la rama actual. Este es el equivalente en Git de svn update.
> Caso de uso

 - Actualizar la rama local al inicio del día: Ejecutar git pull antes de comenzar a trabajar para asegurarse de tener los últimos cambios del equipo.

 - Pull con rebase: Usar git pull --rebase en lugar de merge para integrar los cambios remotos manteniendo un historial lineal y limpio.

 - Actualizar una rama específica: Especificar el remoto y la rama con git pull origin develop para traer cambios de una rama que no es la actual.
 
 - Gestión de conflictos en integración: Cuando hay cambios locales y remotos en el mismo archivo, git pull detiene el proceso y permite resolver los conflictos antes de continuar.



 
## 14. git push
- Enviar (push) es lo opuesto a recuperar (fetch), con algunas salvedades. Permite mover una o varias ramas a otro repositorio, lo que es una buena forma de publicar contribuciones.
> Caso de uso
 
 - Publicar cambios al repositorio remoto: Ejecutar git push origin main para subir los commits locales y compartirlos con el equipo.

 - Subir una rama nueva: Usar git push -u origin feature/nueva-funcionalidad para publicar una rama local que aún no existe en el remoto y establecer el seguimiento automático.

 - Forzar la actualización del remoto: Usar git push --force-with-lease después de un rebase o amend para sobreescribir el historial remoto de forma segura, verificando que nadie más haya subido cambios.
 
 - Eliminar una rama remota: Ejecutar git push origin --delete nombre-rama para borrar una rama del repositorio remoto una vez que ya fue fusionada.

## 15. git rebase
- Un cambio de base con git rebase permite mover las ramas, lo que ayuda a evitar confirmaciones de fusión innecesarias. El historial lineal resultante suele ser mucho más fácil de entender y explorar.
> Caso de uso

 - Mantener una rama actualizada con main: Hacer rebase de una feature branch sobre main para incorporar los últimos cambios del repositorio central y evitar un merge commit.
 
 - Historial lineal en Pull Requests: Antes de abrir un PR, hacer rebase para que los commits aparezcan como si hubieran sido escritos sobre el estado más reciente de la rama destino.
 
 - Eliminar commits de merge innecesarios: En flujos de trabajo que prefieren historial limpio, rebase reemplaza los merges intermedios por una secuencia lineal de commits.
 
 - Mover commits entre ramas: Usar git rebase --onto para trasladar un conjunto de commits de una rama a otra de forma precisa.

## 16. git rebase -i
- La marca -i se usa para iniciar una sesión de cambio de base interactivo. Esto ofrece todas las ventajas de un cambio de base normal, pero te da la oportunidad de añadir, editar o eliminar confirmaciones sobre la marcha.
> Caso de uso

 - Squash de commits: Combinar varios commits pequeños en uno solo antes de fusionar una rama, para que el historial sea más limpio y descriptivo.
 
 - Reordenar commits: Cambiar el orden en que aparecen los commits en el historial, útil para agrupar cambios relacionados.
 
 - Editar mensajes de commits anteriores: Marcar un commit con reword para corregir su mensaje sin alterar el contenido del código.
 
 - Eliminar commits específicos: Borrar un commit intermedio del historial marcándolo con drop, por ejemplo uno con información sensible o un cambio que se revirtió.

## 17. git reflog
- Git realiza el seguimiento de las actualizaciones en el extremo de las ramas mediante un mecanismo llamado registro de referencia o reflog. Esto permite volver a los conjuntos de cambios aunque no se haga referencia a ellos en ninguna rama o etiqueta.
> Caso de uso
 
 - Recuperar commits perdidos: Si se hizo un reset --hard accidental o se borró una rama, el reflog permite encontrar el hash del commit anterior y restaurarlo.
 
 - Deshacer un rebase fallido: Cuando un rebase interactivo salió mal, el reflog muestra el estado previo al rebase para volver a él con git reset --hard HEAD@{n}.
 
 - Auditar movimientos de HEAD: Ver exactamente qué operaciones se realizaron en el repositorio local y en qué orden, incluyendo checkouts, merges y resets.
 
 - Recuperar una rama eliminada: Si se borró una rama por error, el reflog permite encontrar su último commit y recrearla con git checkout -b nombre-rama <hash>.

## 18. git remote
- Es un comando útil para administrar conexiones remotas. En lugar de pasar la URL completa a los comandos fetch, pull y push, permite usar un atajo más significativo.
> Caso de uso
 
 - Conectar con un repositorio en GitHub: Usar git remote add origin <URL> para vincular el repositorio local con uno remoto recién creado.
 
 - Verificar los remotos configurados: Ejecutar git remote -v para listar las URLs de fetch y push de todos los remotos configurados.
 
 - Cambiar la URL de un remoto: Usar git remote set-url origin <nueva-URL> cuando el repositorio remoto cambia de dirección (por ejemplo, al migrar de HTTPS a SSH).
 
 - Agregar múltiples remotos: En flujos de trabajo con forks, se añade el repositorio original como upstream para poder hacer fetch de los cambios del proyecto principal.

## 19. git reset
- Deshace los cambios en los archivos del directorio de trabajo. El restablecimiento permite limpiar o eliminar por completo los cambios que no se han enviado a un repositorio público.
> Caso de uso

 - Quitar archivos del área de staging: Usar git reset HEAD <archivo> para sacar un archivo del índice sin perder los cambios en el directorio de trabajo.
 
 - Deshacer el último commit (soft): Con git reset --soft HEAD~1 se elimina el commit pero los cambios quedan listos en staging para volver a confirmarlos.
 
 - Volver a un estado anterior (hard): Con git reset --hard <hash> se descarta permanentemente todos los commits y cambios posteriores a ese punto. Usar con cuidado.
 
 - Limpiar el historial local antes de push: Reorganizar o eliminar commits locales que aún no se han publicado, para enviar un historial más ordenado al remoto.

## 20. git revert
- Permite deshacer una instantánea confirmada. Si descubres una confirmación errónea, revertirla es una forma fácil y segura de eliminarla por completo del código base.
> Caso de uso

 - Deshacer un commit en rama compartida: A diferencia de reset, revert crea un nuevo commit que invierte los cambios, siendo seguro usarlo en ramas públicas sin afectar el historial de otros.

 - Revertir un bug en producción: Cuando se detecta un error introducido por un commit específico, se puede revertir ese commit de forma inmediata sin tocar el resto del historial.
 
 - Revertir un merge commit: Usar git revert -m 1 <hash> para deshacer la integración de una rama que causó problemas, especificando cuál es la rama principal a conservar.
 
 - Auditoría y trazabilidad: Al no reescribir el historial, queda registro visible de que se realizó una reversión, lo cual es importante en proyectos con auditorías de cambios.

## 21. git status
- Muestra el estado del directorio en el que estás trabajando y la instantánea preparada. Lo mejor es que lo ejecutes junto con git add y git commit para ver exactamente qué se va a incluir en la próxima instantánea.
> Caso de uso

 - Revisar el estado antes de hacer commit: Ver qué archivos están en staging, cuáles tienen cambios sin preparar y cuáles son nuevos sin seguimiento.

 - Verificar archivos en conflicto: Durante un merge o rebase con conflictos, git status muestra claramente qué archivos necesitan resolución manual.

 - Confirmar que el directorio está limpio: Antes de cambiar de rama o hacer un pull, verificar que no hay cambios pendientes que podrían perderse o generar conflictos.

 - Formato corto: Usar git status -s para una vista compacta con indicadores de una letra (M modificado, A añadido, ? sin seguimiento), ideal para revisiones rápidas.



