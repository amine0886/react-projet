# react-projet

Rapport du TP
donc ce tp on va le applique avec le react et nodejs Express et on va utilisé docker

on a fais des modification sur notre l’interface du notre projet
pour 
<img width="482" alt="Capture1" src="https://user-images.githubusercontent.com/98590213/169670609-e769716f-d843-4400-af91-79ff7c55b375.PNG">


pour registrer un nouveau utilisateur 
<img width="483" alt="Capture2" src="https://user-images.githubusercontent.com/98590213/169670616-49d285d3-1cc2-4ef3-a279-d9923ae39597.PNG">



et la on a ajouter aussi des message d'erreur d enregistrement ou d'user a ete enregistrer 
<img width="466" alt="Capture3" src="https://user-images.githubusercontent.com/98590213/169670628-21356720-690b-4462-bec5-bc1a7b33b5dd.PNG">

<img width="468" alt="Capture4" src="https://user-images.githubusercontent.com/98590213/169670634-c9f367b9-a807-4e25-92cc-6ed59a7488b3.PNG">



*l objectif de TP et de applique le react front end pour publié l’interface sur le web via des centenaire et pour cela on va utilisé le docker
-commençons ai début par installation du docker sur notre machine Windows 
-activation de hyper-v et conteneur sur la machine pour pouvoir être accédé a la machine virtuel
-installation docker desktop.exe
Installation wsl2

Etap2
Sur le projet qu’on a développé avant on va créé un dossier dans notre répertoire et on va le renommé fontend 
On Install notre fontend avec la commande suivante
$ npx create-react-app frontend
Maintenain notre react est instalé et on va instal git dans notre projet  avec la commande  rm –rf .git
Dans le dossier frontend=>src =>app.js pour travaille sur le front end
On Install axios avec la commande$ npm i axios
Maintenant on va crée un fichier dockerfils sur le projet backend et cela pour construire notre image
-on consulte notre image avec la commande : $ docker images
-dans cette étape in va utilisé docker build pour pouvoir accédé a la documentation docker et construite notre images  on utilisant  $docker build . -t projet-alos3
-donc npm Start a était lancé et construit de limage et terminé avec sucée
Pour voir nos image on utilise $docker images
-j’exécute l’image avec la commande $docker run limage va afficher sur le port http://localhost:3000
<img width="826" alt="Capture" src="https://user-images.githubusercontent.com/98590213/169670637-62204e67-de24-46ee-9778-73f2921b746c.PNG">

Docker compose
Pour le docker compose on va crée un dossier sur visuel code studio DockerCompose et a l’intérieur du dossier on ajout nouveau un fichier docker-compose.yml 
Et cela pour declaré les service donc le cou ou on a besoin que tous les image doit fonctionné ensemble on vas difinir les image la mise a jour au reseaux et les volumele dans le code docker-compose.yml
On lance docker compose avec la commande $ docker-compose up -d
On peux utiliser docker compose pour faire tourner nos conteneurs on peux utiliser la commande $docker-compose down
Mantenain on vas cree un reportoir dur docker hub 
Sur terminal on execute la commande $docker login -u khellaf0886 pour singup
On va etiquter notre emage avecla commande suivante :$ khellaf0886/projet-alos3:latest
Apres on push avec la commande $ docker push khellaf0886/projet-alos3:latest
