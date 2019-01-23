class Post {
    
    title: String;
    description: String;
    category: String;
    subCategory: String;
    item: String;
    deathDate: String;
    specifics: String;
    username: String;
    email: String;


    constructor(title: String, description: String, category: String, subCategory: String,item: String, deathdate: String, specifics:String, username: String, email: String ){
            
            this.description = description;
            this.category = category;
            this.subCategory = subCategory;
            this.item = item;
            this.deathDate= deathdate;
            this.specifics=specifics;
            this.title = title;
            this.email = email;
            this.username = username;
        }
}