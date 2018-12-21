class Post {
    
    title: String;
    description: String;
    category: String;
    subCategory: String;
    item: String;
    deathdate: String;
    specifics: String;

    constructor(title: String, description: String, category: String, subCategory: String,item: String, deathdate: String, specifics:String ){
            
            this.description = description;
            this.category = category;
            this.subCategory = subCategory;
            this.item = item;
            this.deathdate= deathdate;
            this.specifics=specifics;
        }
}