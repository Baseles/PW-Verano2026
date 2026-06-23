
# Pruebas de comandos

- para ver que paso siempre se usa es el git status desde la terminal ya sea de visual, powershell o tambien desde el git bash.

 > Funcioan como una terminal de linux que es mejor en verdad a pero para abrir la terminal aqui es diferente es ctl + ñ esta raro luego vere como le cambio 

 - otra cosa es que despues de ver si se aplicacion cambios con el git status podemos hacer es ya aplicar los cambios que queremos con el comando git add . o en este caso git add Pruebas_Comandos.md

> El punto funciona como en la terminal que es como para decir que en la carpeta actual donde estas o donde esta situado en la terminal como que poner todos los cambios de golpe, si no necesita que sea en todo podemos tambien poner en que archivo nos referimos como su tipo de archivo o carpeta tambien con su respectivo /NombreDeLaCarpeta o poner todo el directorio tambien se puede creo

- Despues de hacer el comando git add podemos agregarle una descripcion de los cambios que se hicieron en el archivo o carpeta como sea el caso que tenga en verdad. 

 > para eso seria git commit -m "Entre comillas el texto que va ser la descripcion ". el -m minuscula es mas que nada para referirnos a un mensaje.

 - git commit -m "Agregue informacion para notas de como funciona los 4 comandos basicos para ver cambios, aplicar, guardar y publicar"

 > Si lo llegamos hacer sin el -m nos abrira el editor y por eso es mucho mejor usar el -m en verdad.

- Ahora despues de que agregaramos y guardaramos los cambios tocaria lo final que es publicar en nuestro repositorio de github. para esto igual desde la terminal como todo se usa git push asi como tal git push

> git push

 ## Aqui agregare un ejemplo de lo que va apareciendo durante los comandos

> con el git status

 PS C:\Users\aseba\Desktop\Cosas\ProgWeb\PW-Verano2026> git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        23400519_Angel_Sebastian_Carrillo_Ruiz/Pruebas_Comandos.md

nothing added to commit but untracked files present (use "git add" to track)

> git add Pruebas_Comandos.md

- no salio nada pero solo da como siguente comando mientras no aparezca que no existe todo bien.

PS C:\Users\aseba\Desktop\Cosas\ProgWeb\PW-Verano2026\23400519_Angel_Sebastian_Carrillo_Ruiz> git add Pruebas_Comandos.md                 

> git commit -m 

PS C:\Users\aseba\Desktop\Cosas\ProgWeb\PW-Verano2026\23400519_Angel_Sebastian_Carrillo_Ruiz> git commit -m "Agregue informacion de lo que puede hacer los primeros 4 comandos mas basicos de git hub desde la terminal de visual que son para ver que cambios se hicieron, aplicar cambios, guardar con mensaje y publicarlo"
[main 7710176] Agregue informacion de lo que puede hacer los primeros 4 comandos mas basicos de git hub desde la terminal de visual que son para ver que cambios se hicieron, aplicar cambios, guardar con mensaje y publicarlo
 1 file changed, 24 insertions(+)
 create mode 100644 23400519_Angel_Sebastian_Carrillo_Ruiz/Pruebas_Comandos.md
PS C:\Users\aseba\Desktop\Cosas\ProgWeb\PW-Verano2026\23400519_Angel_Sebastian_Carrillo_Ruiz> 

> git push

- y este en verdad nunca se me tiene que olvidar por que si no lo hago no se va publicar nada de nada 

PS C:\Users\aseba\Desktop\Cosas\ProgWeb\PW-Verano2026\23400519_Angel_Sebastian_Carrillo_Ruiz> git push
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 1.18 KiB | 404.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:Baseles/PW-Verano2026.git
   5011fc0..7710176  main -> main

---

 # Estilos de texto

   ## Estilos basicos de texto
   
   - En negritas es mas que nada poner 2 asteriscos **Texto**

   - En cursiva seria solo un asterisco *texto*

   - En Tachado se rodea el texto con virglillas dobles (~~Texto~~).

   - Para texto en linea / resaltado se usan acentos graves `Texto`

   - Para los encabezados se usan los gatos (#) este mas mas que nada entre mas tenga mas pequeño sera el encabezado 

  > como puede ser #Encabezado primario, ##Encabezado secundario, ##terciario

  # Encabezado primario

  ## Encabezado secundario

  ### Encabezado terciario
  
   