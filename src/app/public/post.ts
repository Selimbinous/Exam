export class Post {
  titre:string; description:string; categorie:string; date:string
  id: any;
  constructor(titre:string, description:string, categorie:string, date:string){
    this.titre = titre
    this.description = description
    this.categorie = categorie
    this.date = date
  }
  
}
